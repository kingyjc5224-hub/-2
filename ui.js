/* =========================
   0) 입장 오버레이 + BGM 페이드인
========================= */
const bgm = document.getElementById("bgm");
const overlay = document.getElementById("enterOverlay");

function fadeInAudio(targetVolume = 0.6, duration = 3000){
  if(!bgm) return;

  bgm.muted = false;
  bgm.volume = 0;

  const stepTime = 50;
  const steps = Math.max(1, Math.floor(duration / stepTime));
  const volumeStep = targetVolume / steps;

  let currentStep = 0;
  const fade = setInterval(() => {
    currentStep++;
    bgm.volume = Math.min(targetVolume, bgm.volume + volumeStep);

    if(currentStep >= steps){
      bgm.volume = targetVolume;
      clearInterval(fade);
    }
  }, stepTime);
}

if (bgm && overlay) {
  document.addEventListener("click", () => {
    fadeInAudio(0.6, 3000);

    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
      overlay.setAttribute("aria-hidden", "true");
    }, 1200);
  }, { once: true });
}

/* =========================
   1) 카드 렌더링
========================= */
const grid = document.getElementById("grid");

/* 포털 카드 */
function portalHTML(c){
  return `
  <article class="card portal" data-link="${(c.url||"").trim()}">
    <div class="cardInner">

      <div class="face front">
        <div class="portrait sil"></div>
        <h3>${c.name}</h3>
        <span class="badge">PORTAL</span>
        <p>눌러 이동</p>
      </div>

      <div class="face back">
        <h3>${c.name}</h3>
        <p>설정된 주소로 이동합니다.</p>
      </div>

    </div>
  </article>`;
}

/* 일반 카드 */
function characterHTML(c){
  const hasImg = c.img && c.img.trim() !== "";
  const imgStyle = hasImg ? `style="background-image:url('${c.img}')" ` : "";
  const silClass = hasImg ? "" : "sil";

  const look = (c.appearance || []).slice(0,6).join(" · ") || "—";

  // ✅ relation이 name 없는 형태여도 안전하게 처리
  const rel = (c.relation || [])
    .map(r => {
      const t = (r && r.type) ? String(r.type) : "";
      const n = (r && r.name) ? String(r.name) : "";
      if(t && n) return `${t}: ${n}`;
      return t || n;
    })
    .filter(Boolean)
    .join(" · ") || "—";

  return `
  <article class="card ${c.id}">
    <div class="cardInner">

      <div class="face front">
        <div class="portrait ${silClass}" ${imgStyle}></div>
        <h3>${c.name}</h3>
        <span class="badge">${c.job}</span>
        <p>${c.faction} · ${c.vibe}</p>
      </div>

      <div class="face back">
        <h3>${c.name}</h3>
        <p><b>성격:</b> ${(c.personality||[]).join(", ")}</p>
        <p><b>외모:</b> ${look}</p>
        <p><b>관계:</b> ${rel}</p>
        <p>${c.past||""}</p>
      </div>

    </div>
  </article>`;
}

grid.innerHTML = window.CHARACTERS.map(c=>{
  if(c.type === "link") return portalHTML(c);
  return characterHTML(c);
}).join("");

/* =========================
   2) 클릭 이벤트 (포털 이동 + 카드 뒤집기)
========================= */
grid.addEventListener("click", (e)=>{
  const card = e.target.closest(".card");
  if(!card) return;

  // 포털 카드면 즉시 이동
  if(card.classList.contains("portal")){
    const url = (card.dataset.link || "").trim();

    if(!url){
      alert("characters.js에 url을 입력하세요.");
      return;
    }
    if(!/^https?:\/\//i.test(url)){
      alert("url은 https:// 로 시작해야 해요.\n예) https://example.com");
      return;
    }

    window.location.assign(url);
    return;
  }

  // 일반 카드 뒤집기(한 장만)
  document.querySelectorAll(".card.is-flipped").forEach(x=>{
    if(x !== card) x.classList.remove("is-flipped");
  });
  card.classList.toggle("is-flipped");
});
