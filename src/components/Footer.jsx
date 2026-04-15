import './Footer.css'

const productLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Android Waitlist', href: '#android' },
]

const companyLinks = [
  { label: 'Download on iOS', href: 'https://apps.apple.com/us/app/auto-dealer-pro/id6761709277?itscg=30200&itsct=apps_box_link&mttnsubad=6761709277', external: true },
  { label: 'Privacy Policy', href: '/privacy', external: false },
  { label: 'Terms of Service', href: '/terms', external: false },
  { label: 'Support', href: 'mailto:support@myautodealerpro.com', external: true },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/myautodealerpro',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/myautodealerpro',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Myautodealerpro/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="/" className="footer__logo">
              <span>🚗</span> Auto Dealer <strong>Pro</strong>
            </a>
            <p className="footer__tagline">
              The #1 app for independent auto dealers.<br />
              Run your entire lot from your iPhone.
            </p>
            <div className="footer__social">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer__social-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Product</h4>
            <ul>
              {productLinks.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Company</h4>
            <ul>
              {companyLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__col--badges">
            <h4 className="footer__col-title">Download</h4>
            <a
              href="https://apps.apple.com/us/app/auto-dealer-pro/id6761709277?itscg=30200&itsct=apps_box_link&mttnsubad=6761709277"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__badge-link"
            >
              <img src="/badges/app-store-badge.svg" alt="Download on the App Store" className="footer__badge" />
            </a>
            <a href="#android" className="footer__badge-link footer__badge-link--android">
              <img src="/badges/google-play-preregister.png" alt="Pre-register on Google Play" className="footer__badge footer__badge--android" />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Auto Dealer Pro. All rights reserved.</p>
          <p>
            <a href="/privacy">Privacy Policy</a>
            &nbsp;·&nbsp;
            <a href="/terms">Terms of Service</a>
            &nbsp;·&nbsp;
            <a href="mailto:support@myautodealerpro.com">support@myautodealerpro.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
