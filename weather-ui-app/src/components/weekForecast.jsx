import React from 'react'

const weekForecast = (props) => {

    return (
        <div className="">

            <div className="flex flex-row justify-between text-xs p-5 pb-6">
                <p>{props.day}</p>

                <div className="flex gap-4">
                    <img src={`https:${props.icon}`} alt={props.weather} className="w-8 h-8"/>
                    <p>{props.weather}</p>
                </div>

                <p>{props.high}/{props.low}</p>

            </div>

            <hr className="border border-gray-500"></hr>
        </div>
    )
}

export default weekForecast