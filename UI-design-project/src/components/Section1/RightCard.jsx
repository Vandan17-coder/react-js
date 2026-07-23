import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (

        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img}></img>
            
            <RightCardContent tag={props.tag} id={props.id} color={props.color}/>
        </div>
    )
}

export default RightCard