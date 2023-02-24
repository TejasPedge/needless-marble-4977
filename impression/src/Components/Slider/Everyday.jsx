import React from 'react'

import {Image, Box, colorMode,Text, useColorModeValue } from '@chakra-ui/react'


import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from './Slider.module.css'




const Slider_Images = [

    {img : 'https://images-static.nykaa.com/uploads/c59db0d6-872e-4fd1-bc64-8331897b3965.jpg?tr=w-1600,cm-pad_resize', title : 'Moisturisers'}, //-- --
    {img : 'https://images-static.nykaa.com/uploads/8f8b55d5-0bfc-4545-ba05-df0177672474.jpg?tr=w-1600,cm-pad_resize', title : 'Bath & Body' },  //-- --
    {img : 'https://images-static.nykaa.com/uploads/aff3b609-5b3e-4d8c-8ccb-ad9157824b2d.jpg?tr=w-1600,cm-pad_resize', title : 'Face Washes'},  //-- --
    {img : 'https://images-static.nykaa.com/uploads/e3424d3e-3c6f-4dd2-9cd3-d9ce46570133.jpg?tr=w-1600,cm-pad_resize', title : 'Budget Makeup'},  //-- --
    {img : 'https://images-static.nykaa.com/uploads/4bec33e3-9145-442b-9171-308834402eb3.jpg?tr=w-1600,cm-pad_resize', title : 'Value Combos'},  //-- --
    {img : 'https://images-static.nykaa.com/uploads/d4eba2cb-bbf9-4f6c-ac47-281819f52385.jpg?tr=w-1600,cm-pad_resize', title : 'Shampoos & Conditioners'},  //-- --

]






function Everyday({navigation}) {
  return (

    <Box  width = {['92%','94%']} m = 'auto'  pt = '4'>

          <Text color={useColorModeValue('black', 'white')} mb = '3' fontWeight={'600'} fontSize={['21px','22px','23px','24px']}>Everyday Essentials</Text>

          <Image display = {{base : 'none','730px' : 'block'}} mb = '9' _hover = {{cursor : 'pointer'}} borderRadius={'8px'} src = {'https://images-static.nykaa.com/uploads/2adda7a5-567a-4db1-b408-06c96be60287.jpg?tr=w-3200,cm-pad_resize'}></Image>

          <Image display = {{base : 'block','730px' : 'none'}} mb = '4' _hover = {{cursor : 'pointer'}} borderRadius={'8px'} src = {'https://images-static.nykaa.com/uploads/26480e79-5d72-425c-824d-84b03a4a7231.jpg?tr=w-1200,cm-pad_resize'}></Image>

          
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
                            
                                        <Box  position={'relative'} overflow={'hidden'}>

                                            <Image borderRadius = '10px' borderBottomRadius={'0px'} src = {el.img}></Image>

                                        

                                        </Box>

                                        <Box mb = '5' borderBottomRadius={'10px'} bg = {'white'} p = '2' w = '100%'>
                                                
                                                <Text noOfLines={1} fontSize={'17'} fontWeight={'600'} color = 'black'>{el.title}</Text>

                                            </Box>
                                        
                                        
                            </SwiperSlide>

                                
                                    


                        })}


                        </Swiper>








                        </Box>
          

    </Box>
  )
}

export default Everyday