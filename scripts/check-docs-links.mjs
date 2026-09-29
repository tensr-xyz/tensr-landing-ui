#!/usr/bin/env node
/**
 * Internal /docs link check for fumadocs MDX.
 * Resolves [text](/docs/...) against content/docs page files.
 */
import fs from 'node:fs';
import path from 'node:path';

const docsRoot = path.join(process.cwd(), 'content/docs');
const changelogRoot = path.join(process.cwd(), 'content/changelog');

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.md')) acc.push(full);
  }
  return acc;
}

function pageUrl(file) {
  const rel = path.relative(docsRoot, file).replace(/\\/g, '/');
  const noExt = rel.replace(/\.mdx?$/, '');
  if (noExt === 'index') return '/docs';
  return `/docs/${noExt}`;
}

const files = walk(docsRoot);
const known = new Set(files.map(pageUrl));
known.add('/docs');
known.add('/changelog');

const linkRe = /\[[^\]]*]\((\/(?:docs|changelog)[^)\s#]*)/g;
let missing = 0;

for (const file of [...files, ...walk(changelogRoot)]) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(linkRe)) {
    const href = match[1].replace(/\/$/, '') || '/docs';
    if (href.startsWith('/changelog')) continue;
    if (!known.has(href)) {
      console.error(`${path.relative(process.cwd(), file)}: missing ${href}`);
      missing += 1;
    }
  }
}

if (missing) {
  console.error(`\n${missing} broken internal docs link(s).`);
  process.exit(1);
}

console.log(`ok: ${known.size} docs pages, no broken /docs links.`);
