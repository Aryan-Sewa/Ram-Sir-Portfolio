import useReveal from './useReveal'

const contactLinks = [
  {
    type: 'Phone',
    value: '+91 99627 49311',
    href: 'tel:+919962749311',
    icon: '✆',
  },
  {
    type: 'Email',
    value: 'ramchandar@teccitylabs.co.in',
    href: 'mailto:ramchandar@teccitylabs.co.in',
    icon: '✉',
  },
  {
    type: 'LinkedIn',
    value: 'linkedin.com/in/Ramchandar-Duraisamy',
    href: 'https://linkedin.com/in/Ramchandar-Duraisamy',
    icon: 'in',
  },
]

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" ref={ref} className="py-32 bg-charcoal relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[18vw] leading-none t-faint/[0.15] font-light whitespace-nowrap "
        style={{ color: 'var(--text-faint)', opacity: 0.07 }}>
          Let's Talk
        </span>
      </div>

      {/* Top accent border */}
      <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-20">
          {/* <span className="text-[11px] tracking-[0.4em] uppercase text-[#0d9488]"></span> */}
          <div className="w-12 h-px bg-accent/40" />
          <span className="text-[11px] tracking-[0.4em] uppercase text-muted/30">Get in Touch</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-start">

          {/* LEFT */}
          <div className="reveal-left">
            <h2 className="font-display text-5xl md:text-4xl lg:text-5xl font-light leading-tight">
              Start a
              <br />
              <em className="text-accent">Conversation</em>
            </h2>
            <p className="mt-8 text-base text-primary leading-relaxed font-light max-w-sm">
              Whether you're exploring a partnership, seeking a 
              stratergic leader, or looking for a mentor - every
              great outcome starts with one conversation.
            </p>
          </div>

          {/* RIGHT — Contact links */}
          <div className="reveal-right space-y-6" style={{ transitionDelay: '0.15s' }}>
            {contactLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.type === 'LinkedIn' ? '_blank' : undefined}
                rel="noreferrer"
                className="group flex items-center gap-6 p-6 border border-cream/5 hover:border-accent/30 bg-surface/0 hover:bg-surface/80 transition-all duration-400"
              >
                {/* Icon */}
                <div className="w-12 h-12 shrink-0 border border-accent/20 group-hover:border-accent/60 group-hover:bg-accent/5 flex items-center justify-center transition-all duration-300">
                  <span className="text-sm text-accent/60 group-hover:text-accent font-medium transition-colors duration-300">
                    {link.icon}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-1">
                    {link.type}
                  </p>
                  <p className="text-sm text-faint group-hover:text-cream transition-colors duration-300">
                    {link.value}
                  </p>
                </div>

                {/* Arrow */}
                <span className="text-accent/0 group-hover:text-accent transition-all duration-300 transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            ))}

            {/* Availability note */}
            <div className="flex items-center gap-3 pt-4">
              <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
              <span className="text-xs text-muted/30 tracking-wide">
                Currently open to new opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="mt-32 pt-8 border-t border-cream/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xl text-accent/60 italic tracking-widest">RAMCHANDAR D</span>
          <p className="text-[10px] tracking-[0.3em] uppercase text-faint/15">
            © {new Date().getFullYear()} · Founder & CEO · TecCity Labs
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-faint/15">
            Built with intention
          </p>
        </div>
      </div>
    </section>
  )
}