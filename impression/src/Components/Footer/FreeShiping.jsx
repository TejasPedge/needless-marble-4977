import React from 'react'

import { Box, HStack, VStack, Divider,Image,Text, Stack, useColorModeValue } from '@chakra-ui/react'


function FreeShiping() {
  return (
    <Box>

          <VStack p = {{base : '7','512px' : '10' ,'1195px' : '20'}} borderBottom = {{base : '1px solid','840px' : 'none'}} borderColor={'gray.400'}>

             
                <HStack justify={'space-evenly'} w = {{base : '98%','1061px' :'90%'}}>

                     <HStack flexDirection={{'base' : 'column','663px' : 'row'}}>

                             <Image src = 'https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg'></Image>


                           <Stack pt = {{base : '3.5','663px' : '0'}} >

                                        <Text textAlign={{base : 'center','663px' : 'initial'}} color = {useColorModeValue('gray.800','gray.400')} fontWeight={'500'} fontSize={'15'}>FREE SHIPPING</Text>

                                        <Divider display = {{'base' : 'none','663px' : 'block'}}></Divider>

                                        <Box lineHeight={{base : 1.2,'663px' : 1.3}}>

                                        <Text textAlign={{base : 'center','663px' : 'initial'}} fontSize = '13.2'>On Orders Above ₹299</Text>

                                        </Box>

                           </Stack>

                     </HStack>


                     {/* -------------------------------------------- */}



                     <HStack flexDirection={{'base' : 'column','663px' : 'row'}} display={{base : 'none','840px' : 'flex'}}>

                             <Image src = 'https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg'></Image>


                           <Stack pt = {{base : '3.5','663px' : '0'}}>

                                        <Text textAlign={{base : 'center','663px' : 'initial'}}  color = {useColorModeValue('gray.800','gray.400')} fontWeight={'500'} fontSize={'15'}>EASY RETURNS</Text>

                                        <Divider display = {{'base' : 'none','663px' : 'block'}}></Divider>

                                        <Box lineHeight={1.3}>

                    
                                        <Text textAlign={{base : 'center','663px' : 'initial'}}  fontSize={'13.2'}>15-Day Return Policy</Text>

                                        </Box>

                           </Stack>

                     </HStack>



                       {/* ------------------------------------------- */}


                       <HStack flexDirection={{'base' : 'column','663px' : 'row'}}>

                            <Image src = 'https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg'></Image>


                            <Stack pt = {{base : '3.5','663px' : '0'}}>

                                    <Text textAlign={{base : 'center','663px' : 'initial'}}  color = {useColorModeValue('gray.800','gray.400')} fontWeight={'500'} fontSize={'15'}>100% AUTHENTIC</Text>

                                    <Divider display = {{'base' : 'none','663px' : 'block'}}></Divider>

                                    <Box lineHeight={1.3}>

                                    <Text textAlign={{base : 'center','663px' : 'initial'}} fontSize = '13.2'>Products Sourced Directly</Text>

                                    </Box>

                            </Stack>

                            </HStack>


                    {/* ----------------------------------------------- */}




                               <HStack flexDirection={{'base' : 'column','663px' : 'row'}}>

                                    <Image src = 'https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg'></Image>


                                    <Stack pt = {{base : '3.5','663px' : '0'}}>

                                            <Text textAlign={{base : 'center','663px' : 'initial'}}  color = {useColorModeValue('gray.800','gray.400')} fontWeight={'500'} fontSize={'15'}>1900+ BRANDS</Text>

                                            <Divider display = {{'base' : 'none','663px' : 'block'}}></Divider>

                                            <Box lineHeight={1.3}>

                                            <Text textAlign={{base : 'center','663px' : 'initial'}}  fontSize = '13.2'>1.2 Lakh+ Products</Text>

                                        </Box>

                                    </Stack>

                                    </HStack>

                       </HStack>






          </VStack>





    </Box>
  )
}

export default FreeShiping