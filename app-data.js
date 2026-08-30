/* =========================================================
   cnation app - APP DATA
   Version 1.0.0

   [새 앱 추가 방법]
   아래 APP_DATA 배열 안에 기존 앱 하나를 복사해서
   name / category / icon / desc / main 정도만 바꾸면 됩니다.

   필수 항목
   - name      : 앱 이름
   - category  : 카테고리
   - icon      : 목록에 표시할 아이콘(이모지)
   - desc      : 간단한 설명
   - main      : 기본 실행 주소

   선택 항목
   - backup    : 백업 주소
   - versions  : PC / 중국어 / 다른 스타일 등 별도 실행 버전
   - image     : 상세화면 대표 이미지 주소
   - remark    : 기타 설명
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
    name: "cnation 도미니언",
    category: "GAME",
    icon: "🃏",
    desc: "세계적으로 유명한 보드게임 도미니언을 컴퓨터와 1:1 방식으로 게임 진행",
    main: "https://cnation-dominion.vercel.app/",
    backup: "https://civilizednation.github.io/cnation-dominion/",
    versions: [
      { name: "PC 버전", url: "https://civilizednation.github.io/cnation-dominion/index_pc.html" }
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

  // TEAM
  {
    name: "우시개발팀 생일 알림이",
    category: "TEAM",
    icon: "👥",
    desc: "중국 우시 SK하이닉스 우시개발팀 팀원들의 생일을 관리하고 D-Day 표시해주는 앱",
    main: "https://civilizednation.github.io/skhynix-wuxi-d-birthdays/"
  },

  // EDUCATION
  {
    name: "goodmento 출석부",
    category: "EDUCATION",
    icon: "🏫",
    desc: "문진숙(여동생) 인도 어린이집 출석부",
    main: "https://goodmento-school-check.vercel.app/"
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
  }
];

/* 카테고리 표시 순서 */
const CATEGORY_ORDER = ["GAME", "MUSIC", "LIFE", "TEAM", "EDUCATION", "WORK"];

/* 카테고리별 아이콘 */
const CATEGORY_ICON = {
  GAME: "🎮",
  MUSIC: "🎵",
  LIFE: "🏠",
  TEAM: "👥",
  EDUCATION: "🏫",
  WORK: "🔬"
};
