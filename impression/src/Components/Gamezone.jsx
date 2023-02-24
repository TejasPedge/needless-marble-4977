import React from 'react'

import { Box, Text, useColorModeValue, Image } from '@chakra-ui/react'
import { Translate } from '@mui/icons-material'

function Gamezone() {
  return (
    <Box pt = '5'>

            <Box lineHeight={1.3}>

            <Text mb = {{base : '2.5','512px' : '0'}} color={useColorModeValue('black', 'white')}  fontWeight={'600'} fontSize={'24px'}>Game Zone</Text>

            <Text display = {{base : 'none','512px' : 'block'}} fontSize={'17'} mb = '2.5' fontWeight={500} color = {useColorModeValue('gray.600','gray.400')}>Play & Win Coins</Text>

            </Box>



            <Box position={'relative'} overflow={'hidden'} borderRadius={'10px'}>

                   <Image _hover = {{cursor : 'pointer'}} display = {{base : 'none','730px' : 'block'}} borderRadius={'10px'} src = 'https://images-static.nykaa.com/uploads/22eaef70-8ee8-45ec-9d15-2dab3ea9f621.jpg?tr=w-4600,cm-pad_resize'></Image>

                   <Image  display = {{base : 'block','730px' : 'none'}} mb = '4' _hover = {{cursor : 'pointer'}} borderRadius={'10px'} src = {'https://images-static.nykaa.com/uploads/eae8b969-ae73-45f1-abb9-0b8407fc88c0.jpg?tr=w-1200,cm-pad_resize'}></Image>

                   
                   <Box display = {{base : 'none','730px' : 'block'}} position={'absolute'} top = '50%' left = '50%' transform={{base : 'translate(-105%, -50%)','923px' : 'translate(-138%, -50%)'}}>
               
                           <Text _hover = {{cursor : 'pointer'}} color={'white'} fontWeight={600} fontSize={{base : '3.3vw','923px' : '2.5vw'}}>Exciting Offers</Text>

                           <Text _hover = {{cursor : 'pointer'}} color={'white'} fontWeight={600} fontSize={{base : '3.3vw','923px' : '2.5vw'}}>On Your Favourite Brands</Text>

                   </Box>

            </Box>








    </Box>
  )
}

export default Gamezone