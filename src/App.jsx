import { useState } from 'react'
import Hero from './components/hero'
import About from './components/about'
import Experience from './components/experience'
import Certifications from './components/certifications'
import Awards from './components/awards'
import ClientAppreciation from './components/clientAppreciation'
import Skills from './components/skills'
import Contact from './components/contact'
import Navbar from './components/navbar'

export default function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'theme-dark' : 'theme-light'}>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Awards />
      <ClientAppreciation />
      <Skills />
      <Contact />
    </div>
  )
}