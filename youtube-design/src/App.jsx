import React from 'react'
import Navbar from "./components/Navbar/Navbar.jsx"
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Fields from './components/Fields/Fields.jsx'
import Content from './components/Content/Content.jsx'

const App = () => {

  return (
    <div className='h-screen w-full bg-black text-white overflow-hidden'>
    
        <Navbar />

        <div className='flex h-[calc(100vh-64px)] overflow-hidden'>
          <Sidebar />

          <div className='flex-1 min-w-0 overflow-y-auto scrollbar-none'>
            <Fields />
            <Content />
          </div>

        </div>  
        

    </div>
  )
}

export default App