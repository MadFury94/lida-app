import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSiteContent } from '../store/useSiteContent'
import usePageTitle from '../hooks/usePageTitle'
import useHomeAnimations from '../hooks/useHomeAnimations'
import { brand, contact, stats, partners, aboutPage } from '../store/site'
import './Home.css'

function Button({ to, children, delay = '.3s' }) {
  return <Link className="theme-btn-main style-2 bg-white-style wow fadeInUp" data-wow-delay={delay} to={to}>
    <span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right" /></span><span className="theme-btn">{children}</span><span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right" /></span>
  </Link>
}
function Label({ children }) {
  return <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle"><img src="/assets/img/home-1/01.png" alt="" /> {children}</span>
}
const process = [
  ['Understand the Business', 'We begin with a Growth Audit to understand your goals, audience, market position and the issues slowing your business down.'],
  ['Build the Right Plan', 'We turn the findings into a focused plan, using the right mix of brand strategy, marketing, communications and digital solutions.'],
  ['Create, Launch & Improve', 'Our team brings the plan to life through brand identity, content, campaigns, websites and experiences - then tracks what is working and improves it.'],
]

export default function Home() {
  const { services, caseStudies, team, insights } = useSiteContent()
  const root = useRef(null)
  useHomeAnimations(root)
  usePageTitle('Solutions Media | Growth Strategy, Branding and Marketing Agency in Nigeria')
  return <div ref={root} className="sm-home-3">
    <section className="hero-section-3">
      <div className="hero-3 bg-cover" style={{ backgroundImage: "url('/assets/img/home-1/Warm Cinematic African Tech Workspace.png')" }}>
        <ul className="hero-list wow fadeInUp" data-wow-delay=".3s">{[0, 2].map(start => <li key={start}>{services.slice(start, start + 2).map(s => <Link key={s.slug} to={`/services/${s.slug}`}>{s.shortTitle}</Link>)}</li>)}</ul>
        <h1 className="hero-title split-title"><span>Earn trust.</span> Win customers.<br />And grow.</h1>
        <div className="hero-info-items wow fadeInUp" data-wow-delay=".3s">
          <div className="info-image sm-hero-description"><p>{brand.description}</p></div>
          <div className="ratting-image"><Button to="/contact">Let's Talk</Button></div>
        </div>
      </div>
    </section>

    <section className="about-section-3 fix section-padding pb-0"><div className="container"><div className="about-wrapper-3"><div className="row g-4 align-items-center">
      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s"><div className="about-image fix">
        <img data-speed=".8" src="/assets/img/home-1/Warm-Toned Executive Office Portrait.png" alt="Three professionals in a warmly lit executive office" />
      </div></div>
      <div className="col-lg-6"><div className="about-content"><div className="section-title mb-0"><Label>About us</Label><h2 className="wa_title_spilt_1"><span className="style-font">Strategic Marketing &amp; Communications</span> for Ambitious Businesses.</h2></div>
        <p className="text wow fadeInUp" data-wow-delay=".3s">{brand.descriptionLong}</p><p className="text wow fadeInUp" data-wow-delay=".5s">{brand.descriptionLong2}</p>
        <div className="about-list-items"><div className="list-items wow fadeInUp" data-wow-delay=".3s"><ul>{['Local Insight', 'Strategic Execution', 'Measurable Impact'].map(item => <li key={item}><img src="/assets/img/home-3/check.svg" alt="" /> {item}</li>)}</ul><Button to="/about">Meet Solutions Media</Button></div><div className="about-counter-items wow fadeInUp" data-wow-delay=".5s"><p>{stats[0].label}</p><h2><span className="count">{stats[0].value}</span><span className="plus">{stats[0].suffix}</span></h2></div></div>
      </div></div>
    </div></div></div></section>

    {/* Partner logos — hidden for now */}
    {false && <div className="brand-section"><div className="container"><h2 className="title wa_title_spilt_1">Trusted by Businesses <span className="font-style">Committed to Growth</span></h2></div><div className="swiper brand-slider wow fadeInUp" data-wow-delay=".3s"><div className="swiper-wrapper">{partners.map(p => <div className="swiper-slide" key={p.name}><div className="brand-box-1"><span className="brand-img-1"><img src={p.logo} alt={p.name} /></span><span className="brand-img-1"><img src={p.logoHover || p.logo} alt="" /></span></div></div>)}</div></div></div>}

    <section className="service-section-3 fix section-padding"><div className="container">
      <div className="section-title-area"><div className="section-title"><Label>Our services</Label><h2 className="split-title"><span className="style-font">More Than Services.</span><br />A Better Way <span className="style-color">to Grow.</span></h2></div><div className="array-button wow fadeInUp" data-wow-delay=".3s"><button className="array-prev" aria-label="Previous services"><i className="fa-solid fa-chevron-left" /></button><div className="swiper-dot"><div className="dot" /></div><button className="array-next" aria-label="Next services"><i className="fa-solid fa-chevron-right" /></button></div></div>
      <div className="service-wrapper-3"><div className="swiper service-slider-3"><div className="swiper-wrapper">{services.map((s, i) => <div className="swiper-slide wow fadeInUp" data-wow-delay={`${(i % 3 + 1) * .2}s`} key={s.slug}><div className="service-box-items-3"><div className="shape-1"><img src="/assets/img/home-3/service-shape.png" alt="" /></div><span>{s.number}</span><h3><Link to={`/services/${s.slug}`}>{s.title}</Link></h3><p>{s.summary}</p><div className="feature-info-box"><ul><li>Plan</li><li>Execute</li><li>Grow</li></ul><Link to={`/services/${s.slug}`} className="icon" aria-label={`Explore ${s.title}`}><i className="fa-solid fa-arrow-up-right" /></Link></div></div></div>)}</div></div></div>
    </div></section>

    <section className="choose-us-section-3 fix section-padding"><div className="container"><div className="choose-us-wrapper-3"><div className="row g-4">
      <div className="col-lg-6"><div className="about-left-items"><div className="about-thumb fix wow fadeInUp" data-wow-delay=".3s"><img data-speed=".8" src="/assets/img/home-1/Lida - 3x growth.jpeg" alt="Business growth strategy" /></div><div className="about-bottom-content wow fadeInUp" data-wow-delay=".5s"><div className="about-counter"><div className="sub-text">{stats[1].label}</div><h2><span className="count">{stats[1].value}</span>{stats[1].suffix}</h2><p>{stats[1].desc}</p></div><div className="about-line" /><div className="content"><p>We create brands that attract clients and deliver results.</p><Button to="/contact">Get In Touch</Button></div></div></div></div>
      <div className="col-lg-6"><div className="choose-us-content"><div className="section-title mb-0"><Label>Why choose us</Label><h2 className="wa_title_spilt_1"><span className="style-font">Business Growth, Brand Strategy</span> and Marketing That Move You Forward.</h2></div><div className="choose-icon-items">{aboutPage.reasons.slice(0, 2).map((reason, i) => <div className="icon-items wow fadeInUp" data-wow-delay={`${.3 + i * .2}s`} key={reason.title}><div className="icon"><img src={`/assets/img/home-3/feature-icon-${i + 1}.svg`} alt="" /></div><div className="content"><h3 className="title">{reason.title}</h3><p>{reason.description}</p></div></div>)}</div><div className="row g-4 align-items-center">{stats.slice(2).map(stat => <div className="col-sm-6 wow fadeInUp" data-wow-delay=".3s" key={stat.label}><div className="award-items-box"><h2><span className="count">{stat.value}</span>{stat.suffix}</h2><p><b>{stat.label}</b><br />{stat.desc}</p></div></div>)}</div></div></div>
    </div></div></div></section>

    <div className="marque-section"><div className="marquee">{[0, 1, 2, 3].map(group => <div className="marquee-group" key={group}>{['Growth Strategy', 'Brand Positioning', 'Strategic Marketing', 'Visibility & Trust'].map(item => <div className="text-4" key={item}><img src="/assets/img/home-3/star.png" alt="" /> {item}</div>)}</div>)}</div></div>

    <section className="work-process-section-3 fix section-padding"><div className="container"><div className="section-title-area"><div className="section-title"><Label>Our working process</Label><h2 className="split-title"><span className="style-font">We Find What Is Holding Growth Back.</span><br />Then We Build What Moves It Forward.</h2></div></div><div className="work-process-wrapper-3"><div className="line-1"><img src="/assets/img/home-3/line.png" alt="" /></div>{process.map(([title, body], i) => <div className={`work-process-items-3${i === 0 ? ' active' : ''} wow fadeInUp`} data-wow-delay={`${i * .2}s`} key={title}><div className="icon"><img src={`/assets/img/home-3/icon${i + 1}.svg`} alt="" /></div><div className="content"><h3 className="title">{title}</h3><p>{body}</p></div></div>)}</div></div></section>
    <div className="sec-line-shape"><img src="/assets/img/home-1/line-shape.png" alt="" /></div>

    {/* Projects / case studies — hidden for now */}
    {false && <section className="project-section-3 tp-panel-pin-area fix section-padding"><div className="container"><div className="project-wrapper-3"><div className="row g-4"><div className="col-lg-7"><ul className="project-box-items-3 approach-wrapper-box fix">{caseStudies.map(cs => <li className="approach-box tp-panel-pin" key={cs.slug}><div className="thumb"><img src={cs.image} alt={cs.client} /><img src={cs.image} alt="" /></div><div className="content"><span>{cs.tags.join(' / ')}</span><h3><Link to={`/work/${cs.slug}`}>{cs.client}</Link></h3><Link to={`/work/${cs.slug}`} className="icon" aria-label={`View ${cs.client} case study`}><i className="fa-solid fa-arrow-up-right" /></Link></div></li>)}</ul>{caseStudies.length === 0 && <p>New projects are coming soon.</p>}</div><div className="col-lg-5"><div className="section-title style-3 mb-0 tp-panel-pin"><Label>Portfolio showcase</Label><h2 className="wa_title_spilt_1"><span className="style-font">Case Study</span> Showcase.</h2><p className="wow fadeInUp" data-wow-delay=".3s">A closer look at how Solutions Media uses brand strategy, marketing and communications to help clients move forward.</p><Button to="/work" delay=".5s">Explore our Work</Button></div></div></div></div></div></section>}

    <section className="choose-us-section-33 fix section-padding section-bg"><div className="container"><div className="choose-us-wrapper-33"><div className="row g-4"><div className="col-lg-6"><div className="choose-us-content"><div className="section-title style-3 mb-0"><Label>Your growth partner</Label><h2 className="wa_title_spilt_1"><span className="style-font">Local Insight.</span> Strategic Execution. Measurable Impact.</h2></div><ul className="choose-list">{aboutPage.reasons.map((reason, i) => <li className={`${i === 0 ? 'active ' : ''}wow fadeInUp`} data-wow-delay={`${.3 + i * .2}s`} key={reason.title}><div className="icon"><img src={`/assets/img/home-3/icon${i + 5}.svg`} alt="" /></div><div className="content"><h3>{reason.title}</h3><p>{reason.description}</p></div></li>)}</ul></div></div><div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s"><div className="choose-us-image fix"><img data-speed=".8" src="/assets/img/home-1/Executive Portrait in a Modern Office.png" alt="Executive portrait in a modern office" /><div className="grap-shape"><img src="/assets/img/home-3/grap.png" alt="" /></div></div></div></div></div></div></section>

    <section className="powerful-feature-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <Label>Powerful features integrations</Label>
          <h2 className="wa_title_spilt_1"><span className="style-font">Delivering Innovative </span> Media Solutions That Empower Businesses To <span className="style-color">Grow, Connect And Succeed In The Digital Era.</span></h2>
        </div>
      </div>
      <div className="powerful-marque-section">
        {[0, 1].map(row => <div className={`marquee${row === 1 ? ' marquee-2' : ''}`} key={row}>
          {[0, 1, 2].map(group => <div className="marquee-group" key={group} aria-hidden="true">
            {Array.from({ length: 12 }, (_, index) => <div className="icon-box" key={index}><img src={`/assets/img/home-3/feature${index + 1}.png`} alt="" /></div>)}
          </div>)}
        </div>)}
      </div>
    </section>

    {caseStudies.length > 0 && <section className="testimonial-section-3 fix section-padding"><div className="container"><div className="section-title-area"><div className="section-title mb-0"><Label>Client voices</Label><h2 className="wa_title_spilt_1"><span className="style-font">Trusted for the Work.</span> Valued for the Results.</h2></div></div></div><div className="swiper testimonial-slider-3"><div className="swiper-wrapper">{caseStudies.map((cs, i) => <div className="swiper-slide wow fadeInUp" data-wow-delay={`${.3 + i % 3 * .2}s`} key={cs.slug}><div className="tetsimonial-box-items-3"><div className="quote-icon"><img src="/assets/img/home-3/quote.png" alt="" /></div><p className="text">&ldquo;{cs.impact}&rdquo;</p><div className="client-info"><p>{cs.clientName || cs.client}</p><span>{cs.clientRole || cs.sector}</span></div></div></div>)}</div></div></section>}

    {team.length > 0 && <section className="team-section-3 fix section-padding"><div className="circle-line"><img src="/assets/img/home-3/circle-line.png" alt="" /></div><div className="container"><div className="row g-4"><div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s"><div className="gt-team-one-image-outer"><div className="gt-team-one-images-outer">{team.slice(0, 4).map((person, i) => <div className={`gt-team-one-image ${['active', 'two', 'three', 'four'][i]}`} key={person.slug}><img src={person.image} alt={person.name} /></div>)}</div></div></div><div className="col-lg-6"><div className="section-title"><Label>Our expert team</Label><h2 className="wa_title_spilt_1"><span className="style-font">Starts With</span> The Right People.</h2></div><div className="team-list-items">{team.slice(0, 4).map((person, i) => <div className={`team-title${i === 0 ? ' active' : ''} wow fadeInUp`} data-wow-delay={`${.2 + i * .2}s`} key={person.slug}><h3 className="title"><Link to={`/team/${person.slug}`}>{person.name}</Link></h3><span className="text">{person.role}</span></div>)}</div><Button to="/team">Meet the Team</Button></div></div></div></section>}

    <section className="news-section-3 fix section-padding section-bg">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title"><Label>Our insights</Label><h2 className="wa_title_spilt_1"><span className="style-font">Highlights</span> From Our Blog</h2></div>
          <div className="text-items wow fadeInUp" data-wow-delay=".3s">
            <p>Ideas and perspectives on brand strategy, marketing<br />and communications that drive business growth.</p>
            <Link to="/insights" className="news-btn"><span className="text"><span className="text-default">Explore More <i className="fa-regular fa-arrow-up-right" /></span><span className="text-hover">Explore More <i className="fa-regular fa-arrow-up-right" /></span></span></Link>
          </div>
        </div>
        {insights.length === 0 ? <p role="status">New insights are coming soon.</p> : <div className="row">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="news-left-items">
              <div className="thumb"><img src={insights[0].image} alt={insights[0].title} /><img src={insights[0].image} alt="" /></div>
              <div className="content">
                <ul><li><Link to="/insights">{insights[0].category}</Link></li><li><span>{insights[0].date}</span></li></ul>
                <h3><Link to={`/insights/${insights[0].slug}`}>{insights[0].title}</Link></h3>
                <Link to={`/insights/${insights[0].slug}`} className="link-btn">Read more <i className="fa-solid fa-arrow-up-right" /></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="news-right-list">{insights.slice(1, 3).map((article, index) => <li className="wow fadeInRight" data-wow-delay={index === 0 ? '.3s' : '.5s'} key={article.slug}>
              <div className="news-box-style-4">
                <div className="thumb"><img src={article.image} alt={article.title} /><img src={article.image} alt="" /></div>
                <div className="content">
                  <ul><li><Link to="/insights">{article.category}</Link></li><li><span>{article.date}</span></li></ul>
                  <h3><Link to={`/insights/${article.slug}`}>{article.title}</Link></h3>
                  <Link to={`/insights/${article.slug}`} className="link-btn">Read more <i className="fa-solid fa-arrow-up-right" /></Link>
                </div>
              </div>
            </li>)}</ul>
          </div>
        </div>}
      </div>
    </section>

    <section className="cta-section-3 section-padding pb-0 fix"><div className="container"><div className="cta-wrapper-3"><div className="section-title mb-0"><Label>Let's make a call</Label><h2 className="wa_title_spilt_1"><span className="style-font">Let's </span><span className="img-1"><img src="/assets/img/home-1/cta-image.jpg" alt="" /></span> talk Now.</h2><a className="theme-btn-main style-2 mt-4 wow fadeInUp" data-wow-delay=".3s" href={contact.calendly} target="_blank" rel="noreferrer"><span className="theme-btn-arrow-left"><i className="fa-solid fa-arrow-up-right" /></span><span className="theme-btn">Schedule a Quick Meeting</span><span className="theme-btn-arrow-right"><i className="fa-solid fa-arrow-up-right" /></span></a></div></div></div></section>
  </div>
}
