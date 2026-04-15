import './AppPreview.css'

const highlights = [
  { icon: '🚗', label: 'Inventory Management' },
  { icon: '📊', label: 'Real-Time Profits' },
  { icon: '🧾', label: 'One-Tap Invoices' },
  { icon: '📷', label: 'Document Scanner' },
]

export default function AppPreview() {
  return (
    <section id="preview" className="section preview">
      <div className="preview__bg" />
      <div className="container">

        <div className="preview__header">
          <span className="section-label">App Preview</span>
          <h2 className="section-title">Built for Dealers.<br /><span>Loved by Dealers.</span></h2>
          <p className="section-sub">
            Everything you need to run your lot — clean, fast, and right in your pocket.
          </p>
        </div>

        <div className="preview__stage">
          {/* Left card — Square Post */}
          <div className="preview__card preview__card--left">
            <img
              src="/apple-marketing/square-post.png"
              alt="Auto Dealer Pro inventory management screen"
              loading="lazy"
            />
          </div>

          {/* Center card — Portrait Banner (hero phone) */}
          <div className="preview__card preview__card--center">
            <div className="preview__phone-frame">
              <img
                src="/apple-marketing/portrait-banner.png"
                alt="Auto Dealer Pro main dashboard on iPhone"
                loading="eager"
              />
            </div>
          </div>

          {/* Right card — Landscape Banner */}
          <div className="preview__card preview__card--right">
            <img
              src="/apple-marketing/landscape-banner.png"
              alt="Auto Dealer Pro profit tracking screen"
              loading="lazy"
            />
          </div>
        </div>

        {/* Feature pills */}
        <div className="preview__pills">
          {highlights.map((h, i) => (
            <div className="preview__pill" key={i}>
              <span className="preview__pill-icon">{h.icon}</span>
              <span className="preview__pill-label">{h.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
