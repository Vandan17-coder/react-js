import React from 'react'
import axios from 'axios'
import {Search} from 'lucide-react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [city, setCity] = useState('Ahmadabad');
  const [weather, setWeather] = useState({});

  const getData = async () => {
    
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=7a146414ad7f437a8c783916260407&q=${city}`);

    setWeather(response.data);
  }

  useEffect(() => {
    getData();
  },[])

  return (
    
    <div className="h-screen w-full items-center flex flex-col flex-center bg-black text-black  gap-10">
      <div className="m-10 bg-zinc-300 h-400 w-100 pt-5 pl-15 rounded-xl">  
        <h1 className="text-3xl m-10 font-semibold">Weather App</h1>

        <div className="flex flex-row gap-3">
          <input 
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
          type="text" placeholder="Enter City" className="border rounded-sm text-semibold  border-black p-2" > </input>

          <button 
          onClick={getData}
          className="active:scale-95 bg-zinc-400 rounded-sm text-black items-center p-2 h-10 w-10"><Search /></button>
        </div>

        <div>

          <h2>{weather?.location?.name}</h2>

          <p>{weather?.location?.country}</p>

          <h1>{weather?.current?.temp_c}</h1>

          <p>{weather?.current?.condition?.text}</p>

          <img src={weather?.current?.condition?.icon}></img>

        </div>
      </div>  
    </div>  
  )
}

export default App
