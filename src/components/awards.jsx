import useReveal from './useReveal'

const awards = [
  {
  rank: '01',
  title: 'Best Places to Work',
  body: 'Awarded Organisation',
  year: '20XX & 20XX',
  description: 'Consecutive recognition for building a culture of excellence and employee engagement.',
  },
  {
    rank: '02',
    title: 'Great Place to Work — India',
    body: 'Great Place to Work® Institute',
    year: '20XX & 20XX',
    description: 'Two consecutive years of recognition reflecting outstanding workplace culture.',
  },
  {
    rank: '03',
    title: 'European Software Testing Awards — Finalist',
    body: 'ESTA',
    year: '2022',
    description: 'Global recognition for outreach, marketing, and brand positioning initiatives.',
  },
]

export default function Awards() {
  const ref = useReveal()

  return (
    <section id="awards" ref={ref} className="py-32 bg-[#111111] relative overflow-hidden">
      {/* Background large text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20vw] leading-none text-cream/1.5 select-none pointer-events-none font-light">
        Honours
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-20">
          {/* <span className="text-[11px] tracking-[0.4em] uppercase text-accent">05</span> */}
          <div className="w-12 h-px bg-accent/40" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-cream/30">Awards &amp; Recognition</span>
        </div>

        <h2 className="reveal font-display text-5xl md:text-6xl font-light mb-20 leading-tight">
          Top <em className="text-accent">Recognitions</em>
        </h2>

        {/* Awards list */}
        <div className="space-y-0">
          {awards.map((award, i) => (
            <div
              key={i}
              className="reveal group relative border-t border-cream/5 last:border-b hover:border-accent/20 transition-colors duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 py-10 px-2">
                {/* Rank */}
                <span className="font-display text-5xl text-accent/10 group-hover:text-accent/20 transition-colors duration-300 font-light w-16 shrink-0">
                  {award.rank}
                </span>

                {/* Title block */}
                <div className="flex-1">
                  <h3 className="font-display text-3xl md:text-4xl text-cream font-light group-hover:text-accent transition-colors duration-400">
                    {award.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    <span className="text-xs tracking-[0.2em] uppercase text-cream/30">{award.body}</span>
                    <span className="w-1 h-1 rounded-full bg-accent/30" />
                    <span className="text-xs tracking-[0.2em] uppercase text-accent/50">{award.year}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="md:max-w-xs text-sm text-cream/40 leading-relaxed font-light">
                  {award.description}
                </p>

                {/* Arrow */}
                <span className="text-[#c9a84c]/0 group-hover:text-accent/60 transition-all duration-300 text-xl shrink-0">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}