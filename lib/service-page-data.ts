export type ServicePageData = {
  slug: string
  eyebrow: string
  title: string
  description: string
  audience: string
  heroImage: string
  heroAlt: string
  capabilities: Array<{ title: string; description: string }>
  matters: string[]
  seoTitle: string
  seoDescription: string
}

export const servicePageData: Record<string, ServicePageData> = {
  "corporate-venture": {
    slug: "corporate-venture",
    eyebrow: "Corporate & Commercial Counsel",
    title: "Corporate & Venture Transactions",
    description: "Counsel for companies, founders, funds, and investors across formation, financing, governance, acquisitions, and strategic exits.",
    audience: "Built for businesses and investors that need sophisticated transaction execution, practical judgment, and direct access to senior counsel.",
    heroImage: "/Stock Photo (Corporate).jpg",
    heroAlt: "Corporate financial data and market analysis",
    capabilities: [
      { title: "Formation & Governance", description: "Entity selection, founder arrangements, equity issuances, board matters, and governance documentation." },
      { title: "Venture Financings", description: "Company- and investor-side counsel for seed, preferred equity, growth, bridge, and secondary transactions." },
      { title: "Mergers & Acquisitions", description: "Buy-side and sell-side diligence, negotiation, documentation, signing, and closing execution." },
      { title: "Fractional General Counsel", description: "Ongoing legal support for executive teams navigating growth, risk, governance, and operations." },
    ],
    matters: ["Founder and early-stage equity structuring", "Preferred equity and convertible financings", "Strategic acquisitions and asset sales", "Board, stockholder, and portfolio-company matters"],
    seoTitle: "Corporate & Venture Transaction Counsel | Momentum Legal",
    seoDescription: "Corporate, venture financing, governance, M&A, and fractional general counsel for companies, founders, funds, and investors.",
  },
  "commercial-technology": {
    slug: "commercial-technology",
    eyebrow: "Corporate & Commercial Counsel",
    title: "Commercial & Technology Transactions",
    description: "Practical counsel for technology-driven agreements, strategic partnerships, and commercial relationships that support scale and protect enterprise value.",
    audience: "Built for companies negotiating revenue, technology, data, IP, vendor, customer, and partnership arrangements where legal terms must serve the commercial objective.",
    heroImage: "/Commercial & Technology Transactions Image.png",
    heroAlt: "Technology and commercial transaction network",
    capabilities: [
      { title: "Technology & SaaS", description: "Licensing, SaaS, software development, implementation, support, and integration agreements." },
      { title: "Data & Platforms", description: "Data use, API, platform, marketplace, privacy allocation, and technology-enabled service agreements." },
      { title: "Commercial Contracts", description: "Customer, vendor, supplier, distribution, referral, marketing, and revenue-sharing arrangements." },
      { title: "Strategic Partnerships", description: "Joint ventures, co-development, commercialization, sponsorship, and other strategic relationships." },
    ],
    matters: ["Enterprise software and cloud agreements", "IP licensing and commercialization", "Strategic partnerships and joint ventures", "Sports-tech and NIL-related commercial deals"],
    seoTitle: "Commercial & Technology Transaction Counsel | Momentum Legal",
    seoDescription: "Commercial contract, SaaS, software, data, licensing, platform, and strategic partnership counsel for technology-driven businesses.",
  },
  "nil-athlete": {
    slug: "nil-athlete",
    eyebrow: "Sports & NIL Counsel",
    title: "NIL & Athlete Representation",
    description: "Commercial and legal counsel for athletes building brands, negotiating opportunities, and protecting long-term value.",
    audience: "Built for student-athletes and professional athletes who need contract discipline, brand protection, business structuring, and practical guidance around fast-moving opportunities.",
    heroImage: "/Football Field.jpg",
    heroAlt: "Football field and athletic complex",
    capabilities: [
      { title: "Deal Negotiation", description: "Endorsement, sponsorship, appearance, social media, licensing, and content agreements." },
      { title: "Brand & IP Protection", description: "Publicity rights, trademarks, content rights, licensing, and brand-control provisions." },
      { title: "Business Structuring", description: "Entity formation, operating arrangements, equity opportunities, and commercial planning." },
      { title: "Compliance & Planning", description: "NIL rule alignment, disclosure obligations, professional transition, royalties, and long-term opportunities." },
    ],
    matters: ["Endorsement and sponsorship agreements", "Appearance and content deals", "Brand licensing and merchandise", "Equity, royalty, and long-term commercial arrangements"],
    seoTitle: "NIL & Athlete Representation | Momentum Legal",
    seoDescription: "NIL contract, sponsorship, brand, IP, business structuring, and strategic counsel for student-athletes and professional athletes.",
  },
  collective: {
    slug: "collective",
    eyebrow: "Sports & NIL Counsel",
    title: "NIL Collective Representation",
    description: "Governance, contract, compliance, and commercial counsel for NIL collectives operating in a changing legal and institutional environment.",
    audience: "Built for collective leadership teams that need durable infrastructure, consistent contracting, and responsive legal support.",
    heroImage: "/Football Field.jpg",
    heroAlt: "Football field and athletic complex",
    capabilities: [
      { title: "Entity & Governance", description: "For-profit and nonprofit structuring, governance documents, policies, and board support." },
      { title: "Contract Infrastructure", description: "Athlete, donor, sponsorship, vendor, and service agreement templates and negotiations." },
      { title: "Compliance Systems", description: "Operational policies, disclosure practices, rule monitoring, and risk allocation." },
      { title: "Ongoing Counsel", description: "Responsive day-to-day support, contract review, governance updates, and strategic guidance." },
    ],
    matters: ["Collective formation and restructuring", "Athlete deal templates and workflows", "Donor and sponsor agreements", "Governance reviews and compliance audits"],
    seoTitle: "NIL Collective Legal Counsel | Momentum Legal",
    seoDescription: "Entity, governance, contract, compliance, donor, sponsor, and ongoing legal counsel for NIL collectives.",
  },
  "brand-sponsor": {
    slug: "brand-sponsor",
    eyebrow: "Sports & NIL Counsel",
    title: "Brand & Sponsor Advisory",
    description: "Commercial counsel for brands, sponsors, and agencies structuring athlete partnerships and sports-related campaigns.",
    audience: "Built for commercial teams that need effective rights packages, clear deliverables, brand protection, and disciplined risk allocation.",
    heroImage: "/Brands Image.jpg",
    heroAlt: "Branded athletic apparel",
    capabilities: [
      { title: "Athlete Partnerships", description: "Endorsement, sponsorship, ambassador, appearance, and content agreements." },
      { title: "Campaign Structuring", description: "Deliverables, approval rights, exclusivity, usage, morality, termination, and measurement terms." },
      { title: "IP & Licensing", description: "Name, image, likeness, trademarks, content, merchandise, and co-branding rights." },
      { title: "Advertising Compliance", description: "Disclosure, platform, promotional, institutional, and campaign-specific compliance considerations." },
    ],
    matters: ["Athlete endorsement campaigns", "Social media and content rights", "Co-branded products and licensing", "Agency and production arrangements"],
    seoTitle: "Brand & Sponsor Legal Counsel | Momentum Legal",
    seoDescription: "Athlete sponsorship, endorsement, campaign, licensing, content, and advertising counsel for brands, sponsors, and agencies.",
  },
  "university-institutional": {
    slug: "university-institutional",
    eyebrow: "Sports & NIL Counsel",
    title: "University & Institutional Counsel",
    description: "Policy, contract, training, and strategic counsel for universities and athletic departments navigating structural change in college sports.",
    audience: "Built for institutions that need practical implementation support across NIL, revenue sharing, third-party relationships, and athlete-facing programs.",
    heroImage: "/University .jpg",
    heroAlt: "Historic university building",
    capabilities: [
      { title: "Policy & Governance", description: "NIL handbooks, institutional policies, procedures, templates, and decision frameworks." },
      { title: "Training & Implementation", description: "Practical workshops for administrators, compliance personnel, coaches, and athletes." },
      { title: "Third-Party Agreements", description: "Collective, sponsor, vendor, service-provider, and athlete-facing contract review." },
      { title: "Strategic Advisory", description: "Risk reviews, revenue-sharing transition, program design, and evolving regulatory considerations." },
    ],
    matters: ["Institutional NIL policy updates", "Contract and third-party risk reviews", "Administrator and athlete training", "Revenue-sharing and post-House transition planning"],
    seoTitle: "University & Institutional Sports Counsel | Momentum Legal",
    seoDescription: "NIL policy, contract, training, risk review, and strategic counsel for universities, athletic departments, and institutions.",
  },
}
