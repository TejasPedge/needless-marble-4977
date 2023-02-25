import React from 'react'


import {Image, Box,VStack,HStack, useColorMode,Text, useColorModeValue } from '@chakra-ui/react'


import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
 
import { ChevronRightIcon } from '@chakra-ui/icons';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import style from './Slider.module.css'





const Slider_Images = [
    
    {img : 'https://images-static.nykaa.com/uploads/03673e1d-b7bf-494c-9582-69cecf8e516f.jpg?tr=w-1600,cm-pad_resize', title : `Makeup Picks For Brides To Be`, }, //-- --
    {img : 'https://images-static.nykaa.com/uploads/680d6993-10fa-469f-a1cc-c260ad5f92af.jpg?tr=w-1600,cm-pad_resize', title : `Kickstart Your Wellness Journey`, },  //-- --
    {img : 'https://images-static.nykaa.com/uploads/58627fb1-bb2f-451c-8bd2-cde753b990fd.jpg?tr=w-1600,cm-pad_resize', title : `The Mascara guide`,},  //-- --
    {img : 'https://images-static.nykaa.com/uploads/e41dc9fc-ab7b-42b7-a3f5-7196de18de66.jpg?tr=w-1600,cm-pad_resize', title : `Up Your Drama with these Finishers`, },  //-- --

    {img : 'https://images-static.nykaa.com/uploads/061e6b4f-52ff-485b-89a3-49b6ce77b188.jpg?tr=w-1600,cm-pad_resize', title : `Restore Your Mind, Body & Soul`,},  //-- --
    {img : 'https://images-static.nykaa.com/uploads/18190b57-d985-4247-b638-e0e2f8199e72.jpg?tr=w-1600,cm-pad_resize', title : `Trends & Hacks To Up Your Beauty Game`, },  //-- --
    


]


function BuyingGuides({navigation}) {
 
    const {colorMode} = useColorMode();


  return (
    <>
    <Box mt = '10' mb = '5'>

        <Box lineHeight={1.3}>

            <Text mb = '2.5' color={useColorModeValue('black', 'white')}  fontWeight={'600'} fontSize={'24px'}>Buying Guides</Text>
            
        </Box>

    
         <Box>

                  <Swiper

                  cssMode={true}
                  slidesPerView={1.2}
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

                    1460 : {

                        slidesPerView : 3.3 

                    },

                    1236 : {

                  slidesPerView: 2.5,

                  }, 


                   985 : {

                    slidesPerView: 2.3

                   },


                   748 : {

                    slidesPerView: 2

                   },



                   613 : {

                    slidesPerView : 1.7

                   },

                   560 : {

                    slidesPerView : 1.5

                   }
                

    

                  }}






                  keyboard={true}
                  modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
                  className={style.mySwiper}
                  >


                  {Slider_Images.map((el) => {

                  return <SwiperSlide   className={style.swiperslide3} key = {Math.random()}>
                      
                               <Box overflow={'hidden'} position={'relative'} borderRadius = '10px' border = '1px solid' borderColor={colorMode == 'light' ? 'gray.400' : 'dark.primary'}>

                                  <Box  position={'relative'} overflow={'hidden'}>

                                      <Image borderRadius = '10px' borderBottomRadius={'0px'} src = {el.img}></Image>

                                     

                                  </Box>

                                  <Box  position={'absolute'} bottom = {0}  borderBottomRadius={'10px'} bg = {'rgba(255, 255, 255, 0.519)'} p = '2' py = {{base : '1','512px' : '3'}} w = '100%'>
                                          
                                          <Text noOfLines={1} fontSize={'17'} fontWeight={'600'} color = 'black'>{el.title}</Text>

                                          <Text noOfLines={1} fontSize={'17'} fontWeight={'600'} color = {'gray.600'}>{el.text}</Text>

                                  </Box>

                                </Box>
                                  
                                  
                      </SwiperSlide>

                          
                              


                  })}


                  </Swiper>


                  <VStack _hover = {{cursor : 'pointer'}} justify={'center'} mt = {{base : '18px','512px' : '22px'}} bg = 'rgb(255, 0, 89)' borderRadius={'10px'} h = '50px' w = '100%'>

                           <HStack>

                           <Text color = 'white'>Explore All</Text>

                           <ChevronRightIcon w = '27px' h = '27px' color = 'white'/>

                           </HStack>
                              
                  </VStack>



                  </Box>
    

</Box>






























</>
  )
}

export default BuyingGuides