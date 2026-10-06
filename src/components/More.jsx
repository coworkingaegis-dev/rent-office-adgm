import { useRef, useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { testimonials, guides, faqs, images, BUSINESS, MAIN_SITE } from '../data/content'

const initials = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('')

export function Reviews() {
  const track = useRef(null)
  const scroll = (d) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('li')
    el.scrollBy({ left: d * ((card?.offsetWidth || 320) + 18), behavior: 'smooth' })
  }
  return (
    <section className="reviews sec" id="reviews" aria-labelledby="rev-title">
      <div className="wrap">
        <div className="rev-top">
          <div>
            <p className="eyebrow eyebrow-light">Tenant reviews</p>
            <h2 id="rev-title">Why teams rent their ADGM office with Aegis</h2>
            <p>Reviews as published on <a href={`${MAIN_SITE}/`}>aegiscoworking.ae</a>.</p>
          </div>
          <div className="rev-nav">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous reviews"><Icon name="arrow" size={18} /></button>
            <button type="button" onClick={() => scroll(1)} aria-label="Next reviews"><Icon name="arrow" size={18} /></button>
          </div>
        </div>
      </div>
      <ul className="rev-track" ref={track} tabIndex={0} aria-label="Reviews">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.name} variant="spin" delay={Math.min(i, 3) * 100}>
            <figure>
              <span className="rev-q" aria-hidden="true">“</span>
              <blockquote><p>{t.quote}</p></blockquote>
              <figcaption>
                <span className="rev-av" aria-hidden="true">{initials(t.name)}</span>
                <span><b>{t.name}</b><small>{t.role}</small></span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}

export function Guides() {
  return (
    <section className="guides sec" id="guides" aria-labelledby="guides-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="eyebrow">From the Aegis blog</p>
            <h2 id="guides-title">ADGM office rent guides</h2>
          </div>
          <p>Costs, leases, licence rules and locations — read before you sign for office space in Abu Dhabi Global Market. <a href={`${MAIN_SITE}/blogs`}>All articles</a></p>
        </div>
        <ul className="g-list">
          {guides.map((g, i) => (
            <Reveal as="li" key={g.slug} variant="flip" delay={(i % 3) * 80}>
              <a href={g.url}>
                <span className="g-tag">{g.tag}</span>
                <span className="g-title">{g.title}</span>
                <span className="g-go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-head">
          <p className="eyebrow">FAQ</p>
          <h2 id="faq-title">Office for rent in ADGM: your questions</h2>
          <p>Rent, leases, licences, deposits and access. Still unsure? We usually reply on WhatsApp within the hour during business hours.</p>
          <a className="btn btn-primary" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === open ? true : undefined} onToggle={(e) => { if (e.currentTarget.open) setOpen(i) }}>
              <summary><h3>{f.q}</h3><span className="fq-ic" aria-hidden="true"><Icon name="plus" size={16} strokeWidth={2} /></span></summary>
              <div className="fq-body">
                <p>{f.a}</p>
                {f.link && <p><a href={f.link.url}>{f.link.text}</a></p>}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Location() {
  const [mapOn, setMapOn] = useState(false)
  return (
    <section className="location sec" id="location" aria-labelledby="loc-title">
      <div className="wrap loc-grid">
        <div>
          <p className="eyebrow">Office rental Al Reem Island</p>
          <h2 id="loc-title">ADGM office at Addax Tower, Al Reem Island</h2>
          <p className="loc-sub">
            Office rental on Al Reem Island at Addax Tower puts your company inside the ADGM jurisdiction.{' '}
            <a href={`${MAIN_SITE}/blog/is-al-reem-island-part-of-adgm`}>Is Al Reem Island part of ADGM?</a>
          </p>
          <p className="loc-sub">
            Whether you search for an office for rent Al Reem Island companies can register, an office for rent Addax
            Tower teams can move into, or office space near Abu Dhabi Global Market, Level 38 is the answer: an ADGM
            office Addax Tower address that works as an office for ADGM company setups and an office for ADGM licence
            applications, with a serviced office Al Reem Island price instead of a traditional lease. It is an affordable
            office for rent Abu Dhabi founders can grow in, from a flexi desk to a private office for rent Abu Dhabi
            teams of 20+ share.
          </p>
          <dl className="nap">
            <div><dt>Address</dt><dd>{BUSINESS.name}, {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.country}</dd></div>
            <div><dt>Phone</dt><dd><a href={BUSINESS.phoneTel}>{BUSINESS.phoneDisplay}</a></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
            <div><dt>Viewings</dt><dd>Monday–Friday, 9 AM–6 PM · 24/7 access for members</dd></div>
          </dl>
          <a className="btn btn-dark" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
        </div>
        <div className="map">
          {mapOn ? (
            <iframe title="Map of Aegis Coworking offices for rent, Addax Tower, Al Reem Island, ADGM" src={BUSINESS.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          ) : (
            <button type="button" className="map-facade" onClick={() => setMapOn(true)}>
              <img src={images.receptionImg} alt="" width="900" height="675" loading="lazy" decoding="async" />
              <span className="map-pin" aria-hidden="true"><Icon name="pin" size={22} strokeWidth={1.8} /></span>
              <span className="map-tag"><b>Addax Tower, Office 3812</b><small>Al Reem Island, ADGM</small></span>
              <span className="map-load">Load interactive map</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="wrap">
        <Reveal className="final-card" variant="flip">
          <div className="final-rings" aria-hidden="true"><span /><span /><span /></div>
          <div className="final-copy">
            <p className="eyebrow eyebrow-light">ADGM office for rent</p>
            <h2 id="final-title">See your next office on the 38th floor</h2>
            <p>Book a viewing at Addax Tower, or get a video walkthrough on WhatsApp today.</p>
          </div>
          <div className="final-actions">
            <a className="btn btn-white" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a viewing of your offices in ADGM.')}`} target="_blank" rel="noopener noreferrer">Book a viewing</a>
            <a className="btn btn-ghost-light" href={BUSINESS.phoneTel}><Icon name="phone" size={16} />{BUSINESS.phoneDisplay}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aegis Coworking on WhatsApp">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  )
}
