import React from 'react' 
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div >
            <h1>Website</h1>

            <div>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/about'>About</Link>
            </div>
      </div>
    )
}

export default Navbar

/*
<Link> is used for navigation in React Router.

- The "to" prop specifies the URL to navigate to.
- Clicking a <Link> changes the page without refreshing the browser.
- React Router updates only the required component, making the app a Single Page Application (SPA).

Why not use <a>?
- <a href=""> reloads the entire webpage, causing the React app to restart and lose its current state.
- <Link> performs client-side routing, so navigation is faster and the page doesn't reload.
*/