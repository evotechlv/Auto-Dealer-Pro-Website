import './AppPreview.css'

const screens = [
  {
    src: '/screenshots/screen-dashboard.png',
    alt: 'Auto Dealer Pro — Dashboard with revenue and profit overview',
    label: 'Dashboard',
    caption: 'Revenue & Profit at a glance',
    accent: 'blue',
    tilt: '-5deg',
  },
  {
    src: '/screenshots/screen-add-vehicle.png',
    alt: 'Auto Dealer Pro — Add Vehicle form with VIN scanner',
    label: 'Inventory',
    caption: 'Add vehicles in seconds',
    accent: 'orange',
    tilt: '0deg',
    hero: true,
  },
  {
    src: '/screenshots/screen-expenses.png',
    alt: 'Auto Dealer Pro — Business Expenses tracker',
    label: 'Business',
    caption: 'Track every expense',
    accent: 'green',
    tilt: '5deg',
  },
]

export default function AppPreview() {
  return (
    <section id="preview" className="section preview">
      <div className="preview__bg" />
      <div className="container">

        <div className="preview__header">
          <span className="section-label">App Preview</span>
          <h2 className="section-title">See It In Action.<br /><span>Real Screens. Real Data.</span></h2>
          <p className="section-sub">
            Everything you need to run your lot — clean, fast, and right in your pocket.
          </p>
        </div>

        <div className="preview__stage">
          {screens.map((s, i) => (
            <div
              key={i}
              className={`preview__phone ${s.hero ? 'preview__phone--hero' : ''} preview__phone--${s.accent}`}
              style={{ '--tilt': s.tilt }}
            >
              {/* Phone shell */}
              <div className="preview__shell">
                <div className="preview__notch" />
                <div className="preview__screen">
                  <img src={s.src} alt={s.alt} loading={s.hero ? 'eager' : 'lazy'} />
                </div>
              </div>
              {/* Label below phone */}
              <div className="preview__label">
                <span className={`preview__label-dot preview__label-dot--${s.accent}`} />
                <span className="preview__label-text">{s.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature pills */}
        <div className="preview__pills">
          {[
            { icon: '📊', label: 'Revenue & Profits' },
            { icon: '🚗', label: 'Inventory Management' },
            { icon: '💰', label: 'Expense Tracking' },
            { icon: '🧾', label: 'One-Tap Invoices' },
          ].map((h, i) => (
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
