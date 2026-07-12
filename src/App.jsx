import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Work from './components/Work.jsx'
import Certificates from './components/Certificates.jsx'
import Hobbies from './components/Hobbies.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-base font-sans text-text antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Certificates />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
