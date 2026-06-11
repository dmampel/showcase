import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiments } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function Experiments() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.fromTo('.experiments__header',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.experiments__header', start: 'top 85%' } }
    )

    sectionRef.current?.querySelectorAll<HTMLElement>('.exp-card').forEach(card => {
      gsap.fromTo(card,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 88%' } }
      )
    })
  }, { scope: sectionRef })

  return (
    <section className="experiments" id="experiments" ref={sectionRef}>
      <div className="experiments__header">
        <h2 className="section-title">
          También hago <em>esto.</em>
        </h2>
      </div>

      <div className="experiments__grid">
        {experiments.map(exp => (
          <article className="exp-card" key={exp.id} id={`exp-${exp.id}`}>
            <a href={exp.url} target="_blank" rel="noopener" className="exp-card__link-wrap">
              <div className="exp-card__preview">
                <div className="exp-card__iframe-wrap">
                  <iframe
                    src={exp.url}
                    title={exp.title}
                    loading="lazy"
                    scrolling="no"
                    tabIndex={-1}
                    aria-hidden="true"
                  />
                </div>
                <div className="exp-card__hover">
                  <span>Ver en vivo ↗</span>
                </div>
              </div>
              <div className="exp-card__info">
                <div className="exp-card__top">
                  <span className="exp-num">{exp.num}</span>
                  <span className="exp-tag">{exp.tag}</span>
                </div>
                <h3 className="exp-card__title">{exp.title}</h3>
                <p className="exp-card__desc">{exp.description}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
