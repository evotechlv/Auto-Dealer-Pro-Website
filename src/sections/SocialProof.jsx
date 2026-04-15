import './SocialProof.css'

const items = [
  { icon: '⭐', text: '4.8 App Store Rating' },
  { icon: '🚗', text: 'Built for Independent Dealers' },
  { icon: '📱', text: 'iOS App — Live Now' },
  { icon: '🔒', text: 'Secure & Private' },
  { icon: '💸', text: 'Free 30-Day Trial' },
]

export default function SocialProof() {
  return (
    <div className="social-proof">
      <div className="social-proof__track">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="social-proof__item">
            {item.icon} {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
