import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  function increase() {
    setNum(num+1)
  }

  function decrease() {
    setNum(num-1)
  }

  return (
    <div className="mx-auto bg-black w-100 p-5 mt-30 items-center rounded-xl">
      <h1 className="bg-gray-400 w-15 justify-center flex rounded-xl mx-auto">{num}</h1>
      <button onClick = {increase} className="h-10 w-30 p-2 m-10 bg-gray-400 rounded-xl">Increase</button>
      <button onClick = {decrease} className="h-10 w-30 p-2 bg-gray-400 rounded-xl">Decrease</button>
    </div>
  )
}

export default App