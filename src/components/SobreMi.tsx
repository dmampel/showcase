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
              <p className="sobre-mi__row-text">React · TypeScript · Tailwind CSS · Python</p>
            </div>
          </div>
          <div className="sobre-mi__row">
            <span className="sobre-mi__dot" style={{ background: 'var(--coral)' }} />
            <div>
              <p className="sobre-mi__row-label">Lo que estoy aprendiendo</p>
              <p className="sobre-mi__row-text">Next.js avanzado · Node.js · IA aplicada · n8n · SDD · Y ahora... SCROLLYTELLINGGGGGG</p>
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
          <a href="mailto:mampeldelfina@gmail.com" className="sobre-mi__github">
            mampeldelfina@gmail.com
          </a>
        </div>
        <span>Diseñado & desarrollado por mí ✦</span>
      </footer>
    </section>
  )
}
