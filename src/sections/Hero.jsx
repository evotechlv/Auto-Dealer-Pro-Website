import './Hero.css'

const APP_STORE_URL = 'https://apps.apple.com/us/app/auto-dealer-pro/id6761709277?itscg=30200&itsct=apps_box_link&mttnsubad=6761709277'
const APP_STORE_SHORT = 'https://apple.co/4dJY1fO'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="container hero__inner">

        {/* ── Left: Copy + CTAs ── */}
        <div className="hero__content">
          <div className="hero__badge">
            <img src="/apple-marketing/app-icon.png" alt="Auto Dealer Pro" className="hero__badge-icon" />
            Available Now on the App Store
          </div>

          <h1 className="hero__title">
            Run Your Lot<br />
            From Your <span>iPhone.</span>
          </h1>

          <p className="hero__sub">
            We are live and you're officially invited to see what's new.
            The all-in-one app for independent auto dealers —
            inventory, invoices, expenses, and profits in your pocket.
          </p>

          <div className="hero__badges">
            <a
              href={APP_STORE_URL}
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
            <span>🔒 Free 14-Day Trial</span>
            <span className="hero__proof-dot">·</span>
            <span>🚗 Built for Dealers</span>
          </div>

          {/* QR Code — desktop only */}
          <div className="hero__qr">
            <img src="/apple-marketing/qr-code.png" alt="Scan to download" className="hero__qr-img" />
            <div className="hero__qr-text">
              <span>Scan to download</span>
              <a href={APP_STORE_SHORT} target="_blank" rel="noopener noreferrer">
                {APP_STORE_SHORT}
              </a>
            </div>
          </div>
        </div>

        {/* ── Right: Real app promo image ── */}
        <div className="hero__visual">
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="hero__promo-link">
            <img
              src="/apple-marketing/portrait-banner.png"
              alt="Auto Dealer Pro — App Screenshot"
              className="hero__promo-img"
            />
          </a>
        </div>

      </div>
    </section>
  )
}
