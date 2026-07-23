import React from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'

const App = () =>{

  return (
    <div>
      <Navbar>
        <h2>This is Navbar</h2>
        <h2>It is too good</h2>
      </Navbar>

      <Button />
    </div>
  )
}

export default App

//------------------------------------------------------------------------------------

// Context API Summary

// createContext() → Creates a shared data container.
// Provider        → Shares data with all child components.
// useContext()    → Accesses the shared data.

// Why Context API?
// → Avoids Prop Drilling (passing props through multiple components).

// Common Use Cases:
// → Theme
// → Logged-in User
// → Language
// → Authentication
// → Shopping Cart

// Flow:
// createContext()
//      ↓
// Provider
//      ↓
// useContext()
//      ↓
// Read / Update Data

//-------------------------------------------------------------------------

// This example demonstrates React's children prop and prop drilling.

// 1. props.children contains everything written between the opening
//    and closing tags of a component.
//    Example:
//    <Navbar>
//      <h2>Hello</h2>
//    </Navbar>
//    Here, <h2>Hello</h2> becomes props.children.

// 2. Since two <h2> elements are passed,
//    props.children becomes an array.
//    props.children[0] -> <h2>This is Navbar</h2>
//    props.children[1] -> <h2>It is too good</h2>

// 3. props.children is useful when we want a component
//    to display custom content without creating separate props
//    like title, subtitle, description, etc.

// 4. We passed theme={theme} because Nav2 needs access
//    to the current theme.

// 5. Navbar does not use theme itself.
//    It only forwards (passes) it to Nav2.
//    This is called Prop Drilling.

// 6. Prop Drilling means passing the same data through
//    multiple components just to reach the component
//    that actually needs it.

// 7. Prop Drilling becomes difficult in large applications
//    because every intermediate component has to pass
//    the same props even if it doesn't use them.

// 8. To solve Prop Drilling, React provides Context API.
//    Instead of passing props through every component,
//    any component can directly access the shared data.

// 9. Context API mainly uses three things:
//    - createContext() : Creates a Context.
//    - Provider        : Shares the data.
//    - useContext()    : Reads the shared data.

// 10. Flow of this program:
//
// App
//   │
//   ├── theme (state)
//   │
//   └── Navbar
//        │
//        ├── Receives children
//        ├── Displays children
//        └── Passes theme to Nav2
//                    │
//                    └── Displays current theme

// 11. Why use props.children instead of creating
//     separate props?
//
//     Instead of:
//
//     <Navbar title="Hello" subtitle="Welcome" />
//
//     We can write:
//
//     <Navbar>
//        <h2>Hello</h2>
//        <h2>Welcome</h2>
//     </Navbar>
//
//     This makes components much more flexible.

// 12. Common use cases of props.children:
//     - Layout Components
//     - Card Components
//     - Modal Components
//     - Sidebar
//     - Wrapper Components
//     - Protected Routes

// 13. Interview Question:
//     What is props.children?
//
//     Answer:
//     props.children is a special prop provided by React
//     that contains everything placed between the opening
//     and closing tags of a component.



