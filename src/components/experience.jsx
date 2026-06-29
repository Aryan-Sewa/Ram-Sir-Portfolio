import useReveal from './useReveal'

const timelineItems = [
  {
    year: '2002-2006',
    title: 'Team Leader Operations',
    company: 'Net Vision Cybertech ',
    description: "My career began with a leading US-based BPO, where I developed strong operational and people-management skills, eventually leading a high-performing team of 20+ members and contributing to service excellence and business growth. ",
    tags: ['Recruitment', 'Business Growth', 'Talent Acquisition Leadership'],
  },
  {
    year: '2006-2012',
    title: 'Resource Manager Global Recruitment ',
    company: 'Compu Vision',
    description: "As a key member of Compu Vision Consulting USA's India operations, I led end-to-end recruitment, talent acquisition, and business development initiatives that significantly contributed to the companys growth. Over three years, I helped scale the organization from 5 to over 50 employees by building strong recruitment processes, leading hiring teams, and aligning talent strategies with business objectives. I successfully recruited and placed more than 80 software professionals for US operations through H-1B sponsorship programs and conducted large-scale recruitment drives across major Indian cities, including Chennai, Bangalore, Hyderabad, Mumbai, Delhi, and Pune. My contributions in recruitment leadership, team management, marketing, and international talent acquisition strengthened the companys market presence and supported its expansion in both India and the United States.",
    tags: ['Reqruiter', 'Freshers-Lead'],
  },
  {
    year: '2012-2015',
    title: 'Director & Founder',
    company: 'Quspec Consulting Pvt Ltd',
    description: 'This venture marked a significant milestone in my career, serving as my first successful entrepreneurial endeavor after 12 years of experience in recruitment, operations, team management, and business development. Through the acquisition and strategic rebranding of the company as Quspec Consulting, I successfully led and grew the organization for over four years, building a strong market presence. This experience provided comprehensive exposure to business ownership, including strategy, client acquisition, recruitment, operations, financial management, and organizational growth, while strengthening my ability to lead and scale a business independently.',
    tags: ['Founder', 'Revolutionist'],
  },
  {
    year: '2015-2022',
    title: 'Group CEO ',
    company: 'SAM Business Group',
    description: "As Group CEO of a diversified conglomerate with over 1,000 employees across Shipping & Logistics, IT Consulting, E-Commerce, and Consumer Products, I led corporate strategy, business growth, operational excellence, and P&L management across multiple business verticals. I drove market expansion, digital transformation, leadership development, and stakeholder engagement, contributing to sustained growth and organizational performance. Additionally, as an Advisor and later Board Director of a fast-growing IT startup, I played a key role in scaling operations, strengthening HR and business processes, expanding international operations, securing major clients, and supporting the company's achievement of ISO certification, 'Great Place to Work' recognition, and international industry accolades.",
    tags: ['CEO', 'Team-Carry'],
  },
  {
    year: '2018-2024',
    title: 'Director of Marketing & Operations ',
    company: 'IT Start-up',
    description: 'Has been a part of an IT services start-up since their inception and helped them scale up from 15 employees to 150 employees in a span of 5 yrs..  signed up 3 major client accounts and helped them start their 1st overseas branch in Singapore',
    tags: ['Next level CEO', 'Team-Carry'],
  },
  {
    year: '2024 - till Date',
    title: ' CEO & Co-Founder ',
    company: 'Teccity Labs Pvt Ltd',
    description: "Founded and scaled an international IT services startup specializing in Software Testing, DevOps, Full-Stack Development, and Digital Transformation solutions for global clients. Led the delivery of innovative technology services and products across diverse industries while driving the company's evolution into a niche provider of Digital Accessibility Services. Guided by a mission to digitally transform 1 million businesses, the organization empowers enterprises, SMEs, and startups with scalable solutions that enhance efficiency, accessibility, and long-term growth.",
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
          <span className="text-[11px] tracking-[0.4em] uppercase t-cream/30">Experience & Achievements</span>
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
                  <div className="w-8 h-8 rounded-full border-2 border-accent bg-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-[12px] tracking-[0.2em] text-accent/70 mt-2 whitespace-nowrap hidden md:block">
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

                    <h3 className="font-display text-2xl t-cream mt-1 font-light">
                      {item.title}
                    </h3>
                    <p className="text-xs tracking-[0.2em] uppercase text-accent/60 mt-1 mb-4">
                      {item.company}
                    </p>
                    <p className="text-sm t-cream/50 leading-relaxed font-light">
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