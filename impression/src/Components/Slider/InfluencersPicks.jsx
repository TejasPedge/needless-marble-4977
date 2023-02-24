import React from 'react'


import {Image, Box, useColorMode,Text, useColorModeValue } from '@chakra-ui/react'


import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from './Slider.module.css'




const Slider_Images = [
    
    {img : 'https://images-static.nykaa.com/uploads/88721f15-893b-4369-871f-bdd975202ed9.jpg?tr=w-1600,cm-pad_resize', title : `Aashi Adani's`, text : 'Everyday Essentials', img2 : 'https://images-static.nykaa.com/uploads/ee8ea2fd-3101-4173-ad04-0fb52ad9cf07.jpg?tr=w-1600,cm-pad_resize'}, //-- --
    {img : 'https://images-static.nykaa.com/uploads/f5503f3e-4226-45b1-84bc-3f0d9776da80.jpg?tr=w-1600,cm-pad_resize', title : `Prableen's`, text : 'Glam Faves', img2 : 'https://images-static.nykaa.com/uploads/7e3c521b-22ad-460d-b8dc-394f14fbdd3a.jpg?tr=w-1600,cm-pad_resize' },  //-- --
    {img : 'https://images-static.nykaa.com/uploads/0915fe14-6119-4233-b29b-93ecab64187c.jpg?tr=w-1600,cm-pad_resize', title : `Natasha Luthra's`, text : 'Luxe Love', img2 : 'https://images-static.nykaa.com/uploads/1af8579d-b4c1-4e0a-b5fb-e3a6cc2f75e9.jpg?tr=w-1600,cm-pad_resize'},  //-- --
    {img : 'https://images-static.nykaa.com/uploads/b810d6ed-4bc6-48ac-832a-8f288a6470c7.jpg?tr=w-1600,cm-pad_resize', title : `Himadri Patel's`, text : `Himadri Patel's`, img2 : 'https://images-static.nykaa.com/uploads/3e907087-71cc-40b4-9080-81f0df168337.jpg?tr=w-1600,cm-pad_resize'},  //-- --

]


function InfluencersPicks({navigation}) {

    const {colorMode} = useColorMode();
  
  return ( <>
    <Box mt = '10' mb = '5'>

        <Box lineHeight={1.3}>

            <Text mb = {{base : '2.5','512px' : '0'}} color={useColorModeValue('black', 'white')}  fontWeight={'600'} fontSize={'24px'}>Influencer's Picks</Text>

            <Text display = {{base : 'none','512px' : 'block'}} fontSize={'17'} mb = '2.5' fontWeight={500} color = {useColorModeValue('gray.600','gray.400')}>What Your Favourites Love</Text>

        </Box>

    
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



                    1611 : {

                  slidesPerView: 3.9,

                  }, 

                   1309 : {

                    slidesPerView: 3.5,

                   },

                   1136 : {

                    slidesPerView: 3.2,

                   },

                   985 : {

                    slidesPerView: 3

                   },


                   845 : {

                    slidesPerView: 2.5 

                   },


                   685 : {

                    slidesPerView : 3.8

                   },


                   574 : {

                    slidesPerView : 3

                   }

        

                  }}






                  keyboard={true}
                  modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
                  className={style.mySwiper}
                  >


                  {Slider_Images.map((el) => {

                  return <SwiperSlide   className={style.swiperslide3} key = {Math.random()}>
                      
                               <Box borderRadius = '10px' border = '1px solid' borderColor={colorMode == 'light' ? 'gray.400' : 'dark.primary'}>

                                  <Box  position={'relative'} overflow={'hidden'}>

                                      <Image borderRadius = '10px' borderBottomRadius={'0px'} src = {el.img} display = {{base : 'none', '845px' : 'block'}}></Image>

                                      <Image  borderRadius = '10px' borderBottomRadius={'0px'} src = {el.img2} display = {{base : 'block', '845px' : 'none'}}></Image>    

                                  </Box>

                                  <Box mt = '-1'  borderBottomRadius={'10px'} bg = {'white'} p = '2' py = '3' w = '100%'>
                                          
                                          <Text noOfLines={1} fontSize={'17'} fontWeight={'600'} color = 'black'>{el.title}</Text>

                                          <Text noOfLines={1} fontSize={'17'} fontWeight={'600'} color = {'gray.600'}>{el.text}</Text>

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

export default InfluencersPicks