import React from 'react'

import { Box, Text } from '@chakra-ui/react'

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

    {img : 'https://images-static.nykaa.com/uploads/f922641b-03ce-4627-b0fe-1cd512a2af30.jpg?tr=w-1600,cm-pad_resize', title : 'Innovative Tools'}, //--
    {img : 'https://images-static.nykaa.com/uploads/ad2c3fa0-3f81-4fe2-a99c-5e5e59e95407.jpg?tr=w-1600,cm-pad_resize', title : 'Gifts Sets' },  //--
    {img : 'https://images-static.nykaa.com/uploads/c225c3e8-57c4-4e77-9162-c58426b81381.jpg?tr=w-1600,cm-pad_resize', title : 'Blushes'},  //--
    {img : 'https://images-static.nykaa.com/uploads/86a11d9e-818b-48e4-9435-cb886f4e3762.jpg?tr=w-1600,cm-pad_resize', title : 'Lipstics'},  //--
    {img : 'https://images-static.nykaa.com/uploads/2e8f18d5-06d0-4aab-8d8e-7644aa54023f.jpg?tr=w-1600,cm-pad_resize', title : 'Weight Management'},  //--
    {img : 'https://images-static.nykaa.com/uploads/b2df2716-c39d-40a7-b2a5-76c728a2590b.jpg?tr=w-1600,cm-pad_resize', title : 'Feminine Hygine'},  //--
    {img : 'https://images-static.nykaa.com/uploads/ccc99a7a-3aec-4a7b-8e40-57ab39e4097e.jpg?tr=w-1600,cm-pad_resize', title : 'Eyeshadows'},  //--
    {img : 'https://images-static.nykaa.com/uploads/207d5407-b589-4aeb-b5f3-54a9143ed8f5.jpg?tr=w-1600,cm-pad_resize', title : 'Luxe Minis'},  //--
    {img : 'https://images-static.nykaa.com/uploads/4ea35342-cbb3-44ef-a556-9f1c0f749d93.jpg?tr=w-1600,cm-pad_resize', title : 'Foundations'},  //--
    {img : 'https://images-static.nykaa.com/uploads/3665639b-9bd5-4ff1-a3f8-a1d125b4d536.jpg?tr=w-1600,cm-pad_resize', title : 'Sunscreens'},  //--  
    {img : 'https://images-static.nykaa.com/uploads/1924a249-3bef-4a9c-8095-d5a9c2076569.jpg?tr=w-1600,cm-pad_resize', title : 'Floral Fragrances'},  //--

]


function DiscoverFavourite({navigation}) {
  return (
    <Box mt = '54px'>

        <Text  mb = '3' fontWeight={'600'} fontSize={'24px'}>Discover Our Favourites</Text>

        <Image display = {{base : 'none','730px' : 'block'}} mb = '9' _hover = {{cursor : 'pointer'}} borderRadius={'8px'} src = {'https://images-static.nykaa.com/uploads/82eed1ab-64b2-4cb9-818b-9b39cd9284ec.jpg?tr=w-3600,cm-pad_resize'}></Image>

        <Image display = {{base : 'block','730px' : 'none'}} mb = '4' _hover = {{cursor : 'pointer'}} borderRadius={'8px'} src = {'https://images-static.nykaa.com/uploads/33ff9445-d094-44c5-8b49-f2f3502cd576.jpg?tr=w-1200,cm-pad_resize'}></Image>


        {/* 730px */}
        <Box>

                        <Swiper
                    
                    
                    cssMode={true}
                    slidesPerView={2.4}
                    navigation={navigation}
                    pagination={false}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    // style={{
                    //     '--swiper-navigation-color': 'red'}}
                    mousewheel={true}
                    spaceBetween = {23}

                    breakpoints={{

                        

                        1245 : {

                        slidesPerView: 5.4,

                        }, 

                        1000 : {

                        slidesPerView: 5,

                        },

                        864 : {

                        slidesPerView: 4.4,

                        },

                        750 : {

                            slidesPerView: 4,
    
                            },

                        625 : {

                            slidesPerView: 3.4

                        },

                        516 : {

                            slidesPerView: 3
                        }






                    
                
                    
                    }}



                    

                    
                    keyboard={true}
                    modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
                    className={style.mySwiper}
                    >


                    {Slider_Images.map((el) => {

                        return <SwiperSlide  className={style.swiperslide3} key = {Math.random()}>
                            
                                        <Box position={'relative'} overflow={'hidden'}>

                                               <Image borderRadius = '10px' src = {el.img}></Image>

                                               <Box borderBottomRadius={'10px'} bg = {'rgba(255, 255, 255, 0.519)'} p = '2' w = '100%' position={'absolute'} bottom = '0'>
                                                
                                                 <Text noOfLines={1} fontSize={'17'} fontWeight={'600'} color = 'black'>{el.title}</Text>

                                               </Box>

                                        </Box>
                                        
                                        
                               </SwiperSlide>

                                 
                                     

                  
                    })}


                    </Swiper>








        </Box>









    </Box>
  )
}

export default DiscoverFavourite