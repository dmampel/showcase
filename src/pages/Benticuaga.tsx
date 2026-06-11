import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cursor from '../components/Cursor'
import Nav from '../components/Nav'

const features = [
  { icon: '📐', title: 'SDD End-to-End', desc: 'Implementado con Spec-Driven Development: proposal, specs, diseño técnico y task breakdown antes de escribir una línea de código.' },
  { icon: '📊', title: 'Admin Dashboard', desc: 'Panel de administración con estadísticas de ventas, gestión de productos, pedidos y usuarios. Todo desde una sola interfaz.' },
  { icon: '⚡', title: 'Automatización n8n', desc: 'Flujos automatizados con n8n: notificaciones por email, actualización de stock y procesamiento de pedidos sin intervención manual.' },
  { icon: '💳', title: 'MercadoPago', desc: 'Checkout integrado con MercadoPago. Múltiples métodos de pago, confirmación automática y manejo de estados del pedido.' },
]

const gallery = [
  { src: '/assets/benticuaga/benticuaga-home.jpeg', alt: 'Benticuaga — Home', num: '01', label: 'Home', full: true },
  { src: '/assets/benticuaga/benticuaga-shop.jpeg', alt: 'Benticuaga — Shop', num: '02', label: 'Catálogo', full: false },
  { src: '/assets/benticuaga/benticuaga-categorias.jpeg', alt: 'Benticuaga — Categorías', num: '03', label: 'Categorías', full: false },
  { src: '/assets/benticuaga/benticuaga-dash.jpeg', alt: 'Benticuaga — Admin Dashboard', num: '04', label: 'Admin Dashboard · Estadísticas', full: true },
  { src: '/assets/benticuaga/benticuaga-cart.jpeg', alt: 'Benticuaga — Carrito', num: '05', label: 'Carrito', full: false },
  { src: '/assets/benticuaga/benticuaga-checkout.jpeg', alt: 'Benticuaga — Checkout', num: '06', label: 'Checkout · MercadoPago', full: false },
  { src: '/assets/benticuaga/benticuaga-cta.jpeg', alt: 'Benticuaga — CTA', num: '07', label: 'Sección CTA', full: false },
  { src: '/assets/benticuaga/benticuaga-footer.jpeg', alt: 'Benticuaga — Footer', num: '08', label: 'Footer', full: false },
]

export default function Benticuaga() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>('.nav')
    if (!nav) return
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll<HTMLElement>('.gallery-item, .feature-item, .detail-figma__embed').forEach(el => {
      el.classList.add('reveal')
      observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="detail-page">
      <Cursor />
      <Nav variant="detail" />

      {/* Hero */}
      <header className="detail-hero">
        <div className="detail-hero__blobs">
          <div className="blob blob--coral" />
          <div className="blob blob--cyan" />
        </div>
        <div className="detail-hero__content">
          <div className="detail-hero__meta">
            <span className="detail-hero__num">01</span>
            <span className="detail-hero__cat">Ecommerce · Librería & Office · SDD</span>
          </div>
          <h1 className="detail-hero__title">Benticuaga</h1>
          <p className="detail-hero__desc">
            Tienda online de útiles escolares y artículos de librería y oficina para público general y empresas. Lo estoy desarrollando con Claude Code y metodología SDD — specs, diseño técnico y tareas antes de tocar código. Tiene dashboard admin con estadísticas, notificaciones por email y automatización con n8n.
          </p>
          <div className="detail-hero__tags">
            {['React', 'Next.js', 'Prisma DB', 'SDD'].map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
        <div className="detail-hero__preview">
          <div className="hero-preview-card hero-preview-card--1">
            <img src="/assets/benticuaga/benticuaga-home.jpeg" alt="Benticuaga Home" />
          </div>
          <div className="hero-preview-card hero-preview-card--2">
            <img src="/assets/benticuaga/benticuaga-dash.jpeg" alt="Benticuaga Dashboard" />
          </div>
          <div className="hero-preview-card hero-preview-card--3">
            <img src="/assets/benticuaga/benticuaga-shop.jpeg" alt="Benticuaga Shop" />
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="detail-features">
        <div className="detail-features__grid">
          {features.map(f => (
            <div className="feature-item" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="detail-gallery">
        <div className="detail-gallery__header">
          <span className="section-label">Pantallas</span>
          <h2 className="section-title">Cada pantalla,<br /><em>pensada.</em></h2>
        </div>
        <div className="gallery-grid">
          {gallery.map(item => (
            <div key={item.num} className={`gallery-item ${item.full ? 'gallery-item--full' : 'gallery-item--half'}`}>
              <div className="gallery-item__img">
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <div className="gallery-item__label">
                <span>{item.num}</span>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Figma embed */}
      <section className="detail-figma">
        <div className="detail-figma__header">
          <span className="section-label">Diseño</span>
          <h2 className="section-title">El Figma<br /><em>completo.</em></h2>
          <p className="detail-figma__sub">Sistema de diseño, componentes y todas las pantallas navegables.</p>
        </div>
        <div className="detail-figma__embed">
          <div className="figma-chrome-bar">
            <span /><span /><span />
            <span className="figma-chrome-url">figma.com — Benticuaga · librería</span>
          </div>
          <iframe
            src="https://embed.figma.com/design/jxXNWFL7B0cHXDqsc6F5M7/libreria?node-id=0-1&embed-host=share"
            allowFullScreen
            title="Benticuaga — Figma Design completo"
            loading="lazy"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="detail-footer">
        <Link to="/" className="detail-footer__back" style={{ color: 'var(--coral)' }}>
          ← Volver
        </Link>
        <span className="detail-footer__credit">Diseñado & desarrollado por Delfina ✦</span>
      </footer>
    </div>
  )
}
