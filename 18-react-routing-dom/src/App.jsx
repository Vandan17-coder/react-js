import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {

  return (
    <div>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  )
} 

export default App

/*
React Router:

- <Routes> acts as a container for all application routes.
- <Route> maps a URL path to the component that should be rendered.
- path="/"        -> Renders the Home component.
- path="/about"   -> Renders the About component.
- path="/contact" -> Renders the Contact component.
- Navbar is placed outside <Routes>, so it remains visible on every page.
- When the URL changes, React Router updates only the matching component without refreshing the entire page (Single Page Application - SPA).
*/