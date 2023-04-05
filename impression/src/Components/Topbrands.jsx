import React from 'react'


import { Box, Image, SimpleGrid, GridItem, Text,useColorModeValue, useColorMode, Stack } from '@chakra-ui/react'

import { useContext } from 'react';

import Context from './ContextApi/Context';

import { Skeleton } from '@chakra-ui/react';

const brands = [

    {
        img : 'https://images-static.nykaa.com/uploads/05ac3534-f3b1-43d1-94b6-ce30eace1125.jpg?tr=w-1600,cm-pad_resize', // --
        heading : 'Up To 15% Off', 
        text : '#1 Dermatologist Recommended Brand in India',
        id : 'id2'
    },

    {
        img : 'https://images-static.nykaa.com/uploads/5ba2775e-9534-400e-be69-87ee965c7036.jpg?tr=w-1600,cm-pad_resize',  // --
        heading : 'Approved by dermatologists', 
        text : 'Free hair mask on scalp range on ₹999+',
        id : 'id1'
    },

    {
        img : 'https://images-static.nykaa.com/uploads/6842d103-a2d2-404e-bb2e-376cf0215acd.jpg?tr=w-1600,cm-pad_resize',  //--
        heading : 'Up To 30% Off', 
        text : 'Ace your base like never before!',
        id : 'id3'
    },

    {
        img : 'https://images-static.nykaa.com/uploads/b3f1a798-c21d-4b0a-a913-ac91fa85f5c0.jpg?tr=w-1600,cm-pad_resize',  //--
        heading : 'Flat 10% off on ₹1299+', 
        text : 'Free Shampoo/Mask on ₹1599+',
        id : 'id4'
    },

    {
        img : 'https://images-static.nykaa.com/uploads/454bfa5e-1d61-43b3-a7bb-38323199cef0.jpg?tr=w-1600,cm-pad_resize', // --
        heading : 'Flat 10% Off', 
        text : 'Skincare Kit Worth ₹5000 + Pouch On ₹4000',
        id : 'id5'
    },

    {
        img : 'https://images-static.nykaa.com/uploads/9ed396c7-44cf-45fc-8122-012428aa2641.gif?tr=w-1600,cm-pad_resize',  // --
        heading : 'Flat 35% Off', 
        text : 'Hair Oils & Masks',
        id : 'id6'
    },

    {
        img : 'https://images-static.nykaa.com/uploads/88a53a6c-fde1-4365-be72-bbe368c9d021.jpg?tr=w-1600,cm-pad_resize',  // --
        heading : 'Up To 35% Off', 
        text : '72HR Hydrated Hair with Hyaluronic Acid',
        id : 'id7'
    },

    {
        img : 'https://images-static.nykaa.com/uploads/a06b72a8-bd09-408f-95b8-8d3f01f13cbf.jpg?tr=w-1600,cm-pad_resize',  // --
        heading : 'Luxe Sunscreens starting at ₹950', 
        text : '+ Exciting Gifts on purchase!',
        id : 'id8'
    },

    {
        img : 'https://images-static.nykaa.com/uploads/8440b977-a365-4a3e-a5f9-b4c8df2e936c.jpg?tr=w-1600,cm-pad_resize', 
        heading : 'Complete Your Party Look In Minutes', 
        text : `With Huda Beauty's Lovefest Collection`,
        id : 'id9'
    },


]



function Topbrands() {

   const {colorMode} = useColorMode();

   const {isLoaded} = useContext(Context)

  return (
    <Box w = '97%' m = 'auto' mt = '10'>


       <Skeleton isLoaded = {isLoaded} w = '200px'>

            <Text color={useColorModeValue('black', 'white')} mb = '2.5' fontWeight={'600'} fontSize={'24px'}>Top Brands</Text>

        </Skeleton>           

    <SimpleGrid columns={{base : '1','512px' : '2','841px' : '3'}} spacing = {{base : '4','512px' : '5'}}>

          { brands.map((el) => {

                    return <GridItem  _hover = {{cursor : 'pointer'}} key = {el.id} overflow={'hidden'} borderRadius={'10px'} border = '1px solid' borderColor={colorMode == 'dark' ? 'gray.600' : 'gray.300'}> 

                                <Box overflow='hidden'>

                                    <Skeleton isLoaded = {isLoaded}>

                                        <Image _hover = {{transform : 'scale(1.1)'}} transition = {'all 0.2s'} w = '100%' src = {el.img}></Image>
                                    
                                    </Skeleton> 

                                </Box>
                                 

                                 <Stack lineHeight={1} p = '16px' pl = '25px'>

                                 <Skeleton isLoaded = {isLoaded} w = '200px'>

                                      <Text noOfLines={1} color = {colorMode == 'light' ? '#E80071' : 'dark.primary'} fontWeight={600} fontSize={['18px','19px','20px','21px','22px']}>{el.heading}</Text>
                                      
                                  </Skeleton>

                                  <Skeleton isLoaded = {isLoaded} >

                                    <Text noOfLines={2} color = {colorMode == 'dark' ?'gray.400' : 'gray.600'} fontWeight={600}>{el.text}</Text>

                                  </Skeleton>

                                 </Stack>

                                 
                           </GridItem> 

          })}


         <GridItem display = {{base : 'block','841px' : 'none'}}  _hover = {{cursor : 'pointer'}} overflow={'hidden'} borderRadius={'10px'} border = '1px solid' borderColor={colorMode == 'dark' ? 'gray.600' : 'gray.300'}> 

                <Box overflow='hidden' h = '179px'>

                <Skeleton isLoaded = {isLoaded} >


                    <Image _hover = {{transform : 'scale(1.1)'}} transition = {'all 0.2s'} w = '100%' src = {'https://images-static.nykaa.com/uploads/5d84f257-663d-4e03-9191-92dd6e53ea98.jpg?tr=w-1600,cm-pad_resize'}></Image>
                
                </Skeleton>

                </Box>
                

                <Stack lineHeight={1} p = '16px' pl = '25px'>

                    <Skeleton isLoaded = {isLoaded} w = '200px' >

                    <Text noOfLines={1} color = {colorMode == 'light' ? '#E80071' : 'dark.primary'} fontWeight={600} fontSize={['18px','19px','20px','21px','22px']}>Up To 15% Off</Text>
                    
                    </Skeleton>

                    <Skeleton isLoaded = {isLoaded} >

                       <Text noOfLines={2} color = {colorMode == 'dark' ?'gray.400' : 'gray.600'} fontWeight={600}>#1 Dermatologist Recommended Brand in India</Text>

                    </Skeleton>


                </Stack>

                
                </GridItem> 







    </SimpleGrid>






    </Box>
  )
}

export default Topbrands