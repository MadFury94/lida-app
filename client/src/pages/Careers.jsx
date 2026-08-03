import { Link } from 'react-router-dom'
// Page copy is intentionally local while content editing is store-independent.

const paths = [
  {
    number: '01',
    title: 'Strategy & Consulting',
    text: 'Help ambitious organizations turn local insight into clear positioning, practical plans, and measurable growth.',
    skills: ['Brand strategy', 'Market research', 'Communications planning'],
  },
  {
    number: '02',
    title: 'Creative & Content',
    text: 'Shape ideas into distinctive identities, campaigns, stories, and digital experiences that move audiences.',
    skills: ['Design', 'Copywriting', 'Content production'],
  },
  {
    number: '03',
    title: 'Growth & Client Service',
    text: 'Build trusted client relationships and connect strategy, execution, reporting, and commercial outcomes.',
    skills: ['Account management', 'Digital marketing', 'Analytics'],
  },
]

export default function Careers() {
  const applicationSubject = encodeURIComponent('Career interest — Lida Digital')

  return (
    <>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/inner-page/bread-line.png')" }}
      >
        <div className="light-bg">
          <img src="/assets/img/inner-page/light.png" alt="" />
        </div>
        <div className="container">
          <div className="page-heading mb-0">
            <div className="breadcrumb-sub-title">
              <h1 className="text-white">
                <span>Do work that matters.</span> Build brands that move Africa forward.
              </h1>
            </div>
            <div className="breadcrumb-items">
              <ul>
                <li>Abuja, Nigeria</li>
                <li>Hybrid collaboration</li>
              </ul>
              <h2 className="title">Careers</h2>
            </div>
          </div>
        </div>
      </div>

      <section className="career-intro section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="career-image">
                <img src="/assets/img/inner-page/team-2.jpg" alt="The Lida Digital team collaborating" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-title">
                  <i className="fa-solid fa-circle-small"></i> Life at Lida
                </span>
                <h2>Curious minds. <span className="style-color">Serious impact.</span></h2>
              </div>
              <p className="career-lead">
                We are building a multidisciplinary team that understands African markets,
                thinks globally, and cares deeply about the quality of the work.
              </p>
              <div className="career-values">
                <div><strong>Think clearly</strong><span>Insight before activity.</span></div>
                <div><strong>Own the outcome</strong><span>Ideas are only valuable when they work.</span></div>
                <div><strong>Grow together</strong><span>Direct feedback, shared learning, no ego.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="career-paths section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-title">Where you could make an impact</span>
            <h2>Find your place in the <span className="style-color">work.</span></h2>
          </div>
          <div className="row g-4 mt-4">
            {paths.map(path => (
              <div className="col-lg-4" key={path.number}>
                <article className="career-card">
                  <span className="career-card-number">{path.number}</span>
                  <h3>{path.title}</h3>
                  <p>{path.text}</p>
                  <ul>
                    {path.skills.map(skill => <li key={skill}>+ {skill}</li>)}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="career-apply section-padding">
        <div className="container">
          <div className="career-apply-inner">
            <div>
              <span className="sub-title">Open application</span>
              <h2>There are no advertised vacancies right now—but we always want to meet exceptional people.</h2>
              <p>
                Send your CV or portfolio with a short note about the problems you solve best.
                We will keep strong applications in our talent network for future opportunities.
              </p>
            </div>
            <a
              className="theme-btn-main style-2"
              href={`mailto:hello@lidadigital.com.ng?subject=${applicationSubject}`}
            >
              <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right"></i></span>
              <span className="theme-btn">Introduce Yourself</span>
              <span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right"></i></span>
            </a>
            <p className="career-contact">
              Prefer a general enquiry? <Link to="/contact">Contact our team</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
