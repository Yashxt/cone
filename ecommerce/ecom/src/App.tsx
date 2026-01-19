
import {lazy,Suspense} from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import SecondaryNav from './SecondaryNav.tsx'
const Dashboard = lazy(()=>import('./Dashboard.tsx'))
const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>loading</p>}>
        <Routes>
        <Route path='/' element={<Dashboard/>}/>
        {/* <Route path='/' element={<SecondaryNav/>}/> */}
        </Routes>

      </Suspense>
    </Router>
  )
}

export default App