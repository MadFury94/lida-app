import { caseStudies as fallbackCaseStudies } from './site'

// Change this to 'fallback' when the site should use only the values in site.js.
// Leave it as 'admin' to let published admin content override those defaults.
export const CONTENT_SOURCE = import.meta.env.VITE_CONTENT_SOURCE || 'admin'

export function mergeCaseStudies(adminProjects) {
  if (CONTENT_SOURCE === 'fallback' || !Array.isArray(adminProjects) || adminProjects.length === 0) {
    return fallbackCaseStudies
  }

  const bySlug = new Map(adminProjects.map(project => [project.slug, project]))
  const merged = fallbackCaseStudies.map(project => ({ ...project, ...(bySlug.get(project.slug) || {}) }))
  const existing = new Set(fallbackCaseStudies.map(project => project.slug))
  return [...merged, ...adminProjects.filter(project => project?.slug && !existing.has(project.slug))]
}

export { fallbackCaseStudies }
