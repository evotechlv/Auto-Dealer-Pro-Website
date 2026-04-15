import './Features.css'

const features = [
  {
    icon: '📋',
    title: 'Inventory Management',
    desc: 'Add, edit, and track every vehicle on your lot. Photos, VIN, mileage, purchase price — all in one place.',
  },
  {
    icon: '💰',
    title: 'Sales & Profit Tracking',
    desc: 'See exactly how much you made on every car. Real-time profit margins calculated automatically.',
  },
  {
    icon: '📝',
    title: 'Sales Records',
    desc: 'Log every sale with buyer info, price, and notes. Build a complete history of every deal you close.',
  },
  {
    icon: '💸',
    title: 'Expense Tracking',
    desc: 'Log repairs, transport, auction fees, and every cost — so you always know your true cost per vehicle.',
  },
  {
    icon: '📊',
    title: 'Profit Dashboard',
    desc: 'Your full business performance at a glance. Revenue, expenses, and net profit updated in real time.',
  },
  {
    icon: '📸',
    title: 'Document Scanning',
    desc: 'Scan titles, contracts, and physical documents with your camera. Store everything digitally, always accessible.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="features__header">
          <span className="section-label">Everything You Need</span>
          <h2 className="section-title">Your Dealership.<br /><span>In Your Pocket.</span></h2>
          <p className="section-sub">
            Auto Dealer Pro gives you every tool a successful independent dealer needs — no paperwork, no spreadsheets, no headaches.
          </p>
        </div>

        <div className="features__grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-card__icon">{f.icon}</div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
