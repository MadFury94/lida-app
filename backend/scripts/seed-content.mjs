import { writeFile } from 'node:fs/promises'
import * as source from '../../client/src/store/site.js'
import { contentTypes, validateContent } from '../../shared/content-schema.js'
const quote = value => "'" + String(value).replaceAll("'", "''") + "'"
const lines = ['-- Initial Solutions Media content. Existing records are never overwritten.']
for (const [kind, config] of Object.entries(contentTypes)) {
  source[config.section].forEach((item, sortOrder) => {
    const data = validateContent(kind, kind === 'services' ? { ...item, detailImage: item.detailImage || '/assets/img/home-2/about-hero.png' } : item)
    lines.push(`INSERT OR IGNORE INTO content (id, kind, slug, data, status, sort_order, created_at, updated_at) VALUES (${quote(kind + '-' + data.slug)}, ${quote(kind)}, ${quote(data.slug)}, ${quote(JSON.stringify(data))}, 'published', ${sortOrder}, '2026-10-01T00:00:00.000Z', '2026-10-01T00:00:00.000Z');`)
  })
}
await writeFile(new URL('../migrations/0002_seed_content.sql', import.meta.url), lines.join('\n') + '\n')
console.log(`Prepared ${lines.length - 1} records from the Solutions Media website.`)
