'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import portrait from '../assets/hero-portrait.jpg'
import avatar from '../assets/nav-avatar.jpg'

const PROJECTS = [
  {
    name: 'TripVault',
    tag: 'travel-memory-journal',
    desc:
      'A full-stack travel memory journal for creating trips, uploading photos, rating experiences, and sharing travel profiles publicly.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
    repo: 'https://github.com/shrikant1228/tripvault',
    demo: 'https://tripvault-pearl.vercel.app/',
    hue: '35, 90%, 60%',
  },
  {
    name: 'Logshield',
    tag: 'logshield',
    desc:
      'An AI-powered server monitoring and failure prediction system using Flask, Scikit-learn, SHAP, psutil, and Streamlit to flag warning signs before downtime.',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Streamlit'],
    repo: 'https://github.com/shrikant1228/Logshield',
    demo: null,
    hue: '265, 80%, 62%',
  },
  {
    name: 'Faceless HateShield',
    tag: 'anonymous-moderated-chat',
    desc:
      'A deployed MERN application for anonymous message sharing, with REST APIs, a privacy-focused experience, and HateShield moderation.',
    stack: ['MongoDB', 'Express', 'React', 'Node.js'],
    repo: 'https://github.com/shrikant1228/faceless-hateshield',
    demo: 'https://faceless-hateshield-ece7.onrender.com',
    hue: '190, 85%, 55%',
  },
]

const TECHSTACK = [
  'React',
  'Next.js',
  'TypeScript',
  'Java',
  'Python',
  'Node.js',
  'Tailwind CSS',
  'MongoDB',
  'MySQL',
  'Git',
  'GitHub',
  'VS Code',
]

const SKILL_GROUPS: Array<[string, string, string[]]> = [
  ['⌘', 'Languages', ['Java', 'Python', 'JavaScript', 'HTML5', 'CSS3']],
  ['◧', 'Frontend', ['React', 'Next.js', 'Tailwind CSS', 'Responsive UI']],
  ['◨', 'Backend', ['Node.js', 'REST APIs', 'Java Servlets']],
  ['▤', 'Database', ['MongoDB', 'MySQL', 'PostgreSQL']],
  ['✦', 'AI / ML — Learning', ['Python for ML', 'NLP basics', 'Model training']],
  ['◎', 'Tools', ['Git', 'GitHub', 'VS Code', 'Problem Solving']],
]

const ROLES = [
  'Full Stack Developer',
  'ML / AI Enthusiast',
  'CSE Student',
  'Problem Solver',
  'Open Source Learner',
]

const GITHUB_REPO_DESCRIPTIONS: Record<string, string> = {
  Logshield:
    'AI-powered server monitoring and failure prediction with live diagnostics.',
  tripvault:
    'A full-stack travel memory journal for creating, rating, and sharing trips.',
  'faceless-hateshield':
    'Anonymous messaging with privacy-focused UX and toxicity moderation.',
}

export default function HomePage() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [localTime, setLocalTime] = useState('Bengaluru, IN')
  const [repoCount, setRepoCount] = useState('—')
  const [githubRepos, setGithubRepos] = useState<any[]>([])
  const [ghStatus, setGhStatus] = useState('Fetching latest activity…')

  useEffect(() => {
    const bootBar = document.getElementById('boot-bar')
    if (bootBar) {
      bootBar.style.width = '100%'
      const timer = setTimeout(() => {
        const boot = document.getElementById('boot')
        if (boot) boot.classList.add('hidden')
      }, 1900)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const time = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata',
      })
      setLocalTime(`${time}, Bengaluru`)
    }

    updateTime()
    const interval = setInterval(updateTime, 30000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const typedEl = document.getElementById('typed-role')
    if (!typedEl) return

    let roleIndex = 0
    let charIndex = 0
    let deleting = false

    const typeLoop = () => {
      const current = ROLES[roleIndex]
      if (!deleting) {
        charIndex += 1
        typedEl.textContent = current.slice(0, charIndex)
        if (charIndex === current.length) {
          deleting = true
          setTimeout(typeLoop, 1400)
          return
        }
      } else {
        charIndex -= 1
        typedEl.textContent = current.slice(0, charIndex)
        if (charIndex === 0) {
          deleting = false
          roleIndex = (roleIndex + 1) % ROLES.length
        }
      }

      setTimeout(typeLoop, deleting ? 35 : 65)
    }

    typeLoop()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  }, [])

  useEffect(() => {
    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('[data-count]')
              .forEach((el: Element) => {
                const target = Number((el as HTMLElement).dataset.count)
                if (Number.isFinite(target)) {
                  let current = 0
                  const step = Math.max(1, Math.ceil(target / 40))
                  const interval = setInterval(() => {
                    current += step
                    if (current >= target) {
                      current = target
                      clearInterval(interval)
                    }
                    ;(el as HTMLElement).textContent = String(current)
                  }, 30)
                }
              })
            statObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 },
    )

    document.querySelectorAll('#stats').forEach((el) => statObserver.observe(el))
  }, [])

  useEffect(() => {
    const learnObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.lbar-fill')
              .forEach((el: Element) => {
                const width = (el as HTMLElement).dataset.width ?? '0%'
                ;(el as HTMLElement).style.width = width
              })
            learnObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    document.querySelectorAll('#learning').forEach((el) => learnObserver.observe(el))
  }, [])

  useEffect(() => {
    const nav = document.getElementById('nav')
    const handleScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const dot = document.getElementById('cursor-dot')
    const ring = document.getElementById('cursor-ring')
    const handleMouseMove = (event: MouseEvent) => {
      const hero = document.getElementById('hero')
      if (dot) {
        dot.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`
      }
      if (hero) {
        hero.style.setProperty('--mx', `${event.clientX}px`)
        hero.style.setProperty('--my', `${event.clientY}px`)
      }
    }

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let animationFrame = 0

    const trackMouse = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      handleMouseMove(event)
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ring) {
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      }
      animationFrame = requestAnimationFrame(animateRing)
    }

    const interactiveElements = document.querySelectorAll(
      'a, button, .chip, .skill-card, .proj-card, .contact-link, input',
    )
    const handleEnter = () => ring?.classList.add('hovering')
    const handleLeave = () => ring?.classList.remove('hovering')

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleEnter)
      element.addEventListener('mouseleave', handleLeave)
    })

    window.addEventListener('mousemove', trackMouse)
    animationFrame = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', trackMouse)
      cancelAnimationFrame(animationFrame)
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleEnter)
        element.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  useEffect(() => {
    const loadGithub = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/shrikant1228')
        if (!userRes.ok) throw new Error('GitHub fetch failed')
        const user = await userRes.json()

        const repoCountValue = user.public_repos ?? '—'
        setRepoCount(String(repoCountValue))
        setGhStatus(`Synced with @shrikant1228 — updated just now.`)

        const reposRes = await fetch(
          'https://api.github.com/users/shrikant1228/repos?sort=updated&per_page=4',
        )
        const repos = await reposRes.json()
        if (Array.isArray(repos)) {
          const filtered = repos.filter(
            (repo: any) => repo.name.toLowerCase() !== 'maven1',
          )
          setGithubRepos(filtered)
        }
      } catch {
        setGhStatus('Could not reach GitHub API right now — showing static info instead.')
      }
    }

    void loadGithub()
  }, [])

  useEffect(() => {
    const target = document.getElementById('marquee-track')
    if (!target) return
    const items = [...TECHSTACK, ...TECHSTACK]
    target.innerHTML = items
      .map(
        (item) =>
          `<div class="tech-pill"><span class="dot2"></span>${item}</div>`,
      )
      .join('')
  }, [])

  const handleTerminalSubmit = (
    event: KeyboardEvent | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key !== 'Enter') return

    const currentTarget = event.currentTarget as HTMLInputElement | null
    const raw = (currentTarget?.value || '').trim()
    const termBody = document.getElementById('term-body')
    if (!termBody) return

    const cmdEcho = document.createElement('div')
    cmdEcho.className = 'tout'
    cmdEcho.innerHTML = `<span style="color:var(--success)">shrikant@os</span><span style="color:var(--accent-2)">:~$</span> ${raw}`
    termBody.insertBefore(cmdEcho, inputRef.current?.parentElement ?? null)

    const commandMap: Record<string, string> = {
      help: `Available commands:\n  about      — who is Shrikant\n  skills     — tech I work with\n  projects   — things I've built\n  contact    — how to reach me\n  github     — jump to GitHub\n  clear      — clear the terminal\n  sudo hire shrikant`,
      about: `Shrikant Swami — CSE student, Full Stack Developer, ML/AI enthusiast.\nBased in Bengaluru, India.`,
      skills: `Java, Python, JavaScript, React, Next.js, Node.js, MongoDB, MySQL.\nCurrently learning: Machine Learning & System Design.`,
      projects: PROJECTS.map((p) => `- ${p.name}  →  ${p.repo}`).join('\n'),
      contact: `LinkedIn: linkedin.com/in/shrikant-swami-030985293\nGitHub:   github.com/shrikant1228`,
      github: `Opening github.com/shrikant1228 ...`,
      'sudo hire shrikant': `Access Granted.\nInterview Scheduled :)`,
    }

    if (raw.toLowerCase() === 'clear') {
      termBody.innerHTML = ''
      const row = document.createElement('div')
      row.className = 'tin-row'
      row.innerHTML = '<span class="prompt">shrikant@os</span><span class="path">:~$</span>'
      const input = document.createElement('input')
      input.id = 'term-input'
      input.setAttribute('type', 'text')
      input.setAttribute('autocomplete', 'off')
      input.setAttribute('spellcheck', 'false')
      input.addEventListener('keydown', (domEvent: KeyboardEvent) => handleTerminalSubmit(domEvent))
      row.appendChild(input)
      termBody.appendChild(row)
      return
    }

    if (raw.toLowerCase() === 'github') {
      const output = document.createElement('div')
      output.className = 'tout'
      output.textContent = commandMap.github
      termBody.insertBefore(output, inputRef.current?.parentElement ?? null)
      window.open('https://github.com/shrikant1228', '_blank')
    } else if (commandMap[raw.toLowerCase()]) {
      const output = document.createElement('div')
      output.className = 'tout'
      output.textContent = commandMap[raw.toLowerCase()]
      termBody.insertBefore(output, inputRef.current?.parentElement ?? null)
    } else if (raw.length) {
      const output = document.createElement('div')
      output.className = 'tout'
      output.textContent = `command not found: ${raw}  (type 'help')`
      termBody.insertBefore(output, inputRef.current?.parentElement ?? null)
    }

    if (currentTarget) {
      currentTarget.value = ''
    }
    termBody.scrollTop = termBody.scrollHeight
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('shrikantswami2005@gmail.com')
      const toast = document.getElementById('toast')
      if (toast) {
        toast.textContent = 'Email copied: shrikantswami2005@gmail.com'
        toast.classList.add('show')
        setTimeout(() => toast.classList.remove('show'), 2600)
      }
    } catch {
      // no-op; clipboard access may be blocked in some browsers
    }
  }

  return (
    <main className="portfolio-shell">
      <div id="cursor-dot" />
      <div id="cursor-ring" />

      <div id="boot">
        <div className="boot-box">
          <div className="boot-title">shrikant@os — booting</div>
          <div className="boot-line" style={{ animationDelay: '.1s' }}>
            Loading kernel<span className="ok">&nbsp;OK</span>
          </div>
          <div className="boot-line" style={{ animationDelay: '.35s' }}>
            Mounting Java...<span className="ok">&nbsp;OK</span>
          </div>
          <div className="boot-line" style={{ animationDelay: '.6s' }}>
            Mounting Python...<span className="ok">&nbsp;OK</span>
          </div>
          <div className="boot-line" style={{ animationDelay: '.85s' }}>
            Initializing AI modules...<span className="ok">&nbsp;OK</span>
          </div>
          <div className="boot-line" style={{ animationDelay: '1.1s' }}>
            Connecting to Cloud...<span className="ok">&nbsp;OK</span>
          </div>
          <div className="boot-line" style={{ animationDelay: '1.35s' }}>
            Portfolio ready.<span className="ok">&nbsp;OK</span>
          </div>
          <div className="boot-bar-track">
            <div id="boot-bar" className="boot-bar-fill" />
          </div>
        </div>
      </div>

      <nav id="nav">
        <div className="nav-logo">
          <span className="dot" />
          SHRIKANT<span style={{ color: 'var(--text-dimmer)' }}>.OS</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#journey">GitHub</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className="nav-cta">
          Let&apos;s talk
        </a>
        <button className="nav-toggle" id="nav-toggle" type="button">
          ☰
        </button>
      </nav>

      <div id="mobile-drawer">
        <button className="close-drawer" id="close-drawer" type="button">
          ✕
        </button>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#journey">GitHub</a>
        <a href="#contact">Contact</a>
      </div>

      <section id="hero">
        <div id="hero-grid" />
        <div id="hero-spotlight" />
        <div className="wrap hero-inner">
          <div>
            <div className="eyebrow">
              <span>●</span> Available for opportunities
            </div>
            <h1 className="hero-title">
              Hi, I&apos;m
              <span className="accent-grad">Shrikant.</span>
            </h1>
            <div className="hero-role-line">
              <span className="brace">{'{'}</span>
              <span id="typed-role">Full Stack Developer</span>
              <span className="cursor-blink" />
              <span className="brace">{'}'}</span>
            </div>
            <p className="hero-desc">
              CSE student focused on <b>Forward Deployed Engineering</b>, building
              scalable web applications, and exploring <b>AI/ML at a beginner level</b>
              — one project at a time.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary">
                Explore My Universe ↗
              </a>
              <button type="button" onClick={scrollToContact} className="btn btn-ghost">
                Get in Touch
              </button>
            </div>
            <div className="hero-stats">
              <div className="hstat">
                <div className="num">3+</div>
                <div className="lbl">Projects Shipped</div>
              </div>
              <div className="hstat">
                <div className="num">8.0</div>
                <div className="lbl">CGPA</div>
              </div>
              <div className="hstat">
                <div className="num" id="hero-repo-count">
                  {repoCount === '—' ? '—' : `${repoCount}+`}
                </div>
                <div className="lbl">GitHub Repos</div>
              </div>
              <div className="hstat">
                <div className="num">2027</div>
                <div className="lbl">Grad Year</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <Image src={portrait} alt="Shrikant Swami" priority />
            </div>
            <div className="float-badge badge-location">
              <span className="pulse-dot" />
              <div>
                <div className="city">Currently in</div>
                <div className="time">{localTime}</div>
              </div>
            </div>
            <div className="float-badge badge-terminal">
              <div className="tdots">
                <span />
                <span />
                <span />
              </div>
              <div className="tline">
                <b>&gt;</b> whoami
              </div>
              <div className="tline">shrikant_swami</div>
              <div className="tline">
                <b>&gt;</b> status
              </div>
              <div className="tline">building things.</div>
            </div>
          </div>
        </div>
        <div className="scroll-cue">
          <span>Scroll to explore</span>
          <div className="mouse" />
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-eyebrow">01 · About</div>
            <h2 className="section-title">From curiosity to code.</h2>
            <p className="section-sub">
              A short version of how I got here — and where I&apos;m headed next.
            </p>
          </div>
          <div className="timeline">
            {[
              ['2021', 'Finished schooling', 'Completed SSLC with distinction — first real exposure to how things work under the hood.'],
              ['2023', 'PUC Science, with Distinction', 'Built a foundation in Physics, Chemistry, and Mathematics — the logic that later made programming click.'],
              ['2023', 'Started B.E. in Computer Science', 'East Point College of Engineering and Technology, Bengaluru. Where Java, Python, and web development entered the picture.'],
              ['2024 — 25', 'Went full stack', 'Started building real projects end-to-end — from travel journals to security tooling — and pushing everything to GitHub.'],
              ['Now', 'Moving toward Forward Deployed Engineering', 'Building practical software close to real users and real problems, while exploring AI/ML fundamentals as a beginner.'],
              ['Next', 'Open to opportunities', 'Looking for internships and collaborations where I can build real things that solve real problems.'],
            ].map(([year, title, desc], index) => (
              <div
                key={year}
                className={`tl-item reveal ${index === 4 ? 'current' : ''}`}
              >
                <div className="tl-dot">{index === 4 ? '●' : String(index + 1).padStart(2, '0')}</div>
                <div className="tl-year">{year}</div>
                <div className="tl-title">{title}</div>
                <div className="tl-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-eyebrow">02 · Skills</div>
            <h2 className="section-title">The toolkit.</h2>
            <p className="section-sub">
              Core languages I know well, plus the stack I reach for when building full stack projects.
            </p>
          </div>
          <div className="skill-groups">
            {SKILL_GROUPS.map(([icon, title, chips]) => (
              <div key={title} className="skill-card reveal">
                <div className="sk-icon">{icon}</div>
                <h4>{title}</h4>
                <div className="skill-chips">
                  {(chips as string[]).map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats">
        <div className="wrap">
          <div className="stats-grid">
            <div className="stat-cell reveal">
              <div className="stat-num">
                <span className="accent-grad" data-count="3">0</span>+
              </div>
              <div className="stat-lbl">Projects Built</div>
            </div>
            <div className="stat-cell reveal">
              <div className="stat-num" id="stat-repos">
                <span className="accent-grad">{repoCount === '—' ? '—' : repoCount}</span>
              </div>
              <div className="stat-lbl">GitHub Repositories</div>
            </div>
            <div className="stat-cell reveal">
              <div className="stat-num">
                <span className="accent-grad">8.0</span>
              </div>
              <div className="stat-lbl">CGPA</div>
            </div>
            <div className="stat-cell reveal">
              <div className="stat-num" style={{ fontSize: '20px' }}>
                FDE
              </div>
              <div className="stat-lbl">Current Direction</div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-eyebrow">03 · Projects</div>
            <h2 className="section-title">Things I&apos;ve built.</h2>
            <p className="section-sub">
              A mix of full stack apps, ML experiments, and tools — each one pushed to GitHub.
            </p>
          </div>
          <div className="project-list">
            {PROJECTS.map((project, index) => (
              <div key={project.name} className="proj-card reveal">
                <div
                  className="proj-media"
                  style={{
                    background: `linear-gradient(135deg, hsl(${project.hue}) 0%, rgba(9, 9, 11, 1) 120%)`,
                  }}
                >
                  <span className="glass-tag">{project.tag}</span>
                  <span className="proj-index">0{index + 1}</span>
                </div>
                <div className="proj-body">
                  <h3>{project.name}</h3>
                  <p className="proj-desc placeholder">{project.desc}</p>
                  <div className="proj-stack">
                    {project.stack.map((stackItem) => (
                      <span key={stackItem} className="chip">
                        {stackItem}
                      </span>
                    ))}
                  </div>
                  <div className="proj-links">
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      ⌥ GitHub
                    </a>
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        ↗ Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="techstack">
        <div className="wrap" style={{ marginBottom: '36px' }}>
          <div className="section-eyebrow reveal">04 · Stack</div>
          <h2 className="section-title reveal">Built with.</h2>
        </div>
        <div className="marquee">
          <div id="marquee-track" className="marquee-track" />
        </div>
      </section>

      <section id="github">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-eyebrow">05 · GitHub</div>
            <h2 className="section-title">Live from GitHub.</h2>
            <p className="section-sub">{ghStatus}</p>
          </div>
          <div className="gh-panel reveal">
            <Image className="gh-avatar" src={avatar} alt="GitHub avatar" />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '16px' }}>
                @shrikant1228
              </div>
              <div className="gh-stats-row">
                <div className="gh-stat">
                  <b>{repoCount}</b>
                  <span>Public Repos</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gh-repos">
            {githubRepos.length > 0 ? (
              githubRepos.map((repo: any) => (
                <div key={repo.name} className="gh-repo-card reveal">
                  <span className="rname">{repo.name}</span>
                  <div className="rdesc">
                    {repo.description || GITHUB_REPO_DESCRIPTIONS[repo.name] || 'A project by Shrikant Swami focused on practical software development.'}
                  </div>
                  <div className="rmeta">
                    <span>★ {repo.stargazers_count}</span>
                    <span>{repo.language ?? '—'}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="gh-repo-card reveal">
                <span className="rname">Logshield</span>
                <div className="rdesc">
                  AI-powered server monitoring and failure prediction with live diagnostics.
                </div>
                <div className="rmeta">
                  <span>★ 1</span>
                  <span>Python</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="learning">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-eyebrow">06 · Now Learning</div>
            <h2 className="section-title">What I&apos;m sharpening right now.</h2>
          </div>
          <div className="learn-list">
            {[
              ['Machine Learning fundamentals', '65%'],
              ['System Design', '50%'],
              ['Cloud fundamentals', '40%'],
              ['FSD — Full Stack Development', 'Completed'],
              ['AI / ML fundamentals', 'Beginner'],
              ['Forward Deployed Engineering', 'Current focus'],
            ].map(([label, value], index) => (
              <div key={label} className={`learn-item reveal ${index >= 3 ? 'completed' : ''}`}>
                <div className="lrow">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="lbar-track">
                  <div
                    className="lbar-fill"
                    data-width={
                      value === 'Completed'
                        ? '100%'
                        : value === 'Beginner'
                        ? '25%'
                        : value === 'Current focus'
                        ? '35%'
                        : value
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="terminal-section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-eyebrow">07 · Terminal</div>
            <h2 className="section-title">Try it yourself.</h2>
            <p className="section-sub">
              Type <span style={{ color: 'var(--accent-2)', fontFamily: 'var(--font-mono)' }}>help</span> to see available commands.
            </p>
          </div>
          <div className="terminal-box reveal">
            <div className="terminal-top">
              <span className="tdot-r" />
              <span className="tdot-y" />
              <span className="tdot-g" />
              <span className="tlabel">shrikant@portfolio:~</span>
            </div>
            <div id="term-body" className="terminal-body">
              <div className="tout">
                Welcome to Shrikant&apos;s Operating System v1.0 Type &apos;help&apos; to see available commands.
              </div>
              <div className="tin-row">
                <span className="prompt">shrikant@os</span>
                <span className="path">:~$</span>
                <input
                  id="term-input"
                  ref={inputRef}
                  type="text"
                  autoComplete="off"
                  spellCheck={false}
                  onKeyDown={handleTerminalSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="section-eyebrow">08 · Achievements</div>
            <h2 className="section-title">Certifications &amp; awards.</h2>
          </div>
          <div className="ach-list">
            {[
              ['AI / ML Exploration', 'Currently building beginner-level foundations in AI and machine learning.'],
              ['Forward Deployed Engineering Focus', 'Currently moving toward building and deploying practical solutions alongside users and teams.'],
              ['AWS Certification Course', 'Completed through Intellipaat Software Solutions in April 2026.'],
              ['CodGen Virtual Internship — Full Stack Development', 'Completed in August 2026. Certificate ID: CG-2026-1041.'],
            ].map(([title, text]) => (
              <article key={title} className="ach-item reveal">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="contact-card reveal">
            <div>
              <h3>Let&apos;s build something.</h3>
              <p>
                Open to internships, collaborations, and interesting problems. The fastest way to reach me is LinkedIn or GitHub.
              </p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-dimmer)', marginTop: '18px' }}>
                Based in Bengaluru, India · IST (UTC+5:30)
              </p>
            </div>
            <div className="contact-links">
              <a className="contact-link" href="https://www.linkedin.com/in/shrikant-swami-030985293/" target="_blank" rel="noreferrer">
                <div className="cl-left">
                  <div className="cl-icon">in</div>
                  <div>
                    <div className="cl-name">LinkedIn</div>
                    <div className="cl-sub">/shrikant-swami</div>
                  </div>
                </div>
                <span className="arrow">→</span>
              </a>
              <a className="contact-link" href="https://github.com/shrikant1228" target="_blank" rel="noreferrer">
                <div className="cl-left">
                  <div className="cl-icon">⌥</div>
                  <div>
                    <div className="cl-name">GitHub</div>
                    <div className="cl-sub">/shrikant1228</div>
                  </div>
                </div>
                <span className="arrow">→</span>
              </a>
              <button type="button" className="contact-link copy-email" onClick={copyEmail}>
                <div className="cl-left">
                  <div className="cl-icon">✉</div>
                  <div>
                    <div className="cl-name">Email</div>
                    <div className="cl-sub">shrikantswami2005@gmail.com</div>
                  </div>
                </div>
                <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="footer-tag">
            Designed. Developed. Debugged.
            <br />
            <b>By Shrikant Swami.</b> © 2026
          </div>
          <div className="footer-social">
            <a href="https://github.com/shrikant1228" target="_blank" rel="noreferrer" title="GitHub">
              ⌥
            </a>
            <a href="https://www.linkedin.com/in/shrikant-swami-030985293/" target="_blank" rel="noreferrer" title="LinkedIn">
              in
            </a>
            <a href="#contact" title="Contact">
              ✉
            </a>
          </div>
        </div>
      </footer>

      <div className="toast" id="toast" />
    </main>
  )
}
