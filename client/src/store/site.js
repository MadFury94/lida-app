// ============================================================
// LIDA DIGITAL — CENTRAL SITE DATA STORE
// All content, colors, config live here.
// Will be consumed by React components AND synced to
// Cloudflare Workers KV / D1 via the backend API later.
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
  favicon: '/assets/img/favicon.svg',
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
  email: 'hello@lidadigital.com.ng',
  emailAlt: 'lidadigital.ads@gmail.com',
  phone: '+234-807-436-3918',
  phoneHref: 'tel:+2348074363918',
  address: 'Abuja, Nigeria',
  calendly: 'https://calendly.com/lidadigitalagency',
  social: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
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

export const services = [
  {
    slug: 'market-entry',
    number: '001.',
    title: 'Market Entry & Localization',
    shortTitle: 'Market Entry',
    icon: 'fa-solid fa-globe-africa',
    summary: 'Supporting international businesses with market positioning, local market adaptation, audience engagement, and communication strategies tailored to African markets.',
    detail: `We help international companies successfully establish, position, and grow within Nigeria and emerging African markets. Combining local market insight, strategic communications, brand development, stakeholder engagement, and growth-focused marketing, we support organizations seeking to strengthen market presence, build credibility, and accelerate business opportunities across the region.`,
    includes: ['Market positioning strategy', 'Local audience adaptation', 'Stakeholder engagement planning', 'Regulatory & cultural navigation', 'Launch communications'],
  },
  {
    slug: 'corporate-positioning',
    number: '002.',
    title: 'Corporate Positioning & Communications',
    shortTitle: 'Corporate Positioning',
    icon: 'fa-solid fa-bullseye',
    summary: 'Helping organizations strengthen market credibility, communicate effectively with stakeholders, and establish a strong corporate presence in new and existing markets.',
    detail: `We develop and execute corporate communications strategies that build trust and establish authority. From messaging frameworks to executive communications and investor relations support, we ensure your organization speaks with clarity and confidence across all stakeholder touchpoints.`,
    includes: ['Corporate messaging frameworks', 'Stakeholder communications', 'Executive positioning', 'Investor & media relations', 'Annual report & brand voice'],
  },
  {
    slug: 'brand-strategy',
    number: '003.',
    title: 'Brand Strategy & Development',
    shortTitle: 'Brand Strategy',
    icon: 'fa-solid fa-lightbulb',
    summary: 'Building differentiated brands through strategic positioning, identity systems, messaging frameworks, and customer experience alignment.',
    detail: `We create brands that attract clients and command trust. Our brand strategy process uncovers your core differentiators, defines your market position, and translates it into a coherent visual and verbal identity system that resonates with your target audience across every channel.`,
    includes: ['Brand audit & strategy', 'Visual identity systems', 'Messaging & tone of voice', 'Brand guidelines', 'Customer experience alignment'],
  },
  {
    slug: 'marketing-growth',
    number: '004.',
    title: 'Marketing & Business Growth',
    shortTitle: 'Marketing & Growth',
    icon: 'fa-solid fa-chart-line',
    summary: 'Developing integrated marketing and communication strategies that increase visibility, generate engagement, and support business development objectives.',
    detail: `We design and execute marketing programs that deliver measurable results. From campaign strategy and creative development to media planning and performance tracking, our marketing solutions are built around your growth objectives and the realities of African markets.`,
    includes: ['Integrated campaign strategy', 'Creative development', 'Media planning & buying', 'Performance tracking', 'Business development support'],
  },
  {
    slug: 'public-relations',
    number: '005.',
    title: 'Public Relations & Reputation',
    shortTitle: 'Public Relations',
    icon: 'fa-solid fa-newspaper',
    summary: 'Building and protecting brand reputation through strategic PR, media engagement, and stakeholder communications.',
    detail: `We manage your public narrative with precision. Our PR approach builds proactive media relationships, positions your leadership as industry voices, and ensures your organization is prepared to respond effectively to opportunities and challenges in the market.`,
    includes: ['Media relations & pitching', 'Press release development', 'Crisis communications', 'Thought leadership', 'Event & launch PR'],
  },
  {
    slug: 'digital-presence',
    number: '006.',
    title: 'Digital Presence & Engagement',
    shortTitle: 'Digital Presence',
    icon: 'fa-solid fa-mobile-screen',
    summary: 'Driving digital visibility and audience engagement across channels for measurable market impact.',
    detail: `We build and manage digital presences that work hard for your business. From website strategy and social media management to digital advertising and content production, we ensure your brand is visible, credible, and engaging across the platforms your audience uses most.`,
    includes: ['Social media strategy & management', 'Digital advertising campaigns', 'Content production', 'Website strategy & oversight', 'Analytics & reporting'],
  },
]

export const caseStudies = [
  {
    slug: 'calpak-nigeria',
    client: 'Calpak Nigeria',
    sector: 'Energy',
    tags: ['Energy', 'Digital', 'Market Entry'],
    challenge: 'Introducing an internationally recognized energy solutions brand into the Nigerian market while building awareness, trust, and local relevance.',
    solution: 'Developed and managed Calpak Nigeria\'s digital presence, executed targeted advertising campaigns, and produced locally optimized marketing materials and events.',
    impact: '25.9 million cumulative campaign impressions. Sales grew from 50–100 units/month at campaign start to 3,500+ units/month by Month 3.',
    stats: [
      { label: 'Campaign Impressions', value: '25.9M' },
      { label: 'Sales Growth', value: '35x' },
      { label: 'Market', value: 'Nigeria' },
    ],
    image: '/assets/img/home-1/project-01.jpg',
    thumb: '/assets/img/home-1/projecr-01.jpg',
  },
  {
    slug: 'duxbank',
    client: 'Duxbank Microfinance Bank',
    sector: 'Financial Services',
    tags: ['Finance', 'Branding', 'Identity'],
    challenge: 'Launching a new financial institution in a highly competitive market while establishing credibility and differentiation from day one.',
    solution: 'Refined the bank\'s brand identity, enhanced its logo system, and developed high-impact outdoor campaign creatives for market introduction and long-term positioning.',
    impact: 'Stronger market presence and a modern, credible brand identity that set Duxbank apart in Nigeria\'s competitive financial services sector from launch.',
    stats: [
      { label: 'Sector', value: 'Fintech' },
      { label: 'Deliverable', value: 'Full Identity' },
      { label: 'Market', value: 'Nigeria' },
    ],
    image: '/assets/img/home-1/project-02.jpg',
    thumb: '/assets/img/home-1/projecr-02.jpg',
  },
  {
    slug: 'nuts-and-bolts',
    client: 'Nuts & Bolts Automotive',
    sector: 'Automotive',
    tags: ['Automotive', 'Repositioning', 'Premium Brand'],
    challenge: 'Move beyond the perception of a typical automotive workshop and establish a premium maintenance and vehicle care brand commanding greater trust and value.',
    solution: 'Comprehensive brand repositioning — rebranding strategy, premium marketing materials, professional industrial photography, branded staff apparel, and customer-facing assets.',
    impact: 'Stronger professional market presence, improved customer perception, and a brand identity aligned with premium service aspirations across Abuja\'s automotive market.',
    stats: [
      { label: 'Sector', value: 'Automotive' },
      { label: 'Type', value: 'Repositioning' },
      { label: 'Market', value: 'Abuja' },
    ],
    image: '/assets/img/home-1/project-03.jpg',
    thumb: '/assets/img/home-1/projecr-03.jpg',
  },
  {
    slug: 'manitowoc-savvytech',
    client: 'Manitowoc / Savvytech',
    sector: 'Industrial B2B',
    tags: ['B2B', 'Industrial', 'Market Visibility'],
    challenge: 'Increase awareness and engagement for globally recognized crane brands (Potain, Grove, National Crane, Manitowoc) within Nigeria\'s industrial and construction sectors.',
    solution: 'Targeted digital marketing campaigns, product communications, creative development, and audience-focused advertising reaching specialized B2B decision makers.',
    impact: '50,000+ targeted industry professionals reached. 2.5M+ campaign impressions. 180% increase in social media engagement. 120% improvement in website traffic.',
    stats: [
      { label: 'Professionals Reached', value: '50K+' },
      { label: 'Impressions', value: '2.5M+' },
      { label: 'Social Engagement', value: '+180%' },
    ],
    image: '/assets/img/home-1/project-04.jpg',
    thumb: '/assets/img/home-1/projecr-04.jpg',
  },
]

export const team = [
  {
    slug: 'leroy-iwu',
    name: 'Leroy Iwu',
    role: 'Founder & Creative Director',
    bio: 'Leroy Iwu is the Founder and Creative Director of Lida Digital Media & Communications Services Ltd. He specializes in brand strategy, corporate communications, and market positioning, helping organizations strengthen visibility, build trust, and accelerate growth. His experience spans real estate, financial services, technology, and emerging industries across Africa.',
    image: '/assets/img/inner-page/team-1.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    slug: 'omua-williams-ogoke',
    name: 'Omua Williams-Ogoke',
    role: 'Lead, Brand Management',
    bio: 'Omua Williams-Ogoke is a strategic brand and marketing professional with expertise in brand management, content strategy, and audience engagement. She has supported the development and execution of integrated marketing and communications initiatives across multiple industries, helping brands strengthen market presence and achieve measurable business outcomes.',
    image: '/assets/img/inner-page/team-2.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    slug: 'fortune-ugwuala',
    name: 'Fortune Ugwuala',
    role: 'Lead, Operations & Growth',
    bio: 'Fortune Ugwuala oversees operations, project delivery, and organizational efficiency at Lida. She plays a critical role in ensuring the successful execution of client engagements, coordinating teams, processes, and resources to deliver projects on time and to standard. Her expertise in operations management and business process optimization translates strategy into effective execution.',
    image: '/assets/img/inner-page/team-3.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
]

export const testimonials = [
  {
    name: 'Peter A.',
    role: 'CEO, Duxbank',
    quote: 'Working with LIDA has been a strategic investment in our growth. Beyond developing a brand identity that reflects our vision, their team brought clarity, structure, and commercial insight to how our business is positioned. Their ability to combine strategy with execution has strengthened our confidence as we continue to grow.',
  },
  {
    name: 'Oye E.',
    role: 'CEO, Voda Beach Club',
    quote: 'LIDA has become an extension of our team. Their strategic approach to content, brand positioning, and audience engagement has consistently strengthened our visibility while maintaining the premium image we wanted to build. They do not simply create content. They create experiences that connect with people and support business growth.',
  },
  {
    name: 'Bari M.',
    role: 'MD, Nuts & Bolts',
    quote: 'Our engagement with LIDA transformed the way our business is perceived. They helped us build a stronger brand identity, improve how we communicate our value, and position the business with greater credibility. Their strategic thinking and attention to detail made a measurable difference in how we present ourselves to customers and partners.',
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
    children: services.map(s => ({ label: s.shortTitle, to: `/services/${s.slug}` })),
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
