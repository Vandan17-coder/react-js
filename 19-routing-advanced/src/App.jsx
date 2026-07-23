import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Mens from './pages/Men'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {

  return (
    <div className="h-screen bg-black text-white">
      
      <Navbar />
      <Navbar2 />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/courses' element={<Courses />}> </Route>
          <Route path='/courses/:courseId' element={<CourseDetails />}> </Route>

          <Route path='/product' element={<Product />}>
            <Route path='men' element={<Mens />}></Route>
          </Route>

          <Route path='*' element={<NotFound />}></Route>
        </Routes> 
      <Footer />
    </div>
  )
}

export default App