import React from 'react'

const Aircondition = (props) => {

const Icon = props.icon    

    return (
        <div className="flex flex-row text-s gap-3 ml-4">
            <div>
                <Icon />
            </div>
            
            <div className="flex flex-col gap-2 ">
                <p>{props.label}</p>
                <p className="text-xl">{props.value}</p>
            </div>
        </div>
    )
}

export default Aircondition 