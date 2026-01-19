import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import ExampleData from './ExampleData'
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<ExampleData />}/>

        </Routes>
      
      </BrowserRouter>
  )
}

export default App
