import React from 'react'
import { fetchPhotos } from './api/mediaApi'
import { fetchVideos } from './api/mediaApi'
import { fetchGIF } from './api/mediaApi'

const App = () => {
  
  return (
    <div className="h-screen text-white w-full bg-gray-950">
      <button 
      onClick={async()=>{
        const data = await fetchPhotos('cat')
        console.log(data.results);
      }}
      >Get photos</button>

      <button 
      onClick={async()=>{
        const data = await fetchVideos('dog')
        console.log(data.videos);
      }}
      >Get Videos</button>

      <button 
      onClick={async()=>{
        const data = await fetchGIF('dog')
        console.log(data);
      }}
      >Get GIF</button>
    </div>
  )
}

export default App
