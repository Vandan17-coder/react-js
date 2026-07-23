import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
      <ThemeContext>
            <App />
      </ThemeContext>
)
                     
// Wrap App inside ThemeContext so every component inside App
// can access the shared theme data using useContext().