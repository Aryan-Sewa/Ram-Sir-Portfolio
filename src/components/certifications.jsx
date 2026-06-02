import useReveal from './useReveal'

const certs = [
  { title: 'ISO Certification Lead', 
    issuer: 'Organisation Name', 
    year: '20XX',
    icon: '◆',
  },
  { title: 'CMMI Certification', 
    issuer: 'Organisation Name', 
    year: '20XX',
    icon: '◆',
  },
  // {
  //   title: 'Certification Name',
  //   issuer: 'Issuing Organisation',
  //   year: '20XX',
  //   id: 'Credential ID: XXXXXXX',
  //   icon: '◆',
  // },
  // {
  //   title: 'Certification Name',
  //   issuer: 'Issuing Organisation',
  //   year: '20XX',
  //   id: 'Credential ID: XXXXXXX',
  //   icon: '◆',
  // },
]

export default function Certifications() {
  const ref = useReveal()

  return (
    <section id="certifications" ref={ref} className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-20">
          {/* <span className="text-[11px] tracking-[0.4em] uppercase text-accent">04</span> */}
          <div className="w-12 h-px bg-accent/40" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-cream/30">Certifications</span>
        </div>

        <h2 className="reveal font-display text-5xl md:text-6xl font-light mb-4 leading-tight">
          Credentials &amp;
          <br />
          <em className="text-accent">Qualifications</em>
        </h2>
        <p className="reveal text-sm text-cream/30 tracking-wide mb-16 max-w-md font-light">
          Recognised certifications and professional development milestones.
        </p>

        {/* Cert Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/5">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="reveal group bg-charcoal p-8 hover:bg-surface transition-all duration-400 cursor-default"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Icon */}
              <span className="text-accent/30 text-2xl group-hover:text-accent/60 transition-colors duration-300">
                {cert.icon}
              </span>

              {/* Year badge */}
              <div className="mt-6 mb-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-accent/50 border border-accent/20 px-2 py-1">
                  {cert.year}
                </span>
              </div>

              <h3 className="font-display text-xl text-cream font-light leading-snug mb-2">
                {cert.title}
              </h3>
              <p className="text-xs tracking-[0.15em] uppercase text-cream/40 mb-3">
                {cert.issuer}
              </p>
              <p className="text-[10px] text-cream/20 font-mono">{cert.id}</p>

              {/* Bottom accent line */}
              <div className="mt-6 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}