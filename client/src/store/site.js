// ============================================================
// SOLUTION MEDIA GLOBAL � CENTRAL SITE DATA STORE
// All content, colors, config live here.
// ============================================================

export const brand = {
  name: 'Solutions Media',
  fullName: 'Solutions Media Global Ltd.',
  tagline: 'Strategic Marketing & Communications Consultancy',
  subTagline: 'Businesses and Leaders',
  description: 'Strategic marketing and communications consultancy helping organizations build visibility, credibility, and sustainable growth.',
  descriptionLong: 'Solutions Media is a strategic marketing and communications consultancy helping ambitious businesses and leaders grow with confidence across Nigeria and emerging African markets.',
  descriptionLong2: 'We combine local market insight, strategic positioning, stakeholder engagement and communications execution to help businesses establish credibility, reach the right people and create stronger market opportunities.',
  descriptionTag: 'Local Insight. Strategic Execution. Measurable Impact.',
  location: 'Abuja, Nigeria',
  founded: '2015',
  website: 'www.solutionmediaglobal.com.ng',
  logo: '/assets/img/logo/solutions-media-logo-white.png',
  logoLight: '/assets/img/logo/solutions-media-logo.png',
  logoDark: '/assets/img/logo/solutions-media-logo-dark.png',
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

// Design tokens � CSS source of truth is src/index.css :root variables.
// Values here are JS references only (e.g. for dynamic inline styles,
// Cloudflare Workers API, or any JS that needs color values).
// If you change a color, update BOTH index.css :root AND here.
export const theme = {
  colors: {
    accent:  '#FF471C',   // --theme (Solutions Media orange)
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
    slug: 'growth-strategy',
    number: '001.',
    title: 'Growth Strategy',
    shortTitle: 'Growth Strategy',
    icon: 'fa-solid fa-chart-line',
    seoTitle: 'Growth Strategy Consulting in Nigeria | Solutions Media',
    metaDescription: 'Solutions Media helps businesses identify growth barriers, understand their market and build practical growth strategies that support stronger commercial results.',
    detailImage: '/assets/img/inner-page/Lida-Growth Strategy Consulting.jpeg',
    conceptImage: '/assets/img/inner-page/Lida-Growth Strategy Consulting-07.jpeg',
    faqImage: '/assets/img/inner-page/Lida-Growth Strategy Consulting-FAQs.jpeg',
    summary: 'Helping businesses identify what is slowing growth and build clear, practical strategies to move forward with confidence.',
    approachHeading: 'Turn insight into a plan that moves your business forward.',
    approachBody: 'We work with ambitious businesses and leaders to understand their current position, identify the barriers to growth and define the right next steps. Whether you are entering a new market, repositioning for a new audience or preparing for your next stage of growth, we help you build the clarity and direction needed to act.',
    detail: `We work with ambitious businesses and leaders to understand their current position, identify the barriers to growth, and develop the strategic direction needed to move forward. Whether you are entering a new market, repositioning for a new audience, or trying to unlock the next stage of scale, we help you build the clarity and the plan required to act.`,
    includes: ['Growth audit and opportunity mapping', 'Market, audience and competitor analysis', 'Business and brand positioning', 'Commercial growth roadmap', 'Priority actions, metrics and reporting'],
    faqs: [
      { question: 'What type of businesses need a growth strategy?', answer: 'Any business preparing to grow, enter a new market, improve sales, attract new customers or solve a growth challenge can benefit from a clear strategy.' },
      { question: 'Do you only provide advice?', answer: 'No. Solutions Media can support both strategy development and the branding, marketing, content, communications or campaign work required to bring the strategy to life.' },
      { question: 'What will we receive at the end of the engagement?', answer: 'Depending on the scope, you may receive a growth audit, market findings, strategic priorities, positioning direction, an action plan and recommended performance measures.' },
      { question: 'How long does a growth strategy project take?', answer: 'The timeline depends on the size of the business, available information and level of research required. We agree a clear delivery timeline after the discovery stage.' },
    ],
    faqsHeading: 'Quick answers to common questions about growth strategy.',
  },
  {
    slug: 'brand-market-positioning',
    number: '002.',
    title: 'Brand Strategy & Identity',
    shortTitle: 'Brand Strategy & Identity',
    icon: 'fa-solid fa-bullseye',
    seoTitle: 'Brand Strategy, Naming and Identity Design in Nigeria | Solutions Media',
    metaDescription: 'Solutions Media provides brand naming, brand strategy, positioning and visual identity design for businesses building memorable, trusted brands.',
    summary: 'Build a brand people understand, remember and choose, from the right name and position to a complete visual identity.',
    approachHeading: 'Build a brand people can recognise, understand and trust.',
    approachBody: 'A strong brand is more than a logo. It is the name, story, position, message and visual system that help people understand why you matter. Solutions Media helps businesses create brands that are clear, relevant and built to stand out in a competitive market.',
    detail: `We develop brand strategies and market positioning frameworks that create meaningful differentiation. From defining your core value proposition and messaging to building a complete identity system, we ensure your brand communicates clearly, earns credibility, and resonates with the people you want to reach.`,
    includes: ['Brand naming and naming shortlist development', 'Brand strategy and market positioning', 'Value proposition and messaging', 'Visual identity design', 'Brand guidelines and launch support'],
    whyCards: [
      { icon: 'fa-solid fa-signature', title: 'Find the right name', body: 'We develop meaningful name directions that fit your business, audience and long-term ambition.' },
      { icon: 'fa-solid fa-bullseye', title: 'Define your position', body: 'We clarify what your brand stands for, who it serves and why people should choose it.' },
      { icon: 'fa-solid fa-paint-brush', title: 'Create a strong identity', body: 'We design a visual system that helps your brand look consistent, credible and memorable.' },
      { icon: 'fa-solid fa-book-open', title: 'Equip your team', body: 'We provide guidelines and practical tools that make it easier to use the brand correctly.' },
    ],
    faqsHeading: 'Quick answers to common questions about brand strategy and identity.',
    faqs: [
      { question: 'Can Solutions Media help us name our business or product?', answer: 'Yes. We support brand naming through research, naming directions, shortlist development and strategic alignment. Final trademark and legal clearance should be completed by an appropriate legal professional.' },
      { question: 'Do we need a full rebrand?', answer: 'Not always. We begin by understanding the current brand and business challenge, then recommend whether you need a refresh, a repositioning or a complete rebrand.' },
      { question: 'What does a brand identity include?', answer: 'A typical identity can include a logo system, colour palette, typography, supporting graphics, imagery direction, brand guidelines and selected launch assets.' },
      { question: 'Can you support our brand launch?', answer: 'Yes. We can develop launch messaging, campaign creative, digital assets, content and communications to introduce the new brand properly.' },
    ],
  },
  {
    slug: 'customer-acquisition',
    number: '003.',
    title: 'Customer Acquisition',
    shortTitle: 'Customer Acquisition',
    icon: 'fa-solid fa-bullhorn',
    seoTitle: 'Customer Acquisition Strategy and Marketing Campaigns | Solutions Media',
    metaDescription: 'Solutions Media helps businesses attract, convert and retain the right customers through customer acquisition strategy, campaigns, content and performance marketing.',
    detailImage: '/assets/img/inner-page/Lida-Customer Acquisition Service.jpeg',
    conceptImage: '/assets/img/inner-page/Lida-Customer Acquisition Service1.jpeg',
    summary: 'Attract the right customers, make your offer clearer and build campaigns that move people from interest to action.',
    approachHeading: 'Turn attention into qualified customer opportunities.',
    approachBody: 'More visibility is only useful when it brings the right people closer to your business. We help you understand who your best customers are, sharpen your offer and build the marketing journey that turns interest into enquiries, leads, sales or sign-ups.',
    detail: `We design and execute integrated marketing campaigns focused on attracting and converting the right customers. From strategy and creative development to media planning, paid advertising, and performance tracking, every campaign is built around clear business goals and measurable outcomes.`,
    includes: ['Customer acquisition strategy', 'Audience targeting and channel selection', 'Campaign strategy and creative', 'Landing page and conversion support', 'Performance tracking and optimisation'],
    whyCards: [
      { icon: 'fa-solid fa-crosshairs', title: 'Target the right audience', body: 'We focus on the people most likely to need, value and act on your offer.' },
      { icon: 'fa-solid fa-bullhorn', title: 'Make your offer clear', body: 'We improve how you communicate your value, pricing, proof and next step.' },
      { icon: 'fa-solid fa-rectangle-ad', title: 'Build campaigns with purpose', body: 'We create campaigns, content and creative assets around a clear business goal.' },
      { icon: 'fa-solid fa-chart-line', title: 'Improve performance over time', body: 'We review results, identify gaps and improve the work based on what the data shows.' },
    ],
    faqsHeading: 'Quick answers to common questions about customer acquisition.',
    faqs: [
      { question: 'Do you run paid advertising campaigns?', answer: 'Yes, when paid media is the right fit for the business goal. Media spend is agreed separately from strategy, creative and campaign management fees.' },
      { question: 'Can you support B2B customer acquisition?', answer: 'Yes. We can support B2B businesses with positioning, lead generation campaigns, executive content, sales materials and targeted communications.' },
      { question: 'Which marketing platforms do you use?', answer: 'The right platform depends on your audience and objective. This may include LinkedIn, Instagram, Google, email, websites, events or other relevant channels.' },
      { question: 'How do you measure success?', answer: 'We agree the right measures before launch. Depending on the campaign, this may include qualified leads, enquiries, website actions, sales, sign-ups or cost per acquisition.' },
    ],
  },
  {
    slug: 'customer-adoption',
    number: '004.',
    title: 'Customer Adoption',
    shortTitle: 'Customer Adoption',
    icon: 'fa-solid fa-handshake',
    seoTitle: 'Customer Adoption and Retention Strategy | Solutions Media',
    metaDescription: 'Solutions Media helps businesses improve customer onboarding, adoption, retention and loyalty through clearer communication and better customer experiences.',
    detailImage: '/assets/img/inner-page/Lida-Customer Adoption.jpeg',
    conceptImage: '/assets/img/inner-page/Lida-Customer Adoption Service.jpeg',
    summary: 'Help customers understand your value, use your product or service confidently, return more often and recommend your business.',
    approachHeading: 'Make it easier for customers to choose you again..',
    approachBody: 'Customer growth is not only about getting new customers. It is also about helping existing customers get value, stay engaged and keep coming back. We help businesses improve key moments across the customer journey, from first contact and onboarding to retention and advocacy..',
    detail: `Winning a customer is only the beginning. We help businesses develop the communication strategies, onboarding experiences, and engagement frameworks that turn new customers into loyal ones. We identify the gaps in the customer journey and build the tools and messaging needed to close them.`,
    includes: ['Customer journey mapping', 'Onboarding and adoption messaging', 'Retention and lifecycle campaigns', 'Customer feedback and loyalty initiatives', 'Customer experience improvement planning'],
    whyCards: [
      { icon: 'fa-solid fa-map', title: 'Understand the customer journey', body: 'We map the moments that shape how customers see, use and remember your business.' },
      { icon: 'fa-solid fa-road-barrier', title: 'Remove unnecessary friction', body: 'We identify confusing messages, weak processes and missed opportunities that affect customer experience.' },
      { icon: 'fa-solid fa-eye', title: 'Keep your value visible', body: 'We create communications that help customers understand the value they receive over time.' },
      { icon: 'fa-solid fa-chart-line', title: 'Learn and improve', body: 'We use feedback, behaviour and performance data to guide better customer decisions.' },
    ],
    faqsHeading: 'Quick answers to common questions about customer adoption.',
    faqs: [
      { question: 'Is this only for technology companies?', answer: 'No. Customer adoption matters for banks, service businesses, retailers, professional firms, hospitality brands, real estate companies and many other businesses.' },
      { question: 'Can you help us improve customer onboarding?', answer: 'Yes. We can review your customer onboarding journey and develop clearer messages, materials and touchpoints that help customers start well.' },
      { question: 'Does this include outsourced customer service?', answer: 'No. Solutions Media helps improve the strategy, communication and experience around customer service. Day-to-day call centre or customer support staffing is scoped separately.' },
      { question: 'What results can customer adoption work support?', answer: 'It can support stronger retention, better customer understanding, more repeat activity, improved referrals and better feedback, depending on the business model.' },
    ],
  },
  {
    slug: 'reputation-communications',
    number: '005.',
    title: 'Reputation & PR',
    shortTitle: 'Reputation & PR',
    icon: 'fa-solid fa-newspaper',
    seoTitle: 'Public Relations and Reputation Management in Nigeria | Solutions Media',
    metaDescription: 'Solutions Media helps businesses build credibility, manage reputation, strengthen media relations and prepare for public communication challenges.',
    detailImage: '/assets/img/inner-page/Lida-Reputation and PR Services.jpeg',
    conceptImage: '/assets/img/inner-page/Lida - Reputation and PR Services-10.jpeg',
    summary: 'Build trust, strengthen your public profile and respond clearly when your reputation matters most.',
    approachHeading: 'Be known for the right reasons.',
    approachBody: 'Your reputation is shaped by what people hear, see, experience and say about your business. We help you define the right story, communicate it clearly and build credible visibility through strategic public relations, media engagement and reputation management.',
    detail: `We manage your public narrative with precision. Our communications approach builds proactive media relationships, positions your leadership as credible voices in your industry, and ensures your organization is prepared to communicate effectively across every situation � from launches and milestones to sensitive reputational moments.`,
    includes: ['Reputation audit and narrative development', 'PR strategy and media relations', 'Press releases, profiles and thought leadership', 'Crisis communication and response planning', 'Media monitoring and reporting'],
    whyCards: [
      { icon: 'fa-solid fa-comment-dots', title: 'Clarify your public message', body: 'We define the messages that should guide how your business communicates in public.' },
      { icon: 'fa-solid fa-newspaper', title: 'Build credible visibility', body: 'We identify opportunities for media, thought leadership, announcements and public engagement.' },
      { icon: 'fa-solid fa-shield-halved', title: 'Prepare for pressure moments', body: 'We develop practical response structures for sensitive issues, public questions and reputation risks.' },
      { icon: 'fa-solid fa-radar', title: 'Stay informed', body: 'We monitor relevant conversations and use findings to improve communication decisions.' },
    ],
    faqsHeading: 'Quick answers to common questions about Reputation and PR.',
    faqs: [
      { question: 'Can Solutions Media guarantee media placements?', answer: 'No. Earned editorial coverage is subject to each publication\'s editorial decision. We can create strong stories, pitch relevant media and manage the process, but we do not promise coverage that is outside our control.' },
      { question: 'Do you write press releases and company profiles?', answer: 'Yes. We write and design press releases, executive profiles, company profiles, media kits, thought leadership articles and other PR materials.' },
      { question: 'Can you support us during a crisis?', answer: 'Yes, subject to the agreed scope, access to accurate information and quick client approval. Crisis response works best when there is a prepared communication process.' },
      { question: 'Does this service include social media management?', answer: 'Social media can support reputation work, but full social media management is usually scoped under Digital Presence or Content & Creative.' },
    ],
  },
  {
    slug: 'executive-corporate-positioning',
    number: '006.',
    title: 'Executive Positioning',
    shortTitle: 'Executive Positioning',
    icon: 'fa-solid fa-user-tie',
    seoTitle: 'Executive Positioning and Personal Brand Strategy | Solutions Media',
    metaDescription: 'Solutions Media helps founders, executives and industry leaders build credible personal brands, thought leadership and professional visibility.',
    detailImage: '/assets/img/inner-page/Lida - Executive Positioning Service.jpeg',
    conceptImage: '/assets/img/inner-page/Lida - Executive Positioning Service-07.jpeg',
    summary: 'Help founders, executives and industry leaders build a credible public profile that opens meaningful opportunities.',
    approachHeading: 'Build a profile that reflects the value you bring',
    approachBody: 'People often form an opinion about a leader before they meet the business behind them. We help founders and executives clarify what they stand for, communicate their expertise and build a professional presence that supports trust, influence and opportunity.',
    detail: `We help business leaders and organizations build the kind of market presence that opens doors, builds trust, and creates commercial opportunity. From executive profile development and thought leadership to corporate communications strategies and investor-facing messaging, we position leaders and organizations to be taken seriously in the markets that matter.`,
    includes: ['Profile and reputation audit', 'Personal brand strategy and positioning', 'Executive messaging and thought leadership', 'LinkedIn and content strategy', 'Speaking, media and public appearance support'],
    whyCards: [
      { icon: 'fa-solid fa-id-badge', title: 'Define what you stand for', body: 'We clarify the expertise, perspective and values that should shape your public profile.' },
      { icon: 'fa-solid fa-lightbulb', title: 'Build a strong point of view', body: 'We develop themes and ideas that help you contribute meaningfully to important conversations.' },
      { icon: 'fa-solid fa-layer-group', title: 'Make your presence consistent', body: 'We align your LinkedIn, content, visuals, public appearances and communications.' },
      { icon: 'fa-solid fa-door-open', title: 'Turn visibility into opportunity', body: 'We focus on credibility and relevance, not empty attention.' },
    ],
    faqsHeading: 'Quick answers to common questions about executive positioning.',
    faqs: [
      { question: 'Who is this service for?', answer: 'It is for founders, CEOs, executives, subject matter experts, investors and industry leaders who want to strengthen their professional visibility.' },
      { question: 'Will Solutions Media create content for me?', answer: 'Yes. Depending on scope, we can support content strategy, LinkedIn content, video, thought leadership articles, photography and public appearance materials.' },
      { question: 'Will this make me go viral?', answer: 'That is not the goal. We focus on building a credible profile that reaches the right people and supports your real professional objectives.' },
      { question: 'How do you handle confidential information?', answer: 'We agree approval processes and content boundaries before work begins. No sensitive information should be published without your approval.' },
    ],
  },
  {
    slug: 'content-creative-production',
    number: '007.',
    title: 'Content & Creative Production',
    shortTitle: 'Content & Creative',
    icon: 'fa-solid fa-pen-nib',
    seoTitle: 'Content Creation and Creative Agency in Nigeria | Solutions Media',
    metaDescription: 'Solutions Media creates strategy-led content, photography, video, design and campaign creative that helps brands communicate clearly and grow.',
    detailImage: '/assets/img/inner-page/Lida - Content & Creative Production Service.jpeg',
    conceptImage: '/assets/img/inner-page/Lida - Content & Creative Production Service-07.jpeg',
    summary: 'Create content and creative assets that explain your value, hold attention and move people to act.',
    approachHeading: 'Create work that earns attention and supports action.',
    approachBody: 'Good creative should do more than look attractive. It should make the message clearer, help people feel something and move them closer to action. We develop strategy-led content and creative assets that help brands communicate consistently across the channels that matter.',
    detail: `Good creative should do more than look attractive. It should make the message clearer, help people feel something and move them closer to action. We develop strategy-led content and creative assets that help brands communicate consistently across the channels that matter.`,
    includes: ['Content strategy and editorial planning', 'Social media content', 'Photography, video and motion content', 'Campaign creative and brand assets', 'Copywriting, design and production'],
    whyCards: [
      { icon: 'fa-solid fa-magnifying-glass', title: 'Find the clearest story', body: 'We identify the message, audience and purpose before we begin production.' },
      { icon: 'fa-solid fa-layer-group', title: 'Build a useful content system', body: 'We create content plans that keep your communication active and focused.' },
      { icon: 'fa-solid fa-pen-nib', title: 'Produce strong creative assets', body: 'We develop photography, video, design, copy and campaign assets to a professional standard.' },
      { icon: 'fa-solid fa-share-nodes', title: 'Adapt content for each channel', body: 'We shape content for social media, websites, presentations, campaigns and other relevant platforms.' },
    ],
    faqsHeading: 'Quick answers to common questions about Content and Creative Production.',
    faqs: [
      { question: 'Can you work with our existing brand identity?', answer: 'Yes. We can work within your current brand system. If the brand needs improvement, we can recommend Brand Strategy & Identity support separately.' },
      { question: 'Do you handle photography and video production?', answer: 'Yes. Solutions Media can support photography, videography, editing, interviews, short-form video, campaign content and event capture.' },
      { question: 'Can we engage you for a one-off campaign?', answer: 'Yes. We support both ongoing content work and defined projects such as launches, campaigns, brand films and event coverage.' },
      { question: 'How do you decide what content to create?', answer: 'We begin with the audience, business goal, message and channel. This keeps content useful instead of producing creative work without a clear purpose.' },
    ],
  },
  {
    slug: 'digital-presence',
    number: '008.',
    title: 'Digital Presence & Experience',
    shortTitle: 'Digital Presence',
    icon: 'fa-solid fa-mobile-screen',
    seoTitle: 'Digital Presence Management and Website Strategy | Solutions Media',
    metaDescription: 'Solutions Media helps businesses strengthen their website, social media and online communication to build trust and support customer growth.',
    detailImage: '/assets/img/inner-page/Lida - Digital Presence (Social Media Management, Website Design and Development) Services.jpeg',
    conceptImage: '/assets/img/inner-page/Lida - Digital Presence (Social Media Management, Website Design and Development) Services-07.jpeg',
    summary: 'Build and manage a digital presence that helps customers find, understand and trust your brand online.',
    approachHeading: 'Make every digital touchpoint work harder for your brand.',
    approachBody: 'Your website, social media pages, search results and digital content shape how people see your business before they contact you. We help you build a digital presence that looks credible, communicates clearly and supports enquiries, trust and long-term growth.',
    detail: `We develop digital strategies and manage the channels that matter most for your business. From website strategy and social media management to digital advertising and search visibility, we ensure your brand is present, credible, and engaging wherever your audience is looking.`,
    includes: ['Digital presence audit and improvement plan', 'Website and landing page strategy and development', 'Social media management', 'Digital content and community support', 'Search visibility and performance tracking'],
    whyCards: [
      { icon: 'fa-solid fa-magnifying-glass', title: 'Audit your online footprint', body: 'We review the main places customers find and judge your business online.' },
      { icon: 'fa-solid fa-layer-group', title: 'Build a clearer presence', body: 'We improve the structure, message, content and user experience across key platforms.' },
      { icon: 'fa-solid fa-rss', title: 'Keep communication active', body: 'We develop content and digital systems that help your brand stay visible and relevant.' },
      { icon: 'fa-solid fa-chart-line', title: 'Measure useful activity', body: 'We track the actions that matter, such as enquiries, website engagement, search visibility and campaign response.' },
    ],
    faqsHeading: 'Quick answers to common questions about digital presence.',
    faqs: [
      { question: 'Do you build websites?', answer: 'Yes. We can support website strategy, content, design and development when a website is the right solution for the business need.' },
      { question: 'Does this include SEO?', answer: 'Search visibility can form part of the service. We improve useful website content, structure and search foundations, but we do not make unrealistic promises about ranking positions.' },
      { question: 'Will you post the same content on every platform?', answer: 'No. We tailor content to the audience and role of each platform while keeping the brand message consistent.' },
      { question: 'Can you manage our website and social media together?', answer: 'Yes. A combined scope often helps create a more consistent online experience for customers.' },
    ],
  },
  {
    slug: 'events-brand-experiences',
    number: '009.',
    title: 'Events & Brand Experiences',
    shortTitle: 'Events & Experiences',
    icon: 'fa-solid fa-calendar-star',
    seoTitle: 'Corporate Events and Brand Experiences in Nigeria | Solutions Media',
    metaDescription: 'Solutions Media designs and delivers corporate events, brand experiences, launches and stakeholder engagements that build trust and create impact.',
    detailImage: '/assets/img/inner-page/Lida - Events.jpeg',
    conceptImage: '/assets/img/inner-page/Lida - Events and Brand Experience (Experiential Marketing) Service-07.jpg.jpeg',
    summary: 'Design brand events and experiences that bring people together, build trust and create memorable action.',
    approachHeading: 'Turn important moments into experiences people remember.',
    approachBody: 'An event is more than a venue, stage and guest list. It is an opportunity to shape how people feel about your brand. We help organisations design and deliver experiences that support clear goals, whether that is a launch, conference, stakeholder event, media engagement or internal gathering.',
    detail: `We plan and deliver events and brand experiences that go beyond logistics. From product launches and corporate events to stakeholder engagements and experiential marketing activations, we design experiences that reflect your brand, engage your audience, and support your commercial objectives.`,
    includes: ['Event strategy and concept development', 'Audience and stakeholder experience design', 'Creative direction and event branding', 'Production and on-ground coordination', 'Content capture and post-event reporting'],
    whyCards: [
      { icon: 'fa-solid fa-bullseye', title: "Define the event's job", body: 'We clarify the business goal, audience and message before planning begins.' },
      { icon: 'fa-solid fa-route', title: 'Design the full experience', body: 'We consider the guest journey from invitation to arrival, engagement and follow-up.' },
      { icon: 'fa-solid fa-wand-magic-sparkles', title: 'Bring the idea to life', body: 'We coordinate creative direction, branding, suppliers, production and on-ground delivery.' },
      { icon: 'fa-solid fa-arrow-trend-up', title: 'Extend the impact', body: 'We capture content and create follow-up communication that keeps the event working after it ends.' },
    ],
    faqsHeading: 'Quick answers to common questions about events and experiences.',
    faqs: [
      { question: 'What type of events do you support?', answer: 'We support corporate events, product launches, conferences, executive gatherings, stakeholder engagements, brand activations, media events and internal experiences.' },
      { question: 'Can Solutions Media manage suppliers and production?', answer: 'Yes. Depending on the agreed scope, we can coordinate suppliers, venue needs, production, branding, guest experience and event logistics.' },
      { question: 'Do you only handle large events?', answer: 'No. We can support focused executive events and smaller high-value gatherings as well as larger public events.' },
      { question: 'Is this only about event decoration and visuals?', answer: 'No. Visuals matter, but we begin with the event objective, audience, message and experience before developing the creative direction.' },
    ],
  },
  {
    slug: 'market-entry',
    number: '010.',
    title: 'Market Entry & Expansion',
    shortTitle: 'Market Entry',
    icon: 'fa-solid fa-globe-africa',
    seoTitle: 'Market Entry Strategy and Localisation in Nigeria | Solutions Media',
    metaDescription: 'Solutions Media helps local and international businesses enter Nigeria and new African markets with market insight, positioning and launch communication strategy.',
    detailImage: '/assets/img/inner-page/Lida  - Market Entry and Expansion Support Services.jpeg',
    conceptImage: '/assets/img/inner-page/Lida  - Market Entry and Expansion.jpeg',
    summary: 'Enter Nigeria and new markets with the local insight, positioning and launch plan needed to start well.',
    approachHeading: 'Enter new markets with less guesswork and more direction.',
    approachBody: 'Entering a new market requires more than launching a product or opening an office. You need to understand the people, competition, context and communication required to build trust. We help businesses develop the insight, positioning and launch direction needed to enter with greater confidence.',
    detail: `We help businesses successfully enter and grow within new markets � whether that is expanding into Nigeria, establishing a presence across Africa, or reaching new audience segments within existing markets. We combine local market insight, strategic positioning, stakeholder engagement, and communications execution to give your market entry the best possible foundation.`,
    includes: ['Market research and opportunity assessment', 'Local audience and cultural insight', 'Market entry positioning and messaging', 'Launch communication strategy', 'Stakeholder and partner engagement planning'],
    whyCards: [
      { icon: 'fa-solid fa-map', title: 'Understand the local market', body: 'We help you assess customer behaviour, competition, market conditions and relevant opportunities.' },
      { icon: 'fa-solid fa-bullhorn', title: 'Adapt the offer and message', body: 'We shape your position, messaging and communication around the realities of the new market.' },
      { icon: 'fa-solid fa-road', title: 'Build a stronger launch plan', body: 'We create a practical market entry and launch communication roadmap.' },
      { icon: 'fa-solid fa-rocket', title: 'Support early momentum', body: 'We help align visibility, stakeholder engagement, content and campaigns around the launch objective.' },
    ],
    faqsHeading: 'Quick answers to common questions about market entry.',
    faqs: [
      { question: 'Do you work with international companies entering Nigeria?', answer: 'Yes. We support local and international businesses that need market insight, positioning, launch communications and stakeholder engagement support.' },
      { question: 'Can you guarantee sales in a new market?', answer: 'No. No responsible partner can guarantee sales. Our role is to reduce avoidable uncertainty and help you make stronger market entry decisions.' },
      { question: 'Do you support market entry beyond Nigeria?', answer: 'We can support selected African market opportunities based on the scope, available research and local delivery requirements.' },
      { question: 'Do you provide legal or regulatory approvals?', answer: 'No. We do not replace legal, regulatory or compliance advisers. We can work alongside them to ensure your market communication and stakeholder engagement are properly aligned.' },
    ],
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
    impact: '25.9M campaign impressions. Sales grew from 50�100 units per month at campaign start, to 350+ units per month by Month 3.',
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
    impact: 'Working with Solutions Media has been a strategic investment in our growth. Beyond developing a brand identity that reflects our vision, their team brought clarity, structure, and commercial insight to how our business is positioned. Their ability to combine strategy with execution has strengthened our confidence as we continue to grow.',
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
    solution: 'Comprehensive brand repositioning � rebranding strategy, premium marketing materials, professional industrial photography, branded staff apparel, and customer-facing assets.',
    impact: 'Our engagement with Solutions Media transformed the way our business is perceived. They helped us build a stronger brand identity, improve how we communicate our value, and position the business with greater credibility. Their strategic thinking and attention to detail made a measurable difference in how we present ourselves to customers and partners.',
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
    quote: 'The team at Solution Media brought clarity, creativity, and commercial thinking to our campaigns. They do not just deliver content � they deliver outcomes.',
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
    answer: 'Yes. We handle everything from monthly content calendars and platform strategy to daily posting, community management, analytics reporting, and crisis response. We create all content � graphics, videos, and captions � tailored to your brand voice.',
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
    answer: 'We combine African context with global standards. Our integrated service delivery means reputation, content, SEO, social, and PR work as one cohesive system. We operate with a results-first philosophy � defining success by your KPIs � and provide transparent reporting with no hidden fees.',
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
  { name: 'Client 33', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-33.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-34.png' },
  { name: 'Client 35', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-35.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-36.png' },
  { name: 'Client 37', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-37.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-38.png' },
  { name: 'Client 39', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-39.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-40.png' },
  { name: 'Client 41', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-41.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-42.png' },
  { name: 'Client 43', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-43.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-44.png' },
  { name: 'Client 45', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-45.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-46.png' },
  { name: 'Client 47', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-47.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-48.png' },
  { name: 'Client 49', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-49.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-50.png' },
  { name: 'Client 51', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-51.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-52.png' },
  { name: 'Client 53', logo: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-53.png', logoHover: '/assets/img/home-1/Solutions Media Client Logos (Monochromatic)-54.png' },
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
    excerpt: 'In a crowded, fast-moving market, the businesses that win are not always the most capable � they are the most clearly positioned. Here is why positioning is the foundation of every growth strategy.',
    body: `Brand positioning is the process of defining how your business is perceived in the minds of your target audience relative to your competitors. In African markets � where consumer trust is hard-earned, word of mouth is powerful, and differentiation is often unclear � getting your positioning right is not a nice-to-have. It is the foundation.

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
    body: `Nigeria offers enormous opportunity � a population of over 200 million, a rapidly expanding middle class, and one of the most entrepreneurial cultures in the world. Yet many international brands that enter the market fail to gain traction, not because the opportunity is not there, but because they approach Nigeria the same way they approach every other market.

The most common mistake is assuming that a global brand identity, campaign, or product strategy will translate directly. Nigerian consumers are sophisticated. They respond to brands that understand their context, speak to their aspirations, and demonstrate genuine relevance to their lives and challenges.

The second mistake is underinvesting in trust-building. In a market where institutional trust has historically been fragile, consumers look for social proof, community vaSolutions Mediation, and visible consistency before committing. A brand that shows up inconsistently � or launches without a clear local narrative � will struggle to build the credibility it needs to compete.

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
    body: `Financial services is one of the most trust-sensitive industries in Nigeria. Consumers have experienced institutional failures, fraud, and broken promises. They approach new financial products and institutions with genuine caution � and they have every reason to.

For financial brands, this means that marketing alone is not enough. You can have the best product, the lowest fees, and the most convenient platform � and still fail to acquire customers at scale if the market does not trust you yet.

Trust in financial services is built through three things: consistency, transparency, and social proof. Consistency means showing up reliably across every touchpoint � your visual identity, your messaging, your customer service, your communications. Transparency means communicating clearly about what you offer, what it costs, and what customers can expect. Social proof means giving potential customers evidence that others have benefited � through testimonials, case studies, community presence, and earned media.

The financial institutions that grow fastest in Nigeria are not always the ones with the most features. They are the ones the market talks about positively, recommends to friends, and returns to. Communications strategy is the engine that builds that kind of reputation � deliberately, consistently, and at scale.`,
    image: '/assets/img/home-1/news-03.jpg',
    author: 'Fortune Ugwuala',
    authorRole: 'Lead, Operations & Growth',
  },
]