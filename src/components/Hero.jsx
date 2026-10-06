import heroSmall from '../assets/office-for-rent-adgm-addax-tower-640.webp'
import { images, cubeFaces, BUSINESS } from '../data/content'

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-badge hl" style={{ '--d': 0 }}>
            <span className="badge-dot" aria-hidden="true" />Office space provider in ADGM · Addax Tower
          </p>
          <h1 id="hero-title" className="hero-title hl" style={{ '--d': 1 }}>
            Rent an office in Abu Dhabi Global Market, <span className="hl-mark">furnished and licence-ready</span>
          </h1>
          <p className="hero-lead hl" style={{ '--d': 2 }}>
            Furnished private offices for 1 to 20+ people on the 38th floor of Addax Tower, Al Reem Island —
            with a registered ADGM business address, 24/7 access and one all-in monthly rent. Office for rent in
            ADGM from <strong>AED 4,500</strong>, or rent desk space in ADGM from <strong>AED 1,000</strong>.
          </p>
          <div className="hero-ctas hl" style={{ '--d': 3 }}>
            <a className="btn btn-primary" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to rent an office in ADGM.')}`} target="_blank" rel="noopener noreferrer">Book a viewing</a>
            <a className="btn btn-outline" href="#finder">Find my office size</a>
          </div>
          <ul className="hero-facts hl" style={{ '--d': 4 }}>
            <li><b>No</b> deposit</li>
            <li><b>12–36</b> month leases</li>
            <li><b>AccessRP</b> registered</li>
          </ul>
        </div>

        <div className="hero-stage">
          <figure className="hero-photo">
            <img src={images.heroImg} srcSet={`${heroSmall} 640w, ${images.heroImg} 1200w`}
              sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1080px) 600px, 560px"
              alt="Furnished private office for rent in ADGM at Aegis Coworking, Addax Tower, Al Reem Island"
              width="1200" height="900" fetchPriority="high" decoding="async" />
            <figcaption className="floor-tag" aria-hidden="true">
              <span className="ft-lift"><i>▲</i><b>38</b></span>
              <span><b>Level 38</b><small>Addax Tower · ADGM</small></span>
            </figcaption>
          </figure>

          {/* Rotating 3D cube: the four ways to rent space in ADGM */}
          <div className="cube-wrap">
            <p className="cube-label" id="cube-label">Rent in ADGM</p>
            <div className="cube-scene" role="list" aria-labelledby="cube-label">
              <div className="cube">
                {cubeFaces.map((f, i) => (
                  <div key={f.label} className={`cube-face f${i}`} role="listitem">
                    <span className="cf-label">{f.label}</span>
                    <span className="cf-price">{f.price}</span>
                    <span className="cf-note">{f.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap hero-strip">
        <p>
          Aegis Coworking is a business centre in ADGM and a business center Abu Dhabi companies use for flexible
          office space in ADGM: serviced office ADGM suites, furnished office for rent ADGM teams can move into,
          flexi desk in ADGM memberships and cheap desk space in ADGM by the day — all at Addax Tower, an office
          near ADGM's main business district that sits inside the jurisdiction itself.
        </p>
      </div>
    </section>
  )
}

export default Hero
