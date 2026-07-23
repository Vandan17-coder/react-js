import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        console.log('theme change', props.theme);
        props.setTheme('Dark');
    }

  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar

// 7. onClick expects a function reference.
//    onClick={changeTheme} is correct.
//    onClick={changeTheme()} is wrong because it executes immediately
//    while rendering the component.

// 8. We use props.setTheme("Dark") instead of
//    props.theme = "Dark" because props are read-only
//    and should never be modified directly.

// 9. Calling setTheme("Dark") updates the state,
//    React detects the change,
//    re-renders App,
//    and Navbar automatically receives the updated props.

// 10. React components re-render whenever their state
//     or received props change.