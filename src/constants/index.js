import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  yellowcard,
  KPMG,
  rodl,
  bodAdmin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cooperate Accounting Manager",
    company_name: "Yellow Card Financial Limited",
    icon: yellowcard,
    iconBg: "#FECE38",
    date: "March 2024 - Present",
    points: [
      "Oversaw month-end financial reporting for 20+ entities across Africa, ensuring compliance with IFRS/GAAP and regulatory standards.",
      "Maintained robust internal controls, aligning financial operations with industry and tax regulations.",
      "Led and mentored a corporate accounting team, managing workflow, recruitment, and performance.",
      "Built a high-performing team, reducing turnover by 20% through effective training and development initiatives.",
      "Implemented Oracle Netsuite, increasing reporting efficiency by 30% and reducing manual errors.",
      "Streamlined reconciliation processes for 50,000+ crypto transactions monthly using Fireblocks, enhancing accuracy by 25%",
      "Conducted monthly crypto valuations, ensuring accurate reporting and compliance with financial standards.",
      "Designed dynamic dashboards in Metabase, delivering actionable insights for senior management",
      "Supported tax audits with accurate documentation, resolving complex inquiries penalty-free",
      "Partnered with Tax, Operations, and Treasury teams to improve financial processes and resolve discrepancies.",
    ],
  },
  {
    title: "Senior Accountant",
    company_name: "Yellow Card Financial Limited",
    icon: yellowcard,
    iconBg: "#FECE38",
    date: " Feb 2023 - Feb 2024",
    points: [
      "Prepared monthly, quarterly, and annual financial statements in compliance with IFRS/GAAP.",
      "Consolidated financial data for 20+ African subsidiaries, analyzing variances and providing actionable insights to management.",
      "Ensured compliance with local and international tax regulations for multi-country operations.",
      "Coordinated with external advisors to manage tax filings and related documentation.",
      "Implemented robust internal controls to safeguard assets and minimize financial risks.",
      "Collaborated with audit teams to ensure adherence to accounting policies and standards.",
      "Conducted regular bank reconciliations, ensuring accuracy and timely resolution of discrepancies.",
      "Aligned company bank accounts with financial records, addressing and resolving reconciliation issues.",
      "Oversaw multi-currency cash flows and mitigated foreign exchange risks.",
      "Ensured financial compliance across multiple African jurisdictions.",
      "Maintained accounting software for multi-currency transactions, streamlining financial processes and improving efficiency.",
      "Prepared financial reports for internal stakeholders and supported investor presentations with clear and concise data.",
      "Assisted in internal and external audits, ensuring prompt resolution of audit queries and maintaining compliance standards.",
    ],
  },
  {
    title: "Head, Business Development & Strategy",
    company_name: "BodAdmin Limited",
    icon: bodAdmin,
    iconBg: "#FFF",
    date: "June 2021 - Jan 2023",
    points: [
      "Develop and execute long-term business strategies for regional markets, focusing on growth and market penetration.",
      "Curate pitch decks and actively participate in fund-raising discussions, leading to successful stakeholder engagements.",
      "Build operational structures for finance management, operations, and stakeholder engagement to enhance organizational efficiency.",
      "Collaborate with product, design, and engineering teams throughout product envisioning, design, and development phases.",
      "Establish and manage strategic partnerships with internal and external stakeholders, fostering long-term relationships.",
      "Conduct ongoing market and competitor analyses to inform product positioning and strategic initiatives.",
      "Oversee budget management, ensuring alignment with organizational goals",
      "Analyze financial data and prepare accurate financial accounts and management reports for decision-making",
    ],
  },
  {
    title: "Experienced Audit Analyst",
    company_name: "KPMG Nigeria",
    icon: KPMG,
    iconBg: "#FFF",
    date: "April 2019 - June 2021",
    points: [
      "Planned and conducted operational and financial audits, ensuring financial statements were prepared in alignment with GAAP.",
      "Reviewed a $1bn loan portfolio for a tier-2 bank, resulting in adjustments of over $2m for loss allowances.",
      "Assessed internal control environments for banks and insurance companies, identifying risks and preparing comprehensive audit findings.",
      "Supervised circularization and balance confirmation procedures for over 500 account balances across multiple financial institutions.",
      "Reviewed client compliance with regulatory codes of corporate governance and drafted exception reports.",
      "Participated in first-time adoption reviews of IFRS 16-Leases for clients in the financial services sector.",
      "Analyzed financial statements, assessing reliability and fairness, and communicated findings to stakeholders.",
      "Fostered client relationships, enabling quick resolution of audit differences and timely completion of engagements.",
    ],
  },

  {
    title: "Audit Graduate Trainee (NYSC)",
    company_name: "Bishop & Rooks (formerly WFO Roedl & Partner LP) ",
    icon: rodl,
    iconBg: "#00A990",
    date: "January 2018 - April 2019",
    points: [
      "Supported the planning and finalization of audit assignments, ensuring timely and accurate deliverables.",
      "Prepared comprehensive assurance documentation for supervisory review.",
      "Conducted fixed asset verifications and stock counts for clients in FMCG, entertainment, and manufacturing industries.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
