import React from 'react'
import {Ellipsis} from 'lucide-react'
import {Play} from 'lucide-react'
import {CircleCheck} from 'lucide-react'

const ContentGrid = (props) => {

    return(
        <div className='flex'>
            
            <div className='inline-block hover:bg-zinc-900 cursor-pointer m-1 p-2 rounded-xl'>
                <img className="w-full h-56 rounded-xl object-cover" src={props.thumbnail} alt="Nature video"></img>

                <div className='py-4 px-1 flex'>
                    {/*account profile photo*/}
                    <img className='h-8 w-8 object-cover rounded-full' src={props.profile}></img>
                
                    {/*video title ,views, channel name, post day*/ }
                    <div className='flex justify-between gap-9 px-2'>
                            {/*Video Title, channel name, post day*/}
                        <div>    
                            <h4 className='w-74 font-semibold pb-1'>
                                {props.title}
                            </h4>

                            <p className='flex items-center gap-5 text-sm text-zinc-400 font-medium'></p>
                            <div className="flex items-center gap-5 text-sm text-zinc-400">
                                <span className="flex items-center gap-2">
                                    {props.channel} <CircleCheck size={15} />
                                </span>

                                <span className="flex items-center gap-1">
                                    <Play size={10} />
                                    {props.views}
                                </span>

                                <span className="whitespace-nowrap">{props.uploaded}</span>
                            </div>
                        
                        </div>    
                            <Ellipsis size={22}/>
                    </div>
                
                </div>
            </div>

        </div>
    )
}

export default ContentGrid