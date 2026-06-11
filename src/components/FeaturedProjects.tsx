import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const track = trackRef.current
    const section = sectionRef.current
    if (!track || !section) return

    if (window.innerWidth <= 900) {
      // Mobile: simple scroll reveal per item
      section.querySelectorAll<HTMLElement>('.featured__intro-slide, .project-slide').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }
        )
      })
      return
    }

    const scrollDist = track.scrollWidth - window.innerWidth

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.2,
        start: 'top top',
        end: () => '+=' + (scrollDist + 800),
        invalidateOnRefresh: true,
      },
    })

    tl.to({}, { duration: 0.4 })
    tl.to(track, { x: -scrollDist, ease: 'none' }, 'move')
    tl.to('.logo-star', { rotation: 360, ease: 'none' }, 'move')
    tl.to({}, { duration: 0.3 })
  }, { scope: sectionRef })

  return (
    <section className="featured" id="featured" ref={sectionRef}>
      <div className="featured__track-wrapper" ref={wrapperRef}>
        <div className="featured__track" ref={trackRef}>

          {/* Intro A */}
          <div className="featured__intro-slide featured__intro-slide--full">
            <span className="section-label">01</span>
            <h2 className="featured__intro-title">
              Proyectos<br /><em>reales.</em>
            </h2>
          </div>

          {/* Intro B */}
          <div className="featured__intro-slide">
            <h4 className="featured__intro-title">
              Un ecommerce<br /><em>completo.</em>
            </h4>
            <p className="featured__intro-sub">
              Desde el diseño en Figma hasta la integración de pagos y automatizaciones reales.
            </p>
            <span className="section-label"> - En desarrollo - </span>
          </div>

          {/* Project slides */}
          {projects.map(project => (
            <article
              key={project.id}
              className="project-slide"
              id={`slide-${project.id}`}
              style={{ '--accent': project.accent } as React.CSSProperties}
            >
              <div className="project-slide__inner">
                <div className="project-slide__info">
                  <div className="project-slide__meta">
                    <span className="project-num">{project.num}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3 className="project-slide__title">{project.title}</h3>
                  <p className="project-slide__desc">{project.description}</p>
                  <ul className="project-slide__features">
                    {project.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                  <div className="project-slide__tags">
                    {project.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  {project.figmaUrl && (
                    <a href={project.figmaUrl} target="_blank" rel="noopener" className="project-slide__figma-btn">
                      Ver diseño en Figma ↗
                    </a>
                  )}
                  {project.detailPath && (
                    <Link to={project.detailPath} className="project-slide__detail-btn">
                      Ver todas las pantallas →
                    </Link>
                  )}
                </div>
                <div className="project-slide__mockup">
                  <div className="mockup-stack">
                    <div className="mockup-frame mockup-frame--back">
                      <img src={project.images.back} alt={`${project.title} — dashboard`} />
                    </div>
                    <div className="mockup-frame mockup-frame--front">
                      <img src={project.images.front} alt={`${project.title} — home`} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-slide__accent" />
            </article>
          ))}

          {/* Labs intro */}
          <div className="featured__intro-slide featured__intro-slide--full" id="experiments-slide">
            <span className="section-label">02</span>
            <h2 className="featured__intro-title">
              Labs &<br /><em>Experimentos.</em>
            </h2>
          </div>

        </div>
      </div>
    </section>
  )
}
