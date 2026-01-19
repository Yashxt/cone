import React from 'react'
import Headder from './Headder'
import Body from     './Body.tsx'
import Footer from './Footer.tsx'
const Dashboard = () => {
  return (
    <div style={{backgroundColor:"#F1F2F4",minHeight:"100vh"}}>
        <Headder></Headder>
        <Body></Body>
    </div>
  )
}

export default Dashboard