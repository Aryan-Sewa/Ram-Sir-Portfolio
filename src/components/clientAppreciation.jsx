import { useState } from 'react'
import useReveal from './useReveal'

const testimonials = [
  {
    name: 'Rajavel CR',
    role: 'Senior HR Business Partner | Talent Management & Engagement Leader | HR Digitization & Analytics | Driving Scalable, Data‑Driven People Strategies in Global IT & ITES',
    company: 'Company Name',
    feedback:
      '"Ram had worked as a consultant and supported me with adequate Manpower needs when ever required. His patience and attention to information had made him to deliver his best when ever a task is assigned to him. This quality of him had given me a comfort zone to consider him as a preferred vendor where ever I go.I wish him all the best for all his future endeavors !! Regards, Raj.',
    initials: 'Raj',
  },
  {
    name: 'Karthik Balasubramanian ',
    role: 'Associate Director TA (currently: Senior HRBP). ',
    company: 'Tavant Technologies, Bangalore (currently: TCS at USA).',
    feedback:
      '"I have worked with BASCO systems for over 3 years now. And in last 3 years, i have been interacting with Ram for 2 years. Most striking aspect about Ram is his good listening skills. He patiently listens to my requirements, asks questions and gets me the exact talent search i require. There has been times, where i had to blow my cool off and Ram took it on a lighter vein and was a sport. His follow up pattern with candidates on offer to closure is fantastic. Wonder wat strategy he uses?? Though, i have asked him a couple of times, he responds with a smile "Trade Secrets!" ;)With excellent results, coupled with quality and time bound, Ram is a good mix of a Partner to help you close your requirements. Way to go Ram!!"',
    initials: 'KB',
  },
  // {
  //   name: 'Client Name',
  //   role: 'Tavant Technologies, Bangalore',
  //   company: 'Company Name',
  //   feedback:
  //     '"[Their testimonial or feedback about working with you — what made the experience exceptional, the results delivered, and why they would recommend you.]"',
  //   initials: 'CN',
  // },
  // {
  //   name: 'Client Name',
  //   role: 'Job Title',
  //   company: 'Company Name',
  //   feedback:
  //     '"[Their testimonial or feedback about working with you — what made the experience exceptional, the results delivered, and why they would recommend you.]"',
  //   initials: 'CN',
  // },
]

export default function ClientAppreciation() {
  const ref = useReveal()
  const [active, setActive] = useState(0)

  return (
    <section id="appreciation" ref={ref} className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-20">
          {/* <span className="text-[11px] tracking-[0.4em] uppercase text-accent">06</span> */}
          <div className="w-12 h-px bg-accent/40" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-cream/30">Client Appreciation</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="reveal-left">
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
              What Clients
              <br />
              <em className="text-accent">Say</em>
            </h2>
            <p className="text-sm text-cream/30 font-light leading-relaxed max-w-sm">
              Relationships built on trust, results, and genuine care for every client's success.
            </p>

            {/* Selector tabs */}
            <div className="mt-12 space-y-2">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-5 py-4 border transition-all duration-300 flex items-center gap-4 ${
                    active === i
                      ? 'border-accent/40 bg-accent/5'
                      : 'border-cream/5 hover:border-cream/10 bg-transparent'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-colors duration-300 ${
                      active === i ? 'bg-accent text-charcoal' : 'bg-cream/5 text-cream/30'
                    }`}
                  >
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <p className={`text-sm transition-colors duration-300 ${active === i ? 'text-cream' : 'text-cream/40'}`}>
                      {t.name}
                    </p>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-cream/20">{t.company}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Active testimonial */}
          <div className="reveal-right" style={{ transitionDelay: '0.2s' }}>
            <div className="sticky top-32">
              {/* Quote mark */}
              <span className="font-display text-[120px] leading-none text-accent/10 block -mb-8 font-light">
                "
              </span>

              <div
                key={active}
                className="transition-all duration-500"
                style={{ animation: 'fadeUp 0.5s ease' }}
              >
                <p className="font-display text-2xl md:text-3xl text-cream/80 font-light leading-relaxed italic">
                  {testimonials[active].feedback}
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-xs text-accent">
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <p className="text-sm text-cream/70 font-medium">{testimonials[active].name}</p>
                    <p className="text-xs text-cream/30 tracking-wide">
                      {testimonials[active].role} · {testimonials[active].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex gap-2 mt-10">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-px transition-all duration-300 ${
                      active === i ? 'w-8 bg-accent' : 'w-4 bg-cream/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}