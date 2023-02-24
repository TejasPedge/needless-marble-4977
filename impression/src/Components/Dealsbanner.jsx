import React from 'react'

import { Box, HStack, Image } from '@chakra-ui/react'

function Dealsbanner() {
  return (
    <>
     
       <Box mt = {{base : '7','512px':'10'}} className="scrollbar" overflowX = 'scroll'>

             <HStack justify={'space-between'}  w = {{base : '160%','819px' : '1200px','855px' : '1200px','1182px' : '100%'}} m = 'auto'>
                        
                        <Image borderRadius={'5px'} w = {{ base : '49.5%','819px' : '49%'}} src = 'https://images-static.nykaa.com/uploads/c7ae3973-167e-4ce1-b572-1364e1f5c2e2.jpg?tr=w-1600,cm-pad_resize'></Image>

                        <Image borderRadius={'5px'} w = {{ base : '49.5%','819px' : '49%'}} src = 'https://images-static.nykaa.com/uploads/12ea9993-f29d-4732-aa66-2de20275f641.jpg?tr=w-1600,cm-pad_resize'></Image>

             </HStack>

       </Box>
    
    </>
    
  )
}

export default Dealsbanner