import React from 'react'
import "./Navbar.css"
const SecondaryNav = () => {
  return (
    <div>
      <div  className='secondary-nav' style={{display:"flex",justifyContent:"center",width:"97vw",background:"#FFFFFF",marginTop:"8px",marginLeft:"18px",gap:"50px",paddingBottom:"4vmin",paddingTop:"2vmin"}}>
           <div style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px",alignItems:"center"}}>
      
              <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100" alt="img" style={{width: "64px", height: "64px", objectFit: "contain",objectPosition:"bottom"}}/><p>Minutes</p>
           </div>
            <div  style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px",alignItems:"center",justifyContent:"center"}}><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100" alt=""  style={{width: "64px", height: "64px", objectFit: "contain"}}/> <p>Mobile &Table</p></div>
                <div style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px",alignItems:"center"}}><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100" alt="" style={{width: "100%", height: "100%", objectFit: "contain"}} /><p>Fashion</p></div>
                <div style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px",alignItems:"center"}} ><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100" alt="" style={{width: "64px", height: "64px", objectFit: "contain"}}  />  <p>electronics</p></div>
                <div style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px",alignItems:"center"}}> <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=10" alt="" style={{width: "64px", height: "64px", objectFit: "contain"}}/><p>TV and Appliance</p> </div>
                 <div style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px",alignItems:"center"}}><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100" alt=""  style={{width: "64px", height: "64px", objectFit: "contain"}}/><p>Home& Furniture</p></div>
           <div style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px",alignItems:"center"}}> <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100" alt="" style={{width: "64px", height: "64px", objectFit: "contain"}}/><p>FlightBookings</p></div>
           <div style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px",alignItems:"center"}} ><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100" alt="" style={{width: "64px", height: "64px", objectFit: "contain"}}  /><p>Beauty,Food..</p></div>
           <div style={{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px",alignItems:"center"}}><img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100" alt="" style={{width: "64px", height: "64px", objectFit: "contain"}} /> <p>Grocery</p></div>
      </div>
    </div>
  )
}

export default SecondaryNav