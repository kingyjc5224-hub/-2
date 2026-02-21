window.CHARACTERS = [
  {
    id: "muyang",
    name: "무영(無影)",
    faction: "황화 북쪽",
    job: "업보 판단 사자(使者)",
    vibe: "침묵 · 이성 · 효율",
    age: "불명",
    gender: "♂",
    height: "217cm",
    personality: ["ISTJ","침묵","관찰","감정변화 적음"],
    appearance: [
      "밝은 피부",
      "흑발 매우 긴 장발",
      "눈을 가린 하얀 천",
      "근육질 체형",
      "키 217cm",
      "후천적으로 한쪽 눈 상실"
    ],
    relation: [{ name: "백야(白夜)", type: "쌍둥이 동생" }],
    past: "선천적으로 눈이 없던 백야에게 눈을 나눠줌(백야 모름). / 인간 모친",
    tags: ["기록","판정","책무","봉인","경계"],
    img: "images/ch/muyang.png"
  },

  {
    id: "baekya",
    name: "백야(白夜)",
    faction: "황화 북쪽",
    job: "최종집행 사자(使者)",
    vibe: "능글 · 발칙 · 자극",
    age: "불명",
    gender: "♂",
    height: "215cm",
    personality: ["ESTP","자극추구","능글","노련","농염"],
    appearance: [
      "밝은 피부",
      "새하얀 매우 긴 장발",
      "눈을 가린 검은 천",
      "근육질 체형",
      "키 215cm"
    ],
    relation: [{ name: "무영(無影)", type: "쌍둥이 형" }],
    past: "형 무영에게 눈을 나눠받음(본인 모름). / 인간 모친",
    tags: ["집행","유희","자극","심문","경계"],
    img: "images/ch/baekya.png"
  },

  {
    id: "haerang",
    name: "해랑(海浪)",
    faction: "황화 서쪽",
    job: "푸른 교룡(蛟龍)",
    vibe: "냉소 · 독설 · 성숙",
    age: "불명",
    gender: "♂",
    height: "185cm",
    personality: ["INTP","내향","차가움","시니컬","독설","무관심"],
    appearance: [
      "밝은 피부",
      "남색 칼단발",
      "푸른 눈",
      "눈밑 점",
      "남색 차이나 드레스",
      "마른 근육",
      "키 185cm"
    ],
    relation: [{ name: "란휘(瀾暉)", type: "티격태격" }],
    past: "아주 과거 인간 여성을 사랑했으나 그 인간은 윤회를 택함 → 인간혐오 생김.",
    tags: ["교룡","변신","바다","냉소","경계"],
    img: "images/ch/haerang.png"
  },

  {
    id: "sanghwa",
    name: "상화(象火)",
    faction: "황화 남쪽",
    job: "불가사리(不可殺伊)",
    vibe: "다정 · 애교",
    age: "불명",
    gender: "♂",
    height: "160~220cm",
    personality: ["ENFP","다정","애교","친화","사교","조건부 성숙"],
    appearance: [
      "밝은 피부",
      "흑발 짧은 머리",
      "적안",
      "적당한 근육",
      "키 160~220cm(상태에 따라 변함)",
      "몸이 뜨거움"
    ],
    // name 없이 type만 있는 관계도 ui.js에서 안전 처리됨
    relation: [{ type: "다섯 영물 중 가장 어린 것으로 추정" }],
    past: "불을 무서워함.",
    tags: ["철","온기","변화","불","경계"],
    img: "images/ch/sanghwa.png"
  },

  {
    id: "ranhwi",
    name: "란휘(瀾暉)",
    faction: "황화 동쪽",
    job: "텐구(天狗)",
    vibe: "도발 · 승부욕 · 자기애",
    age: "불명",
    gender: "♂",
    height: "187cm",
    personality: ["ESTJ","외향","츤데레","과시","직설","탐미"],
    appearance: [
      "밝은 피부",
      "긴 갈색머리 하나로 묶음",
      "보라색 눈",
      "적당한 근육",
      "키 187cm",
      "검은 날개(비행)"
    ],
    relation: [{ name: "해랑(海浪)", type: "티격태격" }],
    past: "인간과 술을 좋아함. / 죽은 전연인 존재",
    tags: ["텐구","비행","술","도발","경계"],
    img: "images/ch/ranhwi.png"
  },

  /* 6번째 카드: 황화 바로가기 */
  {
    id: "hwanghwa_portal",
    type: "link",
    name: "황화 바로가기",
    url: "https://share.crack.wrtn.ai/r0xfx9"
  }
];

