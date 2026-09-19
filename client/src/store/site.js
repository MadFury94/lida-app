// ============================================================
// LIDA DIGITAL — CENTRAL SITE DATA STORE
// Static brand and site configuration live here.
// Team, services, projects and blogs come from SiteContent and the backend.
// ============================================================

export const brand = {
  name: 'LIDA',
  fullName: 'Lida Digital Media & Communications Services Ltd.',
  tagline: 'We Help You Earn Trust, Win Customers, and Grow.',
  subTagline: 'Strategy. Execution. Results.',
  // Footer description
  description: 'We Help You Earn Trust, Win Customers, and Grow.',
  descriptionLong: 'Lida is a business growth partner in Nigeria. We work with ambitious businesses, founders and leaders to identify what is holding growth back, strengthen market positioning and build the trust needed to move forward.',
 descriptionLong2: 'Through strategy, branding, marketing, strategic communications and digital experiences, we bring together the right solutions for the challenge at hand. We do not begin with a standard service list; we begin by understanding the opportunity, the audience and the outcome that matters.',
  descriptionTag: 'Strategy First. Execution Always. Results That Matter.',
  location: 'Abuja, Nigeria',
  founded: '2020',
  website: 'www.lida.ng',
  // ── All logo references come from here ──
  logo: '/assets/img/logo/lida-logo.svg',
  logoLight: '/assets/img/logo/lida-logo.svg',
  logoDark: '/assets/img/logo/lida-logo.svg',
  favicon: '/assets/img/logo/Lida Favicon.png',
}

export const aboutPage = {
  eyebrow: 'About Us',
  title: 'We Build Trust That Drives Growth.',
  introduction: `${brand.name} is more than an agency. We are a partner in growth. We help ambitious organizations strengthen their positioning, earn trust, attract customers, and create measurable commercial value through strategy-led execution.`,
  impact: [
    { value: '100+', label: 'Businesses Supported', description: 'Partnering with ambitious organizations across multiple industries to strengthen positioning, build trust, and support commercial growth.' },
    { value: '360°', label: 'Growth Support', description: 'From strategy and positioning to creative execution and customer acquisition, we support businesses at every stage of growth.' },
    { value: '15+', label: 'Industries Served', description: 'Delivering solutions across finance, real estate, technology, engineering, hospitality, manufacturing, professional services, and more.' },
    { value: '10+', label: 'Years of Experience', description: 'A decade of helping businesses solve communication, branding, and market growth challenges through strategy-led execution.' },
  ],
  reasons: [
    {
      title: 'Strategic Thinking, Not Just Execution',
      description: 'We go beyond delivering creative assets. Every recommendation, campaign, and communication strategy is designed to support measurable business objectives, strengthen market positioning, and drive long-term growth.',
    },
    {
      title: 'Creativity With Commercial Purpose',
      description: 'We believe creativity should do more than look good. Our work is intentionally crafted to build trust, increase visibility, influence perception, and create opportunities that contribute to business success.',
    },
    {
      title: 'Industry Insight & Market Understanding',
      description: 'Our experience across real estate, financial services, technology, legal, and emerging industries enables us to develop solutions that are relevant, practical, and aligned with the realities of each market.',
    },
  ],
  closingTitle: 'More Than An Agency. A Partner In Growth.',
}

export const contact = {
  email: 'Projects@lidadigital.com.ng',
  emailCareers: 'careers@lidadigital.com.ng',
  emailAlt: 'lidadigital.ads@gmail.com',
  phone: '+234-807-436-3918',
  phoneHref: 'tel:+2348074363918',
  address: '50, Ebitu Ukiwe Street, Jabi, Abuja, Nigeria',
  addressFull: '50, Ebitu Ukiwe Street, Jabi, Abuja, Federal Capital Territory, Nigeria',
  officeHours: 'Mon – Fri, 9am – 6pm WAT',
  calendly: 'https://calendly.com/lidadigitalagency',
  calendlyDisplay: 'calendly.com/lidadigitalagency',
  mapsUrl: 'https://maps.google.com/?q=50+Ebitu+Ukiwe+Street+Jabi+Abuja+Nigeria',
  videoUrl: 'https://www.youtube.com/watch?v=dDpATH_E1yQ',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4687636040394!2d7.431988814770926!3d9.072594993445607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a856d9b1f17%3A0x4c3a7e4b2b1c9d8e!2s50%20Ebitu%20Ukiwe%20St%2C%20Jabi%2C%20Abuja!5e0!3m2!1sen!2sng!4v1690000000000!5m2!1sen!2sng',
  social: {
    facebook: 'https://facebook.com/lida.nigeria',
    twitter: 'https://twitter.com/lida_nigeria',
    linkedin: 'https://linkedin.com/company/lida-nigeria',
    instagram: 'https://instagram.com/lida_nigeria',
  },
}

// Design tokens — CSS source of truth is src/index.css :root variables.
// Values here are JS references only (e.g. for dynamic inline styles,
// Cloudflare Workers API, or any JS that needs color values).
// If you change a color, update BOTH index.css :root AND here.
export const theme = {
  colors: {
    accent:  '#0000FF',   // --theme
    body:    '#101010',   // --body
    card:    '#272727',   // --bg
    heading: '#ffffff',   // --header
    text:    '#B1B1B1',   // --text
    border:  '#FCFCFC',   // --border
    black:   '#000000',
    white:   '#ffffff',
  },
  fonts: {
    heading: "'Urbanist', sans-serif",
    serif:   "'Instrument Serif', serif",
    body:    "'Urbanist', sans-serif",
  },
}

export const stats = [
  { label: 'Businesses Supported', value: '100', suffix: '+', desc: 'Helping ambitious businesses strengthen their position, build trust and grow with confidence.' },
  { label: 'End-to-End Growth Support', value: '01', suffix: '', desc: 'From strategy and positioning to branding, marketing and execution, we bring the right support together around your goals.' },
  { label: 'Industries Served', value: '15', suffix: '+', desc: 'Experience across finance, real estate, technology, engineering, hospitality, professional services and more.' },
  { label: 'Years of Experience', value: '10', suffix: '+', desc: 'Over a decade of helping businesses communicate clearly, reach the right people and create stronger market opportunities.' },
]




export const testimonials = [
  {
    slug: 'peter-a',
    name: 'Peter A.',
    role: 'CEO, Duxbank',
    quote: 'Working with LIDA has been a strategic investment in our growth. Beyond developing a brand identity that reflects our vision, their team brought clarity, structure, and commercial insight to how our business is positioned. Their ability to combine strategy with execution has strengthened our confidence as we continue to grow.',
  },
  {
    slug: 'oye-e',
    name: 'Oye E.',
    role: 'CEO, Voda Beach Club',
    quote: 'LIDA has become an extension of our team. Their strategic approach to content, brand positioning, and audience engagement has consistently strengthened our visibility while maintaining the premium image we wanted to build. They do not simply create content. They create experiences that connect with people and support business growth.',
  },
  {
    slug: 'bari-m',
    name: 'Bari M.',
    role: 'MD, Nuts & Bolts',
    quote: 'Our engagement with LIDA transformed the way our business is perceived. They helped us build a stronger brand identity, improve how we communicate our value, and position the business with greater credibility. Their strategic thinking and attention to detail made a measurable difference in how we present ourselves to customers and partners.',
  },
  {
    slug: 'abdul-m',
    name: 'Abdul M.',
    role: 'CEO, Reservoir Energy',
    quote: 'Working with Lida gave Reservoir a clearer approach to how we communicate our value and engage the market. Their team combines strategic thinking with practical execution, helping us sharpen our message, strengthen our visibility and position the business for stronger opportunities.',
  },
]

export const faqs = [
  {
    question: 'What markets does Lida Digital specialize in?',
    answer: 'We specialize in Nigeria and emerging African markets. Nigeria is our primary base and serves as a strategic gateway to West Africa. We also support clients expanding across Sub-Saharan Africa and have delivered campaigns reaching clients in Asia, North America, and Europe.',
  },
  {
    question: 'What is the minimum engagement budget?',
    answer: 'Lida typically engages with international organizations investing a minimum market entry and growth budget of $50,000 USD. This threshold enables meaningful execution of market entry, positioning, communications, stakeholder engagement, and business development initiatives capable of delivering measurable impact.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work across Real Estate & Construction, FMCG & Consumer Goods, Finance, Investment & Blockchain, Legal Services & Consulting, and Oil, Gas & Renewable Energy. Our cross-industry experience allows us to bring fresh perspectives while understanding sector-specific communication needs.',
  },
  {
    question: 'How do you approach market entry for international companies?',
    answer: 'We start with a deep understanding of your target market — local business environment, consumer behavior, regulatory landscape, and competitive dynamics. We then develop a tailored positioning and communications strategy, execute with precision, and track measurable outcomes aligned with your growth objectives.',
  },
  {
    question: 'Can you handle both strategy and execution?',
    answer: 'Yes. We are a full-service consultancy. We develop strategy and execute it — from brand identity and campaign creative to media buying, PR, and digital management. We act as an in-market strategic partner, not just an advisory firm.',
  },
  {
    question: 'How do I start working with Lida Digital?',
    answer: 'Book a strategic consultation via our Calendly link or reach out directly by email or phone. We will discuss your market entry, positioning, communications, and growth objectives, and outline how we can support your goals within Nigeria and Africa.',
  },
  {
    question: 'Do you work with local Nigerian businesses as well?',
    answer: 'Yes. While we focus heavily on helping international companies enter African markets, we also work with ambitious local and regional businesses seeking to elevate their brand, improve market positioning, and scale their communications and marketing operations.',
  },
  {
    question: 'What does a typical engagement look like?',
    answer: 'Engagements typically begin with a brand and market audit, followed by strategy development, creative execution, and campaign management. We provide regular reporting and are deeply involved in execution — not just recommendations. The scope and duration depend on your objectives and budget.',
  },
]

export const industries = [
  { name: 'Real Estate & Construction', icon: 'fa-solid fa-building', score: '99%' },
  { name: 'FMCG & Consumer Goods', icon: 'fa-solid fa-basket-shopping', score: '98%' },
  { name: 'Finance, Banking & Blockchain', icon: 'fa-solid fa-landmark', score: '93%' },
  { name: 'Legal & Business Consulting', icon: 'fa-solid fa-scale-balanced', score: '90%' },
  { name: 'Oil, Gas & Renewable Energy', icon: 'fa-solid fa-bolt', score: '98%' },
]

export const partners = [
  { name: 'Client 33', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-33.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-34.png' },
  { name: 'Client 35', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-35.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-36.png' },
  { name: 'Client 37', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-37.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-38.png' },
  { name: 'Client 39', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-39.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-40.png' },
  { name: 'Client 41', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-41.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-42.png' },
  { name: 'Client 43', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-43.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-44.png' },
  { name: 'Client 45', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-45.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-46.png' },
  { name: 'Client 47', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-47.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-48.png' },
  { name: 'Client 49', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-49.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-50.png' },
  { name: 'Client 51', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-51.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-52.png' },
  { name: 'Client 53', logo: '/assets/img/home-1/Lida Client Logos (Monochromatic)-53.png', logoHover: '/assets/img/home-1/Lida Client Logos (Monochromatic)-54.png' },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    // Service links are rendered from useSiteContent in Header and Footer.
  },
  {
    label: 'Work',
    to: '/work',
    children: [
      { label: 'Case Studies', to: '/work' },
      { label: 'Industries', to: '/about#industries' },
    ],
  },
  { label: 'Team', to: '/team' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]



export const careerPaths = [
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

export const caseStudies = [
  {
    slug: 'duxbank',
    client: 'Duxbank Microfinance Bank',
    sector: 'Financial Services',
    tags: ['Finance', 'Branding', 'Identity'],
    challenge: 'Launching a new financial institution in a highly competitive market while establishing credibility and differentiation from day one.',
    solution: 'Refined the bank\'s brand identity, enhanced its logo system, and developed high-impact outdoor campaign creatives for market introduction and long-term positioning.',
    impact: 'Working with LIDA has been a strategic investment in our growth. Beyond developing a brand identity that reflects our vision, their team brought clarity, structure, and commercial insight to how our business is positioned.',
    clientName: 'Peter A.',
    clientRole: 'CEO, Duxbank Microfinance Bank',
    year: '2024',
    stats: [
      { label: 'Sector', value: 'Fintech' },
      { label: 'Deliverable', value: 'Full Identity' },
      { label: 'Market', value: 'Nigeria' },
    ],
    image: '/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service-15.jpeg',
    thumb: '/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service-15.jpeg',
  },
  {
    slug: 'calpak-nigeria',
    client: 'Calpak Nigeria',
    sector: 'Energy',
    tags: ['Energy', 'Digital', 'Market Entry'],
    challenge: 'Introducing an internationally recognized energy solutions brand into the Nigerian market while building awareness, trust, and local relevance.',
    solution: 'Developed and managed Calpak Nigeria\'s digital presence, executed targeted advertising campaigns, and produced locally optimized marketing materials.',
    impact: '25.9M campaign impressions. Sales grew from 50–100 units per month to 350+ units per month by Month 3.',
    year: '2023',
    stats: [
      { label: 'Campaign Impressions', value: '25.9M' },
      { label: 'Sales Growth', value: '35x' },
      { label: 'Market', value: 'Nigeria' },
    ],
    image: '/assets/img/inner-page/project-details.jpg',
    thumb: '/assets/img/inner-page/project-details.jpg',
  },
  {
    slug: 'nuts-and-bolts',
    client: 'Nuts & Bolts Automotive',
    sector: 'Automotive',
    tags: ['Automotive', 'Repositioning', 'Premium'],
    challenge: 'Move beyond the perception of a typical automotive workshop and establish a premium maintenance and vehicle care brand.',
    solution: 'Comprehensive brand repositioning — rebranding strategy, premium marketing materials, professional photography, and customer-facing assets.',
    impact: 'Transformed business perception with stronger brand identity, improved value communication, and enhanced credibility.',
    clientName: 'M. Bari',
    clientRole: 'MD, Nuts & Bolts Automotive',
    year: '2023',
    stats: [
      { label: 'Sector', value: 'Automotive' },
      { label: 'Type', value: 'Repositioning' },
      { label: 'Market', value: 'Abuja' },
    ],
    image: '/assets/img/inner-page/project-details-2.jpg',
    thumb: '/assets/img/inner-page/project-details-2.jpg',
  },
  {
    slug: 'savvytech-manitowoc',
    client: 'Savvytech / Manitowoc',
    sector: 'Industrial B2B',
    tags: ['B2B', 'Industrial', 'Digital Marketing'],
    challenge: 'Increase awareness and engagement for globally recognized crane brands within Nigeria\'s industrial and construction sectors.',
    solution: 'Targeted digital marketing campaigns, product communications, creative development, and audience-focused advertising.',
    impact: '50,000+ industry professionals reached, 2.5M+ campaign impressions, 180% growth in social engagement.',
    year: '2024',
    stats: [
      { label: 'Professionals Reached', value: '50K+' },
      { label: 'Impressions', value: '2.5M+' },
      { label: 'Social Growth', value: '+180%' },
    ],
    image: '/assets/img/inner-page/project-details-3.jpg',
    thumb: '/assets/img/inner-page/project-details-3.jpg',
  },
]

export const copyrightYear = '2022'
