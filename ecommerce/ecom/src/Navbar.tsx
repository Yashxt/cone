import   { useState,useRef } from 'react'
import { Search,ChevronDown, CircleUserRound,Package,Heart,Gift,CreditCard ,ShoppingCart,Store, EllipsisVertical,CirclePlus, PanelTopDashedIcon} from 'lucide-react'
import './Navbar.css'
const Navbar = () => {
  const [open,setOpen] = useState(false)

  const handleSetOpen = ()=>{
    setOpen(true);
  }
  const handelSetClose = ()=>{
    setOpen(false)
  }
  return (
    <div style={{height:"9vh",backgroundColor:"#FFFFFF"}}>
    <div style={{display:"flex",justifyContent:"space-between",}} >
        <div style={{ display: "flex", alignItems: "center", gap: "26px", marginTop:"12px",marginLeft:"36px" }}> 
    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-11f9e2.svg" alt="flipcart logo " />
      <input type="text" placeholder= 'search' style={{fontSize:"19px",backgroundColor:"#F0F5FF",minWidth:"49vw",height:"40px",border:"none",borderRadius:"8px"}}/>
      </div>
    <div style={{display:'flex',alignItems:"center",justifyContent:'space-evenly',fontSize:"19px",width:"100%",marginLeft:"32px",marginTop:"14px"}}>
        <div className='nav-item' onMouseOver={handleSetOpen} onMouseLeave={handelSetClose}>
          <div style={{display:"flex",alignItems:"center",gap:'8px'}}><CircleUserRound size={21}/>Login <ChevronDown size={21}/></div>
         {open ?<ul className='nav-dropdown' style={{boxShadow:"4px 4px 20px   rgba(0, 0, 0, 0.15),-4px 0 20px rgba(0,0,0,0.15) "}}>
          <li style ={{display:"flex",justifyContent:'space-between',padding:"10px 4px",borderBottom:"1px solid gray  ",}}>
            <p style={{marginLeft:"10px"}}>New Customer ?</p> <span style={{marginRight:"10px"}}>sign up</span></li>
           < li> <CircleUserRound size={16} style={{marginTop:"4px"}}/> <div> My  Profile   </div> </li>
            <li><CirclePlus size={16}/><span>flipcart plus zone </span> </li>
            <li><Package size={16}/><span>Order  </span> </li>
            <li><Heart size={16}/> <span> Wishlist</span>    </li>
            <li><Gift size={16}/> <span>Reward</span>   </li>
            <li><CreditCard size ={16} />Gift card</li>
         </ul> :null}
         </div>
          
     <p  style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"}}><ShoppingCart size={21}/><span> Cart</span></p>
     <p style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px" }}><Store size={21}/>become a seller</p>
     <p style={{display:"flex",alignItems:"center"}}> <EllipsisVertical size={21}/></p>
    </div>
    </div>
    </div>
  )
}

export default Navbar