import React from 'react'

const SidebarItem = (props) => {

    return (
        <div className='w-18 '>
            <button className='flex flex-col items-center gap-1 p-3 py-4 w-15 cursor-pointer hover:bg-zinc-800 rounded-xl'>
                {props.icon}
                <span className='text-[9px] whitespace-nowrap'>{props.label}</span>
            </button>
        </div>
    )
}

export default SidebarItem