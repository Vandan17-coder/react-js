import React,{ useState } from 'react'
import { createContext } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light');

    return (
        <div>
            <ThemeDataContext.Provider value={[theme,setTheme]}>
                {props.children}
            </ThemeDataContext.Provider>
        </div>
    )
}

export default ThemeContext

// Context API

// 1. createContext()
//    Creates a shared data container.

// 2. Provider
//    Makes the shared data available to all child components.

// 3. value={[theme, setTheme]}
//    Shares both the state and its updater function.

// 4. useState()
//    Stores the theme because it can change.

// 5. props.children
//    Renders whatever is wrapped inside <ThemeContext>.

// 6. useContext()
//    Reads the shared data from Context.
//    No need for prop drilling.

// 7. Why Context API?
//    To avoid passing props through multiple components.

// Flow:
// createContext()
//      ↓
// Provider
//      ↓
// useContext()
//      ↓
// Read / Update Theme