import './HowItWorks.css'

const steps = [
  {
    num: '01',
    icon: '📲',
    title: 'Download the App',
    desc: 'Get Auto Dealer Pro free on the App Store. No credit card required. Full access for 14 days.',
    accent: 'orange',
  },
  {
    num: '02',
    icon: '🚗',
    title: 'Add Your Inventory',
    desc: 'Snap photos and enter your vehicles in seconds. VIN, mileage, purchase price — all organized instantly.',
    accent: 'blue',
  },
  {
    num: '03',
    icon: '📊',
    title: 'Run Your Business',
    desc: 'Track every sale, expense, and profit in real time. Generate invoices, scan documents, and grow your lot.',
    accent: 'green',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how">
      <div className="how__bg" />
      <div className="container">
        <div className="how__header">
          <span className="section-label">Simple Setup</span>
          <h2 className="section-title">Up and Running<br /><span>in Minutes.</span></h2>
        </div>

        <div className="how__steps">
          {steps.map((s, i) => (
            <div className={`how__step how__step--${s.accent}`} key={i}>
              {/* Step badge */}
              <div className="how__step-badge">
                <span className="how__step-num">{s.num}</span>
              </div>

              {/* Connector line (between cards) */}
              {i < steps.length - 1 && (
                <div className="how__connector">
                  <div className="how__connector-line" />
                  <div className="how__connector-arrow">›</div>
                </div>
              )}

              <div className="how__step-icon">{s.icon}</div>
              <h3 className="how__step-title">{s.title}</h3>
              <p className="how__step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
