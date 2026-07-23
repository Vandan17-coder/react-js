import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react' 
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = (props) => {

    const [theme] = useContext(ThemeDataContext);

    return (
        <div className={`${theme}`}>
            <h2>Navy</h2>
            {props.children[0]}
            {props.children[1]}
            <Nav2 />
        </div>
    )
}

export default Navbar
// Navbar Component Summary

// useContext()      → Reads the shared theme from ThemeContext.
// [theme]           → Destructures the theme value from Context.
// className         → Applies the current theme as a CSS class.
// props.children    → Renders the JSX passed between <Navbar>...</Navbar>.
// <Nav2 />          → No props needed because it can access Context directly.

// Flow:
// ThemeContext
//      ↓
// useContext()
//      ↓
// theme
//      ↓
// Apply CSS Class
//      ↓
// Render Navbar