import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import Sidebar from './components/sidebar'
import { CloudRain, List, Map, Settings,} from "lucide-react";
import Weather from './components/weather';
import Forecast from './components/weekForecast'
import { Sun, Cloud,CloudSun,} from "lucide-react";
import Tforecast from './components/todayForecast'
import Aircondition from './components/Aircondition'
import { Thermometer, Wind, Droplets,} from "lucide-react";
 
const App = () => {

const [city, setCity] = useState('Anand')
const [weather, setWeather] = useState({})

const [loading, setLoading] = useState(false)

useEffect(() => {
  getData();
}, []);


const sidebarItems = [
  {id: 1, name: "Weather", icon: CloudRain,},
  {id: 2, name: "Cities", icon: List,},
  {id: 3, name: "Map", icon: Map, },
  {id: 4, name: "Settings", icon: Settings, },
];

const airConditions = [
  {
    id: 1,
    label: "Real Feel",
    value: `${weather?.current?.feelslike_c}°`,
    icon: Thermometer,
  },
  {
    id: 2,
    label: "Wind",
    value: `${weather?.current?.wind_kph} km/h`,
    icon: Wind,
  },
  {
    id: 3,
    label: "Chance of Rain",
    value: `${weather?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%`,
    icon: Droplets,
  },
  {
    id: 4,
    label: "UV Index",
    value: `${weather?.current?.uv}`,
    icon: Sun,
  },
];

const getData = async () => {

  setLoading(true)
  
  try {
    const response = await  axios.get(`https://api.weatherapi.com/v1/forecast.json?key=48dc32d597a7499c922131312262002&q=${city}&days=7&aqi=no`)
  
    setWeather(response.data)
  }
  catch {
    console.log("City Not Found")
  }
  finally {
    setLoading(false)
  }
}

const hours = weather?.forecast?.forecastday[0]?.hour;

  return (
      <div className="h-full w-full bg-black text-white flex ">
        
        {/*Sidebar*/}
        <div className="flex flex-col  h-135 ml-7 mt-4 w-17 rounded-xl bg-gray-900  border border-gray-400">
          {sidebarItems.map(function(elem,idx) {
            return <Sidebar key={idx} name={elem.name} icon={elem.icon}/>
          })}
        </div>

        <div>

          {/*Search bar*/}
          <div className="ml-5 ">
            <input 
            value={city}
            onChange = {(e) => {
              setCity(e.target.value)
            }}
            onKeyDown = {(e) => {
              if(e.key === "Enter"){
                getData();
              }
            }}
            
            type="text" placeholder="Search for cities" 
            className=" w-150 p-3 mt-4 rounded-xl bg-gray-900 border border-gray-400"></input>
          </div>

          {/*Main content*/}  
          <div className="flex flex-row">
            {loading ? <h2 className="w-140 h-30 flex justify-center mt-10">Loading...</h2> : <Weather weather={weather}/>}
          </div>

          {/*todays forecast */}
          <div className ="flex flex-col bg-gray-900 h-35 w-150 ml-5 rounded-xl">
            <div><h3 className="text-xs mt-1 ml-1">TODAY FORECAST</h3></div>
            
            <div className="flex flex-row">
              {hours && [6, 9, 12, 15, 18, 21].map(function(index) {

              return <Tforecast key={index} icon={hours?.[index]?.condition?.icon} weather={hours?.[index]?.condition?.text} temperature={hours?.[index]?.temp_c}
                              time={new Date(hours[index].time).toLocaleTimeString("en-US", {
                                          hour: "numeric",
                                          minute: "2-digit",
                                          })}/>
            })}
            </div>
          </div>

          {/*Air condition*/}
          <div className="h-40 w-150 bg-gray-900 ml-5 rounded-xl mt-3 flex flex-col ">
            <div className="flex justify-between m-2 ml-4">
              <h3 className="text-s">AIR CONDITION</h3>
              <button className="bg-blue-600 rounded-full active:scale-99 text-xs p-1">See more</button>
            </div>
            
            <div className="flex gap-4 mt-8">

              {airConditions.map(function(elem, idx){
                  return <Aircondition key={idx} label={elem.label} value={elem.value} icon={elem.icon}/>
              })}

            </div>
          </div>

        </div>

        {/*7-days forecast*/}
          <div className="h-135 w-80 bg-gray-900 mt-24 ml-5 rounded-xl">
            <h3 className="text-xs p-3">7-DAY FORECAST</h3>

           {weather?.forecast?.forecastday?.map(function(day, index) {
            
            const dayName = new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "short",
                });

            return  <Forecast key={day.date} day={index === 0 ? "Today" : dayName} icon={day.day.condition.icon} weather={day.day.condition.text} high={day.day.maxtemp_c} low={day.day.mintemp_c}/>
           })}
          </div>

      </div>
  )
}

export default App