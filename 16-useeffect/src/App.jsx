import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChanging() {
    console.log('Value of a is being change');
  }

  function bChanging(){
    console.log('Value of b is being change');
  }

  useEffect(function(){
    aChanging();
  },[a])
  
  useEffect(function(){
    bChanging();
  },[b])

  return (
    <div>  
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={() => {
        setA(a + 1)
      }}>Add</button>

      <button onClick={() => {
        setB(b - 1) 
       }}>Sub</button>
    </div>  
  )
}

export default App

/*
  useEffect() is a React Hook used to perform side effects after the component renders.
  Side effects include API calls, timers, localStorage, event listeners, etc.

  Syntax:
  useEffect(() => { /* effect */ /* }, [dependencies]);

  Rules:
  - No dependency array      -> Runs after every render.
  - Empty []                 -> Runs only once after the first render (component mount).
  - [state/props]            -> Runs on the first render and whenever those dependencies change.
  - return () => {}          -> Cleanup function; runs before the component unmounts or before the effect runs again to prevent memory leaks.

  Remember:
  Render UI first → Then useEffect runs → If state changes → React re-renders → useEffect checks dependencies and runs only if needed.
*/