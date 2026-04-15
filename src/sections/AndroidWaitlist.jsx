import { useState } from 'react'
import './AndroidWaitlist.css'

export default function AndroidWaitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  function handleSubmit(e) {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setStatus('error')
      return
    }
    // TODO: Wire to Mailchimp / ConvertKit / your email service
    // Example: POST to your API endpoint with { email }
    console.log('Waitlist signup:', email)
    setStatus('success')
    setEmail('')
    // gtag('event', 'android_waitlist_signup', { email }) // uncomment after GA4 setup
  }

  return (
    <section id="android" className="section android">
      <div className="android__glow" />
      <div className="container android__inner">
        <div className="android__content">
          <span className="section-label">🤖 Android</span>
          <h2 className="section-title">Android App<br /><span>Coming Soon.</span></h2>
          <p className="section-sub">
            We're bringing Auto Dealer Pro to Android. Join the waitlist and be the first to know when it launches — plus get an exclusive early-bird discount.
          </p>

          <ul className="android__perks">
            <li>✅ First to know when Android launches</li>
            <li>✅ Exclusive early-bird discount</li>
            <li>✅ Free 14-day trial included</li>
          </ul>

          <form className="waitlist-form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="waitlist-input"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              aria-label="Email address for Android waitlist"
              required
            />
            <button type="submit" className="waitlist-btn">
              Notify Me →
            </button>
          </form>

          {status === 'success' && (
            <p className="waitlist-msg waitlist-msg--success">
              ✅ You're on the list\! We'll email you when Android launches.
            </p>
          )}
          {status === 'error' && (
            <p className="waitlist-msg waitlist-msg--error">
              Please enter a valid email address.
            </p>
          )}
        </div>

        <div className="android__mockup">
          <div className="android-phone">
            <div className="android-phone__notch" />
            <div className="android-phone__screen">
              <div className="android-coming-badge">🤖 Android</div>
              <div className="android-coming-text">Coming<br />Soon</div>
              <div className="android-coming-sub">Join the waitlist ↑</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
