import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle'
import { brand, faqs } from '../store/site'

export default function FAQ() {
  usePageTitle(`Frequently Asked Questions | ${brand.name}`)
  const [open, setOpen] = useState(0)

  return <>
    <div className="breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('/assets/img/inner-page/bread-line.png')" }}>
      <div className="light-bg"><img src="/assets/img/inner-page/light.png" alt="" /></div>
      <div className="container"><div className="page-heading mb-0">
        <div className="breadcrumb-sub-title"><h1 className="text-white rr_title_anim"><span>Answers for businesses</span> planning their next move.</h1></div>
        <div className="breadcrumb-items"><ul><li>{brand.location}</li><li>(©{brand.founded} — 2026)</li></ul><h2 className="title wa_title_spilt_1">FAQs</h2></div>
      </div></div>
    </div>

    <section className="faq-section fix section-padding"><div className="container"><div className="row g-4 align-items-start">
      <div className="col-lg-5"><div className="faq-image-1 fix wow fadeInUp" data-wow-delay=".3s"><img data-speed=".8" src="/assets/img/inner-page/choose-us.jpeg" alt="Solutions Media team working with a client" /><div className="incrase-box float-bob-y"><span>Growth-focused</span><p>01</p></div></div></div>
      <div className="col-lg-7"><div className="faq-content-1 section-padding pt-0">
        <div className="section-title mb-4"><span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle"><img src="/assets/img/home-1/01.png" alt="" /> About {brand.name}</span><h2 className="wa_title_spilt_1"><span className="style-font">Clear answers.</span> Practical support for your growth.</h2></div>
        <ul className="accordion-box">{faqs.map((item, index) => <li className={`accordion block${open === index ? ' active-block' : ''}`} key={item.question}>
          <button type="button" className={`acc-btn${open === index ? ' active' : ''}`} onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span className="number">{String(index + 1).padStart(2, '0')}.</span>{item.question}<span className="icon fa-solid fa-arrow-down" /></button>
          <div className={`acc-content${open === index ? ' current' : ''}`}><div className="content"><div className="text">{item.answer}</div></div></div>
        </li>)}</ul>
      </div></div>
    </div></div></section>

    <div className="marque-section-2 section-padding pt-0"><div className="marquee">{[0, 1, 2, 3].map(group => <div className="marquee-group" key={group}>{['Strategy', 'Brand', 'Growth', 'Trust'].map(item => <div className="text-2" key={item}><img src="/assets/img/home-1/star2.png" alt="" /> {item}</div>)}</div>)}</div></div>
  </>
}
