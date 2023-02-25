import React from 'react'

import { Box, HStack, Image, Text, useColorModeValue } from '@chakra-ui/react'

function GiftingAtImpression() {
  return (

<Box>

<Box  mt = {{base : '3','512px':'10'}}  lineHeight={1.3}>

<Text mb = {{base : '2.5','512px' : '0'}} color={useColorModeValue('black', 'white')}  fontWeight={'600'} fontSize={'24px'}>Gifting At Impression</Text>

<Text display = {{base : 'none','512px' : 'block'}} fontSize={'17'} mb = '2.5' fontWeight={500} color = {useColorModeValue('gray.600','gray.400')}>Give The Present of Beauty</Text>

</Box>

    <Box className="scrollbar" overflowX = 'scroll'>

            
             <HStack justify={'space-between'}  w = {{base : '160%','819px' : '1200px','855px' : '1200px','1182px' : '100%'}} m = 'auto'>
                        
                        <Image _hover = {{cursor : 'pointer'}} borderRadius={'5px'} w = {{ base : '49.5%','819px' : '49%'}} src = 'https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=w-3600,cm-pad_resize'></Image>

                        <Image _hover = {{cursor : 'pointer'}} borderRadius={'5px'} w = {{ base : '49.5%','819px' : '49%'}} src = 'https://images-static.nykaa.com/uploads/fc68d953-2b29-42f9-8df6-5ee176ad8d01.jpg?tr=w-3600,cm-pad_resize'></Image>

             </HStack>

       </Box>

 </Box>
  )
}

export default GiftingAtImpression