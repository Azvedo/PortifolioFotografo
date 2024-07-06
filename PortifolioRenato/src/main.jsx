import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './containers/Home/index.jsx'
import { About } from './containers/About/index.jsx'
import './main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
