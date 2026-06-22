import React from 'react'
import {MoveRight} from 'lucide-react'

const RightCardContent = (props) => {
    return (
        
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>
                <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
                <div>
                    <p className='text-shadow-2xs text-lg leading-normal text-white'>React really works and how to build production-ready apps confidently.</p>
                    <div className='flex justify-between mt-1'>
                        <button 
                       style={{backgroundColor:props.color}} className=' text-white font-medium px-5 py-1 rounded-full text-lg'>{props.tag}</button>
                        <button className=' text-white font-medium px-3 py-2 rounded-full'><MoveRight /></button>
                    </div>
                </div>
            </div>
    )
}

export default RightCardContent