import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AppShowcase from './components/AppShowcase'
import TechStack from './components/TechStack'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import OurTeam from './components/OurTeam'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <AppShowcase />
        <TechStack />
        <div className="my-12">
          <OurTeam />
        </div>
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

