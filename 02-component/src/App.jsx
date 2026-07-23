import React from 'react'
import card from './components/Card'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Hello</h1>
      </div>
      {card()}
    </div>
  )
}

export default App