// ============================================================
// SOLUTION MEDIA GLOBAL — CENTRAL SITE DATA STORE
// All content, colors, config live here.
// ============================================================

export const brand = {
  name: 'Solution Media',
  fullName: 'Solution Media Global Ltd.',
  tagline: 'Building Reputations. Driving Results. Telling Your Story.',
  subTagline: 'Digital Communications. Brand Solutions. Reputation Management.',
  description: 'Building Reputations. Driving Results. Telling Your Story.',
  descriptionLong: 'Solution Media Global Ltd is a 21st century New Media Limited Liability Company registered in Nigeria. We focus on driving results through effective and measurable media solutions that take brands beyond their present boundaries.',
  descriptionLong2: 'We are a team of full-fledged Digital Media Narrators, Thinkers, and Strategists with one of the largest networks of Social Media Influencers across Africa, the Middle East, Europe, and North America. We partner with our clients to develop their marketing plans and set up winning strategies to generate and convert leads.',
  descriptionTag: 'African Context. Global Standards. Measurable Results.',
  location: 'Abuja, Nigeria',
  founded: '2015',
  website: 'www.solutionmediaglobal.com.ng',
  logo: '/assets/img/logo/sm-logo.svg',
  logoLight: '/assets/img/logo/sm-logo.svg',
  logoDark: '/assets/img/logo/sm-logo.svg',
  favicon: '/assets/img/favicon.svg',
}

export const aboutPage = {
  eyebrow: 'About Us',
  title: 'Building Reputations. Driving Results. Telling Your Story.',
  introduction: 'Solution Media Global Ltd is a 21st century New Media company focused on driving results through effective and measurable media solutions. We are a team of Digital Media Narrators, Thinkers, and Strategists with one of the largest networks of Social Media Influencers across Africa, the Middle East, Europe, and North America.',
  impact: [
    { value: '100+', label: 'Clients Served', description: 'Across diverse industries worldwide, delivering consistent and measurable results.' },
    { value: '98%', label: 'Client Retention', description: 'A testament to the quality, consistency, and commercial value of our work.' },
    { value: '25+', label: 'Core Services', description: 'Specialized media, communications, and digital services tailored to every need.' },
    { value: '4', label: 'Global Offices', description: 'Operating from Abuja, Lagos, Manchester, and Dubai.' },
  ],
  reasons: [
    {
      title: 'Results-First Philosophy',
      description: 'Every strategy is designed with measurable outcomes at its core. We define success by your KPIs, not ours.',
    },
    {
      title: 'African Context, Global Standards',
      description: 'We blend international best practices with deep local market intelligence, making our solutions both globally competitive and locally relevant.',
    },
    {
      title: 'Integrated Service Delivery',
      description: 'Our services work in harmony. Reputation, content, SEO, social, and PR function as one cohesive system.',
    },
  ],
  closingTitle: 'We Don\'t Just Tell Your Story. We Make The World Listen.',
}

export const contact = {
  email: 'hello@solutionmediaglobal.com.ng',
  emailAlt: 'hello@solutionmediaglobal.com.ng',
  phone: '+234 (0)70 3435 7040',
  phoneHref: 'tel:+2347034357040',
  address: 'Plot 246, Adebayo Adedeji Crescent, Utako, Abuja, Nigeria',
  calendly: 'https://calendly.com/solutionmediaglobal',
  videoUrl: 'https://www.youtube.com/watch?v=dDpATH_E1yQ',
  social: {
    facebook: 'https://facebook.com/solutionmedia06',
    twitter: 'https://twitter.com/solutionmedia06',
    linkedin: '#',
    instagram: 'https://instagram.com/solutionmedia06',
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
  { label: 'Clients Served', value: '100', suffix: '+', desc: 'Across diverse industries worldwide.' },
  { label: 'Client Retention', value: '98', suffix: '%', desc: 'A testament to consistent results.' },
  { label: 'Core Services', value: '25', suffix: '+', desc: 'Specialized media & communications.' },
  { label: 'Global Offices', value: '4', suffix: '', desc: 'Nigeria, UK & UAE.' },
]

export const services = [
  {
    slug: 'reputation-management',
    number: '001.',
    title: 'Reputation Management',
    shortTitle: 'Reputation Management',
    icon: 'fa-solid fa-shield-halved',
    summary: 'Social listening, SEO repair, PR campaigns, and crisis response to protect and elevate your brand image.',
    detail: 'Protecting and elevating your brand narrative in a digital-first world. We monitor brand mentions continuously, suppress negative content, amplify positive narratives, and deploy swift crisis response protocols.',
    includes: ['Brand monitoring', 'SEO reputation repair', 'Crisis communication', 'Influencer collaboration', 'Monthly reputation audits'],
  },
  {
    slug: 'brand-media-consultancy',
    number: '002.',
    title: 'Brand & Media Consultancy',
    shortTitle: 'Brand & Media',
    icon: 'fa-solid fa-bullseye',
    summary: 'Logos, brand guidelines, strategic brand voice, messaging, and multi-channel communications planning.',
    detail: 'We craft distinctive brand identities and compelling content that resonates and converts. From custom logos and brand guidelines to narrative-driven content strategies and influencer partnerships.',
    includes: ['Corporate identity design', 'Brand audit & strategy', 'Influencer marketing', 'Video production', 'Copywriting services'],
  },
  {
    slug: 'digital-marketing',
    number: '003.',
    title: 'Digital Marketing & Social Media',
    shortTitle: 'Digital Marketing',
    icon: 'fa-solid fa-chart-line',
    summary: 'Data-driven campaigns across social media, SEO, Google Ads, email marketing, and analytics platforms.',
    detail: 'We run data-driven campaigns that grow your audience, generate leads, and drive measurable ROI across Facebook, Instagram, LinkedIn, TikTok, Google Ads, and email marketing.',
    includes: ['Social media marketing', 'Google & Meta Ads', 'Email campaigns', 'A/B testing & analytics', 'Conversion optimisation'],
  },
  {
    slug: 'social-media-management',
    number: '004.',
    title: 'Social Media Management',
    shortTitle: 'Social Media',
    icon: 'fa-solid fa-mobile-screen',
    summary: 'Always-on social presence that builds community, drives engagement, and protects your brand voice.',
    detail: 'We plan, create, publish, and analyse your social media presence end-to-end. Monthly content calendars, scroll-stopping graphics, consistent daily posting, and in-depth analytics reporting.',
    includes: ['Monthly content calendars', 'Graphic & video creation', 'Daily posting', 'Community management', 'Performance reporting'],
  },
  {
    slug: 'web-seo',
    number: '005.',
    title: 'Web & SEO Solutions',
    shortTitle: 'Web & SEO',
    icon: 'fa-solid fa-globe',
    summary: 'Website design and development, e-commerce, on-page and off-page SEO, and media engagement.',
    detail: 'We build and optimise digital presences that work. Mobile-optimised websites, e-commerce setup, on-page SEO, link building, local SEO, and Google Business Profile optimisation.',
    includes: ['Website design & development', 'e-Commerce setup', 'On-page & off-page SEO', 'Google Business Profile', 'Monthly SEO reports'],
  },
  {
    slug: 'events-activations',
    number: '006.',
    title: 'Events & Activations',
    shortTitle: 'Events & Activations',
    icon: 'fa-solid fa-calendar-star',
    summary: 'Product launches, award shows, trade shows, seminars, and gala dinners.',
    detail: 'We plan and deliver brand events and activations that create real impact. From product launches and corporate events to trade shows, award shows, and gala dinners with full media coverage.',
    includes: ['Event strategy & concept', 'Product launch management', 'Award & gala coordination', 'Media coverage', 'Post-event communications'],
  },
  {
    slug: 'content-production',
    number: '007.',
    title: 'Content & Production',
    shortTitle: 'Content & Production',
    icon: 'fa-solid fa-pen-nib',
    summary: 'Radio, TV, film production, press releases, and editorial content.',
    detail: 'We produce content that commands attention. Radio and TV placements, high-quality advertising films, press releases, editorial features, and branded storytelling across every format.',
    includes: ['Radio & TV content', 'Film & video production', 'Press release writing', 'Editorial content', 'Branded storytelling'],
  },
  {
    slug: 'media-relations',
    number: '008.',
    title: 'Media Relations & Publicity',
    shortTitle: 'Media Relations',
    icon: 'fa-solid fa-newspaper',
    summary: 'Strategic media outreach, press conference planning, spokesperson coaching, and crisis communications.',
    detail: 'We manage your media relationships with precision across print, broadcast, and digital platforms locally and internationally — from press release distribution to crisis response.',
    includes: ['Media outreach & placement', 'Spokesperson coaching', 'Press conference management', 'Crisis communications', 'Media monitoring'],
  },
  {
    slug: 'political-campaign',
    number: '009.',
    title: 'Political Campaign',
    shortTitle: 'Political Campaign',
    icon: 'fa-solid fa-landmark',
    summary: 'Comprehensive political communications, media strategy, and campaign management.',
    detail: 'We provide strategic communications support for political campaigns and public figures — from campaign messaging and media strategy to voter engagement, reputation management, and crisis response.',
    includes: ['Campaign messaging & strategy', 'Voter engagement', 'Media relations', 'Reputation management', 'Crisis response'],
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
    impact: '25.9M campaign impressions. Sales grew from 50–100 units per month at campaign start, to 350+ units per month by Month 3.',
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
    impact: 'Working with LIDA has been a strategic investment in our growth. Beyond developing a brand identity that reflects our vision, their team brought clarity, structure, and commercial insight to how our business is positioned. Their ability to combine strategy with execution has strengthened our confidence as we continue to grow.',
    clientName: 'Peter A.',
    clientRole: 'CEO, Duxbank Microfinance Bank',
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
    impact: 'Our engagement with LIDA transformed the way our business is perceived. They helped us build a stronger brand identity, improve how we communicate our value, and position the business with greater credibility. Their strategic thinking and attention to detail made a measurable difference in how we present ourselves to customers and partners.',
    clientName: 'M. Bari',
    clientRole: 'MD, Nuts & Bolts Automotive',
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
    client: 'Savvytech / Manitowoc',
    sector: 'Industrial B2B',
    tags: ['B2B', 'Industrial', 'Market Visibility'],
    challenge: 'Increase awareness and engagement for globally recognized crane brands within Nigeria\'s industrial and construction sectors.',
    solution: 'Targeted digital marketing campaigns, product communications, creative development, and audience-focused advertising reaching specialized B2B decision makers.',
    impact: '50,000+ targeted industry professionals reached, 2.5M+ campaign impressions, 180% growth in social media engagement and 120% improvement in website traffic.',
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
    slug: 'godspower-oshodin',
    name: 'Dr. Godspower Oshodin',
    role: 'Founder & CEO',
    bio: 'Dr. Godspower Oshodin is a multi-award-winning media entrepreneur, author, filmmaker, journalist, and social commentator. President of the Nigeria Bloggers Forum (NBF) and Chairman of Solution Media Global Ltd, he directed the internationally recognized anti-rape short film "Tears for Enebi" and co-authored the Global Seal of Integrity, whose recipients have included former US Presidents Bill Clinton and Barack Obama.',
    image: '/assets/img/inner-page/team-1.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    slug: 'joshua-emmanuel',
    name: 'Joshua O. Emmanuel',
    role: 'Executive Director',
    bio: 'Joshua O. Emmanuel serves as Executive Director of Solution Media Global Ltd, overseeing strategic operations and business development across the company\'s offices in Nigeria, the UK, and the UAE.',
    image: '/assets/img/inner-page/team-2.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    slug: 'samantha-ncube',
    name: 'Samantha Ncube',
    role: 'International Consultant',
    bio: 'Samantha Ncube is an International Consultant at Solution Media Global Ltd, supporting the company\'s global expansion and cross-border client engagements across Africa, Europe, and the Middle East.',
    image: '/assets/img/inner-page/team-3.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    slug: 'rahmah-zakareeyah',
    name: 'Rahmah Zakareeyah',
    role: 'Head of Human Resources',
    bio: 'Rahmah Zakareeyah leads human resources at Solution Media Global Ltd, building and developing the team that delivers the company\'s media, communications, and digital services to clients across industries.',
    image: '/assets/img/inner-page/team-4.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
  {
    slug: 'peter-atigogo',
    name: 'Peter Atigogo',
    role: 'Marketing Consultant',
    bio: 'Peter Atigogo is a Marketing Consultant at Solution Media Global Ltd, developing and executing marketing strategies that help clients build visibility, generate leads, and achieve measurable commercial outcomes.',
    image: '/assets/img/inner-page/team-5.jpg',
    social: { linkedin: '#', twitter: '#' },
  },
]

export const testimonials = [
  {
    slug: 'client-1',
    name: 'Client',
    role: 'CEO',
    quote: 'Solution Media Global transformed how we communicate our brand. Their strategic approach to reputation management and digital marketing delivered real, measurable results for our business.',
  },
  {
    slug: 'client-2',
    name: 'Client',
    role: 'Director',
    quote: 'The team at Solution Media brought clarity, creativity, and commercial thinking to our campaigns. They do not just deliver content — they deliver outcomes.',
  },
  {
    slug: 'client-3',
    name: 'Client',
    role: 'MD',
    quote: 'Working with Solution Media gave us a stronger market presence from day one. Their integrated approach across social media, PR, and digital marketing made the difference.',
  },
  {
    slug: 'client-4',
    name: 'Client',
    role: 'Founder',
    quote: 'Solution Media understands both the Nigerian market and global standards. Their ability to combine local insight with international execution sets them apart.',
  },
]

export const faqs = [
  {
    question: 'What services does Solution Media Global provide?',
    answer: 'We offer a comprehensive range of media and communications services including Reputation Management, Brand & Media Consultancy, Digital Marketing & Social Media, Social Media Management, Web & SEO Solutions, Events & Activations, Content & Production, Media Relations & Publicity, and Political Campaign management.',
  },
  {
    question: 'Where does Solution Media Global operate?',
    answer: 'We operate from offices in Abuja, Lagos, Manchester, and Dubai, allowing us to serve clients locally in Nigeria and internationally across Africa, Europe, and the Middle East.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We serve clients across Technology, Healthcare, Real Estate, Government, Entertainment, and Professional Services. Our cross-industry experience enables us to develop solutions that are relevant to each sector\'s specific communication needs.',
  },
  {
    question: 'How do you approach reputation management?',
    answer: 'We use continuous social listening, SEO repair to suppress negative content, strategic PR campaigns, crisis communication frameworks, and influencer collaborations to protect and elevate your brand narrative. We provide monthly reputation audits and transparent reporting throughout.',
  },
  {
    question: 'Can you manage our social media end-to-end?',
    answer: 'Yes. We handle everything from monthly content calendars and platform strategy to daily posting, community management, analytics reporting, and crisis response. We create all content — graphics, videos, and captions — tailored to your brand voice.',
  },
  {
    question: 'Do you work with political clients?',
    answer: 'Yes. We provide comprehensive political communications support including campaign messaging and strategy, voter engagement communications, media relations, reputation management, and crisis response planning throughout the campaign cycle.',
  },
  {
    question: 'How do I start working with Solution Media Global?',
    answer: 'Reach out to us by email at hello@solutionmediaglobal.com.ng or call +234 (0)70 3435 7040. You can also visit us at our Abuja office at Plot 246, Adebayo Adedeji Crescent, Utako. We will discuss your goals and outline how we can support your brand.',
  },
  {
    question: 'What makes Solution Media Global different?',
    answer: 'We combine African context with global standards. Our integrated service delivery means reputation, content, SEO, social, and PR work as one cohesive system. We operate with a results-first philosophy — defining success by your KPIs — and provide transparent reporting with no hidden fees.',
  },
]

export const industries = [
  { name: 'Technology', icon: 'fa-solid fa-microchip', score: '98%' },
  { name: 'Healthcare', icon: 'fa-solid fa-heart-pulse', score: '96%' },
  { name: 'Real Estate', icon: 'fa-solid fa-building', score: '99%' },
  { name: 'Government & Public Sector', icon: 'fa-solid fa-landmark', score: '95%' },
  { name: 'Entertainment', icon: 'fa-solid fa-clapperboard', score: '97%' },
  { name: 'Professional Services', icon: 'fa-solid fa-briefcase', score: '98%' },
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

export const insights = [
  {
    slug: 'why-brand-positioning-matters-in-africa',
    title: 'Why Brand Positioning Matters More Than Ever in African Markets',
    category: 'Brand Strategy',
    date: 'July 2026',
    readTime: '5 min read',
    excerpt: 'In a crowded, fast-moving market, the businesses that win are not always the most capable — they are the most clearly positioned. Here is why positioning is the foundation of every growth strategy.',
    body: `Brand positioning is the process of defining how your business is perceived in the minds of your target audience relative to your competitors. In African markets — where consumer trust is hard-earned, word of mouth is powerful, and differentiation is often unclear — getting your positioning right is not a nice-to-have. It is the foundation.

Many businesses in Nigeria and across Africa compete on price because they have not yet defined what makes them worth paying for. They have great products and capable teams, but the market does not fully understand who they are, who they serve, or why they are the right choice.

Strong positioning answers three questions clearly: Who are you for? What problem do you solve? Why should someone choose you over the alternatives? When these questions are answered with precision and communicated consistently, the business becomes easier to trust, easier to recommend, and easier to buy from.

The businesses that grow fastest are not always the cheapest or the most technically advanced. They are the ones the market trusts and understands. Positioning is how you build that trust at scale.`,
    image: '/assets/img/home-1/news-01.jpg',
    author: 'Leroy Iwu',
    authorRole: 'Founder & Creative Director',
  },
  {
    slug: 'market-entry-nigeria-what-international-brands-get-wrong',
    title: 'Market Entry in Nigeria: What International Brands Get Wrong',
    category: 'Market Entry',
    date: 'June 2026',
    readTime: '6 min read',
    excerpt: 'Nigeria is Africa\'s largest economy and one of the most dynamic consumer markets in the world. But many international brands stumble on entry. Here are the most common mistakes and how to avoid them.',
    body: `Nigeria offers enormous opportunity — a population of over 200 million, a rapidly expanding middle class, and one of the most entrepreneurial cultures in the world. Yet many international brands that enter the market fail to gain traction, not because the opportunity is not there, but because they approach Nigeria the same way they approach every other market.

The most common mistake is assuming that a global brand identity, campaign, or product strategy will translate directly. Nigerian consumers are sophisticated. They respond to brands that understand their context, speak to their aspirations, and demonstrate genuine relevance to their lives and challenges.

The second mistake is underinvesting in trust-building. In a market where institutional trust has historically been fragile, consumers look for social proof, community validation, and visible consistency before committing. A brand that shows up inconsistently — or launches without a clear local narrative — will struggle to build the credibility it needs to compete.

The third mistake is choosing the wrong local partners or none at all. Navigating Nigeria's business environment requires relationships, cultural intelligence, and an understanding of how decisions get made at every level of the market. International brands that try to enter remotely, without local strategic support, consistently underperform those that invest in genuine on-the-ground expertise.

Getting Nigeria right takes preparation, patience, and the right partners. When it works, the growth it unlocks is substantial.`,
    image: '/assets/img/home-1/news-02.jpg',
    author: 'Omua Williams-Ogoke',
    authorRole: 'Lead, Brand Management',
  },
  {
    slug: 'building-customer-trust-financial-services-nigeria',
    title: 'Building Customer Trust in Financial Services: A Communications Perspective',
    category: 'Strategic Communications',
    date: 'May 2026',
    readTime: '5 min read',
    excerpt: 'In financial services, trust is the product. Before a customer deposits money, takes a loan, or recommends your institution, they need to believe you are credible, stable, and on their side. Communications is how you build that belief.',
    body: `Financial services is one of the most trust-sensitive industries in Nigeria. Consumers have experienced institutional failures, fraud, and broken promises. They approach new financial products and institutions with genuine caution — and they have every reason to.

For financial brands, this means that marketing alone is not enough. You can have the best product, the lowest fees, and the most convenient platform — and still fail to acquire customers at scale if the market does not trust you yet.

Trust in financial services is built through three things: consistency, transparency, and social proof. Consistency means showing up reliably across every touchpoint — your visual identity, your messaging, your customer service, your communications. Transparency means communicating clearly about what you offer, what it costs, and what customers can expect. Social proof means giving potential customers evidence that others have benefited — through testimonials, case studies, community presence, and earned media.

The financial institutions that grow fastest in Nigeria are not always the ones with the most features. They are the ones the market talks about positively, recommends to friends, and returns to. Communications strategy is the engine that builds that kind of reputation — deliberately, consistently, and at scale.`,
    image: '/assets/img/home-1/news-03.jpg',
    author: 'Fortune Ugwuala',
    authorRole: 'Lead, Operations & Growth',
  },
]
