import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Award,
  BookOpen,
  Check,
  ChevronRight,
  Code2,
  Copy,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  MoveUpRight,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'
import { Github, Linkedin } from './components/BrandIcons.jsx'
import { person, projects, highlights, research, skills, certifications } from './data/site.js'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'About', href: '#about' },
]

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Manoj Sunkara — home">
      <span className="brand-mark">m<span>.</span></span>
      <span className="brand-word">manoj<span>/</span>dev</span>
    </a>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const targets = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-26% 0px -62% 0px' }
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="nav-shell container">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className={active === item.href ? 'nav-active' : ''}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
            <button className="mobile-menu-btn" type="button" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((state) => !state)}>
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      {isOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>{item.label}<ArrowUpRight size={17} /></a>)}
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact <ArrowUpRight size={17} /></a>
        </nav>
      )}
    </>
  )
}

function SectionHeading({ tag, title, children, accent }) {
  return (
    <div className="section-heading" data-reveal>
      <div className="eyebrow"><span className="eyebrow-dash" />{tag}</div>
      <h2>{title}{accent && <> <span className="text-accent">{accent}</span></>}</h2>
      {children && <p className="section-description">{children}</p>}
    </div>
  )
}

function TerminalWindow() {
  return (
    <div className="hero-window" aria-label="Developer terminal illustration">
      <div className="window-top">
        <div className="window-dots"><i /><i /><i /></div>
        <div className="window-title"><Terminal size={13} /> manoj — zsh</div>
        <div className="window-top-end">⌘ K</div>
      </div>
      <div className="window-body">
        <div className="terminal-muted">// the person behind the projects</div>
        <div><span className="terminal-purple">const</span> <span className="terminal-cyan">developer</span> = {'{'}</div>
        <div className="terminal-indent"><span className="terminal-blue">name</span>: <span className="terminal-yellow">'Manoj Kumar Sunkara'</span>,</div>
        <div className="terminal-indent"><span className="terminal-blue">focus</span>: [</div>
        <div className="terminal-indent-more"><span className="terminal-yellow">'AI agents'</span>, <span className="terminal-yellow">'RAG systems'</span>,</div>
        <div className="terminal-indent-more"><span className="terminal-yellow">'Full-stack engineering'</span></div>
        <div className="terminal-indent">],</div>
        <div className="terminal-indent"><span className="terminal-blue">basedIn</span>: <span className="terminal-yellow">'Hyderabad'</span>,</div>
        <div className="terminal-indent"><span className="terminal-blue">curiosity</span>: <span className="terminal-purple">Infinity</span></div>
        <div>{'}'}</div>
        <div className="terminal-command"><span className="terminal-green">➜</span> <span className="terminal-cyan">~</span> npm run build-future</div>
        <div className="terminal-success"><Check size={14} strokeWidth={2.5} /> Systems thinking. Human impact. <span className="terminal-cursor" /></div>
      </div>
      <div className="window-bottom"><span><span className="tiny-dot" /> ALL SYSTEMS READY</span><span>UTF-8 &nbsp; · &nbsp; JSX</span></div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-availability"><span className="status-pulse" /> <span>AI / ML ENGINEER <span className="avail-separator">·</span> RESEARCHER <span className="avail-separator">·</span> BUILDER</span></div>
          <div className="hero-overline">Hi, I'm Manoj Kumar Sunkara <span className="wave">✳</span></div>
          <h1>Building<br />intelligence into<br /><span>real-world systems<span className="hero-period">.</span></span></h1>
          <p className="hero-subtitle">{person.intro}</p>
          <div className="hero-buttons">
            <a href="#projects" className="button button-primary">Explore my work <ArrowUpRight size={18} /></a>
            <a href="/resume.pdf" className="button button-secondary" download="Manoj_Kumar_Sunkara_Resume.pdf">Download résumé <Download size={17} /></a>
          </div>
          <div className="hero-meta"><MapPin size={15} /> {person.location} <span className="hero-meta-divider" /> <a href={person.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={person.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={person.socials.leetcode} target="_blank" rel="noopener noreferrer" className="leetcode-link" aria-label="LeetCode"><Code2 size={19} /></a></div>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-one" aria-hidden="true" /><div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="floating-note float-top"><span className="float-bullet" /> <span>Currently exploring <strong>what's next in AI</strong></span><Sparkles size={16} /></div>
          <TerminalWindow />
          <div className="floating-stat"><div className="floating-stat-icon"><Code2 size={17} /></div><div><strong>700<span>+</span></strong><small>DSA problems solved</small></div><span className="floating-spark">✳</span></div>
        </div>
      </div>
      <div className="container hero-bottom">
        <a className="scroll-indicator" href="#projects"><span className="scroll-arrow"><ArrowDown size={16} /></span> SCROLL TO EXPLORE</a>
        <div className="hero-bottom-rule" />
        <span className="hero-bottom-caption">DESIGN. DEVELOP. DEPLOY.</span>
      </div>
    </section>
  )
}

function TechStrip() {
  const tools = ['PYTHON', 'LANGCHAIN', 'REACT', 'DOCKER', 'QDRANT', 'NODE.JS', 'KUBERNETES', 'POSTGRESQL']
  return (
    <div className="tech-strip" aria-label="Technologies I work with">
      <div className="tech-strip-inner">
        {[0, 1].map((round) => <div className="tech-group" key={round} aria-hidden={round === 1}>
          {tools.map((tool) => <span className="tech-item" key={`${round}-${tool}`}><span className="tech-star">✳</span>{tool}</span>)}
        </div>)}
      </div>
    </div>
  )
}

function MedicalVisual() {
  return (
    <div className="project-visual medical-visual" aria-hidden="true">
      <div className="art-label"><span className="art-label-icon"><ShieldCheck size={13} /></span> agent.pipeline <span className="art-status"><i /> ACTIVE</span></div>
      <div className="medical-chain">
        <div className="med-document">
          <span className="med-doc-icon">✚</span>
          <div className="med-doc-label">medical_record.pdf</div>
          <div className="med-line wide" /><div className="med-line medium" /><div className="med-line small" /><div className="med-line wide" />
        </div>
        <div className="med-connector"><div className="med-connector-line" /><div className="med-connector-node"><ArrowRight size={15} /></div><div className="med-connector-line" /></div>
        <div className="med-brain"><div className="brain-ring brain-ring-a" /><div className="brain-ring brain-ring-b" /><Network size={35} strokeWidth={1.4} /><span>RAG + TOOLS</span></div>
        <div className="med-connector"><div className="med-connector-line" /><div className="med-connector-node"><ArrowRight size={15} /></div><div className="med-connector-line" /></div>
        <div className="med-output"><div className="med-output-title"><Sparkles size={13} /> Structured insight</div><div className="med-output-row"><i /> Symptoms <Check size={12} /></div><div className="med-output-row"><i /> Diagnostics <Check size={12} /></div><div className="med-output-row"><i /> Treatments <Check size={12} /></div></div>
      </div>
      <div className="medical-foot"><span>01 <i /> DOCUMENTS</span><span>02 <i /> RETRIEVAL</span><span>03 <i /> ANSWERS</span></div>
    </div>
  )
}

function InstitutionalVisual() {
  return (
    <div className="project-visual institutional-visual" aria-hidden="true">
      <div className="art-label">knowledge.graph <span className="art-status"><i /> CONNECTED</span></div>
      <svg className="graph-art" viewBox="0 0 580 245" role="presentation" preserveAspectRatio="xMidYMid meet">
        <defs><linearGradient id="graph-line" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a4a4ff" stopOpacity=".65"/><stop offset="1" stopColor="#a4ffcb" stopOpacity=".45"/></linearGradient></defs>
        <g fill="none" stroke="url(#graph-line)" strokeWidth="1.4" strokeDasharray="4 5">
          <path d="M289 122 L130 51 M289 122 L446 51 M289 122 L115 186 M289 122 L456 190 M130 51 L446 51 M115 186 L456 190" />
        </g>
        <g fontFamily="'DM Mono', monospace" textAnchor="middle">
          <circle cx="289" cy="122" r="55" fill="#252e4a" stroke="#a9b7ff" strokeOpacity=".8"/><circle cx="289" cy="122" r="44" fill="#313f62" stroke="#a9b7ff" strokeOpacity=".4"/>
          <text x="289" y="115" fill="#e2e6ff" fontWeight="600" fontSize="17">QWEN</text><text x="289" y="136" fill="#b5c0ff" fontSize="13">2.5 LLM</text>
          <g fill="#1a2631" stroke="#88c9bc"><rect x="76" y="28" width="108" height="46" rx="12"/><rect x="391" y="28" width="113" height="46" rx="12"/><rect x="57" y="164" width="117" height="46" rx="12"/><rect x="395" y="167" width="119" height="46" rx="12"/></g>
          <g fill="#d5f1e6" fontSize="13"><text x="130" y="56">Web crawl</text><text x="447" y="56">Embeddings</text><text x="115" y="192">Qdrant DB</text><text x="454" y="195">Grounded Q&A</text></g>
          <g fill="#b0ffcd"><circle cx="130" cy="28" r="3"/><circle cx="447" cy="28" r="3"/><circle cx="115" cy="164" r="3"/><circle cx="454" cy="167" r="3"/></g>
        </g>
      </svg>
      <div className="graph-footer"><span><span className="tiny-dot" /> LOCAL INFERENCE</span><span>SEMANTIC SEARCH →</span></div>
    </div>
  )
}

function QuickDineVisual() {
  return (
    <div className="project-visual quickdine-visual" aria-hidden="true">
      <div className="qd-background-glow" />
      <div className="qd-ui">
        <div className="qd-topbar"><div className="qd-logo"><span>✳</span> quickdine</div><div className="qd-avatar">M</div></div>
        <div className="qd-card-intro"><small>MAKE A RESERVATION</small><strong>Your next table, just a tap away.</strong></div>
        <div className="qd-booking-row"><div className="qd-field"><small>DATE</small><strong>Find a table</strong></div><span className="qd-field-divider" /><div className="qd-field"><small>PARTY SIZE</small><strong>2 people <span>⌄</span></strong></div><div className="qd-search"><ArrowRight size={17} /></div></div>
        <div className="qd-status"><span><Check size={13} /> Secure booking flow</span><span>JWT AUTH · RBAC</span></div>
      </div>
    </div>
  )
}

function ProjectVisual({ kind }) {
  if (kind === 'medical') return <MedicalVisual />
  if (kind === 'institutional') return <InstitutionalVisual />
  return <QuickDineVisual />
}

function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card ${featured ? 'project-card-featured' : ''}`} data-reveal>
      <div className="project-info">
        <div className="project-topline"><span>{project.number} / FEATURED PROJECT</span><span className="project-topline-corner"><ArrowUpRight size={18} /></span></div>
        <div className="project-copy">
          <span className="project-label">{project.label}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          {featured && <p className="project-details">{project.details}</p>}
          <div className="stack-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
        <div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link project-live">Live website <ExternalLink size={16} /><ArrowUpRight size={16} /></a>}<a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">Source code <Github size={16} /><ArrowUpRight size={16} /></a></div>
      </div>
      <ProjectVisual kind={project.visual} />
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading tag="01 / SELECTED WORK" title="Ideas that became" accent="real things.">From LLM-powered knowledge systems to experiences built end-to-end. Here's a selection of what I've built.</SectionHeading>
          <a className="section-aside-link" href={person.socials.github} target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={17} /></a>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} featured={index === 0} />)}
        </div>
      </div>
    </section>
  )
}

function Research() {
  return (
    <section id="research" className="section research-section">
      <div className="container">
        <SectionHeading tag="02 / RESEARCH & RECOGNITION" title="Curious enough to" accent="go deeper.">Research, publications, and recognition at the intersection of machine learning and real-world problems.</SectionHeading>
        <div className="research-grid">
          {research.map((item, index) => (
            <article className="research-card" key={item.name} data-reveal>
              <div className="research-card-top"><span className="research-number">0{index + 1}</span><span className="research-year">{item.year}</span></div>
              <span className="research-kind"><span className="research-kind-dot" /> {item.kind}</span>
              <h3>{item.name}</h3>
              <p className="research-title">{item.title}</p>
              <div className="research-card-bottom"><span>{item.organization}</span><Award size={17} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section id="expertise" className="section expertise-section">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading tag="03 / TOOLKIT" title="The tools behind" accent="the thinking.">A cross-disciplinary stack for taking ideas from prototype to robust implementation.</SectionHeading>
          <div className="expertise-side-mark" aria-hidden="true">{'{ }'}</div>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title} data-reveal>
              <div className="skill-top"><span>{skill.number} / 04</span><span className="skill-plus">+</span></div>
              <h3>{skill.title}</h3><p>{skill.caption}</p>
              <div className="skill-tags">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-layout">
        <div className="about-left">
          <SectionHeading tag="04 / MY JOURNEY" title="Always learning." accent="Always building.">I'm motivated by the possibility of creating technology that is genuinely useful — and by understanding how it works underneath.</SectionHeading>
          <div className="about-stats" data-reveal>
            {highlights.map((item) => <div className="about-stat" key={item.label}><strong>{item.number}</strong><span>{item.label}</span></div>)}
          </div>
          <div className="about-quote" data-reveal><span>“</span><p>Bringing the research mindset and an engineer's practicality to every problem.</p></div>
        </div>
        <div className="about-right">
          <div className="timeline-title">EXPERIENCE & EDUCATION <span className="timeline-title-line" /></div>
          <div className="timeline">
            <div className="timeline-item" data-reveal>
              <div className="timeline-dot"><Code2 size={18} /></div>
              <div className="timeline-content"><div className="timeline-category">EXPERIENCE <span>·</span> NITK SURATHKAL</div><h3>Machine Learning Trainee</h3><div className="timeline-sub">Software & Systems Security Bootcamp <span>·</span> Industry partner: Saviynt</div><p>Led a 5-member team building an anomaly detection system for identity-compromise attacks in authentication and authorization logs. Worked with Python, Pandas, NumPy, and Scikit-learn on data preparation, feature engineering, and analysis.</p></div>
            </div>
            <div className="timeline-item" data-reveal>
              <div className="timeline-dot"><GraduationCap size={19} /></div>
              <div className="timeline-content"><div className="timeline-category">EDUCATION <span>·</span> 2023 — 2027</div><h3>B.E. in AI & Machine Learning</h3><div className="timeline-sub">Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad</div><p>CGPA: 8.89. Building a strong foundation across algorithms, machine learning, software systems, and applied research.</p></div>
            </div>
          </div>
          <div className="certifications" data-reveal><div className="cert-heading"><BookOpen size={17} /> CERTIFICATIONS</div>{certifications.map((cert) => <div className="cert-item" key={cert}><span>{cert}</span><ChevronRight size={15} /></div>)}</div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  async function copyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(person.email)
      } else {
        const el = document.createElement('textarea')
        el.value = person.email
        el.style.position = 'fixed'
        el.style.opacity = '0'
        document.body.appendChild(el)
        el.select()
        const success = document.execCommand('copy')
        document.body.removeChild(el)
        if (!success) throw new Error('Copy failed')
      }
      setCopied(true)
      setCopyError(false)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopyError(true)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-panel" data-reveal>
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-orbit" aria-hidden="true"><span>✳</span></div>
          <div className="eyebrow contact-eyebrow"><span className="eyebrow-dash" />05 / GET IN TOUCH</div>
          <h2>Have something<br /><em>worth building?</em></h2>
          <p>Whether it's an interesting AI problem, a collaboration, or a conversation about the next big idea — I'd love to hear from you.</p>
          <div className="contact-actions"><a className="button button-dark" href={`mailto:${person.email}?subject=Hello%20Manoj`}>Let's connect <ArrowUpRight size={18} /></a><button type="button" className="copy-email" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={18} /> : <Copy size={18} />}{copied ? 'Copied!' : copyError ? 'Use email link' : 'Copy email'}</button></div>
          <a className="contact-email" href={`mailto:${person.email}`}>{person.email} <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Brand />
            <span>Building intelligent experiences with thoughtful engineering. From research prototypes to products that make a difference.</span>
            <div className="footer-socials">
              <a href={person.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={person.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={person.socials.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><Code2 size={18} /></a>
              <a href={`mailto:${person.email}`} aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h3>EXPLORE</h3>
            <a href="#home">Home</a>
            <a href="#projects">Selected projects</a>
            <a href="#research">Research & awards</a>
            <a href="#expertise">My expertise</a>
          </div>
          <div className="footer-col">
            <h3>MORE</h3>
            <a href="#about">About me</a>
            <a href="#contact">Get in touch</a>
            <a href="/resume.pdf" download="Manoj_Kumar_Sunkara_Resume.pdf">Download résumé <Download size={13} /></a>
            <a href={projects.find((p) => p.id === 'quickdine')?.live} target="_blank" rel="noopener noreferrer">QuickDine live <ArrowUpRight size={13} /></a>
          </div>
          <div className="footer-col footer-col-contact">
            <h3>SAY HELLO</h3>
            <p>Have an idea, an opportunity, or a challenging problem? Let's build something meaningful.</p>
            <a href={`mailto:${person.email}`} className="footer-contact-email">{person.email} <ArrowUpRight size={13} /></a>
            <p><MapPin size={13} style={{ verticalAlign: 'middle', marginRight: 6 }} />{person.location}</p>
          </div>
        </div>
        <div className="footer-end">
          <span>© {new Date().getFullYear()} Manoj Kumar Sunkara. All rights reserved.</span>
          <div className="footer-end-right"><span>DESIGNED WITH INTENTION · BUILT WITH REACT</span><a href="#home">Back to top <ArrowUp size={15} /></a></div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })
    elements.forEach((el) => {
      el.classList.add('will-reveal')
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const progress = document.querySelector('.scroll-progress')
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progress) progress.style.transform = `scaleX(${max ? window.scrollY / max : 0})`
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <main><Hero /><TechStrip /><Projects /><Research /><Expertise /><About /><Contact /></main>
      <Footer />
    </>
  )
}
