import React from 'react'
import Navbar from "./components/Navbar/Navbar.jsx"
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Fields from './components/Fields/Fields.jsx'

const App = () => {

  return (
    <div className='h-screen w-full  bg-black text-white '>
    
        <Navbar />

        <div className='flex'>
          <Sidebar />
          <Fields />
        </div>  

    </div>
  )
}

export default App