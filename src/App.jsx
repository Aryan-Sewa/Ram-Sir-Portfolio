import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Awards from './components/Awards'
import ClientAppreciation from './components/ClientAppreciation'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

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