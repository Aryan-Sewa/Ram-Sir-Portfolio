import { useEffect, useRef } from 'react'
import ramsir from '../assets/ramchandar.png'

export default function Hero() {
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const tagRef = useRef(null)

  useEffect(() => {
    // Staggered entrance on mount
    const delay = (el, ms) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, ms)
    }

    delay(tagRef.current, 200)
    delay(leftRef.current, 400)
    delay(rightRef.current, 600)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden noise"
      style={{ background: 'linear-gradient(135deg, var(--bg-primary) 60%, var(--bg-surface) 100%)' }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-125 h-125 rounded-full opacity-5"
        style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--bg-primary) 60%, transparent), transparent)' }} />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-5"
        style={{ background: 'linear-gradient(to bottom, color-mix(in srgb, var(--accent) 80%, transparent), transparent)' }} />

      {/* Vertical text label */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-accent/60" />
        <span className="text-[10px] tracking-[0.4em] uppercase text-accent/40 [writing-mode:vertical-lr]">
          Portfolio 2026
        </span>
        <div className="w-px h-24 bg-accent/60" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full grid md:grid-cols-2 gap-12 items-center pt-24">
        {/* LEFT — Text */}
        <div ref={leftRef} className="space-y-8" style={{ opacity: 0 }}>
          <div ref={tagRef} style={{ opacity: 0 }}>
            <span className="text-[11px] tracking-[0.4em] uppercase text-accent">
              — Professional Portfolio
            </span>
          </div>

          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-light">
              Your
              <br />
              <em className="text-accent not-italic">Ramchandar Duraisamy</em>
            </h1>
          </div>

          <p className="text-base md:text-lg text-primary leading-relaxed max-w-md font-light tracking-wide">
            Management professional with nearly 20 years of experience across IT, HR Consulting, and Shipping Logistics. Expertise in business growth, operations, client management, and leading cross-functional teams. Proven ability to drive operational excellence, build businesses from the ground up, and lead strategic quality initiatives including ISO and CMMI certifications.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {['Leadership Development', 'HR & Operations', 'Business Strategy'].map((tag) => (
              <span
                key={tag}
                className="text-[11px] tracking-[0.2em] uppercase px-4 py-2 border border-accent/30 text-accent/70 hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="#contact"
              className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-charcoal bg-accent px-8 py-4 hover:bg-[#0da79a] transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="text-sm tracking-[0.2em] uppercase text-cream/50 hover:text-accent transition-colors duration-300 flex items-center gap-2"
            >
              Explore ↓
            </a>
          </div>
        </div>

        {/* RIGHT — Image */}
        <div ref={rightRef} className="relative flex justify-center md:justify-end" style={{ opacity: 0 }}>
          {/* Decorative frame */}
          <div className="absolute top-4 right-4 md:right-0 w-full max-w-sm h-full border border-accent/20 z-0 translate-x-4 translate-y-4" />

          <div className="relative z-10 w-full max-w-sm aspect-3/4 overflow-hidden bg-[#1e1e1e]">
            {/* Placeholder for your photo */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 bg-surface">
              {/* <div className="w-24 h-24 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="font-display text-3xl text-accent/40 italic">YN</span>
              </div> */}
              <img
                src={ramsir}
                alt="Ram Chandar"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Overlay gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-charcoal/60 to-transparent" />
          </div>

          {/* accent accent dot */}
          <div className="absolute bottom-8 left-4 w-3 h-3 bg-accent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-linear-to-b from-accent/60 to-transparent" />
      </div>
    </section>
  )
}