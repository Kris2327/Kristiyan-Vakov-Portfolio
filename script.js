(function(){try{var t=localStorage.getItem('kv-theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.setAttribute('data-theme',t);document.documentElement.setAttribute('data-bs-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','light');document.documentElement.setAttribute('data-bs-theme','light')}})();

/* =====================================================================
   PROJECT DATA — edit here. Order = display order (hardest first).
   complexity: 1–5 filled segments. image: path to a 16:10 screenshot ("" = placeholder).
   status: "completed" | "in-progress".
   ===================================================================== */
var PROJECTS = [
  {
    name: "ARIA",
    tagline: "Autonomous Responsive Intelligent Assistant",
    status: "in-progress",
    statusNote: "",
    complexity: 5,
    level: "Advanced",
    reason: "Desktop and mobile apps with live integrations, LLM cost optimisation and voice.",
    description: "A personal assistant for desktop and mobile with an animated central “core” and six modules around it: Mail, School, Time, Projects, Fitness and an assistant. It reads Gmail and Google Calendar, tracks homework, and acts as a direct, serious mentor you can talk to by voice.",
    highlights: [
      "Two clients, one assistant: the desktop app shows all six cards at once, while the mobile version arranges the modules around the core and opens a chat with quick-reply suggestions.",
      "Token-optimised AI: exact-match cache, heuristic router that picks the cheapest model tier, and function-calling tools so only the needed data goes into the prompt.",
      "Background pollers sync Gmail and school data into Supabase; the UI only reads the cache, never blocks on external APIs.",
      "Push-to-talk voice (speech-to-text and text-to-speech) and a planned smart-glasses client."
    ],
    tech: ["Python", "Flet", "Supabase", "OpenAI API", "Gmail and Google Calendar APIs", "Selenium"],
    links: [],
    image: "",
    images: [
      { title: "Desktop", image: "images/aria-desktop.webp", alt: "ARIA desktop app with the central core and six cards: Mail, School, Time, Encorp projects, Fitness and Mentor" },
      { title: "Mobile home", image: "images/aria-mobile-home.webp", alt: "ARIA mobile app home screen with the six modules arranged around the core" },
      { title: "Mobile assistant", image: "images/aria-mobile-assistant.webp", alt: "ARIA mobile assistant chat in direct mode" }
    ]
  },
  {
    name: "TeamUp",
    tagline: "Team collaboration platform",
    status: "completed",
    statusNote: "",
    complexity: 4,
    level: "Intermediate to Advanced",
    reason: "Real-time features, auth and a multi-entity data model.",
    description: "A workspace app where teams organise projects, assign and track tasks, chat in real time and manage invitations through an inbox. Built as a REST API with a single-page Angular client.",
    highlights: [
      "Workspaces, tasks, inbox/invitations and real-time chat over SignalR.",
      "Secure auth with ASP.NET Identity, JWT and BCrypt; image uploads via Cloudinary; email notifications.",
      "Containerised with Docker, PostgreSQL via Entity Framework Core migrations, documented with Swagger."
    ],
    tech: [".NET 10", "ASP.NET Core", "EF Core", "PostgreSQL", "SignalR", "Angular 21", "TypeScript", "Docker"],
    links: [{ label: "Website", url: "https://teamup-dpc4.onrender.com/" }],
    image: "",
    images: [
      { title: "Task board", image: "images/teamup-tasks.webp", alt: "TeamUp task board with To Do, In Progress, Done and Overdue columns" },
      { title: "Real-time chat", image: "images/teamup-chat.webp", alt: "TeamUp workspace chat with channels and live messages" }
    ]
  },
  {
    name: "Memory Atelier",
    tagline: "E-commerce web shop",
    status: "completed",
    statusNote: "",
    complexity: 3,
    level: "Intermediate",
    reason: "Classic full-stack store with admin features.",
    description: "An online shop with product catalogue and categories, favourites, shopping cart, orders and an admin dashboard, with email confirmations and cloud image storage.",
    highlights: [
      "Full purchase flow: browse, favourite, cart, checkout, order tracking.",
      "Admin dashboard for products, categories and orders.",
      "JWT authentication, email via MailKit, product images in Supabase Storage."
    ],
    tech: [".NET", "ASP.NET Core", "EF Core", "PostgreSQL", "Angular 21", "TypeScript", "Supabase"],
    links: [{ label: "Website", url: "https://memoryatelier.bg/" }],
    image: "",
    imageRatio: "2 / 1",
    images: [
      { title: "Shop home page", image: "images/memoryatelier-shop.webp", alt: "Memory Atelier shop home page with category navigation, search and a product collection" },
      { title: "Shopping cart", image: "images/memoryatelier-cart.webp", alt: "Memory Atelier shopping cart with order summary" },
      { title: "Welcome screen", image: "images/memoryatelier-intro.webp", alt: "Memory Atelier welcome screen with the brand quote" }
    ]
  },
  {
    name: "Shared Calendar",
    tagline: "Personal calendar with Google and iCloud sync",
    status: "completed",
    statusNote: "",
    complexity: 3,
    level: "Intermediate",
    reason: "Mobile app plus API that keeps two external calendars in sync.",
    description: "A personal calendar app where the app itself is the source of truth. Events are stored in Supabase and shown in a native calendar UI; on create, edit or delete the server saves first, then pushes the change to Google Calendar and iCloud independently.",
    highlights: [
      "Save-first design: a failed push to Google or iCloud never loses an event, and skipped pushes are retried by a background job once credentials are available.",
      "Fastify API with Zod validation, Google OAuth and CalDAV (iCloud) integrations; credentials stay on the server and never reach the app.",
      "Expo / React Native client with Expo Router and TanStack Query, with offline caching of events."
    ],
    tech: ["TypeScript", "Expo / React Native", "Expo Router", "TanStack Query", "Fastify", "Supabase", "Google Calendar API", "CalDAV", "Docker"],
    links: [{ label: "GitHub", url: "https://github.com/kristiyanvakov/Shared-Calendar-App" }],
    image: "",
    images: [
      { title: "Calendar", image: "images/sharedcalendar-calendar.webp", alt: "Shared Calendar app showing the month view and an empty day" },
      { title: "New event", image: "images/sharedcalendar-new-event.webp", alt: "Shared Calendar app new event form with title, time and colour" }
    ]
  }
];
/* Hackathon entries (separate section). Same fields as above. */
var HACKATHONS = [
  {
    name: "ABC Arena Agent",
    tagline: "Reinforcement-learning agent for a multi-agent retail simulation",
    status: "completed",
    statusNote: "Голямото Schwarz междучасие 3 · 3rd place · theme “The Rise of AI”",
    complexity: 5,
    level: "Advanced",
    reason: "Reinforcement learning, imitation learning and controlled experiments in a competitive multi-agent game.",
    description: "Trained and evaluated agents for a 6-player retail-chain simulation (1,000 rounds per match, 318-dimensional observation, 44-dimensional action space), competing against my teammates' agents.",
    highlights: [
      "Found why my agent lost: its fixed opening collided with rivals' openings and led to a cash-flow spiral. Counterfactual replays confirmed it, and it explained roughly 85% of the losses in bad matches.",
      "Designed a rule-based expert strategy (smooth region scoring, rival-aware expansion, adaptive wage rule). In my own tests it earned about 299k on the competition lineup against 225k for my best trained agent.",
      "Tried to distil the expert into neural agents with DAgger (about 2.2M synthetic labelled states) and anchored PPO/A2C fine-tuning, compared over 12 matches per cell, 6 home rotations and 2 seeds. It did not beat the baselines, so I reported the negative result instead of shipping an unproven agent.",
      "Delivered a fine-tuned agent (a teammate's v7 plus 10k anchored A2C steps) that matched the strongest baseline and clearly beat my previous entry. Numbers come from small local tests, so treat them as indicative."
    ],
    tech: ["Python", "Stable-Baselines3 (A2C, PPO, SAC, TQC)", "Gymnasium", "Behaviour cloning / DAgger", "PowerShell", "Git"],
    links: [],
    image: ""
  },
  {
    name: "BDN-Agent",
    tagline: "Cost-routed, self-verifying Q&A agent",
    status: "completed",
    statusNote: "Atanasoff__48 · 2nd place · theme “Energy around us”",
    complexity: 5,
    level: "Advanced",
    reason: "Multi-stage AI pipeline with routing, retrieval, verification and cost accounting.",
    description: "A question-answering agent about energy in Bulgaria that answers from real Bulgarian and EU documents, cites its sources and checks its own claims. Instead of sending every question to the biggest model, it first decides how hard the question is and takes the cheapest path that can answer it correctly.",
    highlights: [
      "A yes/no classifier plus plain if-rules route each question: refuse, clarify, small-model lookup, or planner + large model.",
      "“No source, no claim”: every sentence is verified against retrieved passages and unsupported ones are removed. Numbers come from deterministic tools, never from the model.",
      "Every call is logged with tokens, time, cost and estimated energy, so savings are measured, not assumed. Includes a live dashboard, evaluation suite on labelled queries, and a simulation JSON builder."
    ],
    tech: ["Python 3.12", "Claude (Haiku/Sonnet)", "Jev AI", "OpenAI embeddings", "PostgreSQL + pgvector", "Streamlit", "Docker", "pytest"],
    links: [],
    image: ""
  }
];

/* Awards and certificates (own section). One entry per event: its documents play as a slideshow.
   project: name of a project above. This entry then shows "Project: X" and links to that project's card (optional).
   items[].url: external link to a credential, e.g. a verification page (optional). */
var AWARDS = [
  {
    event: "Голямото Schwarz междучасие 3 hackathon",
    date: "28–30 October 2026",
    result: "3rd place",
    project: "ABC Arena Agent",
    items: [
      { kind: "Certificate", title: "3rd place finalist certificate", image: "images/SchwartzDigitsHackathon-certificate.jpg", alt: "3rd place finalist certificate from Голямото Schwarz междучасие 3 “The Rise of AI”, Sofia, 28–30 October 2026" }
    ]
  },
  {
    event: "Atanasoff__48 hackathon",
    date: "4 October 2026",
    result: "2nd place",
    items: [
      { kind: "Diploma", title: "2nd place diploma", image: "images/hackathon-diploma.jpg", alt: "Diploma for 2nd place in Atanasoff__48, 4 October 2026" },
      { kind: "Certificate", title: "Certificate of participation", image: "images/hackathon-certificate.jpg", alt: "Certificate of participation in Atanasoff__48, 4 October 2026" }
    ]
  },
  {
    event: "ACS Ignite hackathon · 24-hour game jam",
    date: "20–21 February 2026",
    result: "3rd place",
    items: [
      { kind: "Certificate", title: "Certificate of participation", image: "images/IgniteHackathon-certificate.jpg", alt: "Certificate for excellent performance in the ACS Ignite Hackathon, American College of Sofia, 20–21 February 2026" }
    ]
  }
];

/* =================== END PROJECT DATA =================== */

document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function slug(t) { return String(t).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  function openLightbox(src, alt) {
    var lb = document.getElementById("lightbox");
    if (!lb || typeof lb.showModal !== "function") { window.open(src, "_blank", "noopener"); return; }
    var li = lb.querySelector("img"); li.src = src; li.alt = alt || "";
    lb.showModal();
  }

  function slideshow(items, label, cls, ratio) {
    var root = el("div", "slides" + (cls ? " " + cls : ""));
    root.setAttribute("role", "group");
    root.setAttribute("aria-roledescription", "carousel");
    root.setAttribute("aria-label", label);
    var view = el("div", "slides-view");
    if (ratio) view.style.aspectRatio = ratio;
    var figs = items.map(function (it, k) {
      var fig = el("figure", "slide" + (k === 0 ? " on" : ""));
      fig.setAttribute("aria-hidden", k === 0 ? "false" : "true");
      var im = el("img"); im.src = it.image; im.alt = it.alt || it.title || ""; im.loading = k === 0 ? "eager" : "lazy";
      fig.appendChild(im); view.appendChild(fig); return fig;
    });
    view.addEventListener("click", function () { openLightbox(items[cur].image, items[cur].alt || items[cur].title); });
    function arrow(cls, label, text) {
      var b = el("button", "slide-btn " + cls, text); b.type = "button"; b.setAttribute("aria-label", label);
      b.addEventListener("click", function (e) { e.stopPropagation(); show(cur + (cls === "next" ? 1 : -1)); start(); });
      return b;
    }
    if (items.length > 1) { view.appendChild(arrow("prev", "Previous document", "‹")); view.appendChild(arrow("next", "Next document", "›")); }
    root.appendChild(view);
    var cap = el("p", "slide-cap", items[0].title || "");
    cap.setAttribute("aria-live", "polite");
    root.appendChild(cap);
    var thumbs = el("div", "slide-thumbs");
    var thumbEls = items.map(function (it, k) {
      var d = el("button", "slide-thumb" + (k === 0 ? " on" : "")); d.type = "button";
      var ti = el("img"); ti.src = it.image; ti.alt = ""; d.appendChild(ti);
      if (ratio) d.style.aspectRatio = ratio;
      d.setAttribute("aria-label", "Show " + (it.title || "document " + (k + 1)));
      d.addEventListener("click", function () { show(k); start(); });
      thumbs.appendChild(d); return d;
    });
    if (items.length > 1) root.appendChild(thumbs);

    var cur = 0, timer = null, hover = false, still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    function show(k) {
      cur = (k + items.length) % items.length;
      figs.forEach(function (f, j) { f.classList.toggle("on", j === cur); f.setAttribute("aria-hidden", j === cur ? "false" : "true"); });
      thumbEls.forEach(function (d, j) { d.classList.toggle("on", j === cur); });
      cap.textContent = items[cur].title || "";
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function start() { stop(); if (!still && !hover && items.length > 1) timer = setInterval(function () { show(cur + 1); }, 5000); }
    root.addEventListener("mouseenter", function () { hover = true; stop(); });
    root.addEventListener("mouseleave", function () { hover = false; start(); });
    root.addEventListener("focusin", function () { hover = true; stop(); });
    root.addEventListener("focusout", function () { hover = false; start(); });
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { show(cur - 1); start(); } else if (e.key === "ArrowRight") { show(cur + 1); start(); }
    });
    start();
    return root;
  }

  function awardId(a) { return "award-" + slug(a.event); }

  function award(a) {
    var wrap = el("div"); wrap.setAttribute("data-reveal", ""); wrap.id = awardId(a);
    var art = el("article", "award");
    var media = el("div", "award-media");
    media.appendChild(slideshow(a.items, "Documents from " + a.event));
    var body = el("div", "award-body");
    body.appendChild(el("span", "cx-label", a.items.map(function (it) { return it.kind; }).join(" · ")));
    body.appendChild(el("h3", null, a.result || a.event));
    body.appendChild(el("p", "award-sub", [a.event, a.date].filter(Boolean).join(" · ")));
    var links = el("div", "links");
    a.items.forEach(function (it) {
      if (!it.url) return;
      var ua = el("a", null, it.title + " ↗"); ua.href = it.url; ua.target = "_blank"; ua.rel = "noopener";
      links.appendChild(ua);
    });
    if (a.project) {
      var pa = el("a", null, "Project: " + a.project + " ↗"); pa.href = "#" + slug(a.project);
      links.insertBefore(pa, links.firstChild);
    }
    if (links.childNodes.length) body.appendChild(links);
    art.appendChild(media); art.appendChild(body); wrap.appendChild(art);
    return wrap;
  }

  function card(p, i, idPrefix) {
    var done = p.status === "completed";
    var wrap = el("div"); wrap.setAttribute("data-reveal", ""); wrap.id = slug(p.name);
    var art = el("article", "kcard row align-items-start");
    var hid = (idPrefix || "project") + "-" + (i + 1);
    art.setAttribute("aria-labelledby", hid);

    var noMedia = !(p.images && p.images.length) && !p.image && idPrefix === "hackathon";
    if (noMedia) art.classList.add("solo");
    var media = el("div", "media col-12 col-lg" + (i % 2 ? " order-lg-2" : ""));
    if (p.images && p.images.length) {
      media.appendChild(slideshow(p.images, "Screenshots of " + p.name, "wide", p.imageRatio));
    } else if (p.image) {
      var img = el("img", "shot"); img.src = p.image; img.alt = "Screenshot of " + p.name; img.loading = "lazy";
      media.appendChild(img);
    } else if (!noMedia) {
      var ph = el("div", "shot-ph", "Screenshot · 16:10");
      ph.setAttribute("role", "img"); ph.setAttribute("aria-label", "Screenshot of " + p.name);
      media.appendChild(ph);
    }

    var body = el("div", "body col-12 col-lg");
    var meta = el("div", "meta");
    meta.appendChild(el("span", "num", String(i + 1).padStart(2, "0")));
    var badge = el("span", "kbadge " + (done ? "done" : "wip"));
    var dot = el("i"); dot.setAttribute("aria-hidden", "true");
    badge.appendChild(dot); badge.appendChild(document.createTextNode(done ? "Completed" : "In progress"));
    meta.appendChild(badge);
    if (p.statusNote) meta.appendChild(el("span", "note", p.statusNote));
    body.appendChild(meta);

    var titles = el("div", "titles");
    var h = el("h3", null, p.name); h.id = hid;
    titles.appendChild(h); titles.appendChild(el("p", "tagline", p.tagline));
    body.appendChild(titles);

    body.appendChild(el("p", "desc", p.description));

    var cx = el("div", "cx");
    var row = el("div", "cx-row");
    row.appendChild(el("span", "cx-label", "Complexity"));
    var segs = el("span", "segs");
    segs.setAttribute("role", "img"); segs.setAttribute("aria-label", "Complexity " + p.complexity + " of 5");
    for (var n = 1; n <= 5; n++) segs.appendChild(el("span", n <= p.complexity ? "on" : ""));
    row.appendChild(segs); row.appendChild(el("span", "level", p.level));
    cx.appendChild(row); cx.appendChild(el("p", "reason", p.reason));
    body.appendChild(cx);

    var hl = el("ul", "hl");
    p.highlights.forEach(function (t) { hl.appendChild(el("li", null, t)); });
    body.appendChild(hl);

    var tech = el("ul", "tech"); tech.setAttribute("aria-label", "Technologies");
    p.tech.forEach(function (t) { tech.appendChild(el("li", null, t)); });
    (noMedia ? body : media).appendChild(tech);

    if (p.links.length) {
      var links = el("div", "links");
      p.links.forEach(function (l) {
        var a = el("a", null, l.label + (l.internal ? " ↓" : " ↗")); a.href = l.url;
        if (!l.internal) { a.target = "_blank"; a.rel = "noopener"; }
        links.appendChild(a);
      });
      body.appendChild(links);
    }

    if (!noMedia) art.appendChild(media);
    art.appendChild(body);
    wrap.appendChild(art);
    return wrap;
  }

  var list = document.getElementById("projects-list");
  PROJECTS.forEach(function (p, i) { list.appendChild(card(p, i, "project")); });
  var hlist = document.getElementById("hackathons-list");
  HACKATHONS.forEach(function (p, i) { hlist.appendChild(card(p, i, "hackathon")); });
  var alist = document.getElementById("awards-list");
  AWARDS.forEach(function (a) { alist.appendChild(award(a)); });

  var lbox = document.getElementById("lightbox");
  if (lbox) lbox.addEventListener("click", function () { lbox.close(); });

  // Theme toggle
  var btn = document.getElementById("theme-btn");
  function syncBtn() {
    var dark = root.getAttribute("data-theme") === "dark";
    btn.textContent = dark ? "Light" : "Dark";
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    var logo = "images/logo-round" + (dark ? "" : "-light") + ".png";
    document.querySelectorAll('link[rel="icon"],link[rel="apple-touch-icon"]').forEach(function (l) { l.href = logo; });
  }
  btn.addEventListener("click", function () {
    var t = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", t);
    root.setAttribute("data-bs-theme", t);
    try { localStorage.setItem("kv-theme", t); } catch (e) {}
    syncBtn();
  });
  syncBtn();

  // Photo: fall back to initials if photo.jpg is missing
  var avatarImg = document.getElementById("avatar-img");
  avatarImg.addEventListener("error", function () {
    avatarImg.remove();
    document.getElementById("avatar").textContent = "KV";
  });

  // Scroll reveal
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce && "IntersectionObserver" in window) {
    root.classList.add("js");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    document.querySelectorAll("[data-reveal]").forEach(function (n) { io.observe(n); });
    window.addEventListener("beforeprint", function () {
      document.querySelectorAll("[data-reveal]").forEach(function (n) { n.classList.add("in"); });
    });
  }

  // Contact dialog. Messages are delivered by FormSubmit, so no credentials live in this page.
  // Change CONTACT_ENDPOINT to point at your own backend if you ever host one.
  var CONTACT_ENDPOINT = "https://formsubmit.co/ajax/kristian.vakov@gmail.com";
  var dlg = document.getElementById("contact-dialog");
  var form = document.getElementById("contact-form");
  var status = document.getElementById("contact-status");
  var sendBtn = document.getElementById("contact-send");
  var openBtn = document.getElementById("open-contact");

  function setStatus(msg, kind) { status.textContent = msg; status.className = "form-status" + (kind ? " " + kind : ""); }

  // Without <dialog> support the button simply stays a normal mailto: link.
  if (dlg && typeof dlg.showModal === "function") {
    function openDlg(e) {
      e.preventDefault();
      setStatus("");
      dlg.showModal();
      form.elements.name.focus();
    }
    openBtn.addEventListener("click", openDlg);
    document.getElementById("contact-close").addEventListener("click", function () { dlg.close(); });
    document.getElementById("contact-cancel").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = form.elements;
      var ok = true;
      ["name", "email", "message"].forEach(function (k) {
        var v = f[k].value.trim();
        var valid = v && (k !== "email" || /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v));
        f[k].closest(".field").classList.toggle("bad", !valid);
        if (!valid) ok = false;
      });
      if (!ok) { setStatus("Please fill in your name, a valid email and a message.", "err"); return; }
      if (f._honey.value) { dlg.close(); return; } // bot

      sendBtn.disabled = true; setStatus("Sending…");
      fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: f.name.value.trim(),
          email: f.email.value.trim(),
          message: f.message.value.trim(),
          _subject: "Portfolio message from " + f.name.value.trim(),
          _replyto: f.email.value.trim(),
          _captcha: "false",
          _template: "table"
        })
      }).then(function (r) { return r.json().then(function (d) { return { ok: r.ok, d: d }; }); })
        .then(function (res) {
          if (res.ok && String(res.d.success) !== "false") {
            form.reset();
            setStatus("Thanks, your message was sent.", "ok");
            setTimeout(function () { if (dlg.open) dlg.close(); }, 1800);
          } else { throw new Error("send failed"); }
        })
        .catch(function () {
          setStatus("Couldn't send it. Please email kristian.vakov@gmail.com directly.", "err");
        })
        .then(function () { sendBtn.disabled = false; });
    });
  }
});
