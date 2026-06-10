"use client";
import { useState } from "react";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineCheckCircle,
} from "react-icons/ai";

const services = [
  "Tax preparation & filing",
  "Business accounting",
  "Financial audit",
  "Payroll management",
  "Financial advisory",
  "Bookkeeping",
  "IFRS / GAAP Compliance",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
    questionaire: "",
  });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState(0);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message") setCharCount(value.length);
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess(true);
        setStatus("Message sent successfully!");
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "", phoneNumber: "", questionaire: "" });
    setSuccess(false);
    setStatus("");
    setErrors({});
    setCharCount(0);
  };

  // Shared input classes
  const inputBase =
    "w-full bg-[#0B1F3A] border text-sm text-[#D8D0C4] rounded-lg px-3 py-2.5 outline-none transition-all duration-200 placeholder:text-[#4A6080]";
  const inputFocused = "border-[#C9A84C] ring-2 ring-[#C9A84C]/15";
  const inputError = "border-red-400 ring-2 ring-red-400/10";
  const inputNormal = "border-[#C9A84C]/20 focus:border-[#C9A84C] focus:ring-2 focus:ring-[#C9A84C]/15";

  const labelClass = (field) =>
    `text-[10px] font-medium uppercase tracking-widest transition-colors duration-150 ${
      focused === field ? "text-[#C9A84C]" : "text-[#9BADC4]"
    }`;

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center min-h-[260px]">
        <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center">
          <AiOutlineCheckCircle className="text-3xl text-[#C9A84C]" />
        </div>
        <div>
          <p className="font-semibold font-serif text-white text-base">Enquiry received</p>
          <p className="text-sm text-[#9BADC4] mt-1 leading-relaxed max-w-[240px] mx-auto">
            Thank you! I'll review your message and respond within one business day.
          </p>
        </div>
        <button
          onClick={handleReset}
          className="text-xs text-[#C9A84C] hover:underline mt-1"
        >
          ← Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

      {/* Name + Phone */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className={labelClass("name")}>
            Full name <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <AiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4A6080] text-sm" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused("")}
              placeholder="Jane Doe"
              autoComplete="name"
              className={`${inputBase} pl-8 ${errors.name ? inputError : inputNormal}`}
            />
          </div>
          {errors.name && <p className="text-[10px] text-red-400">Name is required</p>}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phoneNumber" className={labelClass("phoneNumber")}>
            Phone number
          </label>
          <div className="relative">
            <AiOutlinePhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4A6080] text-sm" />
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onFocus={() => setFocused("phoneNumber")}
              onBlur={() => setFocused("")}
              placeholder="+234 800 000 0000"
              className={`${inputBase} pl-8 ${inputNormal}`}
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className={labelClass("email")}>
          Email address <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <AiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4A6080] text-sm" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused("")}
            placeholder="jane@company.com"
            autoComplete="email"
            className={`${inputBase} pl-8 ${errors.email ? inputError : inputNormal}`}
          />
        </div>
        {errors.email && <p className="text-[10px] text-red-400">Email is required</p>}
      </div>

      {/* Service */}
      <div className="flex flex-col gap-1">
        <label htmlFor="questionaire" className={labelClass("questionaire")}>
          Service required
        </label>
        <select
          id="questionaire"
          name="questionaire"
          value={formData.questionaire}
          onChange={handleChange}
          onFocus={() => setFocused("questionaire")}
          onBlur={() => setFocused("")}
          className={`${inputBase} ${inputNormal} cursor-pointer`}
          style={{ colorScheme: "dark" }}
        >
          <option value="" disabled>Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s} className="bg-[#0B1F3A] text-[#D8D0C4]">
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message" className={labelClass("message")}>
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused("")}
          rows={4}
          maxLength={500}
          placeholder="Describe your needs or ask a question…"
          className={`${inputBase} ${errors.message ? inputError : inputNormal} resize-none leading-relaxed`}
        />
        <div className="flex justify-between items-center">
          {errors.message
            ? <p className="text-[10px] text-red-400">Message is required</p>
            : <span />
          }
          <span className={`text-[10px] ${charCount > 450 ? "text-amber-400" : "text-[#4A6080]"}`}>
            {charCount} / 500
          </span>
        </div>
      </div>

      {status && !success && (
        <p className="text-xs text-red-400">{status}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 py-3 bg-[#C9A84C] hover:bg-[#E2C67A] text-[#0B1F3A] text-xs font-semibold tracking-[1.5px] uppercase rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C9A84C]/20 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isLoading ? (
          <span className="w-4 h-4 border-2 border-[#0B1F3A]/30 border-t-[#0B1F3A] rounded-full animate-spin" />
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}