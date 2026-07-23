import React from 'react'
import { useContext } from "react"
import { ThemeDataContext} from '../context/ThemeContext'

const Nav2 = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)



    return (
        <div className='nav2'>
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Services</h4>
            <h4>{theme}</h4>
        </div>
    )
}

export default Nav2

// Nav2 Component Summary

// useContext()      → Accesses the shared data from ThemeContext.
// [theme, setTheme] → Receives both the theme value and its updater.
// theme             → Displays the current theme.
// setTheme          → Can be used to change the global theme.
// No Props          → Context API removes the need for prop drilling.

// Flow:
// ThemeContext
//      ↓
// useContext()
//      ↓
// theme, setTheme
//      ↓
// Display / Update Theme