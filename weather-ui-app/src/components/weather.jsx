import React from 'react'

const Wheather = ({weather}) => {

    return (
        <div className="ml-15 mt-10 flex w-140 h-30 justify-between">
            <div className="flex flex-col gap-10">
                <div className="">
                    <h1 className="text-xl">{weather?.location?.name}</h1>
                    <p className="text-xs">Chance of rain: {weather?.current?.chance_of_rain}%</p>
                </div>

                <h1 className="text-xl">{weather?.current?.temp_c}°C</h1>
            </div>

            <div className="mr-10 mt-10">
                <img
                    src={weather?.current?.condition?.icon}
                />
            </div>

        </div>
    )
}

export default Wheather