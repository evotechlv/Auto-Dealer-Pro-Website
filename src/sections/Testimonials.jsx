import './Testimonials.css'

const testimonials = [
  {
    stars: 5,
    quote: 'I used to spend every Sunday reconciling expenses from the week. After switching to Auto Dealer Pro, that nightmare completely disappeared. Everything is logged as it happens.',
    name: 'Carlos R.',
    role: 'Independent Auto Dealer, Las Vegas NV',
    avatar: '🚗',
  },
  {
    stars: 5,
    quote: "Finally an app built for dealers like me. Generating invoices used to take 30 minutes of paperwork. Now it's done before the customer even drives off the lot.",
    name: 'Marcus T.',
    role: 'Used Car Dealer, Phoenix AZ',
    avatar: '🏪',
  },
  {
    stars: 5,
    quote: "The profit dashboard alone is worth it. I can see exactly which cars are making me money and which ones I need to move faster. My margins are up 20% since I started using it.",
    name: 'Diana V.',
    role: 'Buy Here Pay Here Dealer, Houston TX',
    avatar: '💼',
  },
]

const stats = [
  { value: '4.8★', label: 'App Store Rating' },
  { value: '500+', label: 'Dealers Using It' },
  { value: '$0', label: 'First 14 Days' },
  { value: '60s', label: 'To Generate Invoice' },
]

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">Real Dealers. Real Results.</span>
          <h2 className="section-title">Dealers <span>Love</span> Auto Dealer Pro</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="tcard" key={i}>
              <div className="tcard__stars">{'⭐'.repeat(t.stars)}</div>
              <p className="tcard__quote">"{t.quote}"</p>
              <div className="tcard__author">
                <div className="tcard__avatar">{t.avatar}</div>
                <div>
                  <div className="tcard__name">{t.name}</div>
                  <div className="tcard__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__stats">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
