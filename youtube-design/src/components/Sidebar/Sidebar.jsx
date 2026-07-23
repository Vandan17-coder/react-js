import React from 'react'
import SidebarWide from './SidebarWide'
import SidebarMini from './SidebarMini'

const Sidebar = ({openSidebar}) => {

    return (
        
        <div className={`${openSidebar ? "w-60" : "w-20"} bg-black `}>
            {openSidebar ? <SidebarWide /> : <SidebarMini />} 
        </div>
    )
}

export default Sidebar