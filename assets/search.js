(function(){
  var form=document.getElementById("sform"),input=document.getElementById("q"),out=document.getElementById("results"),idx=null;
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
  function load(cb){ if(idx){cb();return;}
    fetch("/search-index.json").then(function(r){return r.json();}).then(function(d){idx=d;cb();})
    .catch(function(){out.innerHTML='<p class="snote">Search couldn\u2019t load. Please refresh and try again.</p>';});
  }
  function run(q){
    q=q.trim().toLowerCase();
    if(!q){out.innerHTML="";return;}
    var terms=q.split(/\s+/);
    var res=idx.map(function(a){
      var hay=(a.h+" "+a.d+" "+a.c+" "+a.au+" "+a.t.join(" ")+" "+a.x).toLowerCase(),score=0;
      terms.forEach(function(t){
        if(a.h.toLowerCase().indexOf(t)>-1)score+=5;
        if(a.t.join(" ").toLowerCase().indexOf(t)>-1)score+=3;
        if(a.au.toLowerCase().indexOf(t)>-1)score+=3;
        if(hay.indexOf(t)>-1)score+=1;
      });
      return {a:a,s:score};
    }).filter(function(r){return r.s>0;}).sort(function(x,y){return y.s-x.s;}).slice(0,20);
    if(!res.length){out.innerHTML='<p class="snote">No results for \u201c'+esc(q)+'\u201d. Try a broader term.</p>';return;}
    out.innerHTML='<p class="snote">'+res.length+' result'+(res.length===1?"":"s")+'</p>'+res.map(function(r){var a=r.a;
      return '<article class="story"><span class="kk">'+esc(a.c)+'</span><h3><a href="'+a.u+'">'+esc(a.h)+'</a></h3><p class="deck">'+esc(a.d)+'</p><div class="meta">'+esc(a.au)+' \u00b7 '+new Date(a.p).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"})+'</div></article>';
    }).join("");
  }
  form.addEventListener("submit",function(e){e.preventDefault();load(function(){run(input.value);});});
  input.addEventListener("input",function(){load(function(){run(input.value);});});
  var qs=new URLSearchParams(location.search).get("q");
  if(qs){input.value=qs;load(function(){run(qs);});}
})();
