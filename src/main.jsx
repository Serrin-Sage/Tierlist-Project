import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './stylesheets/mainpage-style.css'
import './stylesheets/chargrid-style.css'
import './stylesheets/display-style.css'
import './stylesheets/tierlist-style.css'
import './stylesheets/signinup-style.css'
import './stylesheets/global-style.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
