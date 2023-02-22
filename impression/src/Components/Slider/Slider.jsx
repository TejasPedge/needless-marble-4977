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
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


const Slider_Images = [

    {img : 'https://images-static.nykaa.com/uploads/33c4212d-241b-41de-a8d2-c7b8d7d9cc13.jpg?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/79c1face-6380-476d-9cef-22bfbc4023cb.gif?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/9fa1e381-68e0-40ba-b1d3-7d63928dec0c.jpg?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/d2052bfb-fc68-46ae-a16e-eb0645f19c89.png?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/8523b59b-1695-4a5d-bbc5-2f918bac1b05.jpg?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/8e38f956-76f6-4a96-a250-b69573e66696.jpg?tr=w-600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/25a842ec-b66a-46f3-8c67-dd4e5178d5be.jpg?tr=w-600,cm-pad_resize'}, //--

]







export default function Slider() {
  return (
    <>
      <Swiper
      
        cssMode={true}
        slidesPerView={3}
        navigation={true}
        pagination={true}
        // style={{
        //     '--swiper-navigation-color': 'red'}}
        mousewheel={true}
        spaceBetween = {20}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={style.mySwiper}
      >

        

        {Slider_Images.map((el) => {

             return <SwiperSlide className={style.swiperslide} key = {el.id}><Image src = {el.img}></Image></SwiperSlide>


        })}
       

      </Swiper>


    </>
  );
}




