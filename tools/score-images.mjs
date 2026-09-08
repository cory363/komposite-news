/* Score candidate photographs for the qualities that read as cinematic:
   depth of tone, a cool cast, and real contrast. Filenames tell you nothing
   about how a picture looks, and a contact sheet is slow to iterate on, so
   this measures the pixels. Chrome does the decoding via canvas. */
import fs from "node:fs";
import { execFileSync } from "node:child_process";

const dir = process.argv[2];
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const files = fs.readdirSync(dir).filter(f => /^\d+\.jpg$/.test(f)).sort();

const page = `<canvas id=c></canvas><script>
const FILES=${JSON.stringify(files)};
const cv=document.getElementById('c'),cx=cv.getContext('2d',{willReadFrequently:true});
function metrics(img){
  const W=64,H=64; cv.width=W; cv.height=H; cx.drawImage(img,0,0,W,H);
  const d=cx.getImageData(0,0,W,H).data;
  let n=0,sl=0,sl2=0,sr=0,sg=0,sb=0,dark=0,sat=0;
  for(let i=0;i<d.length;i+=4){
    const r=d[i],g=d[i+1],b=d[i+2];
    const l=0.2126*r+0.7152*g+0.0722*b;
    sl+=l; sl2+=l*l; sr+=r; sg+=g; sb+=b; n++;
    if(l<70) dark++;
    const mx=Math.max(r,g,b),mn=Math.min(r,g,b);
    sat += mx===0?0:(mx-mn)/mx;
  }
  const mean=sl/n, sd=Math.sqrt(Math.max(0,sl2/n-mean*mean));
  const rr=sr/n, gg=sg/n, bb=sb/n;
  return {mean:+mean.toFixed(1), sd:+sd.toFixed(1), r:+rr.toFixed(1), g:+gg.toFixed(1),
    b:+bb.toFixed(1), coolness:+(bb-rr).toFixed(1), darkShare:+(dark/n).toFixed(3),
    sat:+(sat/n).toFixed(3)};
}
(async()=>{
  const out=[];
  for(const f of FILES){
    const img=new Image(); img.src=f;
    await new Promise(r=>{img.onload=r;img.onerror=r;});
    if(!img.naturalWidth){out.push({f,err:1});continue;}
    out.push({f,...metrics(img)});
  }
  document.title=JSON.stringify(out);
  document.body.innerHTML='<pre id=out>'+JSON.stringify(out)+'</pre>';
})();
</script>`;
fs.writeFileSync(dir + "/score.html", page);

const dom = execFileSync(CHROME, ["--headless", "--disable-gpu", "--allow-file-access-from-files",
  "--window-size=300,300", "--virtual-time-budget=20000", "--dump-dom", "file://" + dir + "/score.html"],
  { encoding: "utf8", maxBuffer: 1 << 26 });
const m = dom.match(/<pre id="out">([\s\S]*?)<\/pre>/);
if (!m) { console.error("  no metrics returned"); process.exit(1); }
const rows = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&"));

/* Cinematic here means: not flat and bright, has shadow, leans cool rather
   than warm, and carries tonal range. Wildly dark or blown-out frames score
   badly too — the target is a mid-dark image with separation. */
const score = r => {
  if (r.err) return -99;
  const tone   = 1 - Math.abs(r.mean - 96) / 130;      // prefer mid-dark
  const range  = Math.min(r.sd / 62, 1);               // real contrast
  const cool   = Math.max(-1, Math.min(r.coolness / 26, 1));
  const shadow = Math.min(r.darkShare / 0.42, 1);
  const notGrey= Math.min(r.sat / 0.34, 1);
  return +(tone * 2.4 + range * 2.0 + cool * 2.2 + shadow * 1.6 + notGrey * 0.8).toFixed(3);
};
const pool = JSON.parse(fs.readFileSync(dir + "/pool.json", "utf8"));
const scored = rows.map(r => ({ ...r, idx: parseInt(r.f, 10), score: score(r),
  file: pool[parseInt(r.f, 10) - 1]?.file || "?" }))
  .sort((a, b) => b.score - a.score);
fs.writeFileSync(dir + "/scored.json", JSON.stringify(scored, null, 1));
console.log("  idx  score  mean   sd  cool  dark   file");
scored.slice(0, 18).forEach(r => console.log(
  `  ${String(r.idx).padStart(3)}  ${String(r.score).padStart(5)}  ${String(r.mean).padStart(4)} ${String(r.sd).padStart(4)}  ${String(r.coolness).padStart(5)} ${String(r.darkShare).padStart(5)}   ${r.file.slice(0,38)}`));
