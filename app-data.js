/* =========================================================
   cnation app - APP DATA
   Version 1.0.0

   [새 앱 추가 방법]
   아래 APP_DATA 배열 안에 기존 앱 하나를 복사해서
   name / category / icon / desc / main 정도만 바꾸면 됩니다.

   필수 항목
   - name      : 앱 이름
   - category  : 카테고리 (아래 카테고리 목록 중 하나)
   - icon      : 목록에 표시할 아이콘(이모지)
   - desc      : 간단한 설명
   - main      : 기본 실행 주소

   선택 항목
   - backup    : 백업 주소
   - versions  : PC / 중국어 / 다른 스타일 등 별도 실행 버전
   - image     : 상세화면 대표 이미지 주소
   - remark    : 기타 설명

   [카테고리 목록 / 표시 순서]
   GAME → MUSIC → UTILITY → HOBBY → LIFE → WORK → EDUCATION → TEAM
   - UTILITY : 이미지 변환, 리사이징 등 자잘한 편의성 도구 앱은 여기로
   - HOBBY   : 독서, 취미 감상 등 여가용 앱은 여기로
   ========================================================= */

const APP_DATA = [

  // GAME
  {
    name: "cnation 4x4 drum",
    category: "GAME",
    icon: "🥁",
    desc: "4x4 16개 패드 터치 리듬게임",
    main: "https://cnation-4x4drum.vercel.app/",
    backup: "https://civilizednation.github.io/cnation-4x4drum/"
  },

  {
    name: "cnation 스플렌더(Splendor)",
    category: "GAME",
    icon: "💎",
    desc: "보석을 모아 발전 카드를 구매하는 전략 보드게임",
    main: "https://cnation-splendor.vercel.app/",
    backup: "https://civilizednation.github.io/cnation-splendor/"
  },

  {
    name: "cnation 도미니언",
    category: "GAME",
    icon: "🃏",
    desc: "세계적으로 유명한 보드게임 도미니언을 컴퓨터와 1:1 방식으로 게임 진행",
    main: "https://cnation-dominion.vercel.app/",
    backup: "https://civilizednation.github.io/cnation-dominion/",
    versions: [
      { name: "PC 버전", url: "https://cnation-dominion.vercel.app/pc/" }
    ],
    remark: "모바일 버전과 PC 버전을 별도로 제공합니다."
  },

  {
    name: "cnation 영어단어 지렁이 게임",
    category: "GAME",
    icon: "🐍",
    desc: "고전 지렁이 게임에 영어단어 맞히기를 접목한 게임",
    main: "https://cnation-jgame.vercel.app/",
    backup: "https://civilizednation.github.io/cnation-jgame/",
    versions: [
      { name: "PC 전용 버전", url: "https://cnation-jgame.vercel.app/index2.html" },
      { name: "중국어 버전", url: "https://civilizednation.github.io/cnation-jgame-c/" }
    ],
    remark: "모바일, PC 전용, 중국어 버전을 제공합니다."
  },

  // MUSIC
  {
    name: "무석연합교회 성가대 연습",
    category: "MUSIC",
    icon: "🎼",
    desc: "중국 우시 무석연합교회 성가대곡 연습을 도와주는 앱",
    main: "https://cnation-msyh-sgd.vercel.app/"
  },

  {
    name: "cnation CCM",
    category: "MUSIC",
    icon: "🎵",
    desc: "내가 작사·작곡한 CCM 곡들을 한곳에서 보고 들을 수 있게 관리해주는 앱",
    main: "https://cnation-ccm-list.vercel.app/",
    backup: "https://civilizednation.github.io/cnation-ccm-list/",
    versions: [
      { name: "Web Style", url: "https://civilizednation.github.io/cnation-ccm-list/" },
      { name: "CCM Best / Supabase", url: "https://civilizednation.github.io/cnation-wuxi-ccm-list/" }
    ],
    remark: "YouTube 채널 @grace2melody에도 곡들이 등록되어 있으며, 별도의 관리 앱으로 구성했습니다."
  },

  {
    name: "cnation 도미니언 Echo",
    category: "MUSIC",
    icon: "🎧",
    desc: "cnation 도미니언 게임에 사용된 배경음악을 들려주는 플레이어",
    main: "https://cnation-dominion.vercel.app/echo/"
  },

  {
    name: "cnation CCM 플레이어",
    category: "MUSIC",
    icon: "🎧",
    desc: "내가 작사·작곡한 CCM 곡들을 관리 화면 없이 이어서 감상만 할 수 있는 플레이어",
    main: "https://cnation-ccm-list.vercel.app/player/",
    remark: "곡 등록/수정은 위의 'cnation CCM' 앱에서, 감상은 이 플레이어로 하시면 됩니다."
  },

  // UTILITY
  {
    name: "cnation 이미지 리사이저",
    category: "UTILITY",
    icon: "🖼️",
    desc: "사진 보관함/파일에서 고른 순서대로 여러 장을 한 번에 리사이징하고 JPG/WEBP/PNG로 변환",
    main: "https://cnation-image.vercel.app/"
  },

  {
    name: "cnation 무한 루프 OST 제작기 (Loop Video Maker)",
    category: "UTILITY",
    icon: "🎬",
    desc: "여러 장의 일러스트와 배경음악을 결합해 줌·발광·파티클 모션 효과와 함께 무한 루프 OST 영상을 만드는 무설치 웹 앱",
    main: "https://cnation-video-loop.vercel.app/",
    remark: "PC는 풀버전 영상 한 번에 제작, 모바일(아이폰 사파리 등)은 이미지별 개별 영상으로 분할 제작 후 ZIP 일괄 다운로드에 최적화. 모든 렌더링은 브라우저 내부에서만 처리되어 이미지·음원이 서버로 전송되지 않습니다."
  },

  {
    name: "cnation ZIP",
    category: "UTILITY",
    icon: "🗜️",
    desc: "큰 파일/폴더를 원하는 용량이나 개수로 나눠 표준 분할 ZIP으로 저장하는 무설치 웹앱 (아이폰 최적화)",
    main: "https://cnation-zip.vercel.app/",
    remark: "파일명.z01, .z02 … 마지막 .zip 형식의 표준 분할 ZIP을 생성하며, 앱 내 '다시 합치기'로 복원도 가능합니다. 파일은 서버로 전송되지 않고 기기 안에서만 처리되며, 한 번에 최대 512MB·200개 분할까지 지원합니다. 아이폰은 최신 Safari 권장, 폴더 선택은 iOS 18.4 이상에서 지원됩니다."
  },

  // HOBBY
  {
    name: "Cnation BOOK",
    category: "HOBBY",
    icon: "📚",
    desc: "장편소설을 태블릿·스마트폰에서 편안하게 읽을 수 있는 개인용 웹 이북 앱",
    main: "https://cnation-cts.vercel.app/",
    remark: "작품·권별 목록, 이어 읽기, 책갈피, 태블릿 가로 2페이지/세로·모바일 1페이지 보기, 글꼴·글자 크기·줄간격·여백 조절, 홈 화면 추가(PWA) 및 오프라인 읽기를 지원합니다. 읽던 위치와 책갈피는 기기별 브라우저에 개별 저장됩니다. 현재 '닥터 최태수'(전 27권), '신경외과의사 박재현'(전 3권) 제공. 회원가입 없이 바로 이용 가능합니다."
  },

  // LIFE
  {
    name: "우리가족 일정 알림이",
    category: "LIFE",
    icon: "🎂",
    desc: "가족 생일 등 주요 일정을 관리하고 D-Day 표시해주는 앱",
    main: "https://cnation-family-birthdays.vercel.app/"
  },

  {
    name: "명국이의 중국생활 도우미",
    category: "LIFE",
    icon: "🏠",
    desc: "중국 우시생활 도우미 - 집, 교회, 회사, 생활, 교통, 음식, 쇼핑 등",
    main: "https://civilizednation.github.io/cnation-wuxi/"
  },

  // WORK
  {
    name: "BG Cell Implant Simulator",
    category: "WORK",
    icon: "🧪",
    desc: "DRAM BG Cell의 implant 조건을 입력하고 기준 공정 대비 dose profile, refresh/leakage 상대지수를 비교하는 TCAD 보조 시뮬레이터",
    main: "https://cnation-tcad.vercel.app/",
    versions: [
      { name: "PRO 버전 (물리 엔진)", url: "https://cnation-tcad.vercel.app/pro/" }
    ],
    remark: "기본 버전은 튜닝된 경험식 기반이고, PRO 버전은 비선형 Poisson 방정식을 직접 수치해석해 Refresh/Leakage/GIDL을 유도합니다."
  },

  // EDUCATION
  {
    name: "goodmento 출석부",
    category: "EDUCATION",
    icon: "🏫",
    desc: "문진숙(여동생) 인도 어린이집 출석부",
    main: "https://goodmento-school-check.vercel.app/"
  },

  // TEAM
  {
    name: "우시개발팀 생일 알림이",
    category: "TEAM",
    icon: "👥",
    desc: "중국 우시 SK하이닉스 우시개발팀 팀원들의 생일을 관리하고 D-Day 표시해주는 앱",
    main: "https://civilizednation.github.io/skhynix-wuxi-d-birthdays/"
  }
];

/* 카테고리 표시 순서 */
const CATEGORY_ORDER = ["GAME", "MUSIC", "UTILITY", "HOBBY", "LIFE", "WORK", "EDUCATION", "TEAM"];

/* 카테고리별 아이콘 */
const CATEGORY_ICON = {
  GAME: "🎮",
  MUSIC: "🎵",
  UTILITY: "🧰",
  HOBBY: "📚",
  LIFE: "🏠",
  WORK: "🔬",
  EDUCATION: "🏫",
  TEAM: "👥"
};
