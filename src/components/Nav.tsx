import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface NavProps {
  variant?: 'default' | 'detail'
}

export default function Nav({ variant = 'default' }: NavProps) {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 80,
      onEnter: () => navRef.current?.classList.add('scrolled'),
      onLeaveBack: () => navRef.current?.classList.remove('scrolled'),
    })

    return () => trigger.kill()
  }, [])

  if (variant === 'detail') {
    return (
      <nav className="nav" ref={navRef}>
        <Link to="/" className="nav__logo">
          ← Volver
        </Link>
      </nav>
    )
  }

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav__logo">
        DEL <span className="logo-star">✦</span>
      </div>
      <div className="nav__links">
        <a href="#featured">Proyectos</a>
        <a href="#experiments">Labs</a>
        <a
          href="https://github.com/dmampel"
          target="_blank"
          rel="noopener"
          className="nav__cta-link"
        >
          <GithubIcon />
          dmampel
        </a>
      </div>
    </nav>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'inline', verticalAlign: '-2px', marginRight: '5px' }}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
