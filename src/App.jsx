import Header from './components/Header'
import Hero from './sections/Hero'
import SocialProof from './sections/SocialProof'
import Features from './sections/Features'
import AppPreview from './sections/AppPreview'
import HowItWorks from './sections/HowItWorks'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import AndroidWaitlist from './sections/AndroidWaitlist'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <AppPreview />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <AndroidWaitlist />
      </main>
      <Footer />
    </>
  )
}
