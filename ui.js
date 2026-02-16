const grid = document.getElementById("grid");

/* 포털 카드 */
function portalHTML(c){
  return `
  <article class="card portal" data-link="${(c.url||"").trim()}">
    <div class="cardInner">
      <div class="gate">
        <div class="door left"></div>
        <div class="door right"></div>
      </div>

      <div class="face front">
        <div class="portrait sil"></div>
        <div class="frontMeta">
          <div class="nameRow">
            <h3>${c.name}</h3>
            <span class="badge">PORTAL</span>
          </div>
          <p class="title">문을 통과하십시오</p>
          <p class="tap">눌러 이동</p>
        </div>
      </div>

      <div class="face back">
        <h3>${c.name}</h3>
        <p class="quote">설정된 주소로 이동합니다.</p>
      </div>
    </div>
  </article>`;
}

/* 캐릭터 카드 */
function characterHTML(c){
  const hasImg = c.img && c.img.trim() !== "";
  const imgStyle = hasImg ? `style="background-image:url('${c.img}')"` : "";
  const sil = hasImg ? "" : "sil";

  const rel = (c.relation || []).map(r => `${r.type}: ${r.name}`).join(" · ") || "—";
  const look = (c.appearance || []).slice(0,6).join(" · ") || "—";

  return `
  <article class="card ${c.id}">
    <div class="cardInner">
      <div class="gate">
        <div class="door left"></div>
        <div class="door right"></div>
      </div>

      <div class="face front">
        <div class="portrait ${sil}" ${imgStyle}></div>
        <div class="frontMeta">
          <div class="nameRow">
            <h3>${c.name}</h3>
            <span class="badge">${c.job}</span>
          </div>
          <p class="title">${c.faction} · ${c.vibe}</p>
          <p class="tap">눌러 기록을 펼치십시오.</p>
        </div>
      </div>

      <div class="face back">
        <h3>${c.name}</h3>

        <p class="quote">“${c.vibe}”</p>

        <div class="kv">
          <div>성격</div><b>${(c.personality||[]).join(", ")}</b>
          <div>외모</div><b>${look}</b>
          <div>관계</div><b>${rel}</b>
        </div>

        <p class="quote">${c.past || ""}</p>
      </div>
    </div>
  </article>`;
}

/* 렌더 */
grid.innerHTML = window.CHARACTERS.map(c=>{
  if(c.type === "link") return portalHTML(c);
  return characterHTML(c);
}).join("");

/* 클릭 이벤트 */
grid.addEventListener("click", (e)=>{
  const card = e.target.closest(".card");
  if(!card) return;

  // 포털 카드면 즉시 이동
  if(card.classList.contains("portal")){
    const url = (card.dataset.link || "").trim();
    if(!url){
      alert("characters.js의 hwanghwa_portal.url에 주소를 넣어주세요.");
      return;
    }
    window.location.href = url;
    return;
  }

  // 일반 카드: 한 장만 뒤집기
  document.querySelectorAll(".card.is-flipped").forEach(x=>{
    if(x !== card) x.classList.remove("is-flipped");
  });
  card.classList.toggle("is-flipped");
});
