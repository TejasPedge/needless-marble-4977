import React from 'react'

import { Box, Text, useColorModeValue, Image,useColorMode } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react';

function BeautyAdvice() {

 const {colorMode} = useColorMode();

  return (
    <Box pt = '9'>

                <Box lineHeight={1.3}>

                <Text mb = {{base : '2.5','512px' : '0'}} color={useColorModeValue('black', 'white')}  fontWeight={'600'} fontSize={'24px'}>Beauty Advice</Text>

                <Text display = {{base : 'none','512px' : 'block'}} fontSize={'17'} mb = '2.5' fontWeight={500} color = {useColorModeValue('gray.600','gray.400')}>Beauty Advice</Text>

                </Box>

{/* ------------------------------------------------------Image ------------------------------------------------------------------------------------ */}

        <SimpleGrid columns={{base : '1','614px' : 2}} spacing = {{base : '15px','614px' : '25px'}}>

                <Box _hover = {{cursor : 'pointer'}} borderRadius={'10px'} border={'1px solid'}  borderColor={colorMode == 'light' ? 'gray.400' : 'dark.primary'}>

                        <Box  position={'relative'} overflow={'hidden'}>

                            <Image borderRadius = '10px' borderBottomRadius={'0px'} src = {'https://images-static.nykaa.com/uploads/71c7558d-637c-40ee-b09b-7dfda35cf125.jpg?tr=w-1600,cm-pad_resize'}></Image>

                        </Box>

                        <Box mt = '-1'  borderBottomRadius={'10px'} border = 'none' bg = {'white'}  py = '4' pl = '7' w = '100%'>
                                
                                <Text noOfLines={1} fontSize={'17'} fontWeight={'600'} color = 'black'>Catch Up On Top Trends, Expert Advice, Fresh Launches & More</Text>

                                <Text color = 'rgb(255, 0, 89)' noOfLines={1} fontSize={'17'} fontWeight={'600'}>Watch Now</Text>

                        </Box>

                 </Box>



                 {/* --------------------------------------------- */}



                 <Box _hover = {{cursor : 'pointer'}} borderRadius={'10px'} border={'1px solid'} borderColor={colorMode == 'light' ? 'gray.400' : 'dark.primary'}>

                        <Box  position={'relative'} overflow={'hidden'}>

                            <Image borderRadius = '10px' borderBottomRadius={'0px'} src = {'https://images-static.nykaa.com/uploads/e7c366df-a513-4932-9cdc-fbeda4a707a5.jpg?tr=w-1600,cm-pad_resize'}></Image>

                        </Box>

                        <Box mt = '-1'  borderBottomRadius={'10px'} border = 'none' bg = {'white'}  py = '4' pl = '7' w = '100%'>
                                
                                <Text noOfLines={1} fontSize={'17'} fontWeight={'600'} color = 'black'>Catch Up On Top Trends, Expert Advice, Fresh Launches & More</Text>

                                <Text color = 'rgb(255, 0, 89)' noOfLines={1} fontSize={'17'} fontWeight={'600'}>Read More</Text>

                        </Box>

                 </Box>

         </SimpleGrid>


        </Box>
  )
}

export default BeautyAdvice