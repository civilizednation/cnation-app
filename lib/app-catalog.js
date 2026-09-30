// app-data.js(홈 화면 앱 목록)를 읽어와 AI 답변용 텍스트로 만듭니다.
// app-data.js는 브라우저에서 <script>로 그대로 불러 쓰는 파일이라 import/export가 없으므로,
// 파일 내용을 그대로 실행해서 그 안의 상수(APP_DATA 등)를 꺼내 씁니다.
// 앱을 추가/수정해도 이 파일은 그대로이고, 다음 답변부터 자동으로 최신 목록을 반영합니다.
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../app-data.js', import.meta.url), 'utf8');
const load = new Function(`${source}\nreturn { APP_DATA, CATEGORY_ORDER, CATEGORY_ICON };`);
export const { APP_DATA, CATEGORY_ORDER, CATEGORY_ICON } = load();

// 카테고리 순서대로 "- [카테고리] 이름: 설명 (링크)" 형식의 목록 텍스트를 만듭니다.
export function appCatalogText() {
  return CATEGORY_ORDER.flatMap((category) =>
    APP_DATA.filter((app) => app.category === category).map(
      (app) => `- [${category}] ${app.name}: ${app.desc}${app.main ? ` (${app.main})` : ''}`,
    ),
  ).join('\n');
}
