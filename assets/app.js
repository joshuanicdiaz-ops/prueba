const { site, bio, projects, videos } = window.PORTFOLIO;
const app = document.getElementById("app");
const bg = document.querySelector(".bgvideo");
const bgVids = [...bg.querySelectorAll("video")];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const isSmall = () => matchMedia("(max-width: 820px)").matches;

const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const coverOf = p => p.cover || (p.photos[0] || {}).src || "";
const bySlug = slug => projects.find(p => p.slug === slug);
let cleanup = () => {};

/* ---------- Image sizes (needed for zoom) ---------- */
const sizes = new Map();
projects.forEach(p => p.photos.forEach(ph => { if (ph.w && ph.h) sizes.set(ph.src, { w: ph.w, h: ph.h }); }));
function track(img) {
  const save = () => { if (img.naturalWidth) sizes.set(img.getAttribute("src"), { w: img.naturalWidth, h: img.naturalHeight }); };
  if (img.complete) save(); else img.addEventListener("load", save, { once: true });
}

/* ---------- Zoom viewer (PhotoSwipe, loaded on first use) ---------- */
let PhotoSwipe = null;
const loadPS = () => PhotoSwipe
  ? Promise.resolve(PhotoSwipe)
  : import("./photoswipe/photoswipe.esm.min.js").then(m => (PhotoSwipe = m.default));

async function zoom(items, index, onClose) {
  let PS;
  try { PS = await loadPS(); } catch (e) { window.open(items[index].src, "_blank"); return; }
  const pswp = new PS({
    dataSource: items.map(it => ({ src: it.src, alt: it.alt || "" })),
    index,
    bgOpacity: 1,
    initialZoomLevel: "fit",
    secondaryZoomLevel: z => Math.max(1, z.fit * 2),
    maxZoomLevel: z => Math.max(3, z.fit * 4),
    showHideAnimationType: reduceMotion ? "none" : "fade",
    wheelToZoom: true,
    closeTitle: "Close", zoomTitle: "Zoom", arrowPrevTitle: "Previous", arrowNextTitle: "Next"
  });
  pswp.addFilter("itemData", (data, i) => {
    const s = sizes.get(data.src);
    if (s) return { ...data, width: s.w, height: s.h };
    const probe = new Image();
    probe.onload = () => { sizes.set(data.src, { w: probe.naturalWidth, h: probe.naturalHeight }); if (pswp.currSlide) pswp.refreshSlideContent(i); };
    probe.src = data.src;
    return { ...data, width: 1600, height: 1067 };
  });
  pswp.on("destroy", () => onClose && onClose());
  pswp.init();
}

/* ---------- PHOTO: home ---------- */
function viewPhoto() {
  const cfg = site.slideshow || {};
  const list = (cfg.photos && cfg.photos.length ? cfg.photos : projects.map(p => ({ src: coverOf(p), project: p.slug })))
    .map(it => {
      const p = bySlug(it.project) || {};
      const ph = (p.photos || []).find(x => x.src === it.src) || {};
      return { src: it.src, alt: ph.alt || p.title || "", project: p.slug, title: p.title || "", year: p.year || "" };
    });

  const works = projects.map((p, i) => `
    <a class="work" href="#/work/${esc(p.slug)}">
      <span class="box"><img src="${esc(coverOf(p))}" alt="${esc(p.title)}" loading="${i < 3 ? "eager" : "lazy"}" decoding="async"></span>
      <span><span class="t"><em>${esc(p.title)}</em>${p.year ? `, ${esc(p.year)}` : ""}</span><span class="p mono" style="display:block">${esc(p.place || "")}</span></span>
    </a>`).join("");

  app.innerHTML = `
    <h1 class="sr">Photography</h1>
    <section class="hero" tabindex="0" aria-roledescription="carousel" aria-label="Featured photos. Use the arrow keys to move, Enter to zoom.">
      <div class="hero-stage" role="button" aria-label="Zoom photo">
        <img alt="" fetchpriority="high"><img alt="">
      </div>
      <div class="hero-meta">
        <a class="hero-cap" href="#/"></a>
        <div class="hero-tools mono"><span class="count" aria-live="off"></span><button type="button" class="toggle">Pause</button></div>
      </div>
    </section>
    <section class="works" aria-label="Projects">${works}</section>`;
  app.querySelectorAll(".works img").forEach(track);
  if (!list.length) return;

  const hero = app.querySelector(".hero");
  const stage = hero.querySelector(".hero-stage");
  const layers = [...stage.querySelectorAll("img")];
  const cap = hero.querySelector(".hero-cap");
  const count = hero.querySelector(".count");
  const toggle = hero.querySelector(".toggle");
  const pause = { hover: false, focus: false, hidden: false, zoom: false, user: reduceMotion };
  let i = 0, front = 0, timer = 0;

  const seconds = () => (isSmall() ? cfg.mobileSeconds || Math.max(cfg.seconds || 2, 3) : cfg.seconds || 2);
  const fade = () => (isSmall() ? (cfg.mobileFade ?? 0.6) : (cfg.fade ?? 0));
  const paused = () => Object.values(pause).some(Boolean);

  function show(n, first) {
    i = (n + list.length) % list.length;
    const it = list[i];
    const back = layers[1 - front];
    stage.style.setProperty("--fade", (first || reduceMotion ? 0 : fade()) + "s");
    back.alt = it.alt;
    const swap = () => {
      back.classList.add("on"); layers[front].classList.remove("on"); front = 1 - front;
      track(back);
      cap.href = it.project ? `#/work/${it.project}` : "#/";
      cap.innerHTML = it.title ? `<em>${esc(it.title)}</em>${it.year ? `, ${esc(it.year)}` : ""}` : "";
      count.textContent = `${String(i + 1).padStart(2, "0")} / ${String(list.length).padStart(2, "0")}`;
      new Image().src = list[(i + 1) % list.length].src; // preload next
    };
    if (back.getAttribute("src") === it.src && back.complete) swap();
    else { back.onload = swap; back.onerror = swap; back.src = it.src; }
    schedule();
  }
  function schedule() {
    clearTimeout(timer);
    if (!paused()) timer = setTimeout(() => show(i + 1), seconds() * 1000);
  }
  function setPause(key, val) { pause[key] = val; toggle.textContent = pause.user ? "Play" : "Pause"; schedule(); }

  stage.addEventListener("mouseenter", () => setPause("hover", true));
  stage.addEventListener("mouseleave", () => setPause("hover", false));
  hero.addEventListener("focusin", () => setPause("focus", true));
  hero.addEventListener("focusout", () => setPause("focus", false));
  const onVis = () => setPause("hidden", document.hidden);
  document.addEventListener("visibilitychange", onVis);
  toggle.addEventListener("click", () => setPause("user", !pause.user));
  const open = () => { setPause("zoom", true); zoom(list, i, () => setPause("zoom", false)); };
  stage.addEventListener("click", open);
  hero.addEventListener("keydown", e => {
    if (e.target !== hero) return;
    if (e.key === "ArrowRight") show(i + 1);
    else if (e.key === "ArrowLeft") show(i - 1);
    else if (e.key === "Enter") open();
  });

  show(0, true);
  cleanup = () => { clearTimeout(timer); document.removeEventListener("visibilitychange", onVis); };
}

/* ---------- PHOTO: project ---------- */
function viewProject(slug) {
  const idx = projects.findIndex(p => p.slug === slug);
  if (idx < 0) return viewNotFound();
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const facts = [p.year, p.place, p.client, p.type].filter(Boolean).map(f => `<span>${esc(f)}</span>`).join("");
  const shots = p.photos.map((ph, i) => `
    <figure class="shot">
      <img src="${esc(ph.src)}" alt="${esc(ph.alt || "")}" data-i="${i}" decoding="async" ${ph.w ? `width="${ph.w}" height="${ph.h}"` : ""}>
      ${ph.caption ? `<figcaption>${esc(ph.caption)}</figcaption>` : ""}
    </figure>`).join("");

  app.innerHTML = `
    <article class="project">
      <header class="p-head">
        <h1>${esc(p.title)}</h1>
        ${p.description ? `<p>${esc(p.description)}</p>` : ""}
        <div class="mono">${facts}</div>
      </header>
      <div class="shots">${shots}</div>
      <nav class="p-next mono" aria-label="Projects">
        <a href="#/">All work</a>
        <a href="#/work/${esc(next.slug)}">Next: ${esc(next.title)}</a>
      </nav>
    </article>`;
  app.querySelectorAll(".shot img").forEach(img => {
    track(img);
    img.addEventListener("click", () => zoom(p.photos, Number(img.dataset.i)));
  });
  document.title = `${p.title}, ${site.name}`;
}

/* ---------- VIDEO: background clips ---------- */
let bgFront = 0, bgCurrent = "";
function bgPlay(v) {
  if (!v || !v.loop || bgCurrent === v.loop) return;
  bgCurrent = v.loop;
  const el = bgVids[1 - bgFront];
  el.poster = v.poster || "";
  el.src = v.loop;
  const swap = () => { el.classList.add("on"); bgVids[bgFront].classList.remove("on"); bgFront = 1 - bgFront; };
  if (reduceMotion) { swap(); return; }
  el.play().then(swap).catch(swap);
}
function bgOff() {
  bg.classList.remove("on");
  bgVids.forEach(v => { v.pause(); v.classList.remove("on"); v.removeAttribute("src"); v.load(); });
  bgCurrent = "";
}

function viewVideos() {
  app.innerHTML = `
    <h1 class="sr">Video</h1>
    <nav class="films" aria-label="Films">
      ${videos.map((v, i) => `<a class="film" href="#/video/${esc(v.slug)}" data-i="${i}">${esc(v.title)}<sup>[${i + 1}]</sup></a>`).join("")}
    </nav>`;
  bg.classList.add("on");
  bgPlay(videos[0]);
  app.querySelectorAll(".film").forEach(a => {
    const go = () => bgPlay(videos[Number(a.dataset.i)]);
    a.addEventListener("mouseenter", go);
    a.addEventListener("focus", go);
  });
  cleanup = bgOff;
}

function viewFilm(slug) {
  const idx = videos.findIndex(v => v.slug === slug);
  if (idx < 0) return viewNotFound();
  const v = videos[idx];
  const next = videos[(idx + 1) % videos.length];
  let player;
  if (v.vimeo) player = `<iframe src="https://player.vimeo.com/video/${encodeURIComponent(v.vimeo)}?dnt=1&title=0&byline=0&portrait=0&color=ffffff" title="${esc(v.title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  else if (v.youtube) player = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtube)}?rel=0&playsinline=1" title="${esc(v.title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  else if (v.file) player = `<video src="${esc(v.file)}" poster="${esc(v.poster || "")}" controls playsinline></video>`;
  else player = `<video src="${esc(v.loop)}" poster="${esc(v.poster || "")}" ${reduceMotion ? "" : "autoplay"} muted loop playsinline></video><span class="note mono">Add the full video in content.js</span>`;

  const facts = [["Year", v.year], ["Client", v.client], ["Role", v.role]]
    .filter(([, x]) => x).map(([k, x]) => `<dt>${k}</dt><dd>${esc(x)}</dd>`).join("");

  app.innerHTML = `
    <article class="film-page">
      <div class="player">${player}</div>
      <div class="film-info">
        <h1>${esc(v.title)}</h1>
        <div>
          <dl class="facts mono">${facts}</dl>
        </div>
        ${v.description ? `<p>${esc(v.description)}</p>` : ""}
      </div>
      <nav class="p-next mono" aria-label="Films">
        <a href="#/video">All films</a>
        <a href="#/video/${esc(next.slug)}">Next: ${esc(next.title)}</a>
      </nav>
    </article>`;
  document.title = `${v.title}, ${site.name}`;
}

/* ---------- BIO ---------- */
function viewBio() {
  const contact = [
    site.email && `<a href="mailto:${esc(site.email)}">${esc(site.email)}</a>`,
    site.instagram && `<a href="${esc(site.instagram)}" target="_blank" rel="noopener">@${esc(site.instagram.replace(/\/+$/, "").split("/").pop())}</a>`,
    site.vimeo && `<a href="${esc(site.vimeo)}" target="_blank" rel="noopener">Vimeo</a>`
  ].filter(Boolean);
  const block = (title, items) => `<div><h2 class="mono">[ ${esc(title)} ]</h2><ul>${items.map(x => `<li>${x}</li>`).join("")}</ul></div>`;

  app.innerHTML = `
    <section class="bio">
      <h1 class="sr">Bio</h1>
      <div class="bio-text">
        <div><h2 class="mono">[ About ]</h2>${bio.paragraphs.map(p => `<p>${esc(p)}</p>`).join("")}</div>
        ${bio.lists.map(l => block(l.title, l.items.map(esc))).join("")}
        ${block("Contact", contact)}
      </div>
      <figure class="bio-photo">
        <img src="${esc(bio.photo)}" alt="Portrait of ${esc(site.name)}">
        ${bio.photoCredit ? `<figcaption class="credit mono">${esc(bio.photoCredit)}</figcaption>` : ""}
      </figure>
    </section>`;
}

function viewNotFound() {
  app.innerHTML = `<div class="notfound"><p>This page doesn't exist. <a href="#/">Go to all work</a></p></div>`;
}

/* ---------- Router ---------- */
function route() {
  cleanup(); cleanup = () => {};
  const [section, slug] = location.hash.replace(/^#\/?/, "").split("/");
  document.title = site.title;
  let nav = "photo";
  if (section === "work" && slug) viewProject(decodeURIComponent(slug));
  else if (section === "video" && slug) { viewFilm(decodeURIComponent(slug)); nav = "video"; }
  else if (section === "video") { viewVideos(); nav = "video"; }
  else if (section === "bio") { viewBio(); nav = "bio"; }
  else if (!section) viewPhoto();
  else viewNotFound();

  document.querySelectorAll(".edge [data-nav]").forEach(a => {
    if (a.dataset.nav === nav && !a.classList.contains("e-name")) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  app.classList.remove("enter"); void app.offsetWidth; app.classList.add("enter");
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", route);
route();
