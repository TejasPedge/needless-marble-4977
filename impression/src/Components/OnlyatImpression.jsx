import React from 'react'

import { Box, HStack, Image, Text, useColorModeValue, VStack, SimpleGrid } from '@chakra-ui/react'

import Context from './ContextApi/Context'

import { useContext } from 'react'

import { Skeleton } from '@chakra-ui/react'

function OnlyatImpression() {

   const {isLoaded} = useContext(Context);

  return (
    <Box  width = {['92%','94%']} m = 'auto'  pt = '4'>

         <Skeleton isLoaded = {isLoaded} w = '300px'>

            <Text color={useColorModeValue('black', 'white')} mb = '2.5' fontWeight={'600'} fontSize={['21px','22px','23px','24px']}>Only At Impression</Text>

         </Skeleton>

         <SimpleGrid mb = {{base : '6','512px' : '8'}} columns={{base : 1,'512px' : 2,'841px' : 3}} spacing = {{base : '4','512px' : '6'}}>  

                <Box _hover = {{cursor : 'pointer'}} overflow={'hidden'} borderRadius={'7px'} border = '1px solid' borderColor={useColorModeValue('rgba(249,187,216,1)','dark.primary')}>

                   <Box overflow={'hidden'}>

                     <Skeleton isLoaded ={isLoaded}>

                      <Image transition={'all 0.2s'} _hover = {{transform : 'Scale(1.1)'}} w = '100%' src = 'https://images-static.nykaa.com/creatives/3aafc401-d29b-418d-92e7-a4458771edba/default.jpg?tr=w-1600,cm-pad_resize'></Image>

                      </Skeleton>


                   </Box>

                     <Box p = '3' pl = '5'>

                     <Skeleton isLoaded ={isLoaded}  w = '200px'>

                        <Text noOfLines={1} fontWeight={'600'} fontSize={'17px'}>On ₹5000: Mini Matte Lipstick+</Text>

                      </Skeleton>

                      <Skeleton isLoaded ={isLoaded}>

                        <Text noOfLines={1} fontWeight={'600'} color =  {useColorModeValue('gray.600','gray.400')}>On ₹6000: Mini Elixir Serum</Text>

                        </Skeleton>

                     </Box>

                </Box>

                {/* ------------------------------------------- */}

                <Box _hover = {{cursor : 'pointer'}} overflow={'hidden'} borderRadius={'7px'} border = '1px solid' borderColor={useColorModeValue('rgba(249,187,216,1)','dark.primary')}>

                    
                   <Box overflow={'hidden'}>

                        <Skeleton isLoaded = {isLoaded}>

                          <Image transition={'all 0.2s'} _hover = {{transform : 'Scale(1.1)'}} w = '100%' src = 'https://images-static.nykaa.com/creatives/be1fe42b-d707-4669-8466-9639baaf975b/default.jpg?tr=w-1600,cm-pad_resize'></Image>

                        </Skeleton>

                     </Box>

                     <Box p = '3' pl = '5'>

                     <Skeleton isLoaded = {isLoaded} w = '200px'>

                               <Text noOfLines={1} fontWeight={'600'} fontSize={'17px'}>Upto 50% Off</Text>

                     </Skeleton>

                     <Skeleton isLoaded = {isLoaded}>

                           <Text noOfLines={1} fontWeight={'600'} color =  {useColorModeValue('gray.600','gray.400')}>Effortlessly elegant lingerie</Text>

                        </Skeleton>

                     </Box>

                </Box>
                
                {/* --------------------------------------------------- */}

                <Box _hover = {{cursor : 'pointer'}} overflow={'hidden'} borderRadius={'7px'} border = '1px solid' borderColor={useColorModeValue('rgba(249,187,216,1)','dark.primary')}>

                     <Box overflow={'hidden'}>

                     <Skeleton isLoaded = {isLoaded}>

                                  <Image transition={'all 0.2s'} _hover = {{transform : 'Scale(1.1)'}} w = '100%' src = 'https://images-static.nykaa.com/creatives/0a7576c8-7a24-4888-b699-6c37cfcd21b5/default.png?tr=w-1600,cm-pad_resize'></Image>
                                  
                     </Skeleton>

                      </Box>

                     <Box p = '3' pl = '5'>


                     <Skeleton isLoaded = {isLoaded} w = '200px'>

                        <Text noOfLines={1}fontWeight={'600'} fontSize={'17px'}>Upto 20% Off</Text>

                     </Skeleton>

                     <Skeleton isLoaded = {isLoaded}>

                        <Text noOfLines={1} fontWeight={'600'} color =  {useColorModeValue('gray.600','gray.400')}>#GetThatGlow</Text>

                     </Skeleton>

                     </Box>

                </Box>


                <Box gridColumnStart={{'512px' : 2}} _hover = {{cursor : 'pointer'}} overflow={'hidden'} borderRadius={'7px'} border = '1px solid' borderColor={useColorModeValue('rgba(249,187,216,1)','dark.primary')}>

                     <Box overflow={'hidden'}>

                     <Skeleton isLoaded = {isLoaded}>

                     <Image transition={'all 0.2s'} _hover = {{transform : 'Scale(1.1)'}} w = '100%' src = 'https://images-static.nykaa.com/creatives/590843c6-57b4-476f-8714-001d2ada4c9f/default.jpg?tr=w-1600,cm-pad_resize'></Image>

                     </Skeleton>

                     </Box>

                     <Box p = '3' pl = '5'>

                     <Skeleton isLoaded = {isLoaded} w = '200px'>

                        <Text noOfLines={1}fontWeight={'600'} fontSize={'17px'}>Upto 20% Off</Text>
                     
                     </Skeleton>

                     <Skeleton isLoaded = {isLoaded}>


                        <Text noOfLines={1} fontWeight={'600'} color =  {useColorModeValue('gray.600','gray.400')}>#GetThatGlow</Text>

                        </Skeleton>

                     </Box>

                </Box>

           
         </SimpleGrid>




    </Box>
  )
}

export default OnlyatImpression