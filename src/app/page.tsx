'use client'

import Link from 'next/link'
import { useEffect, useRef, useCallback, useState } from 'react'

/* カラーブロックのローテーション */
const COLORS = ['#f5d547', '#d94cf5', '#5b8def', '#4ecb71', '#f09a4e', '#f27e9f']

/* ── データ ── */
const NEWS = [
  { date: '2026.03', title: '2025年秋のワークショップの記録映像を公開しました', cat: 'News' },
  { date: '2025.09', title: '【書籍発売情報】松井至さんの初の著書が刊行されます', cat: 'Release' },
  { date: '2025.06', title: '井上幸治さんのレビューをアーカイブに公開しました', cat: 'Archive' },
  { date: '2025.02', title: '根原千草さんのレポートをアーカイブに公開しました', cat: 'Report' },
  { date: '2025.02', title: '【掲載情報】WEB生活 人に届く', cat: 'Press' },
]

type EventItem = {
  title: string
  type: string
  dateLabel: string
  dateBig?: string
  color?: string
  image?: string
}

const EVENTS: EventItem[] = [
  {
    title: '生きる家プロジェクト 2026春「オープンスペース兼鑑賞会」',
    type: 'Upcoming Event',
    dateLabel: '2026年3月28日（土）13:30 — 17:00',
    dateBig: '3月28日',
    color: COLORS[0],
  },
  {
    title: '石巻でみてみようシリーズ Vol.2 映画『HAPPYEND』上映会',
    type: 'Past Screening',
    dateLabel: '2025年12月13日（土）',
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80',
  },
  {
    title: '生きる家プロジェクト 2025秋「オープンスペースin渡波の家」',
    type: 'Past Event',
    dateLabel: '2025年10月18日（土）10:30 — 16:00',
    dateBig: '10月18日',
    color: COLORS[1],
  },
  {
    title: 'Artist In Residence 石巻 2024 開催',
    type: 'Artist In Residence',
    dateLabel: '2024年10月',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80',
  },
  {
    title: '【みのたけ学びシリーズ】ドイツ編（第4回）',
    type: 'Past Workshop',
    dateLabel: '2025年8月30日（土）18:30〜',
    dateBig: '8月30日',
    color: COLORS[2],
  },
  {
    title: '生きる家プロジェクト 2025｜オープンスペース兼展覧会「わたしたちはばらばらの場所で」',
    type: 'Past Exhibition',
    dateLabel: '2025年2月22日（土）〜 24日（月祝）',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=600&q=80',
  },
]

const ARCHIVES = [
  {
    title: '海辺の家のカーテン',
    date: '2025.06',
    cat: 'Report',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&q=80',
  },
  {
    title: '家を手当てすること',
    date: '2025.02',
    cat: 'Report',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=500&q=80',
  },
  {
    title: '石巻でつくる',
    date: '2024.02',
    cat: 'Research',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80',
  },
  {
    title: 'みのたけ学びシリーズ',
    date: '2024.02',
    cat: 'Report',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80',
  },
  {
    title: 'Artist In Residence 2022',
    date: '2022.12',
    cat: 'Research',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&q=80',
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const obsRef = useRef<IntersectionObserver | null>(null)

  const rv = useCallback((node: HTMLElement | null) => {
    if (!node) return
    if (!obsRef.current) {
      obsRef.current = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('vis')
              obsRef.current?.unobserve(e.target)
            }
          }),
        { threshold: 0.05 },
      )
    }
    obsRef.current.observe(node)
  }, [])

  useEffect(() => () => obsRef.current?.disconnect(), [])

  const links = [
    { label: 'News', href: '#news' },
    { label: 'Project / Event', href: '#events' },
    { label: 'Archive', href: '#archive' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const filteredEvents =
    filter === 'all' ? EVENTS : EVENTS.filter((e) => e.type.toLowerCase().includes(filter))

  return (
    <div className="shell">
      {/* ヘッダー */}
      <header className="hdr">
        <div className="hdr-inner">
          <Link href="/" className="hdr-logo">
            Ishinomaki Art Project
          </Link>
          <div className="hdr-r">
            <nav className="hdr-nav">
              {links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="hdr-dots">
              <span />
              <span />
              <span />
            </div>
            <button
              className={`burger ${menuOpen ? 'on' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`mob-nav ${menuOpen ? 'on' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </nav>

      {/* ヒーロー */}
      <section className="hero-gallery">
        <h1 className="hero-title">
          Ishinomaki
          <br />
          <i>Art Project</i>
        </h1>
        <div className="hero-meta">
          <span className="hero-tag">Art</span>
          <span className="hero-tag">Research</span>
          <span className="hero-tag">Community</span>
        </div>
        <p className="hero-desc">
          石巻を拠点に、アートの実践を通じて地域の記憶と未来をつなぐプロジェクト。
          展覧会、ワークショップ、アーティスト・イン・レジデンスなどの活動を行っています。
        </p>
      </section>

      {/* ヒーロー画像 */}
      <div className="hero-img-wrap">
        <div
          className="hero-img"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=1800&q=80)',
          }}
        />
      </div>

      <div className="wrap">
        {/* NEWS */}
        <section id="news" className="sec" ref={rv}>
          <div className="sec-head">
            <h2 className="sec-label">News</h2>
            <a href="/news" className="sec-more">
              View All
            </a>
          </div>
          <div>
            {NEWS.map((n, i) => (
              <a key={i} href="#" className="news-row">
                <time className="news-d">{n.date}</time>
                <span className="news-t">{n.title}</span>
                <span className="news-c">{n.cat}</span>
              </a>
            ))}
          </div>
        </section>

        {/* PROJECT / EVENT — THE GUND 風カード */}
        <section id="events" className="sec" ref={rv}>
          <div className="sec-head">
            <h2 className="sec-label">Project / Event</h2>
            <a href="/events" className="sec-more">
              View All
            </a>
          </div>

          {/* フィルター */}
          <div className="filter-bar">
            <div className="filter-left">
              {['all', 'event', 'residence', 'screening', 'exhibition', 'workshop'].map((f) => (
                <button
                  key={f}
                  className="filter-btn"
                  onClick={() => setFilter(f)}
                  style={{
                    background: filter === f ? 'var(--fg)' : undefined,
                    color: filter === f ? 'var(--bg)' : undefined,
                    borderColor: filter === f ? 'var(--fg)' : undefined,
                  }}
                >
                  {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
            <span className="filter-count">{filteredEvents.length} Results</span>
          </div>

          {/* イベントカード */}
          <div className="event-list">
            {filteredEvents.map((ev, i) => (
              <a key={i} href="#" className="event-card">
                <div className="event-visual">
                  {ev.image ? (
                    <div
                      className="event-visual-img"
                      style={{ backgroundImage: `url(${ev.image})` }}
                    />
                  ) : (
                    <div className="event-visual-color" style={{ background: ev.color }}>
                      <span className="event-visual-date">{ev.dateBig}</span>
                    </div>
                  )}
                </div>
                <div className="event-info">
                  <span className="event-type">{ev.type}</span>
                  <span className="event-date-text">{ev.dateLabel}</span>
                  <h3 className="event-name">{ev.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ARCHIVE */}
        <section id="archive" className="sec" ref={rv}>
          <div className="sec-head">
            <h2 className="sec-label">Archive</h2>
            <a href="/archive" className="sec-more">
              View All
            </a>
          </div>
          <div className="archive-scroll">
            <div className="archive-track">
              {ARCHIVES.map((a, i) => (
                <a key={i} href="#" className="archive-item">
                  <div className="archive-item-img">
                    <div style={{ backgroundImage: `url(${a.image})` }} />
                  </div>
                  <p className="archive-item-cat">{a.cat}</p>
                  <h3 className="archive-item-title">{a.title}</h3>
                  <p className="archive-item-date">{a.date}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="scroll-cue">
            <div className="scroll-cue-bar" />
            <span>Drag to explore</span>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="sec" ref={rv}>
          <div className="sec-head">
            <h2 className="sec-label">About</h2>
          </div>
          <div className="about-split">
            <div
              className="about-img"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80)',
              }}
            />
            <div className="about-txt">
              <p className="about-lead">
                東日本大震災を契機に始まった、 石巻を拠点とするアートプロジェクト。
              </p>
              <p className="about-p">
                「生きる家プロジェクト」を中心に、被災した空き家の再生と
                アートの融合を試みながら、地域の記憶を次の世代へつなぐ
                活動を展開しています。展覧会、ワークショップ、映画上映会、
                アーティスト・イン・レジデンスなど、多様な形で
                アートと地域の接点を生み出しています。
              </p>
              <a href="/about" className="about-btn">
                Read More
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* フッター */}
      <footer id="contact" className="ftr">
        <div className="ftr-inner">
          <div className="ftr-top">
            <div>
              <p className="ftr-brand">Ishinomaki Art Project</p>
              <p className="ftr-desc">石巻を拠点に、アート・リサーチ・地域をつなぐプロジェクト。</p>
            </div>
            <div className="ftr-cols">
              <div className="ftr-col">
                <h5>Menu</h5>
                <ul>
                  <li>
                    <a href="#news">News</a>
                  </li>
                  <li>
                    <a href="#events">Project / Event</a>
                  </li>
                  <li>
                    <a href="#archive">Archive</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                </ul>
              </div>
              <div className="ftr-col">
                <h5>Connect</h5>
                <ul>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ftr-bot">
            <span>&copy; 2026 Ishinomaki Art Project</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
