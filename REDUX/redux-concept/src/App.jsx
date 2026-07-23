import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment} from "./redux/feature/counterSlice"

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <div>
      <h1>{count}</h1>

      <button
      onClick={() => {
        dispatch(increment())
      }}
      >Increment</button>

      <button 
      onClick={() => {
        dispatch(decrement())
      }}
      >Decrement</button>
    </div>
  )
}

export default App 