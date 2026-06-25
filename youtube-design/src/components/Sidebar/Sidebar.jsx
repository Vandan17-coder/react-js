import React from 'react'
import {House} from 'lucide-react'
import {Clapperboard} from 'lucide-react'
import {SquarePlay} from 'lucide-react'
import {CircleUserRound} from 'lucide-react'
import SidebarItem from "./SidebarItem"

const Sidebar = () => {

    const items = [
                    { icon: <House />, label: "Home" },
                    { icon: <Clapperboard />, label: "Shorts" },
                    { icon: <SquarePlay />, label: "Subscriptions" },
                    { icon: <CircleUserRound />, label: "You" },
                  ];

    return (
        
        <div className='w-20 flex-shrink-0 flex flex-col px-2'>
            {items.map(function(elem,idx){
               return <SidebarItem key={idx} icon={elem.icon} label={elem.label} />
            })}
        </div>
    )
}

export default Sidebar