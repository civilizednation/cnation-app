# cnation-app

내가 만든 앱/게임을 한곳에 모아 실행할 수 있는 개인 허브 웹앱입니다.

- https://cnation-app.vercel.app
- https://civilizednation.github.io/cnation-app/

## 구조

- `index.html` — 메인 허브 화면 (카테고리별 앱 목록, 검색, 상세보기)
- `app-data.js` — 등록된 앱/게임 데이터 (이름, 카테고리, 설명, 링크, 상세 소개 등)
- `revision.html` — 버전별 변경 이력
- `ask.html` — cnation-app 관련 질문에 답하는 AI 전용 Q&A 페이지 (Vercel 배포판에서만 동작 — 서버리스 함수 필요)
- `api/`, `lib/` — `ask.html`의 AI 답변 처리용 서버리스 함수. Gemini → GitHub Models → Groq 순으로 자동 대체하며 응답하고, Tavily 웹 검색과 `app-data.js`/`revision.html` 내용을 답변 컨텍스트로 사용
- `fonts/` — 자체 호스팅 전용 폰트 (IBM Plex Sans KR)
- `manifest.json`, `icons/` — PWA(홈 화면 추가) 지원

## 앱 추가하기

`app-data.js` 상단 주석 참고 — 배열에 항목 하나를 추가하면 바로 허브에 반영됩니다.

## AI 질문 기능 로컬 실행

```bash
cp .env.example .env   # 키 입력
npm run dev             # http://localhost:3000/ask.html
npm run check            # 등록된 키 동작 확인
```

## 레거시 파일

`index2.html` ~ `index5.html`은 허브 구조로 개편되기 전 초기 실험 단계에서 쓰던 페이지로,
현재 허브 어디에서도 링크되지 않는 미사용 파일입니다.
