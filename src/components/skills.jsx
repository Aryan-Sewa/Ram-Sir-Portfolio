import { useEffect, useRef } from 'react'
import useReveal from './useReveal'

const tiers = [
  {
    label: 'Client Relationship',
    sublabel: 'The apex — where everything converges',
    width: 'w-40',
    color: 'bg-[#0d9488]',
    textColor: 'text-[#0e0e0e]',
    height: 'h-16',
    skills: ['Stakeholder Management', 'Executive Collaboration', 'Client Retention', 'Strategic Consulting']
  },
  {
    label: 'Branding',
    sublabel: 'Identity, narrative, and positioning',
    width: 'w-64',
    color: 'bg-[#0b8076]',
    textColor: 'text-[#0e0e0e]',
    height: 'h-16',
    skills: ['Brand Positioning', 'Outreach & Digital Marketing', 'Employer Branding', 'Awards & Recognition']
  },
  {
    label: 'Talent Acquisition',
    sublabel: 'The foundation — building exceptional teams',
    width: 'w-full max-w-sm',
    color: 'bg-[#0f766e]',
    textColor: 'text-[#f0ece4]',
    height: 'h-16',
    skills: ['HR Frameworks', 'Workforce Scaling', 'Soft Skills Training', 'Leadership Development', 'CMMI / ISO']
  },
]

export default function Skills() {
  const ref = useReveal()
  const pyramidRef = useRef(null)

  useEffect(() => {
    const el = pyramidRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.querySelectorAll('.tier-block').forEach((t, i) => {
            setTimeout(() => {
              t.style.opacity = '1'
              t.style.transform = 'scaleX(1)'
            }, i * 200)
          })
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-32 bg-[#111111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at left, #0d9488 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-20">
          {/* <span className="text-[11px] tracking-[0.4em] uppercase text-accent">07</span> */}
          <div className="w-12 h-px bg-accent/40" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-cream/30">Skills</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT — Pyramid */}
          <div ref={pyramidRef} className="flex flex-col items-center gap-1">
            <p className="reveal text-[11px] tracking-[0.3em] uppercase text-accent/50 mb-8">
              Core Competency Pyramid
            </p>

            {tiers.map((tier, i) => (
              <div key={i} className="flex flex-col items-center w-full gap-1">
                {/* Tier bar */}
                <div
                  className={`tier-block ${tier.width} ${tier.color} ${tier.height} flex items-center justify-center transition-all duration-700`}
                  style={{
                    opacity: 0,
                    transform: 'scaleX(0.3)',
                    clipPath: i === 0
                      ? 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)'
                      : i === 1
                      ? 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)'
                      : 'polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)',
                  }}
                >
                  <span className={`text-xs tracking-[0.2em] uppercase font-medium ${tier.textColor} text-center px-4`}>
                    {tier.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Base line */}
            <div className="w-full max-w-sm h-px bg-accent/40 mt-2" />
          </div>

          {/* RIGHT — Tier breakdown */}
          <div className="space-y-10">
            <h2 className="reveal font-display text-5xl md:text-6xl font-light leading-tight">
              Core
              <br />
              <em className="text-accent">Expertise</em>
            </h2>

            <div className="space-y-8">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3" style={{ background: i === 0 ? '#0d9488' : i === 1 ? '#0b8076' : '#0f766e' }} />
                    <h3 className="text-sm tracking-[0.2em] uppercase text-cream/70 font-medium">
                      {tier.label}
                    </h3>
                  </div>
                  <p className="text-xs text-cream/30 mb-4 font-light tracking-wide">
                    {tier.sublabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tier.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] tracking-widest px-3 py-1.5 border border-accent/10 text-accent/50 hover:border-accent/30 hover:text-accent/70 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}