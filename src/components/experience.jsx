import useReveal from './useReveal'

const timelineItems = [
  {
    year: '2002-2006',
    title: 'Team Leader Operations',
    company: ' Net Vision Cyber Tech ',
    description: 'A Leading US based BPO, where I started here as a BPO servicing and took lead of a team of 20+ members reporting at service',
    tags: ['BPO', 'Team Visionary'],
  },
  {
    year: '2006-2012',
    title: 'Resource Manager Global Recruitment ',
    company: ' Basco System Pvt Ltd',
    description: 'A Subisidiary of Compu Vision Consulting USA where my communication skills were acknowledge and recongnised as an important asset to for reqruitment.',
    tags: ['Reqruiter', 'Freshers-Lead'],
  },
  {
    year: '2012-2015',
    title: 'Director & Founder',
    company: 'Quspec Consulting Pvt Ltd',
    description: 'This where i put i experinces for testing out my capabilities to stand on my own and lead a whole company.',
    tags: ['Founder', 'Revolutionist'],
  },
  {
    year: '2015-2018',
    title: 'Group CEO ',
    company: 'SAM Business Group',
    description: ' a 1000 + employee business conglomerate in to Shipping & Logistics, Beauty Product, IT Consulting and Ecommerce, where i merged to extend my networks and grow exponentially',
    tags: ['CEO', 'Team-Carry'],
  },
  {
    year: '2018-2024',
    title: 'Director of Marketing & Operations ',
    company: 'IT Start-up',
    description: 'started and IT services start-up and lead the whole team.',
    tags: ['Next level CEO', 'Team-Carry'],
  },
  {
    year: '2024 - till Date',
    title: ' CEO & Co-Founder ',
    company: 'Teccity Labs Pvt Ltd',
    description: 'started and IT services start-up in international level and completed many projects along side with interesting products.',
    tags: ['International', 'Divide-n-Conquer'],
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" ref={ref} className="py-32 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6 md:px-16">

        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-20">
          {/* <span className="text-[11px] tracking-[0.4em] uppercase text-accent">03</span> */}
          <div className="w-12 h-px bg-accent/40" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-cream/30">Experience & Achievements</span>
        </div>

        <h2 className="reveal font-display text-5xl md:text-6xl font-light mb-20 leading-tight">
          The <em className="text-accent">Timeline</em>
        </h2>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-accent/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {timelineItems.map((item, i) => (
              <div
                key={i}
                className={`reveal relative flex items-start gap-8 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Year bubble (mobile: left side, desktop: center) */}
                <div className="shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 flex flex-col items-center z-10">
                  <div className="w-8 h-8 rounded-full border-2 border-accent bg-charcoal flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] text-accent/70 mt-2 whitespace-nowrap hidden md:block">
                    {item.year}
                  </span>
                </div>

                {/* Card — alternates left/right on desktop */}
                <div
                  className={`flex-1 md:w-[45%] md:max-w-[45%] ${
                    i % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                  }`}
                >
                  <div className="group p-6 bg-surface border border-cream/5 hover:border-accent/20 transition-all duration-400">
                    {/* Mobile year */}
                    <span className="text-[10px] tracking-[0.2em] text-accent/60 md:hidden">{item.year}</span>

                    <h3 className="font-display text-2xl text-cream mt-1 font-light">
                      {item.title}
                    </h3>
                    <p className="text-xs tracking-[0.2em] uppercase text-accent/60 mt-1 mb-4">
                      {item.company}
                    </p>
                    <p className="text-sm text-cream/50 leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 bg-accent/5 text-accent/50 border border-accent/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}