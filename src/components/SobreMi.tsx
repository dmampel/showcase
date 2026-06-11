import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SobreMi() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo('.sobre-mi__title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    )

    sectionRef.current?.querySelectorAll<HTMLElement>('.sobre-mi__row').forEach(row => {
      gsap.fromTo(row,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 90%' } }
      )
    })
  }, { scope: sectionRef })

  return (
    <section className="sobre-mi" id="contact" ref={sectionRef}>
      <div className="sobre-mi__top">
        <div className="sobre-mi__left">
          <span className="section-label">03 — Sobre mí</span>
          <h2 className="sobre-mi__title">
            No sé todo.<br /><em>Y está bien.</em>
          </h2>
          <p className="sobre-mi__lead">
            Soy desarrolladora en crecimiento. Arranqué desde cero, construí proyectos reales, y no paro. Lo que me falta lo aprendo. Lo que me interesa, lo domino.
          </p>
        </div>

        <div className="sobre-mi__right">
          <div className="sobre-mi__row">
            <span className="sobre-mi__dot" style={{ background: 'var(--violet)' }} />
            <div>
              <p className="sobre-mi__row-label">Lo que manejo</p>
              <p className="sobre-mi__row-text">React · TypeScript · Tailwind CSS · Python · SDD ·</p>
            </div>
          </div>
          <div className="sobre-mi__row">
            <span className="sobre-mi__dot" style={{ background: 'var(--coral)' }} />
            <div>
              <p className="sobre-mi__row-label">Lo que estoy aprendiendo</p>
              <p className="sobre-mi__row-text">Next.js avanzado · Node.js · IA aplicada · n8n · Arquitectura de sistemas · Y ahora... SCROLLYTELLINGGGGGG</p>
            </div>
          </div>
          <div className="sobre-mi__row">
            <span className="sobre-mi__dot" style={{ background: 'var(--cyan)' }} />
            <div>
              <p className="sobre-mi__row-label">Lo que me mueve</p>
              <p className="sobre-mi__row-text">Construir cosas que funcionen de verdad, no solo que se vean bien.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="sobre-mi__footer">
        <div className="sobre-mi__closing">
          <p className="sobre-mi__closing-text">Me encantaría poder trabajar juntos. ✦</p>
          <a href="https://github.com/dmampel" target="_blank" rel="noopener" className="sobre-mi__github">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            github.com/dmampel
          </a>
        </div>
        <span>Diseñado & desarrollado por mí ✦</span>
      </footer>
    </section>
  )
}
