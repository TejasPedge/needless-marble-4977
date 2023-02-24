import { Box, Button, HStack, Text, useColorMode, Center, } from "@chakra-ui/react"

import { Badge } from "@chakra-ui/react";

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

//---------------- Mui Icon ---------------//

import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

 


const Slider_Images = [

    {img : 'https://images-static.nykaa.com/uploads/33c4212d-241b-41de-a8d2-c7b8d7d9cc13.jpg?tr=w-1600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/79c1face-6380-476d-9cef-22bfbc4023cb.gif?tr=w-1600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/0edd88f8-7241-42eb-ad2d-bd5642d0741a.jpg?tr=w-1600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/d2052bfb-fc68-46ae-a16e-eb0645f19c89.png?tr=w-1600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/8523b59b-1695-4a5d-bbc5-2f918bac1b05.jpg?tr=w-1600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/8e38f956-76f6-4a96-a250-b69573e66696.jpg?tr=w-1600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/4241760e-88e7-49b3-9235-580789facdb7.jpg?tr=w-1600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/5d84f257-663d-4e03-9191-92dd6e53ea98.jpg?tr=w-1600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/4241760e-88e7-49b3-9235-580789facdb7.jpg?tr=w-1600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/ac086a5b-7bd2-46ed-a167-3746b11594f9.jpg?tr=w-1600,cm-pad_resize'}, //--
    {img : 'https://images-static.nykaa.com/uploads/ce2a210b-93b9-4121-8838-d264b8da4cda.jpg?tr=w-1600,cm-pad_resize'}, //--

]




function NewatImpression({navigation,Impression_data,heading}) {

    const {colorMode} = useColorMode();

    console.log(navigation, 'navb')

  
return (
    <Box  mb = '5'>

         <Text mb = '2.5' fontWeight={'600'} fontSize={'24px'}>{heading}</Text>

              {/* jgj */}

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
                    spaceBetween = {25}

                    breakpoints={{

                        

                        1035 : {

                            slidesPerView : 7

                        },


                        921 : {

                            slidesPerView : 6

                        },

                        693 : {

                            slidesPerView : 5


                        },

                        566 : {

                            slidesPerView : 4

                        },

                        512 : {

                            slidesPerView : 3

                        },

            
                    }}

                    
                    keyboard={true}
                    modules={[Navigation,Autoplay, Pagination, Mousewheel, Keyboard]}
                    className={style.mySwiper}
                    >


                    {Impression_data.map((el) => {

                        console.log(el,'hii')

                        return <SwiperSlide className={style.swiperslide2} key = {Math.random()}>
                            
                                <Box borderRadius={'8px'} overflow={'hidden'} bg = 'white' pb = '25px' position={'relative'} border = '1px solid' borderColor={colorMode == 'dark' ? 'dark.primary' : 'gray.300'}>

                                     <Image _hover = {{transform : 'scale(1.1)'}} transition = {'all 0.2s'} src = {el.img}></Image>

                                     <Badge fontSize = {{base : '10', '625px' : '11'}} position={'absolute'} top='2' ml='1' color = 'gray.600' bg = 'rgba(151, 217, 233, 0.493)'> {el.tag} </Badge>

                                     <Box position={'absolute'} left = '2' bottom={'2'}>

                                      <Text fontWeight={'700'} color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[0]}</Text>
                                      <Text  color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[1]}</Text>
                                      <Text fontWeight={'700'} color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[2]}</Text>
                                      <Text fontWeight={'700'} color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[3]}</Text>
                                      <Text fontWeight={'700'} color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[4]}</Text>
                                      <Text  color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[5]}</Text>
                                      <Text  color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[6]}</Text>
                                      <Text  color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[7]}</Text>
                                      <Text  color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[8]}</Text>
                                      <Text  color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[9]}</Text>
                                      <Text  color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[10]}</Text>
                                      <Text  color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[11]}</Text>
                                      <Text  color={'gray.600'} as = 'span' fontSize={'13px'}>{el.ratings[12]}</Text>
                     
                                     </Box>

                                </Box>

                                <Box mt = '4px'>

                                       <Text fontWeight={'500'} fontSize={{base : '13','512px' : '15'}} noOfLines={2}>{el.title}</Text>

                                       <Text fontSize={{base : '13','512px' : '15'}}  color = {colorMode == 'light' ? 'gray.600' : 'gray.400'} noOfLines={2}>{el.size}</Text>
                                       
                                       <HStack>

                                              <Text fontWeight={'600'}>{el.price}</Text>
                                              <Text fontSize={{base : '14.5','512px':'15'}} as = 'del' color = {colorMode == 'light' ? 'gray.400' : 'gray.600'}>{el.delete}</Text>
                                              <Text fontSize = {{base : '14.5','512px':''}} color ={colorMode == 'dark' ? 'green.300' : 'green'}>{el.discount}</Text>
                                       </HStack>
                                       
                                       <HStack display={{base : 'flex','566px' : 'none'}} mt = '18px' borderRadius={'5px'} border = '1px solid' borderColor={colorMode == 'light' ? 'gray.400' : 'gray.600'}>

                                            <Box p = '1' borderRight={'1px solid'} borderColor = {colorMode == 'light' ? 'gray.400' : 'gray.600'}>

                                                 <LocalMallRoundedIcon sx = {{color : colorMode == 'light' ? 'rgb(255, 0, 89)' : 'rgb(0, 255, 149)'}} />
                                            
                                            </Box>
                                            
                                            <Center w = '96%'>
                                                
                                                <Button isLoading = {false}
                                                        loadingText='Submitting'
                                                        color={colorMode == 'light' ? 'rgb(255, 0, 89)' : 'rgb(0, 255, 149)'}
                                                        fontSize = '14'
                                                        bg = ''
                                                        variant={'none'}
                                                        fontWeight={500}
                                                        w = '100px'
                                                        h = '30px'
                                                        >
                                                            Add to Bag
                                                        </Button>

                                            </Center>
                                                
                                        </HStack>
                                   

                                </Box>

                                
                                <></>
                                
                        
                        
                        </SwiperSlide>

                    })}


                    </Swiper>




          </Box>



    </Box>
  )
}

export default NewatImpression

