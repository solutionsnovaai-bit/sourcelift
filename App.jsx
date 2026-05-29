import { useEffect, useRef, useState } from 'react'

// ─── DADOS ───────────────────────────────────────────────────────────────────
const BRANDS = [
  'HYSTER', 'TOYOTA', 'YALE', 'KOMATSU', 'CLARK', 'HYUNDAI', 'STIHL',
  'HYSTER', 'TOYOTA', 'YALE', 'KOMATSU', 'CLARK', 'HYUNDAI', 'STIHL',
]

const PRODUCTS = [
  { brand: 'HYSTER', name: 'Suporte Espelho Retrovisor H-50/60ft', price: 'R$ 61,75', code: '#HYS-50060', url: 'https://sourcelift.com.br/shop/' },
  { brand: 'YALE', name: 'Rolamento da Torre 5088018-00', price: 'R$ 165,00', code: '#YAL-5088', url: 'https://sourcelift.com.br/shop/' },
  { brand: 'HYSTER / YALE', name: 'Espelho Retrovisor 1301286', price: 'R$ 99,00', code: '#HY-1301', url: 'https://sourcelift.com.br/shop/' },
  { brand: 'TOYOTA', name: 'Lente Farol 8FG Cristal 25/30/40/45/50', price: 'R$ 112,00', code: '#TOY-8FG', url: 'https://sourcelift.com.br/shop/' },
  { brand: 'UNIVERSAL', name: 'Rolamento 3208 2RS', price: 'R$ 158,00', code: '#UNI-3208', url: 'https://sourcelift.com.br/shop/' },
  { brand: 'CLARK', name: 'Reparo Cilindro Deslocador C25', price: 'R$ 188,00', code: '#CLK-C25', url: 'https://sourcelift.com.br/shop/' },
]

const WHY_CARDS = [
  { icon: '⚡', title: 'Entrega Rápida', text: 'Enviamos para todo o Brasil. Pedidos até 14h saem no mesmo dia.' },
  { icon: '🔩', title: 'Peças Originais', text: 'Trabalhamos apenas com peças genuínas e de procedência certificada.' },
  { icon: '🛡️', title: 'Garantia Real', text: 'Todas as peças possuem garantia. Política de troca sem burocracia.' },
  { icon: '📞', title: 'Suporte Técnico', text: 'Nossa equipe identifica a peça certa para o seu modelo de empilhadeira.' },
]

// ⚠️ CONFIRME O NÚMERO ANTES DE PUBLICAR
// Formato: 55 + DDD + número (sem espaços ou traços)
const WA_NUMBER = '5511985922711'

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      {/* ── OVERLAY MOBILE MENU ── */}
      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`} onClick={closeMenu} />

      {/* ── DRAWER MOBILE ── */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#produtos" onClick={closeMenu}>Produtos</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          className="mobile-cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          WhatsApp
        </a>
      </div>

      {/* ── NAV ── */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">
          {/*
            Logo real da Source Lift.
            Na nav transparente (topo): fundo branco visível com mix-blend-mode.
            Quando scrolled (fundo escuro): brightness invert deixa legível.
          */}
          <img
            src="/logo.png"
            alt="Source Lift"
            className={`nav-logo-img${scrolled ? ' scrolled' : ''}`}
          />
        </a>

        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#contato">Contato</a></li>
          <li>
            <a href={`https://wa.me/${WA_NUMBER}`} className="nav-cta" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
        </ul>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-noise" />
        <div className="hero-line-deco" />

        {/* Logo real como watermark no fundo direito */}
        <div className="hero-logo-zone">
          <img src="/logo.png" alt="" aria-hidden="true" className="hero-logo-watermark" />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow reveal">Especialistas em Empilhadeiras</p>
          <h1 className="hero-title reveal reveal-delay-1">
            <span>A Peça</span>
            <span className="accent">Certa</span>
            <span className="stroke">na Hora</span>
          </h1>
          <p className="hero-sub reveal reveal-delay-2">
            Peças originais para{' '}
            <strong>Hyster, Toyota, Yale, Komatsu, Clark, Hyundai e Stihl</strong>.
            Entrega rápida para todo o Brasil, suporte técnico especializado.
          </p>
          <div className="hero-actions reveal reveal-delay-3">
            <a href="#produtos" className="btn-primary">Ver Produtos</a>
            <a href={`https://wa.me/${WA_NUMBER}`} className="btn-secondary" target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </div>
          <div className="hero-stats reveal reveal-delay-4">
            <div className="stat">
              <div className="stat-num">8+</div>
              <div className="stat-label">Marcas Atendidas</div>
            </div>
            <div className="stat">
              <div className="stat-num">500+</div>
              <div className="stat-label">SKUs em Estoque</div>
            </div>
            <div className="stat">
              <div className="stat-num">24h</div>
              <div className="stat-label">Prazo de Envio</div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── BRANDS STRIP ── */}
      <div className="brands-strip">
        <div className="brands-track">
          {BRANDS.concat(BRANDS).map((b, i) => (
            <span key={i} className="brand-item">{b}</span>
          ))}
        </div>
      </div>

      {/* ── WHY US ── */}
      <section id="sobre">
        <div className="section-label reveal">Por que a Source Lift</div>
        <div className="why-grid">
          <div className="why-left reveal">
            <h2 className="section-title">
              Movendo<br />Negócios<br /><span style={{ color: 'var(--red)' }}>Há Anos</span>
            </h2>
            <p className="section-sub">
              Somos especialistas em peças de reposição para empilhadeiras das principais marcas
              do mercado. Nossa missão é garantir que a sua operação nunca pare por falta de peça.
            </p>

            {/* Logo real como destaque na seção sobre */}
            <div className="why-logo-block">
              <img src="/logo.png" alt="Source Lift" className="why-logo-img" />
            </div>

            <ul className="why-list">
              <li>Atendimento de Segunda a Sexta, das 8h às 18h</li>
              <li>Equipe técnica para identificar a peça correta</li>
              <li>Garantia em todas as peças comercializadas</li>
              <li>Política de troca transparente e sem burocracia</li>
            </ul>
          </div>

          <div className="why-right">
            {WHY_CARDS.map((c, i) => (
              <div className={`why-card reveal reveal-delay-${(i % 3) + 1}`} key={i}>
                <span className="why-card-icon">{c.icon}</span>
                <div className="why-card-title">{c.title}</div>
                <p className="why-card-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="products-section" id="produtos">
        <div className="products-header">
          <div>
            <div className="section-label reveal">Catálogo</div>
            <h2 className="section-title reveal">Mais<br />Vendidos</h2>
          </div>
          <a
            href="https://sourcelift.com.br/shop/"
            className="btn-secondary reveal"
            target="_blank"
            rel="noopener noreferrer"
            style={{ alignSelf: 'flex-end' }}
          >
            Ver Catálogo Completo
          </a>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((p, i) => (
            <div
              className={`product-card reveal reveal-delay-${(i % 3) + 1}`}
              key={i}
              onClick={() => window.open(p.url, '_blank', 'noopener')}
            >
              <div className="product-img">
                {/* Placeholder com logo real no centro */}
                <div className="product-img-placeholder">
                  <img src="/logo.png" alt="Source Lift" className="product-placeholder-logo" />
                </div>
                <div className="product-overlay" />
                <button
                  className="product-view-btn"
                  onClick={(e) => { e.stopPropagation(); window.open(p.url, '_blank', 'noopener') }}
                >
                  Ver no Catálogo
                </button>
              </div>
              <div className="product-info">
                <div className="product-brand">{p.brand}</div>
                <div className="product-name">{p.name}</div>
                <div className="product-price">{p.price} <span>{p.code}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT BAND ── */}
      <div className="contact-band" id="contato">
        <div>
          <h2 className="contact-band-title reveal">Precisa de uma<br />Peça Específica?</h2>
          <p className="contact-band-sub reveal">Fale com nosso time. A gente encontra o que você precisa.</p>
          <div className="contact-band-actions reveal">
            <a href={`https://wa.me/${WA_NUMBER}`} className="btn-white" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a
              href="https://sourcelift.com.br/contato/"
              className="btn-white"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.4)' }}
            >
              Formulário
            </a>
          </div>
        </div>

        <div className="contact-info-block reveal">
          <div className="contact-info-item">
            <div className="contact-icon">📞</div>
            <div><strong>Telefone</strong>11 2385-9227</div>
          </div>
          <div className="contact-info-item">
            <div className="contact-icon">🕐</div>
            <div><strong>Horário</strong>Seg–Sex · 08:00 às 18:00</div>
          </div>
          <div className="contact-info-item">
            <div className="contact-icon">📍</div>
            <div><strong>Endereço</strong>R. Bruna, 252 – Chácara Mafalda, SP</div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-grid">
          <div>
            <div className="footer-logo-block">
              <img src="/logo.png" alt="Source Lift" className="footer-logo-img" />
            </div>
            <p className="footer-brand-text">
              "Movendo o seu negócio com peças de confiança e qualidade."
              Especialistas em reposição para empilhadeiras das principais marcas.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Links Rápidos</div>
            <ul className="footer-links">
              <li><a href="https://sourcelift.com.br/sobre/" target="_blank" rel="noopener">Sobre nós</a></li>
              <li><a href="https://sourcelift.com.br/shop/" target="_blank" rel="noopener">Produtos</a></li>
              <li><a href="https://sourcelift.com.br/contato/" target="_blank" rel="noopener">Contato</a></li>
              <li><a href="https://sourcelift.com.br/blog/" target="_blank" rel="noopener">Blog</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Links do Site</div>
            <ul className="footer-links">
              <li><a href="https://sourcelift.com.br/politica-de-privacidade/" target="_blank" rel="noopener">Política de Privacidade</a></li>
              <li><a href="https://sourcelift.com.br/termos-de-uso/" target="_blank" rel="noopener">Termos de Uso</a></li>
              <li><a href="https://sourcelift.com.br/politica-de-troca/" target="_blank" rel="noopener">Política de Troca</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contato</div>
            <div className="footer-info-item"><strong>Telefone</strong>11 2385-9227</div>
            <div className="footer-info-item"><strong>Horário</strong>Seg–Sex · 08:00–18:00</div>
            <div className="footer-info-item">
              <strong>Endereço</strong>
              R. Bruna, 252<br />Chácara Mafalda · SP<br />CEP 03370-000
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Source Lift. Todos os direitos reservados.</p>
          <p className="footer-cnpj">CNPJ 52.539.661/0001-93</p>
        </div>
      </footer>

      {/* ── WHATSAPP FLOAT ── */}
      <a href={`https://wa.me/${WA_NUMBER}`} className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  )
}
