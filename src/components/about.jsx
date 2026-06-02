import useReveal from './useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-20">
          {/* <span className="text-[11px] tracking-[0.4em] uppercase text-accent">02</span> */}
          <div className="w-12 h-px bg-accent/40" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-accent">About Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT — Section heading */}
          <div className="reveal-left" style={{ transitionDelay: '0.1s' }}>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              Career
              <br />
              <em className="text-accent">Journey</em>
            </h2>

            <div className="mt-8 w-16 h-px bg-accent" />

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                { number: '20+', label: 'Years Experience' },
                { number: '3',   label: 'Ventures Built' },
                { number: '3000+', label: 'Professionals Trained' },
                { number: '2000+', label: 'Students Mentored' },
              ].map((stat) => (
                <div key={stat.label} className="group">
                  <p className="font-display text-4xl t-accent font-light">{stat.number}</p>
                  <p className="text-xs t-faint tracking-[0.15em] uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Story */}
          <div className="reveal-right space-y-8" style={{ transitionDelay: '0.2s' }}>
            <p className="text-lg t-muted leading-relaxed font-light">
              "A seasoned management professional and thought leader, 
              I bring nearly two decades of cross-industry experience spanning Information Technology, 
              HR Consulting, and Shipping & Logistics — with a proven ability to build, scale, and lead high-performing teams."
            </p>

            <p className="text-base t-faint leading-relaxed font-light">
              "I am a strategic, revenue-focused leader with deep expertise in 
              shaping and executing business strategies, strengthening client relationships, 
              and aligning operations with organisational goals to deliver measurable outcomes."
            </p>

            <p className="text-base t-faint leading-relaxed font-light">
              "As an entrepreneur, trainer, and public speaker, 
              I have delivered sessions at over 40 colleges across India and trained 3,000+ corporate leaders
              — driven by a deep commitment to continuous learning and meaningful impact."
            </p>

            {/* Education cards */}
            <div className="space-y-4 pt-4">
              {[
                { year: '1999–2003', degree: 'Bachelor of Engineering — Electrical & Electronics', institution: 'Madras University' }
              ].map((edu, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-5 border border-cream/5 hover:border-accent/20 transition-colors duration-300 bg-surface/50"
                >
                  <span className="text-[11px] tracking-[0.2em] t-accent/60 mt-1 shrink-0">{edu.year}</span>
                  <div>
                    <p className="text-sm font-medium t-primary/80">{edu.degree}</p>
                    <p className="text-xs t-primary/30 mt-1 tracking-wide">{edu.institution}</p>
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