/**
 * myKomposite - saved articles and followed topics.
 *
 * FT's myFT is a server-side personalisation product. This is the static
 * equivalent: everything is held in the reader's own browser, nothing is sent
 * anywhere, and no account is required. Storage access is wrapped because
 * private windows and blocked site data throw rather than return empty.
 */
(function () {
  var SAVED = "kn.saved", TOPICS = "kn.topics";

  function read(key) {
    try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch (e) { return []; }
  }
  function write(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* storage unavailable */ }
  }
  function toggle(key, item, idOf) {
    var list = read(key), i = list.findIndex(function (x) { return idOf(x) === idOf(item); });
    if (i > -1) list.splice(i, 1); else list.unshift(item);
    write(key, list);
    return i === -1;
  }

  var byUrl = function (x) { return x.u; };
  var bySlug = function (x) { return x.s; };

  function paintSave(btn, on) {
    btn.textContent = on ? "Saved" : "Save";
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  }
  function paintFollow(btn, on) {
    btn.textContent = on ? "Following" : "Follow";
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-pressed", on ? "true" : "false");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var save = document.querySelector(".kn-save");
    if (save) {
      var item = { u: save.dataset.url, h: save.dataset.headline, k: save.dataset.kick, d: save.dataset.date };
      paintSave(save, read(SAVED).some(function (x) { return x.u === item.u; }));
      save.addEventListener("click", function () { paintSave(save, toggle(SAVED, item, byUrl)); });
    }
    var follow = document.querySelector(".kn-follow");
    if (follow) {
      var topic = { s: follow.dataset.slug, n: follow.dataset.name, u: follow.dataset.href };
      paintFollow(follow, read(TOPICS).some(function (x) { return x.s === topic.s; }));
      follow.addEventListener("click", function () { paintFollow(follow, toggle(TOPICS, topic, bySlug)); });
    }

    var out = document.getElementById("kn-saved-list");
    if (out) {
      var arts = read(SAVED), tops = read(TOPICS);
      var t = document.getElementById("kn-topics-list");
      if (t) {
        t.innerHTML = tops.length
          ? tops.map(function (x) { return '<a class="kn-chip" href="' + x.u + '">' + x.n + "</a>"; }).join("")
          : '<p class="kn-empty">You are not following any topics yet. Open any section and choose Follow.</p>';
      }
      out.innerHTML = arts.length
        ? arts.map(function (x) {
            return '<div class="feedrow"><span class="fc">' + (x.k || "") + '</span><a href="' + x.u + '">' + x.h + '</a><span class="ft">' + (x.d || "") + "</span></div>";
          }).join("")
        : '<p class="kn-empty">Nothing saved yet. Use Save on any article and it will appear here.</p>';
    }
  });
})();
