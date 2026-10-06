// Shared by the admin forms and Worker validation. Content is plain text, never HTML.
const text = (key, label, required = false, type = 'text') => ({ key, label, required, type })
const long = (key, label, required = false) => text(key, label, required, 'textarea')
const image = (key, label, required = false) => text(key, label, required, 'image')
const list = (key, label) => ({ key, label, type: 'lines' })
const group = (key, label, fields) => ({ key, label, type: 'group', fields })
const rows = (key, label, fields) => ({ key, label, type: 'rows', fields })
const slug = text('slug', 'URL slug', true, 'slug')

export const contentTypes = {
  team: {
    label: 'Team members', singular: 'team member', section: 'team', titleKey: 'name', imageKey: 'image', publicPath: '/team',
    fields: [text('name', 'Name', true), slug, text('role', 'Role', true), long('bio', 'Biography'), image('image', 'Profile image', true),
      group('social', 'Social profiles', [text('linkedin', 'LinkedIn URL', false, 'url'), text('twitter', 'Twitter / X URL', false, 'url')])],
  },
  projects: {
    label: 'Projects', singular: 'project', section: 'caseStudies', titleKey: 'client', imageKey: 'thumb', publicPath: '/work',
    fields: [text('client', 'Project / client name', true), slug, text('sector', 'Industry'), text('year', 'Year'), list('tags', 'Tags'),
      image('thumb', 'Listing thumbnail', true), image('image', 'Homepage image', true),
      long('challenge', 'Challenge'), long('solution', 'Solution'), long('impact', 'Impact'),
      rows('stats', 'Results', [text('label', 'Label', true), text('value', 'Value', true)]),
      group('detailImages', 'Project images', [image('hero', 'Hero image'), image('main', 'Main image'), { key: 'gallery', label: 'Gallery images', type: 'images' }]),
      group('projectInfo', 'Project information', [text('client', 'Client name'), text('services', 'Services delivered'), text('platform', 'Platform'), text('date', 'Project date')]),
      group('detailDescription', 'Project story', [text('title', 'Story title'), text('subtitle', 'Story subtitle'), long('content', 'Story'), list('features', 'Deliverables')]),
      rows('methodology', 'Methodology', [text('step', 'Step number'), text('title', 'Step title', true), long('description', 'Step description')]),
      group('finalResult', 'Final result', [text('title', 'Result title'), long('description', 'Result description'), long('keyAchievements', 'Key achievements')]),
      text('clientName', 'Testimonial name'), text('clientRole', 'Testimonial role')],
  },
  services: {
    label: 'Services', singular: 'service', section: 'services', titleKey: 'title', imageKey: 'detailImage', publicPath: '/services',
    fields: [text('title', 'Title', true), slug, text('shortTitle', 'Short title', true), text('number', 'Display number'), text('icon', 'Icon CSS classes'),
      long('summary', 'Summary', true), long('detail', 'Description'), list('includes', 'What is included'),
      image('detailImage', 'Hero image', true), image('conceptImage', 'Approach image'), image('faqImage', 'FAQ image'),
      text('approachHeading', 'Approach heading'), long('approachBody', 'Approach description'),
      rows('whyCards', 'Benefit cards', [text('icon', 'Icon CSS classes'), text('title', 'Benefit title', true), long('body', 'Benefit description')]),
      text('faqsHeading', 'FAQ heading'), rows('faqs', 'Frequently asked questions', [text('question', 'Question', true), long('answer', 'Answer', true)]),
      text('seoTitle', 'SEO title'), long('metaDescription', 'SEO description')],
  },
  blogs: {
    label: 'Blogs', singular: 'blog post', section: 'insights', titleKey: 'title', imageKey: 'image', publicPath: '/insights',
    fields: [text('title', 'Title', true), slug, text('category', 'Category', true), text('date', 'Display date'), text('readTime', 'Reading time'),
      text('author', 'Author', true), text('authorRole', 'Author role'), image('image', 'Cover image', true),
      long('excerpt', 'Excerpt'), long('body', 'Article body', true)],
  },
}

export function blankFields(fields) {
  return Object.fromEntries(fields.map(field => [field.key, field.type === 'group' ? blankFields(field.fields) : ['rows', 'lines', 'images'].includes(field.type) ? [] : '']))
}

function safeUrl(value, imageOnly = false) {
  if (!value || (!imageOnly && value === '#')) return true
  if (/^\/(?!\/)/.test(value) && !value.includes('\\') && !/[\u0000-\u001f]/.test(value)) return true
  try { return /^https?:$/.test(new URL(value).protocol) && !/[\u0000-\u001f]/.test(value) } catch { return false }
}

export function validateContent(kind, input) {
  const config = contentTypes[kind]
  if (!config) throw new Error('Unknown content type.')
  function parse(fields, inputValue, prefix = '') {
    if (!inputValue || typeof inputValue !== 'object' || Array.isArray(inputValue)) throw new Error(`${prefix || 'Content'} must be an object.`)
    const result = {}
    for (const field of fields) {
      const label = `${prefix}${field.label}`
      const raw = inputValue[field.key]
      if (field.type === 'group') { result[field.key] = parse(field.fields, raw ?? {}, `${label}: `); continue }
      if (['lines', 'images', 'rows'].includes(field.type)) {
        if (raw !== undefined && !Array.isArray(raw)) throw new Error(`${label} must be a list.`)
        const items = raw ?? []
        if (items.length > 100) throw new Error(`${label} allows up to 100 entries.`)
        result[field.key] = items.map(item => {
          if (field.type === 'rows') return parse(field.fields, item, `${label}: `)
          if (typeof item !== 'string' || item.length > 2000) throw new Error(`${label} contains an invalid entry.`)
          if (field.type === 'images' && !safeUrl(item, true)) throw new Error(`${label} requires an image URL or /assets path.`)
          return item.trim()
        }).filter(item => item !== '')
        continue
      }
      if (raw !== undefined && typeof raw !== 'string') throw new Error(`${label} must be text.`)
      const value = (raw ?? '').trim()
      if (field.required && !value) throw new Error(`${label} is required.`)
      if (value.length > (field.type === 'textarea' ? 60000 : 2000)) throw new Error(`${label} is too long.`)
      if (field.type === 'slug' && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) throw new Error('URL slug must use lowercase letters, numbers and hyphens.')
      if (field.type === 'slug' && value.length > 160) throw new Error('URL slug must be at most 160 characters.')
      if (['image', 'url'].includes(field.type) && !safeUrl(value, field.type === 'image')) throw new Error(`${label} requires an http(s) URL or an absolute site path.`)
      result[field.key] = value
    }
    return result
  }
  return parse(config.fields, input)
}
