import React from 'react'

import {Image, Box, colorMode,Text, useColorModeValue , useColorMode} from '@chakra-ui/react'


import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from './Slider.module.css'




const Slider_Images = [

    {img : 'https://images-static.nykaa.com/uploads/9b9035e2-8da6-4f78-bcda-1e4e0fb5a5d7.jpg?tr=w-1600,cm-pad_resize', title : 'Travel Essentials'}, //-- --
    {img : 'https://images-static.nykaa.com/uploads/d342f8f1-1c35-4dd1-a2e6-f130b9c54f75.jpg?tr=w-1600,cm-pad_resize', title : 'Beauty Resolutions 2023' },  //-- --
    {img : 'https://images-static.nykaa.com/uploads/c2d26c0f-62f2-4d8a-a872-1f70b272c6a1.jpg?tr=w-1600,cm-pad_resize', title : 'Party-Ready Makeup'},  //-- --
    {img : 'https://images-static.nykaa.com/uploads/70b3e6af-3471-4946-80d2-02ccf8d3aa61.jpg?tr=w-1600,cm-pad_resize', title : 'Super Serum Squad'},  //-- --
    {img : 'https://images-static.nykaa.com/uploads/4dc2cb96-6690-4539-adb1-11dde2327b07.jpg?tr=w-1600,cm-pad_resize', title : 'Relaxing Shower Routine'},  //-- --
]



function EditorsChoise({navigation}) {


  const {colorMode} = useColorMode();


  return (
    <>
     <Box pt = '4'>

<Text color={useColorModeValue('black', 'white')} mb = '2.5' fontWeight={'600'} fontSize={'24'}>Editor's Choice</Text>


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



              1273 : {

              slidesPerView: 4.9,

              }, 

              1060 : {

                slidesPerView: 4.5

              },


              881 : {

                slidesPerView : 4

              },

              736 : {

                slidesPerView : 3.5

              },

              600 : {

                slidesPerView : 3

              }

             


              }}






              keyboard={true}
              modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
              className={style.mySwiper}
              >


              {Slider_Images.map((el) => {

              return <SwiperSlide  className={style.swiperslide3} key = {Math.random()}>
                  

                         <Box borderRadius={'10px'} border={'1px solid'} mb = '5' borderColor={colorMode == 'light' ? 'gray.400' : 'dark.primary'}>

                              <Box  position={'relative'} overflow={'hidden'}>

                                  <Image borderRadius = '10px' borderBottomRadius={'0px'} src = {el.img}></Image>

                              

                              </Box>

                              <Box mt = '-1'  borderBottomRadius={'10px'} border = 'none' bg = {'white'} p = '2' py = '3' w = '100%'>
                                      
                                      <Text noOfLines={1} fontSize={'17'} fontWeight={'600'} color = 'black'>{el.title}</Text>

                                  </Box>

                          </Box>
                              
                              
                  </SwiperSlide>

                      
                          


              })}


              </Swiper>








              </Box>


</Box>
    
    
    
    </>
  )
}

export default EditorsChoise