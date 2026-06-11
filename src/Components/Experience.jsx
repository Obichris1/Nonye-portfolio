import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../utils/motion";

import yellowcard from "../assets/company/yellowcard.png"; // adjust paths as needed
import bodAdmin from "../assets/company/bodAdmin.png";
import KPMG from "../assets/company/KPMG.png";
import rodl from "../assets/company/rodl.jpeg";

const experiences = [
  {
    title: "Corporate Accounting Manager",
    company_name: "Yellow Card Financial Limited",
    icon: yellowcard,
    iconBg: "#FECE38",
    date: "March 2024 – Present",
    points: [
      "Oversee month-end financial reporting for 20+ African entities in compliance with IFRS/GAAP.",
      "Implemented Oracle NetSuite, improving reporting efficiency by 30% and reducing manual errors.",
      "Streamlined reconciliation of 50,000+ monthly crypto transactions via Fireblocks, boosting accuracy by 25%.",
      "Led team growth initiatives, reducing staff turnover by 20% through structured training programmes.",
      "Designed Metabase dashboards delivering actionable insights to senior management.",
    ],
  },
  {
    title: "Senior Accountant",
    company_name: "Yellow Card Financial Limited",
    icon: yellowcard,
    iconBg: "#FECE38",
    date: "Feb 2023 – Feb 2024",
    points: [
      "Prepared monthly, quarterly, and annual financial statements for 20+ African subsidiaries.",
      "Managed multi-currency cash flows and mitigated foreign exchange risks across multiple jurisdictions.",
      "Coordinated tax filings and external audit support, ensuring full regulatory compliance.",
      "Maintained accounting software for multi-currency transactions, improving process efficiency.",
    ],
  },
  {
    title: "Head, Business Development & Strategy",
    company_name: "BodAdmin Limited",
    icon: bodAdmin,
    iconBg: "#FFFFFF",
    date: "June 2021 – Jan 2023",
    points: [
      "Developed and executed long-term business strategies focused on regional growth and market penetration.",
      "Curated pitch decks and led fundraising discussions, securing successful stakeholder engagements.",
      "Built operational structures spanning finance, operations, and stakeholder management.",
      "Conducted market and competitor analyses to inform product positioning and strategic decisions.",
    ],
  },
  {
    title: "Experienced Audit Analyst",
    company_name: "KPMG Nigeria",
    icon: KPMG,
    iconBg: "#FFFFFF",
    date: "April 2019 – June 2021",
    points: [
      "Planned and executed financial audits ensuring statements aligned with GAAP standards.",
      "Reviewed a $1bn loan portfolio for a tier-2 bank, resulting in $2m+ in loss allowance adjustments.",
      "Assessed internal controls for banks and insurers, producing comprehensive audit findings.",
      "Participated in IFRS 16 first-time adoption reviews for financial services clients.",
    ],
  },
  {
    title: "Audit Graduate Trainee (NYSC)",
    company_name: "Bishop & Rooks (formerly WFO Roedl & Partner)",
    icon: rodl,
    iconBg: "#00A990",
    date: "January 2018 – April 2019",
    points: [
      "Supported planning and finalisation of audit assignments with accurate, timely deliverables.",
      "Prepared assurance documentation and conducted fixed asset verifications and stock counts.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
   
      contentStyle={{
        background: "rgba(11, 31, 58, 0.85)",
        border: "1px solid rgba(201, 168, 76, 0.25)",
        boxShadow: "none",
        color: "#fff",
        borderRadius: "12px",
      }}
      contentArrowStyle={{ borderRight: "7px solid rgba(201, 168, 76, 0.3)" }}
      date={experience.date}
      dateClassName="text-[#9BADC4] text-sm font-medium"
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 3px rgba(201, 168, 76, 0.4)",
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] font-semibold font-serif leading-snug">
          {experience.title}
        </h3>
        <p
          className="text-[#C9A84C] text-[14px] font-medium tracking-wide mt-1"
          style={{ margin: "4px 0 0" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-4 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[#9BADC4] text-[13px] leading-relaxed flex gap-2"
          >
            <span className="text-[#C9A84C] mt-1 flex-shrink-0">▸</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section  id='work' className="bg-[#151f3e]  py-20 px-4">
      <motion.div variants={textVariant()} initial="hidden" whileInView="show">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block w-7 h-px bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-medium tracking-[2.5px] uppercase">
            Career Journey
          </span>
          <span className="block w-7 h-px bg-[#C9A84C]" />
        </div>

        <h2 className="text-white text-center font-serif text-4xl md:text-5xl font-semibold leading-tight">
          Work Experience
        </h2>

        {/* Gold rule */}
        <div className="mx-auto mt-4 w-12 h-0.5 bg-[#C9A84C] opacity-60" />

      </motion.div>

      <div className="mt-16">
        <VerticalTimeline lineColor="rgba(201, 168, 76, 0.2)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;