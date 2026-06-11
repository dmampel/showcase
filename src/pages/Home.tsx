import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Cursor from '../components/Cursor'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import FeaturedProjects from '../components/FeaturedProjects'
import Experiments from '../components/Experiments'
import SobreMi from '../components/SobreMi'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Logo star desktop rotation tied to full page scroll
    if (window.innerWidth > 900) {
      const trigger = gsap.to('.logo-star', {
        scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: 1 },
        rotation: -180,
        ease: 'none',
      })
      return () => { trigger.scrollTrigger?.kill() }
    }
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <Marquee />
      <FeaturedProjects />
      <Experiments />
      <SobreMi />
    </>
  )
}
