# cnation-app 작업 규칙

내가 만든 앱/게임을 모아 실행하는 개인 허브 웹앱. 구조는 `README.md` 참고.

## 버전 규칙 (모든 변경 시 반드시 지킬 것)

버전 형식: `Version 1.X.Y`

- **기능 추가/변경** (허브 자체의 기능·UI 변경 등) → **두 번째 자리(X)** +1, 세 번째 자리는 0으로
  - 예: 1.25.1 → 1.26.0
- **새 앱 추가** (`app-data.js`에 새 항목 추가) → **세 번째 자리(Y)** +1
  - 예: 1.25.0 → 1.25.1

버전을 올릴 때 아래 세 곳을 모두 같은 값으로 수정:

1. `index.html` 하단 footer — `Version 1.X.Y · Revision History`
2. `revision.html` 상단 "현재 버전" 배지 — `현재 버전: Version 1.X.Y`
3. `revision.html` 하단 footer — `Version 1.X.Y`

그리고 `revision.html`의 `<div class="timeline">` 바로 아래(맨 위)에 새 기록 추가:

```html
<div class="entry"><div class="entry-head"><span class="ver">v1.X.Y</span><span class="date">YYYY-MM-DD</span></div><ul>
<li>변경 내용을 한국어로 구체적으로</li>
</ul></div>
```

참고: `package.json`의 `version`과 `app-data.js` 상단 주석의 `Version 1.0.0`은 허브 버전과 별개이므로 건드리지 않는다.

## 앱 추가 방법

- `app-data.js`의 `APP_DATA` 배열에 항목 추가 (작성법은 파일 상단 주석 참고)
- 사용자가 위치를 지정하면 그 자리에, 아니면 해당 카테고리의 마지막에 추가
- `name`, `category`, `icon`(이모지), `desc`(간단 설명), `main`(실행 주소)은 필수
- `detail`(상세 소개)은 앱 기능을 직접 확인한 뒤 `• ` 글머리 목록으로 정리. `remark`에는 지원 환경·주의사항
- Vercel 배포가 없으면 `backup` 없이 GitHub Pages 주소만 `main`에 넣는다
- 추가 후 위의 버전 규칙에 따라 세 번째 자리 올리기

## 작업 마무리

- 사용자가 요청하면 `main` 브랜치에 바로 커밋·푸시한다
- 커밋 메시지는 한국어로 변경 내용을 요약
