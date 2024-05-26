import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Parallex from './components/Parallex/Parallex'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id='Home'><Navbar /><Hero /></section>
      <section id='Services'><Parallex type="services" /></section>
      <section><Services /></section>
      <section id='Contact'><Contact /></section>
      <section id='Portfolio'><Parallex type="portfolio" /></section>
      <section><Portfolio /></section>
    </>
  )
}

export default App
