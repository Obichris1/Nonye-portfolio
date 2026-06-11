import React from 'react'
import background from "../assets/gifBg.mp4"
import Nonye from '../assets/Chinonye.jpeg'

const Hero = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">

      {/* Background Video — pointerEvents none + no controls stops browser play/pause overlay */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{ pointerEvents: 'none' }}
      >
        <source src={background} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0B1F3A] " />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── MOBILE LAYOUT (< md) ── portrait top, text bottom */}
      <div className="relative z-10 flex flex-col w-full h-full md:hidden">

        {/* Portrait — upper portion */}
        <div className="relative flex-1 flex items-end justify-center overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[220px] rounded-full bg-[#C9A84C]/5 border border-[#C9A84C]/10" />

          <img
            src={Nonye}
            alt="Chinonye Chukwunenye"
            className="relative z-10 h-[300px] w-auto object-cover object-top"
            style={{
              maskImage:
                'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 6%, black 22%, black 80%, rgba(0,0,0,0.4) 94%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.4) 6%, black 22%, black 80%, rgba(0,0,0,0.4) 94%, transparent 100%)',
              mixBlendMode: 'luminosity',
              opacity: 0.92,
            }}
          />

          {/* Credential badge */}
          <div className="absolute bottom-4 right-6 z-20 bg-[#0B1F3A]/90 border border-[#C9A84C]/35 rounded-lg px-3 py-2 backdrop-blur-sm">
            <div className="text-[8px] font-semibold tracking-[2px] uppercase text-[#C9A84C]">Certified</div>
            <div className="font-serif text-sm font-semibold text-white mt-0.5">ICAN · ACCA</div>
          </div>
        </div>

        {/* Text — lower portion */}
        <div className="flex-shrink-0 px-6 pb-8 pt-4 text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-5 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-[10px] font-medium tracking-[2px] uppercase">
              Chartered Accountant · ACA
            </span>
          </div>

          <h1 className="font-serif text-3xl font-semibold leading-[1.1] mb-3">
            Financial clarity
            <span className="block text-[#C9A84C]">you can build on.</span>
          </h1>

          <div className="w-10 h-0.5 bg-[#C9A84C] opacity-60 mb-4" />

          <p className="text-[#9BADC4] text-sm leading-relaxed mb-5">
            12+ years delivering audit, tax strategy, and financial reporting
            for businesses across Nigeria.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <a
              href="#work"
              className="text-[10px] font-semibold tracking-[1.5px] uppercase bg-[#C9A84C] text-[#0B1F3A] px-5 py-2.5 rounded hover:bg-[#E2C67A] transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="text-[10px] font-medium tracking-[1px] uppercase text-[#9BADC4] hover:text-white transition-colors flex items-center gap-1.5"
            >
              Get in Touch
              <span className="border border-current rounded-full w-4 h-4 flex items-center justify-center text-[9px]">→</span>
            </a>
          </div>

          <div className="flex gap-5 pt-5 border-t border-[#C9A84C]/20">
            {[
              { value: '12+', label: 'Years' },
              { value: '200+', label: 'Clients' },
              { value: '₦4B+', label: 'Managed' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-2xl font-bold text-white leading-none">{s.value}</div>
                <div className="text-[9px] font-medium tracking-[1.5px] uppercase text-[#9BADC4] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (≥ md) ── side by side */}
      <div className="relative z-10 hidden md:flex items-end justify-between w-full max-w-7xl px-8 md:px-16 lg:px-24">

        {/* Left — Text */}
        <div className="max-w-xl text-white pb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-7 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-medium tracking-[2.5px] uppercase">
              Chartered Accountant · ACA
            </span>
          </div>

          <h1 className="font-serif text-5xl lg:text-6xl font-semibold leading-[1.08] mb-5">
            Financial clarity
            <span className="block text-[#C9A84C]">you can build on.</span>
          </h1>

          <div className="w-12 h-0.5 bg-[#C9A84C] opacity-60 mb-6" />

          <p className="text-[#9BADC4] text-base leading-relaxed max-w-md mb-8">
            12+ years delivering audit, tax strategy, and financial reporting
            for businesses across Nigeria. Precise. Independent. Results-driven.
          </p>

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

          <div className="flex gap-8 mt-10 pt-8 border-t border-[#C9A84C]/20">
            {[
              { value: '12+', label: 'Years experience' },
              { value: '200+', label: 'Clients served' },
              { value: '₦4B+', label: 'Funds managed' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-3xl font-bold text-white leading-none">{s.value}</div>
                <div className="text-[10px] font-medium tracking-[1.5px] uppercase text-[#9BADC4] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Portrait */}
        <div className="relative w-[280px] lg:w-[340px] self-end flex-shrink-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-[#C9A84C]/5 border border-[#C9A84C]/10" />

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

          <div className="absolute right-[-16px] bottom-20 w-px h-20 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-50" />

          <div className="absolute bottom-16 left-[-20px] z-20 bg-[#0B1F3A]/90 border border-[#C9A84C]/35 rounded-lg px-4 py-2.5 backdrop-blur-sm">
            <div className="text-[9px] font-semibold tracking-[2px] uppercase text-[#C9A84C]">Certified</div>
            <div className="font-serif text-base font-semibold text-white mt-0.5">ICAN · ACCA</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero