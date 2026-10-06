import { Link } from 'react-router-dom'
import ContentBoundary from './ContentBoundary'
import TeamPortrait from './TeamPortrait'
import { useSiteContent } from '../store/useSiteContent'

export default function TeamGrid() {
  const { team } = useSiteContent()
  return (
<ContentBoundary variant="portraits" count={4} label="our team">
<div className="row g-4">
            {team.length === 0 && <p role="status" className="py-5 text-center">Team updates are coming soon.</p>}
            {team.map(member => (
              <div key={member.slug} className="col-lg-6 col-md-6">
                <div className="team-profile-card">
                  <TeamPortrait member={member} />
                  <div className="team-content">
                    <div className="content">
                      <p>{member.role}</p>
                      <h3 className="title">
                        <Link to={`/team/${member.slug}`}>{member.name}</Link>
                      </h3>
                    </div>
                    <div className="left-items">
                      <div className="social-icon d-flex align-items-center">
                        {member.social?.linkedin && member.social.linkedin !== '#' && (
                          <a href={member.social.linkedin} target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        )}
                        {member.social?.twitter && member.social.twitter !== '#' && (
                          <a href={member.social.twitter} target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter"></i>
                          </a>
                        )}
                      </div>
                      <Link to={`/team/${member.slug}`} className="icon" aria-label={`View ${member.name}`}>
                        <i className="fa-regular fa-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
</ContentBoundary>
  )
}
