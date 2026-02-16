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
  const rel  = (c.relation || []).map(r => `${r.type}: ${r.name}`).join(" · ") || "—";

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

grid.addEventListener("click", (e)=>{
  const card = e.target.closest(".card");
  if(!card) return;

  if(card.classList.contains("portal")){
    const url = (card.dataset.link || "").trim();
    if(!url){
      alert("characters.js에 url을 입력하세요.");
      return;
    }
    window.location.href = url;
    return;
  }

  document.querySelectorAll(".card.is-flipped").forEach(x=>{
    if(x !== card) x.classList.remove("is-flipped");
  });

  card.classList.toggle("is-flipped");
});


