import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from './Slider.module.css'



import { Image } from "@chakra-ui/react";

// import required modules
import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const Slider_Images = [

    {img : 'https://images-static.nykaa.com/uploads/33c4212d-241b-41de-a8d2-c7b8d7d9cc13.jpg?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/79c1face-6380-476d-9cef-22bfbc4023cb.gif?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/0edd88f8-7241-42eb-ad2d-bd5642d0741a.jpg?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/d2052bfb-fc68-46ae-a16e-eb0645f19c89.png?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/8523b59b-1695-4a5d-bbc5-2f918bac1b05.jpg?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/8e38f956-76f6-4a96-a250-b69573e66696.jpg?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/9ed396c7-44cf-45fc-8122-012428aa2641.gif?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/5d84f257-663d-4e03-9191-92dd6e53ea98.jpg?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/4241760e-88e7-49b3-9235-580789facdb7.jpg?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/ac086a5b-7bd2-46ed-a167-3746b11594f9.jpg?tr=w-600,cm-pad_resize'}, //--


]





export default function Slider() {
  
    

  
  return (
    <>
      <Swiper
      
       
        cssMode={true}
        slidesPerView={1}
        navigation={true}
        pagination={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // style={{
        //     '--swiper-navigation-color': 'red'}}
        mousewheel={true}
        spaceBetween = {25}

        breakpoints={{

          

        1270 : {

          slidesPerView: 2.6,
  
        }, 

        1132:{

          slidesPerView: 2.4,

        },

        1011 : {

          slidesPerView : 2.2,

        },

        537 : {

          slidesPerView : 2,

        },

        420 : {

          slidesPerView : 1.5,



        },

    
       
      }}



        

      
        keyboard={true}
        modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
        className={style.mySwiper}
      >


        {Slider_Images.map((el) => {

             return <SwiperSlide className={style.swiperslide} key = {Math.random()}><Image src = {el.img}></Image></SwiperSlide>

        })}


      </Swiper>


    </>
  );
}







// // // ------------------------------------- \\


