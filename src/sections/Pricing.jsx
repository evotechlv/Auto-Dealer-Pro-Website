import './Pricing.css'

const plans = [
  {
    name: 'Free Trial',
    price: '0',
    period: 'First 14 days',
    highlight: false,
    badge: null,
    features: [
      'Full access to all features',
      'Unlimited vehicles',
      'No credit card required',
      'iOS App (Android coming soon)',
    ],
    cta: 'Start Free',
    ctaHref: 'https://apps.apple.com/us/app/auto-dealer-pro/id6761709277?itscg=30200&itsct=apps_box_link&mttnsubad=6761709277',
    ctaStyle: 'gray',
  },
  {
    name: 'Monthly',
    price: '29.99',
    period: 'per month',
    highlight: true,
    badge: '⭐ Most Popular',
    features: [
      'Everything in Free Trial',
      'Full inventory management',
      'Invoice generation & scanning',
      'Expense tracking & reports',
      'Profit dashboard',
    ],
    cta: 'Get Started',
    ctaHref: 'https://apps.apple.com/us/app/auto-dealer-pro/id6761709277?itscg=30200&itsct=apps_box_link&mttnsubad=6761709277',
    ctaStyle: 'blue',
  },
  {
    name: 'Annual',
    price: '249.99',
    period: '/ year (≈ $20.83/mo)',
    highlight: false,
    badge: null,
    features: [
      'Everything in Monthly',
      'Save 31% vs monthly',
      'Priority support',
      'Early access to new features',
    ],
    cta: 'Best Value',
    ctaHref: 'https://apps.apple.com/us/app/auto-dealer-pro/id6761709277?itscg=30200&itsct=apps_box_link&mttnsubad=6761709277',
    ctaStyle: 'green',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="pricing__header">
          <span className="section-label">Simple Pricing</span>
          <h2 className="section-title">Honest Pricing.<br /><span>No Hidden Fees.</span></h2>
          <p className="section-sub">Cancel anytime. Start free today. No credit card required.</p>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card ${plan.highlight ? 'pricing-card--highlight' : ''}`}
            >
              {plan.badge && <div className="pricing-card__badge">{plan.badge}</div>}
              <div className="pricing-card__name">{plan.name}</div>
              <div className={`pricing-card__price ${plan.price.length > 4 ? 'pricing-card__price--lg' : ''}`}>
                <sup>$</sup>{plan.price}
              </div>
              <div className={`pricing-card__period ${plan.ctaStyle === 'green' ? 'pricing-card__period--green' : ''}`}>
                {plan.period}
              </div>
              <ul className="pricing-card__features">
                {plan.features.map((f, j) => (
                  <li key={j}><span className="check">✓</span>{f}</li>
                ))}
              </ul>
              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`pricing-card__btn pricing-card__btn--${plan.ctaStyle}`}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>

        <p className="pricing__note">
          Download at: <strong>myautodealerpro.com</strong> &nbsp;·&nbsp; @myautodealerpro &nbsp;·&nbsp; iOS App Store
        </p>
      </div>
    </section>
  )
}
