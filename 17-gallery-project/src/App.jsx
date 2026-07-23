import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Components/Card.jsx'

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=40`)
  
    setUserData(response.data);

  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-500 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>;

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    
    <div className="bg-black h-screen overflow-y-auto  p-4 text-white">
      <div className="flex flex-wrap gap-5">
        {printUserData}
      </div>

      <div className="flex justify-center gap-6 items-center p-4">
        <button 
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={()=>{
            if(index>1){
              setIndex(index-1);
              setUserData([]);
            }
          }}
          >Prev</button>
          <h3>page {index}</h3>
        <button 
          className="bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={()=>{
            setUserData([]);
            setIndex(index+1);
          }}
          >Next</button>
      </div>
    </div>

  )
}

export default App