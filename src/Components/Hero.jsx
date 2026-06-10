import React from 'react'
import background from "../assets/gifBg.mp4"
import Nonye from '../assets/Chinonye.jpeg'

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={background} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B1F3A] bg-opacity-70" />

      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-end justify-between w-full max-w-7xl px-8 md:px-16 lg:px-24">

        {/* Left — Text */}
        <div className="max-w-xl text-white pb-16">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-7 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-medium tracking-[2.5px] uppercase">
              Chartered Accountant · ACA
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.08] mb-5">
            Financial clarity
            <span className="block text-[#C9A84C]">you can build on.</span>
          </h1>

          {/* Rule */}
          <div className="w-12 h-0.5 bg-[#C9A84C] opacity-60 mb-6" />

          {/* Description */}
          <p className="text-[#9BADC4] text-base leading-relaxed max-w-md mb-8">
            12+ years delivering audit, tax strategy, and financial reporting
            for businesses across Nigeria. Precise. Independent. Results-driven.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="text-xs font-semibold tracking-[1.5px] uppercase bg-[#C9A84C] text-[#0B1F3A] px-7 py-3.5 rounded hover:bg-[#E2C67A] transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="text-xs font-medium tracking-[1px] uppercase text-[#9BADC4] hover:text-white transition-colors flex items-center gap-2"
            >
              Get in Touch
              <span className="border border-current rounded-full w-5 h-5 flex items-center justify-center text-[10px]">→</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-[#C9A84C]/20">
            {[
              { value: '12+', label: 'Years experience' },
              { value: '200+', label: 'Clients served' },
              { value: '₦4B+', label: 'Funds managed' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-bold text-white leading-none">
                  {s.value}
                </div>
                <div className="text-[10px] font-medium tracking-[1.5px] uppercase text-[#9BADC4] mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Portrait blended into background */}
        <div className="hidden md:block relative w-[300px] lg:w-[340px] self-end flex-shrink-0">

          {/* Subtle glow ring behind figure */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-[#C9A84C]/5 border border-[#C9A84C]/10" />

          {/* Portrait — masked to dissolve into background */}
          <img
            src={Nonye}
            alt="Chinonye Chukwunenye"
            className="relative z-10 w-full object-cover object-top"
            style={{
              maskImage:
                'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 8%, black 28%, black 78%, rgba(0,0,0,0.5) 92%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 8%, black 28%, black 78%, rgba(0,0,0,0.5) 92%, transparent 100%)',
              mixBlendMode: 'luminosity',
              opacity: 0.9,
              maxHeight: '500px',
            }}
          />

          {/* Accent vertical line */}
          <div className="absolute right-[-16px] bottom-20 w-px h-20 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-50" />

          {/* Floating credential badge */}
          <div className="absolute bottom-16 left-[-20px] z-20 bg-[#0B1F3A]/90 border border-[#C9A84C]/35 rounded-lg px-4 py-2.5 backdrop-blur-sm">
            <div className="text-[9px] font-semibold tracking-[2px] uppercase text-[#C9A84C]">
              Certified
            </div>
            <div className="font-serif text-base font-semibold text-white mt-0.5">
              ICAN · ACCA
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero