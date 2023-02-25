import React from 'react'

import { Box, VStack, HStack,Text, Image } from '@chakra-ui/react'

function FooterBottomSection() {
  return (
    <Box>

           <VStack p = '3' color = 'white' bg = 'rgb(255, 0, 89)'>


                     <HStack p = '1'>

                           <Image src = 'https://www.nykaa.com/media/wysiwyg/2020/helpCenter.svg'></Image>

                           <Text _hover = {{cursor : 'pointer'}} fontSize={'21'} fontWeight={'600'}>HELP CENTER</Text>

                     </HStack>

                     <Box  w = '100%' borderBottom={'1px solid'}></Box>


                     <HStack display = {{base : 'none','840px' : 'flex'}} justify={'space-between'} w = '60%' m = 'auto' fontWeight={'500'} fontSize={14}>

                             <Text _hover = {{cursor : 'pointer'}}>Terms & Conditions</Text>

                             <Text _hover = {{cursor : 'pointer'}}>Shipping Policy</Text>

                             <Text _hover = {{cursor : 'pointer'}}> Cancellation Policy</Text>

                             <Text _hover = {{cursor : 'pointer'}}>Privacy Policy</Text>

                     </HStack>


                     <Text fontSize={'13'}>© 2023 Impression E-Retail Pvt. Ltd. All Rights Reserved.</Text>





           </VStack>




    </Box>
  )
}

export default FooterBottomSection