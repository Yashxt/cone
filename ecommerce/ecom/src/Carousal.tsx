import { v4 as uuidv4 } from 'uuid';
import "./Carousal.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination"
const Carousal = () => {

 const carouselImages = [
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/0e4bd30c9fd259bb.jpg?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/6e837a30ad35d4c2.png?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/87d6fd1776f5ad7a.jpg?q=60",
  },
  {
    id: uuidv4(),
    src: "http://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1b0467352c3d4e57.png?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/9779aea533001495.jpg?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/349d0b763b3c6571.jpg?q=60",
  },
  {
    id: uuidv4(),
    src: "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/101ef759a5979f64.png?q=60",
  },
];
  return (
       <div className="carousel" style={{height:"35vh" ,backgroundColor:"blue",marginLeft:"18px",marginTop:"18px",width:"97vw"}}>

<Swiper
  modules={[Autoplay,Pagination, Navigation]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
           pagination={{ clickable: true }}
          className= 'banner-sweeper'  
>
  {carouselImages.map(item => (
    <SwiperSlide key={item.id}>
      <img src={item.src} />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  )
}

export default Carousal