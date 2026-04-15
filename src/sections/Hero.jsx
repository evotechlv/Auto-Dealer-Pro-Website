import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span>📱</span> iOS Available Now &nbsp;·&nbsp; Android Coming Soon
          </div>
          <h1 className="hero__title">
            Run Your Lot<br />
            From Your <span>iPhone.</span>
          </h1>
          <p className="hero__sub">
            The all-in-one app for independent auto dealers. Inventory, invoices, expenses,
            and profit tracking — in your pocket.
          </p>

          <div className="hero__badges">
            <a
              href="https://apps.apple.com/us/app/auto-dealer-pro/id6761709277"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__store-link"
              aria-label="Download on the App Store"
            >
              <img
                src="/badges/app-store-badge.svg"
                alt="Download on the App Store"
                className="hero__store-badge"
              />
            </a>
            <a
              href="#android"
              className="hero__store-link hero__store-link--android"
              aria-label="Pre-register on Google Play"
            >
              <img
                src="/badges/google-play-preregister.png"
                alt="Pre-register on Google Play"
                className="hero__store-badge hero__store-badge--android"
              />
            </a>
          </div>

          <div className="hero__proof">
            <span>⭐ 4.8 App Store</span>
            <span className="hero__proof-dot">·</span>
            <span>🔒 Free 30-Day Trial</span>
            <span className="hero__proof-dot">·</span>
            <span>🚗 Built for Dealers</span>
          </div>
        </div>

        <div className="hero__mockup">
          <div className="mockup-phone">
            <div className="mockup-screen">
              <div className="mockup-bar">
                <span className="mockup-bar-label">Dashboard</span>
                <span className="mockup-bar-date">Today</span>
              </div>
              <div className="mockup-metric">
                <span className="mockup-metric-label">Revenue This Month</span>
                <span className="mockup-metric-value green">$48,200</span>
              </div>
              <div className="mockup-row-group">
                <div className="mockup-mini">
                  <span className="mockup-mini-label">Cars Sold</span>
                  <span className="mockup-mini-value">12</span>
                </div>
                <div className="mockup-mini">
                  <span className="mockup-mini-label">Net Profit</span>
                  <span className="mockup-mini-value green">$9,400</span>
                </div>
              </div>
              <div className="mockup-divider" />
              <div className="mockup-inv-title">Live Inventory</div>
              {[
                { car: '2021 Toyota Camry', price: '$18,500', status: 'Available', color: '#4ADE80' },
                { car: '2019 Honda Accord', price: '$14,900', status: 'Sold', color: '#FB923C' },
                { car: '2020 Ford F-150', price: '$27,000', status: 'Available', color: '#4ADE80' },
              ].map((v, i) => (
                <div className="mockup-car-row" key={i}>
                  <div>
                    <div className="mockup-car-name">{v.car}</div>
                    <div className="mockup-car-price">{v.price}</div>
                  </div>
                  <span className="mockup-status" style={{ color: v.color, borderColor: v.color }}>{v.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
