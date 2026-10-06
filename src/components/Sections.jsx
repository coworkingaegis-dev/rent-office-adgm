import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { sections, options, officePerks, leaseSteps, stats, compare, images, MAIN_SITE, BUSINESS } from '../data/content'

const wa = (text) => `${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`

export function Answer() {
  return (
    <section className="answer-sec sec" aria-labelledby="what-is">
      <div className="wrap answer-grid">
        <Reveal variant="tilt">
          <p className="eyebrow">Quick answer</p>
          <h2 id="what-is">How much does it cost to rent an office in ADGM?</h2>
          <p className="answer">
            ADGM office rent at Aegis Coworking starts from AED 4,500 a month for a furnished private office
            at Addax Tower, Al Reem Island — inside the Abu Dhabi Global Market jurisdiction. Desk space in ADGM
            costs AED 1,150 for a dedicated desk or AED 1,000 for a flexi desk, with internet, utilities,
            cleaning and reception included.
          </p>
          <p>
            That makes <a href={`${MAIN_SITE}/private-office`}>Aegis</a> an affordable office space ADGM option
            next to a traditional commercial lease: no fit-out, no deposit and an ADGM registered office address
            included. For a deeper breakdown, try the <a href={`${MAIN_SITE}/blog/adgm-office-cost-calculator`}>ADGM office cost calculator</a>.
          </p>
        </Reveal>
        <nav className="toc" aria-label="On this page">
          <p>On this page</p>
          <ol>{sections.map((s, i) => <li key={s.id}><a href={`#${s.id}`}><span>{String(i + 1).padStart(2, '0')}</span>{s.label}</a></li>)}</ol>
        </nav>
      </div>
    </section>
  )
}

// Team size → recommended way to rent space in ADGM
function recommend(n) {
  if (n === 1) return { id: 'desk', title: 'Dedicated desk or small private office', price: 'AED 1,150 – AED 4,500 / month', text: 'Working alone? A dedicated desk gives you a registered ADGM business address for your licence. Want a door that closes? A small private office starts from AED 4,500.', img: 'deskImg' }
  if (n <= 4) return { id: 'small', title: 'Small private office (1–4 people)', price: 'From AED 4,500 / month', text: 'A furnished, lockable private office ADGM founders and small teams can move straight into, with 24/7 access.', img: 'smallImg' }
  if (n <= 10) return { id: 'medium', title: 'Medium private office (5–10 people)', price: 'Priced by layout', text: 'Space for a growing team, with meeting rooms and the business lounge on the same floor. Ask for a tailored quote.', img: 'mediumImg' }
  return { id: 'large', title: 'Large private office (10–20+ people)', price: 'Priced by layout', text: 'Commercial office space in ADGM for established teams and regional offices — furnished, serviced and licence-ready.', img: 'largeImg' }
}

export function Finder() {
  const [n, setN] = useState(1)
  const r = recommend(n)
  return (
    <section className="finder sec" id="finder" aria-labelledby="finder-title">
      <div className="wrap finder-grid">
        <div className="finder-copy">
          <p className="eyebrow eyebrow-light">Office finder</p>
          <h2 id="finder-title">How many people need a seat?</h2>
          <p>Slide to your team size and we'll suggest the right ADGM office for rent at Addax Tower.</p>
          <div className="range">
            <label htmlFor="team" className="range-label">Team size: <output htmlFor="team">{n}{n === 25 ? '+' : ''} {n === 1 ? 'person' : 'people'}</output></label>
            <input id="team" type="range" min="1" max="25" value={n} onChange={(e) => setN(Number(e.target.value))} style={{ '--p': `${((n - 1) / 24) * 100}%` }} />
            <div className="range-ticks" aria-hidden="true"><span>1</span><span>5</span><span>10</span><span>15</span><span>20</span><span>25+</span></div>
          </div>
        </div>
        <div className="finder-result" aria-live="polite">
          <div className="fr-card" key={r.id}>
            <figure><img src={images[r.img]} alt="" width="600" height="450" loading="lazy" decoding="async" /></figure>
            <div className="fr-body">
              <p className="fr-kicker">Recommended</p>
              <h3>{r.title}</h3>
              <p className="fr-price">{r.price}</p>
              <p>{r.text}</p>
              <a className="btn btn-primary" href={wa(`Hi Aegis, we are ${n} people looking for an office in ADGM.`)} target="_blank" rel="noopener noreferrer">Ask about this office</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Options() {
  return (
    <section className="options sec" id="options" aria-labelledby="opt-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="eyebrow">Office space for rent in ADGM</p>
            <h2 id="opt-title">Every way to rent space in ADGM, under one roof</h2>
          </div>
          <p>Office rental in ADGM from a flexi desk to a private office ADGM teams of 20+ share — flexible office space ADGM style, all in the same business centre, so upgrading never means moving buildings.</p>
        </div>
        <ul className="opt-grid">
          {options.map((o, i) => (
            <Reveal as="li" key={o.id} variant="flip" delay={(i % 3) * 110} className="opt">
              <figure className="opt-img">
                <img src={images[o.img]} alt={`${o.name} for rent in ADGM at Aegis Coworking, Addax Tower`} width={o.w} height={o.h} loading="lazy" decoding="async" />
                <span className="opt-size">{o.size}</span>
              </figure>
              <div className="opt-body">
                <h3>{o.name}</h3>
                <p className="opt-price"><b>{o.price}</b> <span>{o.unit}</span></p>
                <p>{o.text}</p>
                <a href={o.href} className="opt-link">Details <Icon name="arrow" size={15} /></a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Perks() {
  return (
    <section className="perks sec" aria-labelledby="perks-title">
      <div className="wrap perks-grid">
        <div className="perks-head">
          <p className="eyebrow">Serviced office ADGM</p>
          <h2 id="perks-title">A furnished office in ADGM, serviced for you</h2>
          <p>Every private office at Aegis is a serviced office Abu Dhabi teams can rely on — a furnished office ADGM companies move into on day one, with one monthly rent covering what a traditional lease bills separately.</p>
          <figure className="perks-photo">
                         <img src={images.mediumImg} alt="Furnished private office for rent in ADGM at Aegis Coworking, Addax Tower" width="700" height="700" loading="lazy" decoding="async" />
          </figure>
        </div>
        <ul className="perk-list">
          {officePerks.map((p, i) => (
            <Reveal as="li" key={p.title} variant="spin" delay={(i % 2) * 120}>
              <span className="perk-ic"><Icon name={p.icon} size={22} strokeWidth={1.6} /></span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Rolling counter: the final number is in the HTML; it rolls up from 0 when it scrolls into view
function Counter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const [v, setV] = useState(value)
  useEffect(() => {
    const el = ref.current
    if (!el || value === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / 1300)
        setV(Math.round(value * (1 - Math.pow(1 - k, 3))))
        if (k < 1) raf = requestAnimationFrame(tick)
      }
      setV(0)
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.6 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value])
  return <span ref={ref} className="counter">{prefix}{v}{suffix}</span>
}

export function Lease() {
  return (
    <section className="lease sec" id="lease" aria-labelledby="lease-title">
      <div className="wrap">
        <div className="head head-center">
          <p className="eyebrow eyebrow-light">Office leasing ADGM</p>
          <h2 id="lease-title">From viewing to your own ADGM office in four steps</h2>
          <p>Office leasing in ADGM without the paperwork maze — we handle the AccessRP lease registration for you.</p>
        </div>
        <ol className="lease-steps">
          {leaseSteps.map((s, i) => (
            <Reveal as="li" key={s.title} variant="flip" delay={i * 130}>
              <span className="ls-n" aria-hidden="true"><span>{i + 1}</span></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd><Counter value={s.value} prefix={s.prefix} suffix={s.suffix} /><small>{s.label}</small></dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export function Compare() {
  return (
    <section className="compare sec" id="compare" aria-labelledby="cmp-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="eyebrow">Business centre ADGM</p>
            <h2 id="cmp-title">Business centre or traditional ADGM office lease?</h2>
          </div>
          <p>Both give you commercial office space ADGM companies can license. The difference is how much you pay before your first day — and how fast you can move in.</p>
        </div>
        <Reveal className="cmp" variant="tilt">
          <div className="cmp-row cmp-head" aria-hidden="true">
            <span />
            <span className="cmp-bc"><b>Aegis business centre</b><small>Serviced office ADGM</small></span>
            <span><b>Traditional lease</b><small>Shell & core office</small></span>
          </div>
          <table>
            <caption className="sr-only">Business centre vs traditional office lease in ADGM</caption>
            <thead className="sr-only"><tr><th scope="col">Feature</th><th scope="col">Aegis business centre</th><th scope="col">Traditional lease</th></tr></thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.label} className="cmp-row">
                  <th scope="row">{r.label}</th>
                  <td className="cmp-bc" data-label="Aegis"><Icon name="check" size={15} strokeWidth={2.6} />{r.bc}</td>
                  <td data-label="Traditional">{r.trad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="fine">
          Comparing locations too? See <a href={`${MAIN_SITE}/blog/adgm-vs-difc-workspace-cost`}>ADGM vs DIFC workspace cost</a>, or
          get a <a href="https://servicedofficeadgm.online/">virtual office in ADGM</a> if you only need the address.
        </p>
      </div>
    </section>
  )
}

export function Gallery() {
  const pics = [
    { src: images.heroImg, w: 1200, h: 900, alt: 'Private office ADGM with Al Reem Island views at Addax Tower', cls: 'g1' },
    { src: images.receptionImg, w: 900, h: 675, alt: 'Reception of Aegis Coworking business centre in ADGM', cls: 'g2' },
    { src: images.meetingImg, w: 900, h: 675, alt: 'Meeting room for office tenants in ADGM', cls: 'g3' },
    { src: images.flexiImg, w: 900, h: 675, alt: 'Flexi desk in ADGM at Addax Tower', cls: 'g4' },
    { src: images.largeImg, w: 512, h: 512, alt: 'Large executive private office for rent in Abu Dhabi', cls: 'g5' },
  ]
  return (
    <section className="gallery sec" aria-labelledby="gal-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="eyebrow">Office space Addax Tower</p>
            <h2 id="gal-title">Inside our ADGM office space</h2>
          </div>
          <p>Office space Abu Dhabi Global Market tenants see on Level 38 of Addax Tower: private offices, desks by the window, meeting rooms, a boardroom and a staffed reception.</p>
        </div>
        <div className="bento">
          {pics.map((p, i) => (
            <Reveal as="figure" key={p.cls} className={p.cls} delay={i * 70} variant="spin">
              <img src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" decoding="async" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
