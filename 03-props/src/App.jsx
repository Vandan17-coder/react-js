import React from 'react'
import Card from "./components/card.jsx"

const App = () => {
  return(
    <div className="parent">
        <Card userName="Vandan" surName="Patel"/>
        <Card userName="Spider-Man" surName="Avg"/>
    </div>
  )
}

export default App;