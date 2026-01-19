import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import HomePage from './HomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      
    
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default App
