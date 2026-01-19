import React from 'react'
import {v4 as uuidv4} from "uuid";
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css"
import "swiper/css/navigation"
const PhonesRecom = () => {
   const Images = [
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/o/d/1/-original-imahggetmzzanrty.jpeg?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/f/a/6/-original-imahfz2tnafhmagr.jpeg?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/z/u/l/-original-imahhqjwyzsjyfvn.jpeg?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/m/n/v/-original-imahavdveeghweea.jpeg?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/o/2/g/-original-imahbr2cz5apcwze.jpeg?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/o/j/d/-original-imahgy25zuwqzzye.jpeg?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/g/r/b/-original-imahd872ftjsb6xh.jpeg?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/t/m/g/-original-imahcfwmrnwy9zgn.jpeg?q=60",
  }
];
  return (
    <div className='phone-section' style={{backgroundColor:"#FFFFFF",marginTop:"16px",marginLeft:"18px",width:"81vw",height:"38vh",paddingTop:"10px"}}>
      
      <h2 style = {{fontSize:"23px",fontWeight:"500",marginLeft:"16px"}}>Best Deal on Smart phone</h2>
       <div style={{overflow:"hidden",position:"relative"}}>
        <Swiper className='phone-row' style={{width: "100%",padding: "8px 40px"}}
          modules = {[Navigation]}
           navigation
        slidesPerView={7}
        spaceBetween={16}
        slidesPerGroup={1} >
       {Images.map((item) =>(
            <SwiperSlide key= {item.id} className='slide-prev'>
              <div>
           <img src={item.src}  style={{ width:"160px",height:"200px",objectFit:"contain"}} />
           <p> hey</p>
           <p>hi</p></div>
           </SwiperSlide>
       ))}            </Swiper>
       </div>


    </div>
  )
}

export default PhonesRecom