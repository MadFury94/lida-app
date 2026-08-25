import { Link } from 'react-router-dom'
import { contact, careerPaths } from '../store/site'

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
                <span>Bring Your Best Work.</span> Help Businesses Move Forward.
              </h1>
            </div>
            <div className="breadcrumb-items">
              <ul>
                <li>{contact.address}</li>
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
                <img src="/assets/img/inner-page/Lida-Careers.jpeg" alt="The Lida Digital team collaborating" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title">
                <span className="sub-title">
                  <i className="fa-solid fa-circle" style={{ color: 'var(--theme)' }}></i> Life at Lida
                </span>
                <h2>Curious Minds. <span className="style-color">Work With Purpose.</span></h2>
              </div>
              <p className="career-lead">
                At Lida, you will work on ideas that help businesses move forward. We combine strategy,
                creativity, marketing and communications to create work that earns attention, builds
                trust and supports growth.
              </p>
              <div className="career-values">
                <div><strong>Think Clearly</strong><span>Understand the business, audience and goal before jumping into execution.</span></div>
                <div><strong>Make It Matter</strong><span>Turn ideas into work that helps brands earn attention, trust and real business results.</span></div>
                <div><strong>Grow Together</strong><span>Share feedback openly, keep learning and help the team do better work.</span></div>
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
            {careerPaths.map(path => (
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
              <h2>The vacancies highlighted above are roles we have available right now, but we always want to meet exceptional people.</h2>
              <p>
                Send your CV or portfolio with a short note about the problems you solve best.
                We will keep strong applications in our talent network for future opportunities.
              </p>
            </div>
            <a
              className="theme-btn-main style-2"
              href={`mailto:${contact.emailCareers}?subject=${applicationSubject}`}
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
