import React from 'react'

import { Box, HStack, useColorModeValue, Image, Text } from '@chakra-ui/react'


function CategoriesinFocus() {
  return (

    <Box mt = '1.5'>

<Text color={useColorModeValue('black', 'white')} mb = '2.5' fontWeight={'600'} fontSize={'24px'}>Categories In Focus</Text>

          {/* scrollbar css is added in index.css */}

        <HStack className="scrollbar" overflowX={'scroll'} justify={'space-between'}>

            <Image borderRadius={'10px'} _hover = {{cursor : 'pointer'}} w = {{base : '305px','640px' : '49%'}} src = 'https://images-static.nykaa.com/uploads/4cfa2b9b-623b-4019-af55-169f2f1f48ba.jpg?tr=w-1600,cm-pad_resize'></Image>

            <Image borderRadius={'10px'} _hover = {{cursor : 'pointer'}} w = {{base : '305px','640px' : '49%'}} src = 'https://images-static.nykaa.com/uploads/78fe6966-283e-4395-84b3-c0d3b45bf0ff.jpg?tr=w-1600,cm-pad_resize'></Image>

        </HStack>





    </Box>
   
  )
}

export default CategoriesinFocus