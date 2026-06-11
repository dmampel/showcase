import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const scrollHintRef = useRef<HTMLDivElement>(null)
  const violetBlobRef = useRef<HTMLDivElement>(null)
  const coralBlobRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const isMobile = window.innerWidth <= 900

    // Entrance animation
    const tl = gsap.timeline({ delay: 0.2 })
    tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', from: { opacity: 0, y: 20 } })
      .to(nameRef.current, { opacity: 1, duration: 1, ease: 'power4.out' }, '-=0.4')
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', from: { opacity: 0, y: 20 } }, '-=0.5')
      .to(scrollHintRef.current, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.2')

    gsap.fromTo(nameRef.current,
      { skewX: isMobile ? 0 : -4, opacity: 0, scale: isMobile ? 0.92 : 1 },
      { skewX: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out', delay: 0.4 }
    )

    // Blob parallax
    gsap.to(violetBlobRef.current, {
      yPercent: 30, ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
    })

    gsap.to(coralBlobRef.current, {
      yPercent: -20, ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
    })

    gsap.to(contentRef.current, {
      yPercent: 25, opacity: 0, ease: 'none',
      scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: '60% top', scrub: true },
    })
  }, { scope: sectionRef })

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <div className="hero__blobs">
        <div className="blob blob--violet" ref={violetBlobRef} />
        <div className="blob blob--coral" ref={coralBlobRef} />
        <div className="blob blob--cyan" />
      </div>
      <div className="hero__noise" />

      <div className="hero__content" ref={contentRef}>
        <p className="hero__eyebrow" ref={eyebrowRef}>
          Esto es lo que hago — y cómo lo hago
        </p>
        <h1 className="hero__name" ref={nameRef}>
          <span className="hero__name--outline">Del</span>
          <span className="hero__name--fill">fina</span>
        </h1>
        <p className="hero__tagline" ref={taglineRef}>
          Te preparé este showcase<br />para que veas mi trabajo de cerca.
        </p>
      </div>

      <div className="hero__bottom">
        <div className="hero__scroll-hint" ref={scrollHintRef}>
          <div className="hero__scroll-line" />
        </div>
        <div className="hero__tech-tags">
          <span className="tech-tag">React</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">Tailwind</span>
        </div>
      </div>
    </section>
  )
}
