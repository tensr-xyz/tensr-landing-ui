// Crawl /docs on a running next dev server. Reports non-200 pages and
// internal links whose #anchor is missing from the target page.
const origin = process.argv[2] || 'http://127.0.0.1:3001';

const pages = new Map();
const queue = ['/docs'];

function decode(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

while (queue.length) {
  const path = queue.shift();
  if (pages.has(path)) continue;
  const response = await fetch(`${origin}${path}`, { redirect: 'manual' });
  const status = response.status;
  const html = status === 200 ? await response.text() : '';
  const ids = new Set();
  for (const match of html.matchAll(/\sid="([^"]+)"/g)) ids.add(decode(match[1]));
  const links = [];
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const raw = match[1];
    if (!raw.startsWith('/docs') && !raw.startsWith('#') && !raw.startsWith(`${origin}/docs`)) {
      continue;
    }
    const url = new URL(raw, `${origin}${path}`);
    if (url.origin !== new URL(origin).origin) continue;
    if (!url.pathname.startsWith('/docs')) continue;
    const target = url.pathname.replace(/\/$/, '') || '/docs';
    links.push({ href: raw, path: target, hash: decode(url.hash.replace(/^#/, '')) });
    if (!pages.has(target) && !queue.includes(target)) queue.push(target);
  }
  pages.set(path, { status, ids, links, error: html.includes('Application error') });
}

const problems = [];
for (const [path, page] of pages) {
  if (page.status !== 200) problems.push(`${page.status} ${path}`);
  if (page.error) problems.push(`error overlay ${path}`);
  for (const link of page.links) {
    const target = pages.get(link.path);
    if (!target) {
      problems.push(`${path} -> ${link.href} (not fetched)`);
      continue;
    }
    if (target.status !== 200) problems.push(`${path} -> ${link.href} (${target.status})`);
    if (link.hash && !target.ids.has(link.hash)) {
      problems.push(`${path} -> ${link.href} (missing #${link.hash})`);
    }
  }
}

console.log(`pages ${pages.size}`);
if (!problems.length) {
  console.log('ok');
} else {
  for (const problem of problems) console.log(problem);
  process.exitCode = 1;
}
