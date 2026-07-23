import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('submitted');

    setTitle(''); 
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input 
         type="text" 
         placeholder="Enter your name"
         value={title}
         onChange={(e) => {
          setTitle(e.target.value);
         }}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

/*
useState()      → Stores data.
value           → Shows state in input.
onChange        → Updates state on typing.
onSubmit        → Runs when form is submitted.
preventDefault  → Stops page refresh.
setTitle("")    → Clears the input.
*/