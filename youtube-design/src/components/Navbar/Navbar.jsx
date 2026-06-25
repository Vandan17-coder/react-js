import React from 'react'
import {TextAlignJustify} from 'lucide-react'
import {Search} from 'lucide-react'
import {Mic} from 'lucide-react'
import {Plus} from 'lucide-react'
import {Bell} from 'lucide-react'

const Navbar = () => {

    return (
        <div className=' py-1 px-3 flex items-center justify-between'>

          {/*Youtube Logo */}
            <div className='flex items-center gap-8 cursor-pointer'>
                <div className='p-3 hover:bg-zinc-800 rounded-full '>
                    <TextAlignJustify size={24} />
                </div>

                <div className='flex items-center gap-1'>
                    <img className='h-5 flex'   src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube"></img>
                    <h3 className='text-2xl font-medium tracking-tighter'>YouTube</h3>
                </div>    
            </div>

          {/*Seach bar*/}
            <div className='flex-1 flex justify-center items-center gap-5'>

                {/*search box and earch icon*/}
                <div className='flex items-center rounded-4xl py-2 px-6  '>
                    <input type="text" placeholder="Search" className="w-[550px] max-w-full px-5 py-2 border border-zinc-700 rounded-l-full bg-black text-white outline-none"/>
                    <button className="px-5 py-2 border border-zinc-700 border-l-0 bg-[#222222] rounded-r-full cursor-pointer ">
                        <Search />
                    </button>    
                </div>    

                {/*Microphone icon*/}
                <div className=' p-2 bg-[#222222] rounded-full cursor-pointer hover:bg-zinc-700'>
                    <Mic size={24}/>
                </div>
            </div> 

           {/*profile notifiction and create right part of yt navbar */}
            <div className='flex items-center gap-5'>
                
                {/*create button*/}
                <div className='flex items-center w-26 bg-[#222222] py-2 px-3 rounded-4xl cursor-pointer hover:bg-zinc-700'>
                    <button className='flex font-semibold gap-1 cursor-pointer'>
                        <Plus size={22}/>
                        <h6 >Create</h6>
                    </button>    
                </div>

                {/*noitification*/}
                <div>
                    <button className='p-2 cursor-pointer hover:bg-zinc-700 rounded-full'>
                        <Bell />
                    </button>
                </div>

                {/*Profile*/}
                <div>
                    <button >
                        <img className='h-9 w-9 object-fit rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvThhPGFMjmP2S2dCHaCYN1z6EgKraWFP2o4spRXXInA&s=10"></img>
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Navbar