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
   - detail    : 상세 페이지 하단에 노출되는 긴 소개글.
                 줄바꿈(\n)으로 문단을 구분하고, '• '로 시작하는 줄은
                 자동으로 글머리 목록으로 표시됩니다.

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
    backup: "https://civilizednation.github.io/cnation-4x4drum/",
    detail: "4×4(가로 4·세로 4) 총 16개의 패드가 화면에 배치되는 리듬 게임입니다. 패드가 정해진 리듬에 맞춰 순서대로 밝아지고, 그 순서와 타이밍 그대로 패드를 터치하면 점수를 얻습니다.\n• 4분의 4박자·8분의 8박자 두 가지 박자 모드 선택 가능\n• 레벨 2부터 대각선 이동, 레벨 4부터는 역방향 대각선까지 등장해 난이도가 점점 높아짐\n• 하트(생명) 3개가 모두 소진되면 게임 종료, 도달한 레벨과 최종 점수가 기록됨\n• 실시간 랭킹 Top 10에 닉네임과 함께 기록 등록 가능\n짧게 즐기기 좋은 캐주얼 리듬 게임으로, PC와 모바일 터치 환경 모두를 지원합니다."
  },

  {
    name: "cnation 스플렌더(Splendor)",
    category: "GAME",
    icon: "💎",
    desc: "보석을 모아 발전 카드를 구매하는 전략 보드게임",
    main: "https://cnation-splendor.vercel.app/",
    backup: "https://civilizednation.github.io/cnation-splendor/",
    detail: "세계적으로 유명한 보석 수집 전략 보드게임 '스플렌더'를 컴퓨터와 1:1로 즐길 수 있는 웹 버전입니다.\n• 다이아몬드·사파이어·에메랄드·루비·오닉스 5색 보석 토큰과 금 조커 토큰을 모아 발전 카드를 구매\n• 구매한 발전 카드는 이후 카드 구매 시 해당 색 보석을 영구적으로 할인해줘 점점 강력한 콤보를 만들 수 있음\n• 명성 점수 15점을 먼저 달성하면 마지막 라운드가 진행되고, 최종 점수가 가장 높은 쪽이 승리\n• 조건을 만족하면 추가 점수를 주는 귀족(노블) 타일 시스템 포함\n규칙은 단순하지만 매 턴 어떤 보석과 카드를 우선할지 고민하게 되는 깊이 있는 전략 게임입니다."
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
    remark: "모바일 버전과 PC 버전을 별도로 제공합니다.",
    detail: "세계적으로 유명한 덱빌딩(deck-building) 보드게임 '도미니언'을 컴퓨터와 1:1로 대결하는 방식으로 즐길 수 있습니다.\n• 기본 시작 덱(영지·구리 등)에서 출발해, 왕국 카드 더미에서 액션·재화·승점 카드를 구매하며 자신만의 덱을 강화\n• 액션(Action)·구매(Buy)·재화(Treasure) 단계로 진행되는 턴제 구조\n• 매 게임마다 왕국 카드 조합이 달라져 전략도 함께 바뀌는 높은 재플레이성\n• 게임 종료 시 승점 카드를 가장 많이 모은 쪽이 승리\n모바일 터치에 최적화된 기본 버전과, 마우스·키보드 조작에 최적화된 PC 전용 버전을 별도로 제공합니다."
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
    remark: "모바일, PC 전용, 중국어 버전을 제공합니다.",
    detail: "고전 '지렁이(스네이크)' 게임에 영어 단어 맞히기를 접목한 학습형 아케이드 게임입니다.\n• 제시된 영어 단어를 보고, 지렁이를 조종해 알맞은 알파벳 순서대로 먹이(글자)를 먹으면 지렁이가 길어지며 점수 획득\n• 틀린 글자를 먹거나 벽·자기 몸에 부딪히면 게임 종료\n• 플레이하며 자연스럽게 영단어 철자를 반복 학습할 수 있는 구조\nPC 키보드 조작에 최적화된 PC 전용 버전과, 중국어 사용자를 위한 현지화 버전을 별도로 제공합니다."
  },

  // MUSIC
  {
    name: "무석연합교회 성가대 연습",
    category: "MUSIC",
    icon: "🎼",
    desc: "중국 우시 무석연합교회 성가대곡 연습을 도와주는 앱",
    main: "https://cnation-msyh-sgd.vercel.app/",
    detail: "중국 우시 무석연합교회 성가대원들이 각자 맡은 파트를 편하게 연습할 수 있도록 만든 연습 보조 앱입니다.\n• 곡별로 가사와 악보 등 참고 자료를 확인하며 연습\n• 파트(소프라노·알토·테너·베이스 등)별 음원을 구분해서 들을 수 있어 자신이 맡은 성부만 집중적으로 반복 연습 가능\n• 스마트폰으로도 접속해 연습 시간과 장소에 구애받지 않고 이용 가능\n성가대 연습에 필요한 자료를 한곳에 모아, 예배 준비 과정을 더 수월하게 만들어주는 앱입니다."
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
    remark: "YouTube 채널 @grace2melody에도 곡들이 등록되어 있으며, 별도의 관리 앱으로 구성했습니다.",
    detail: "직접 작사·작곡한 CCM(Contemporary Christian Music) 곡들을 한곳에서 정리하고 감상할 수 있게 관리해주는 앱입니다.\n• 곡 목록을 등록하고 제목·가사 등 정보를 한눈에 확인\n• 곡별 음원을 바로 재생해서 감상 가능\n• YouTube 채널 @grace2melody에 업로드된 곡들과 연계해서 관리\nWeb Style(GitHub Pages), Supabase 기반의 'CCM Best' 버전 등 목적에 따라 다른 스타일의 버전도 함께 제공합니다."
  },

  {
    name: "cnation 도미니언 Echo",
    category: "MUSIC",
    icon: "🎧",
    desc: "cnation 도미니언 게임에 사용된 배경음악을 들려주는 플레이어",
    main: "https://cnation-dominion.vercel.app/echo/",
    detail: "cnation 도미니언 게임에서 사용된 배경음악(OST)만 따로 모아 들을 수 있는 플레이어입니다.\n• 게임 플레이 없이도 도미니언의 테마 음악을 감상하고 싶을 때 사용\n• 별도의 조작 없이 접속하면 바로 배경음악 감상 가능\n작업하거나 쉴 때 잔잔하게 틀어두기 좋은 감상용 플레이어입니다."
  },

  {
    name: "cnation CCM 플레이어",
    category: "MUSIC",
    icon: "🎧",
    desc: "내가 작사·작곡한 CCM 곡들을 관리 화면 없이 이어서 감상만 할 수 있는 플레이어",
    main: "https://cnation-ccm-list.vercel.app/player/",
    remark: "곡 등록/수정은 위의 'cnation CCM' 앱에서, 감상은 이 플레이어로 하시면 됩니다.",
    detail: "위의 'cnation CCM' 앱에서 관리하는 곡들을, 등록·수정 화면 없이 감상 전용으로만 이어서 들을 수 있게 만든 플레이어입니다.\n• 곡 목록 관리 없이 재생에만 집중한 단순한 화면 구성\n• 여러 곡을 순서대로 이어서 재생\n곡을 새로 등록하거나 수정할 때는 'cnation CCM' 앱을, 그냥 감상만 하고 싶을 때는 이 플레이어를 이용하시면 됩니다."
  },

  // UTILITY
  {
    name: "cnation 이미지 리사이저",
    category: "UTILITY",
    icon: "🖼️",
    desc: "사진 보관함/파일에서 고른 순서대로 여러 장을 한 번에 리사이징하고 JPG/WEBP/PNG로 변환",
    main: "https://cnation-image.vercel.app/",
    detail: "사진 보관함이나 파일에서 고른 순서 그대로 여러 장의 이미지를 한 번에 리사이징하고 원하는 포맷으로 변환해주는 도구입니다.\n• 여러 장의 이미지를 선택한 순서를 유지한 채 일괄 처리\n• JPG·WEBP·PNG 포맷 간 변환 지원\n• 원하는 크기(가로·세로 또는 비율)로 한 번에 리사이징\n블로그 업로드나 자료 정리 전, 여러 이미지의 용량과 크기를 빠르게 맞출 때 유용합니다."
  },

  {
    name: "cnation 무한 루프 OST 제작기 (Loop Video Maker)",
    category: "UTILITY",
    icon: "🎬",
    desc: "여러 장의 일러스트와 배경음악을 결합해 줌·발광·파티클 모션 효과와 함께 무한 루프 OST 영상을 만드는 무설치 웹 앱",
    main: "https://cnation-video-loop.vercel.app/",
    remark: "PC는 풀버전 영상 한 번에 제작, 모바일(아이폰 사파리 등)은 이미지별 개별 영상으로 분할 제작 후 ZIP 일괄 다운로드에 최적화. 모든 렌더링은 브라우저 내부에서만 처리되어 이미지·음원이 서버로 전송되지 않습니다.",
    detail: "여러 장의 일러스트와 배경음악(OST) 1곡을 결합해, 감성적인 모션 효과와 함께 완벽하게 반복되는 무한 루프 영상을 제작하는 무설치 웹 앱입니다. 무거운 영상 편집 프로그램 없이 브라우저에서 몇 번의 클릭만으로 완성됩니다.\n• 음원 길이에 맞춰 이미지별 재생 시간을 자동으로 균등 배분하고, 전환 시 약 1.2초의 크로스페이드(디졸브)를 자동 적용\n• 카메라 줌·패닝(Ken Burns) 효과, 광원 부위가 은은하게 숨 쉬는 발광(Glow) 펄스, 위로 떠오르는 파티클(불씨·반딧불이) 등 3가지 시각 연출 지원\n• [모드 1] 음악 전체 길이에 맞춘 풀버전 영상 하나로 합치기 (PC 권장)\n• [모드 2] 이미지별 개별 루프 영상으로 분할 제작 — 아이폰 사파리의 하드웨어 버퍼 한계(15초)를 우회해 모바일에서도 안정적으로 다수의 영상 제작 가능\n• 분할 제작된 영상들을 번호순으로 정렬해 ZIP으로 한 번에 다운로드\n모든 렌더링은 서버 전송 없이 브라우저 안에서만 처리되어, 개인 소장 일러스트나 저작권 음원이 외부로 유출될 걱정이 없습니다."
  },

  {
    name: "cnation ZIP",
    category: "UTILITY",
    icon: "🗜️",
    desc: "큰 파일/폴더를 원하는 용량이나 개수로 나눠 표준 분할 ZIP으로 저장하는 무설치 웹앱 (아이폰 최적화)",
    main: "https://cnation-zip.vercel.app/",
    remark: "파일명.z01, .z02 … 마지막 .zip 형식의 표준 분할 ZIP을 생성하며, 앱 내 '다시 합치기'로 복원도 가능합니다. 파일은 서버로 전송되지 않고 기기 안에서만 처리되며, 한 번에 최대 512MB·200개 분할까지 지원합니다. 아이폰은 최신 Safari 권장, 폴더 선택은 iOS 18.4 이상에서 지원됩니다.",
    detail: "큰 파일이나 폴더를 원하는 용량 또는 개수로 나눠 표준 분할 ZIP으로 저장하는 무설치 웹앱입니다. 메일 첨부나 전송에 쓰기엔 너무 큰 파일을 손쉽게 나눌 수 있습니다.\n• 문서·사진·동영상은 물론 이미 압축된 ZIP 파일도 선택 가능\n• '파일당 최대 10MB'처럼 용량을 지정하거나, '총 3개'처럼 분할 개수를 직접 지정 가능\n• 파일명.z01, 파일명.z02 … 마지막 파일명.zip 형식의 표준 분할 ZIP 생성 — 모든 조각을 한 폴더에 두고 분할 ZIP을 지원하는 프로그램에서 마지막 .zip을 열면 해제됨\n• 앱 안의 '다시 합치기' 기능으로 분할된 파일을 다시 하나의 일반 ZIP으로 복원 가능\n• 선택한 파일은 서버로 전송되지 않고 기기 안에서만 처리\n한 번에 최대 512MB, 최대 200개 분할까지 지원합니다. 아이폰은 최신 Safari 사용을 권장하며, 폴더 선택 기능은 iOS 18.4 이상에서 지원됩니다. 다만 아이폰 기본 '파일' 앱은 분할 ZIP 해제를 지원하지 않을 수 있어 별도의 압축 프로그램이 필요할 수 있습니다."
  },

  {
    name: "cnation font (한글 폰트 고르기)",
    category: "UTILITY",
    icon: "🔤",
    desc: "구글 한글 폰트를 본문·UI·타이틀·게임 용도로 나눠 내 문구로 미리 보고, 실제 쓸 글자만 담은 woff2로 내보내는 무설치 웹앱",
    main: "https://cnation-font.vercel.app/",
    remark: "구글 폰트 CDN에서 직접 받아 브라우저 안에서만 처리하며, 입력한 문구가 서버로 전송되지 않습니다. 구글 한글 폰트 38종 전부를 다루고, 내보낸 서브셋은 대부분 OFL 라이선스라 앱에 포함해 배포할 수 있습니다.",
    detail: "앱이나 게임을 만들 때마다 어떤 폰트를 쓸지 고르는 일이 번거롭고, 골라도 한글 폰트는 한 벌이 2MB 가까이 돼 그대로 쓰기 부담스럽습니다. 이 둘을 한 자리에서 끝내는 도구입니다.\n• 용도로 좁히기 — 본문·리딩 / UI·앱 기본 / 타이틀·헤드라인 / 게임·임팩트 / 코드·숫자 / 손글씨·감성 6가지로 분류되어 있고, 여기에 '평범 ↔ 튐' 슬라이더와 굵기 수·가변폰트 조건을 더해 후보를 좁힐 수 있음\n• 내 문구로 보기 — 미리보기 칸에 '레벨 선택', 'SCORE 1250'처럼 실제 앱에 쓸 문구를 넣으면 모든 폰트 카드가 그 문구로 즉시 다시 그려짐\n• 쓰일 자리에 얹어보기 — 폰트를 고르면 게임 HUD와 앱 다이얼로그 목업에 직접 적용되고, 11~17px 작은 크기에서 어떻게 읽히는지도 함께 확인. 카드에서 예뻐 보이던 폰트가 버튼이나 본문에서 무너지는 일이 잦기 때문\n• 최적화해서 내보내기 — 앱에 쓸 텍스트를 통째로 붙여넣으면 그 글자만 담은 woff2 파일과 바로 복사해 쓸 수 있는 @font-face 스니펫이 나옴. 보통 95~99% 줄어듦 (예: Noto Sans KR 1,820KB → 31KB)\n• 폰트를 여러 개 비교함에 담아 나란히 견주고, 한 번에 내보낼 수도 있음\n폰트 분류는 구글이 직접 매긴 태그 점수를 바탕으로 계산하며, 폰트 목록은 매달 자동으로 갱신됩니다."
  },

  // HOBBY
  {
    name: "Cnation BOOK",
    category: "HOBBY",
    icon: "📚",
    desc: "장편소설을 태블릿·스마트폰에서 편안하게 읽을 수 있는 개인용 웹 이북 앱",
    main: "https://cnation-cts.vercel.app/",
    remark: "작품·권별 목록, 이어 읽기, 책갈피, 태블릿 가로 2페이지/세로·모바일 1페이지 보기, 글꼴·글자 크기·줄간격·여백 조절, 홈 화면 추가(PWA) 및 오프라인 읽기를 지원합니다. 읽던 위치와 책갈피는 기기별 브라우저에 개별 저장됩니다. 현재 '닥터 최태수'(전 27권), '신경외과의사 박재현'(전 3권) 제공. 회원가입 없이 바로 이용 가능합니다.",
    detail: "장편소설을 태블릿과 스마트폰에서 편안하게 읽을 수 있도록 만든 개인용 웹 이북 앱입니다. 종이책을 펼쳐 읽는 느낌과 디지털 이북의 편리함을 함께 제공합니다.\n• 작품 선택 → 권별 목록 → 독서 화면으로 이어지는 직관적인 탐색 구조\n• 마지막으로 읽던 위치에서 자동으로 이어 읽기, 원하는 페이지에 책갈피 저장\n• 태블릿 가로 화면은 두 페이지, 세로 화면·스마트폰은 한 페이지로 표시해 기기에 맞는 독서 환경 제공\n• 여러 한글 글꼴, 글자 크기·굵기, 줄 간격·문단 간격, 페이지 여백까지 세밀하게 조절 가능\n• 터치·스와이프·키보드로 페이지 이동, 홈 화면에 추가하는 PWA 기능과 오프라인 읽기 지원\n읽던 위치와 책갈피는 사용 중인 기기의 브라우저에 개별 저장되어 다른 사용자·기기의 기록과 섞이지 않습니다. 현재 '닥터 최태수'(전 27권, 3,236화), '신경외과의사 박재현'(전 3권, 289화) 두 작품을 제공하며, 회원가입 없이 바로 이용할 수 있습니다."
  },

  // LIFE
  {
    name: "우리가족 일정 알림이",
    category: "LIFE",
    icon: "🎂",
    desc: "가족 생일 등 주요 일정을 관리하고 D-Day 표시해주는 앱",
    main: "https://cnation-family-birthdays.vercel.app/",
    detail: "가족의 생일 등 주요 일정을 한곳에 모아 관리하고, 다가오는 일정을 D-Day로 표시해주는 앱입니다.\n• 가족 구성원별로 생일·기념일 등을 등록\n• 다가오는 일정 순서대로 D-Day 카운트다운 표시\n• 매년 반복되는 일정을 놓치지 않도록 확인하기 편한 목록 구성\n생일을 깜빡하기 쉬운 바쁜 일상 속에서, 가족의 중요한 날을 미리 챙길 수 있도록 도와주는 실용 앱입니다."
  },

  {
    name: "명국이의 중국생활 도우미",
    category: "LIFE",
    icon: "🏠",
    desc: "중국 우시생활 도우미 - 집, 교회, 회사, 생활, 교통, 음식, 쇼핑 등",
    main: "https://civilizednation.github.io/cnation-wuxi/",
    detail: "중국 우시(无锡)에서 생활하는 데 필요한 정보를 한곳에 모아둔 생활 가이드 앱입니다.\n• 집·교회·회사·교통·음식·쇼핑 등 주제별로 정보를 분류해서 정리\n• 처음 우시에 정착하거나 방문하는 사람이 빠르게 필요한 정보를 찾아볼 수 있는 구조\n타지 생활에서 마주치는 사소하지만 중요한 궁금증들을 미리 정리해둔, 개인 경험 기반의 생활 도우미 앱입니다."
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
    remark: "기본 버전은 튜닝된 경험식 기반이고, PRO 버전은 비선형 Poisson 방정식을 직접 수치해석해 Refresh/Leakage/GIDL을 유도합니다.",
    detail: "DRAM BG(Buried Gate) Cell의 임플란트(implant) 조건을 입력하면, 기준 공정 대비 dose profile과 refresh·leakage 상대 지수를 비교해주는 TCAD 보조 시뮬레이터입니다.\n• 임플란트 에너지·도즈 등 조건을 입력하면 깊이 방향 dose profile을 계산\n• 기준(reference) 공정 대비 refresh 특성과 leakage 특성이 어떻게 변하는지 상대 지수로 빠르게 비교\n• 기본 버전은 튜닝된 경험식(empirical model) 기반으로 결과를 즉시 확인 가능\nPRO 버전(물리 엔진)은 비선형 Poisson 방정식을 직접 수치해석해서 Refresh·Leakage뿐 아니라 GIDL까지 물리 기반으로 유도합니다. 무거운 상용 TCAD 툴 없이도 공정 조건 변화에 따른 경향성을 빠르게 확인하고 싶은 공정·소자 엔지니어를 위한 보조 도구입니다."
  },

  // EDUCATION
  {
    name: "goodmento 출석부",
    category: "EDUCATION",
    icon: "🏫",
    desc: "문진숙(여동생) 인도 어린이집 출석부",
    main: "https://goodmento-school-check.vercel.app/",
    detail: "여동생 문진숙이 운영하는 인도 어린이집의 출석을 관리하기 위한 출석부 앱입니다.\n• 원아 명단을 등록하고 날짜별로 출석 여부를 체크\n• 현장에서 간단한 조작만으로 바로 기록 가능한 단순한 화면 구성\n복잡한 관리자 기능보다는, 매일 출석을 빠르고 편하게 기록하는 데 초점을 맞춘 실용 앱입니다."
  },

  // TEAM
  {
    name: "우시개발팀 생일 알림이",
    category: "TEAM",
    icon: "👥",
    desc: "중국 우시 SK하이닉스 우시개발팀 팀원들의 생일을 관리하고 D-Day 표시해주는 앱",
    main: "https://civilizednation.github.io/skhynix-wuxi-d-birthdays/",
    detail: "중국 우시 SK하이닉스 우시개발팀 팀원들의 생일을 관리하고, 다가오는 생일을 D-Day로 표시해주는 팀 전용 앱입니다.\n• 팀원별 생일을 등록해두면 다가오는 순서대로 목록 확인 가능\n• D-Day 카운트다운으로 챙겨야 할 생일을 미리 확인\n같은 팀 동료들의 생일을 놓치지 않고 챙길 수 있도록 도와주는 팀 전용 알림 앱입니다."
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
