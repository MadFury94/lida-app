import { caseStudies as fallbackCaseStudies } from './site'

// Change this to 'fallback' when the site should use only the values in site.js.
// Leave it as 'admin' to let published admin content override those defaults.
export const CONTENT_SOURCE = import.meta.env.VITE_CONTENT_SOURCE || 'admin'

export function mergeCaseStudies(adminProjects) {
  if (CONTENT_SOURCE === 'fallback' || !Array.isArray(adminProjects) || adminProjects.length === 0) {
    return fallbackCaseStudies
  }

  // Published admin records are authoritative. Keep fallback fields only for
  // older records that do not yet contain every optional detail field.
  const fallbackBySlug = new Map(fallbackCaseStudies.map(project => [project.slug, project]))
  return adminProjects
    .filter(project => project?.slug)
    .map(project => ({ ...(fallbackBySlug.get(project.slug) || {}), ...project }))
}

export { fallbackCaseStudies }
