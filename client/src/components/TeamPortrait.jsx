import { useState } from 'react'

export default function TeamPortrait({ member }) {
  const [failedSource, setFailedSource] = useState(null)
  const placeholder = /^\/assets\/img\/inner-page\/team-[1-5]\.jpg$/.test(member.image || '')
  if (!member.image || placeholder || failedSource === member.image) {
    const words = member.name.replace(/^(Dr\.?|Mr\.?|Mrs\.?|Ms\.?)\s+/i, '').trim().split(/\s+/)
    const initials = [words[0], words.length > 1 ? words.at(-1) : ''].map(word => word?.[0] || '').join('')
    return <div className="team-portrait team-portrait-placeholder" role="img" aria-label={member.name}><span aria-hidden="true">{initials}</span></div>
  }
  return <img className="team-portrait" src={member.image} alt={member.name} onError={() => setFailedSource(member.image)} />
}
