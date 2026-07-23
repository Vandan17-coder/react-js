import React from 'react'

const todayForecast = (props) => {  

    return (
        <div className="ml-2 mr-3 mt-1 mb-1">
           <div className="flex flex-col items-center gap-3 p-4 ">
                <p className="text-gray-400 text-xs">{props.time}</p>

                <img src={`https:${props.icon}`} alt={props.weather} className="w-8 h-8"/>

                <p className="font-bold text-xl">{props.temperature}</p>
            </div> 
            
        </div>
    )
}

export default todayForecast