import React from 'react'

const FieldsName = (props) => {
    return (

        <div className='px-3 py-1 bg-zinc-800 rounded-lg cursor-pointer flex-shrink-0'>
            <button >{props.cat}</button>
            
        </div>
    )
}

export default FieldsName