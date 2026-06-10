"use client";
import ContactForm from "./ContactForm";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineClockCircle,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const contactDetails = [
  {
    icon: <AiOutlineMail className="text-base" />,
    label: "Email",
    value: "chinonye.chukwunenye@email.com",
    href: "mailto:chinonye.chukwunenye@email.com",
  },
  {
    icon: <AiOutlinePhone className="text-base" />,
    label: "Phone",
    value: "+234 800 000 0000",
    href: "tel:+2348000000000",
  },
  {
    icon: <AiOutlineClockCircle className="text-base" />,
    label: "Availability",
    value: "Mon – Fri, 9:00 AM – 5:00 PM WAT",
    href: null,
  },
  {
    icon: <AiOutlineLinkedin className="text-base" />,
    label: "LinkedIn",
    value: "linkedin.com/in/chinonye-chukwunenye",
    href: "https://linkedin.com/in/chinonye-chukwunenye",
  },
];

export default function Contact() {
  return (
    <section id='contact' className="bg-[#0B1F3A] w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header — matches hero/experience pattern */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="block w-7 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-medium tracking-[2.5px] uppercase">
              Get In Touch
            </span>
            <span className="block w-7 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="text-white font-serif text-4xl md:text-5xl font-semibold leading-tight">
            Let's work together
          </h2>
          <div className="mx-auto mt-4 w-12 h-0.5 bg-[#C9A84C] opacity-60" />
          <p className="text-[#9BADC4] text-sm mt-6 max-w-md mx-auto leading-relaxed">
            Have a financial query or want to discuss your accounting needs?
            I'd love to hear from you.
          </p>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.65fr] rounded-2xl overflow-hidden border border-[#C9A84C]/20">

          {/* Left — Info panel */}
          <div className="bg-[#071628] p-8 flex flex-col relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute bottom-[-80px] right-[-80px] w-52 h-52 rounded-full bg-[#C9A84C]/5 pointer-events-none" />
            <div className="absolute top-[-50px] left-[-50px] w-32 h-32 rounded-full bg-[#C9A84C]/5 pointer-events-none" />

            {/* Monogram */}
            <div className="relative z-10 w-12 h-12 rounded-xl bg-[#0B1F3A] border border-[#C9A84C]/30 flex items-center justify-center mb-4">
              <span className="text-[#C9A84C] text-base font-serif font-semibold">CC</span>
            </div>

            <p className="relative z-10 text-white text-[15px] font-semibold font-serif">
              Chinonye Chukwunenye
            </p>
            <p className="relative z-10 text-[#C9A84C] text-[11px] tracking-[1.5px] uppercase mt-1 mb-6">
              Chartered Accountant · ICAN · ACCA
            </p>

            <div className="relative z-10 border-t border-[#C9A84C]/15 mb-6" />

            {/* Contact items */}
            <div className="relative z-10 flex flex-col gap-5 flex-1">
              {contactDetails.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0B1F3A] border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#C9A84C]">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[2px] text-[#9BADC4] mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <Link
                        to={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-[12px] text-[#D8D0C4] leading-snug hover:text-[#C9A84C] transition-colors whitespace-pre-line"
                      >
                        {value}
                      </Link>
                    ) : (
                      <p className="text-[12px] text-[#D8D0C4] leading-snug whitespace-pre-line">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="relative z-10 flex items-center gap-2 mt-8 pt-6 border-t border-[#C9A84C]/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
              <p className="text-[11px] text-[#9BADC4]">
                Currently accepting new clients
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#0D2340] p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}