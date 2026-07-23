import React,{ useState } from 'react'
import Navbar from './components.jsx/Navbar'

const App = () => {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <h1>Theme is {theme}</h1>

      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App

// 1. useState() is used to create a state variable.
//    Whenever the state changes using its setter function,
//    React automatically re-renders the component.

// 2. theme stores the current theme ("light" or "dark").
//    setTheme() is the only correct way to update the theme.

// 3. A normal variable (let theme = "light") is not used because
//    changing a normal variable does not trigger a re-render.

// 4. Props are used to pass data from Parent → Child.
//    Here, App passes theme and setTheme to Navbar.

// 5. We passed setTheme() as a prop because Navbar (child)
//    cannot directly change App's (parent's) state.

// 6. React follows one-way data flow.
//    Parent sends data to Child using props.
//    Child can request changes by calling callback functions
//    received through props.