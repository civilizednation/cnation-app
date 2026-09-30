// revision.html(버전 기록)을 읽어와 AI 답변용 텍스트로 만듭니다.
// revision.html도 브라우저용 정적 HTML이라 별도 데이터 파일이 없으므로,
// 그 안의 각 버전 항목(<div class="entry">...)을 그대로 파싱해서 씁니다.
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../revision.html', import.meta.url), 'utf8');

function stripTags(text) {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

// "v1.21.0 (2026-09-30): 항목1 / 항목2" 형식의 줄들을 최신순으로 만듭니다.
export function revisionHistoryText() {
  const entryRe = /<div class="entry"><div class="entry-head"><span class="ver">([^<]+)<\/span><span class="date">([^<]+)<\/span><\/div><ul>([\s\S]*?)<\/ul><\/div>/g;
  const liRe = /<li>([\s\S]*?)<\/li>/g;
  const lines = [];
  let entryMatch;
  while ((entryMatch = entryRe.exec(html))) {
    const [, version, date, body] = entryMatch;
    const items = [];
    let liMatch;
    liRe.lastIndex = 0;
    while ((liMatch = liRe.exec(body))) items.push(stripTags(liMatch[1]));
    lines.push(`${version} (${date}): ${items.join(' / ')}`);
  }
  return lines.join('\n');
}
