import React from 'react'
import {House} from 'lucide-react'
import {Clapperboard} from 'lucide-react'
import {SquarePlay} from 'lucide-react'
import {CircleUserRound} from 'lucide-react'

const SidebarMini = () => {


    const items = [
                { icon: <House />, label: "Home" },
                { icon: <Clapperboard />, label: "Shorts" },
                { icon: <SquarePlay />, label: "Subscriptions" },
                { icon: <CircleUserRound />, label: "You" },
            ];

    return (
        <div className="flex flex-col items-center mt-2">
            
            {items.map((elem,idx) => (
                <button 
                    key="idx" 
                    className="flex flex-col  items-center gap-1 w-16 py-4 rounded-xl hover:bg-zinc-800">
                    {elem.icon}
                    <span className="text-xs">{elem.label}</span>
                </button>
            ))}

        </div>
    )
}

export default SidebarMini