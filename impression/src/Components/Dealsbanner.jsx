import React from 'react'

import { Box, HStack, Image } from '@chakra-ui/react'

function Dealsbanner() {
  return (
    <>
     
       <Box mt = '10' border={'2px solid blue'} className="scrollbar" overflowX = 'scroll'>

             <HStack justify={'space-between'}  w = '100%' m = 'auto'>
                        
                        <Image borderRadius={'5px'} w = '49%' src = 'dealoftheday banner.webp'></Image>

                        <Image borderRadius={'5px'} w = '49%' src = 'try and buy banner.webp'></Image>

             </HStack>

       </Box>
    
    </>
    
  )
}

export default Dealsbanner