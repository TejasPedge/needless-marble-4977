import React from 'react'

import { Box,Stack, HStack, Text, Image } from '@chakra-ui/react'



// Mui Icons

import StayPrimaryPortraitIcon from '@mui/icons-material/StayPrimaryPortrait';

function GetOurApp() {
  return (
    <Box>

                    <Stack>

                    <HStack>

                            <StayPrimaryPortraitIcon />

                            <Text fontWeight={500} fontSize={{base : '15','619px' : 13}}>EXPERIENCE THE IMPRESSION MOBILE APP</Text>

                    </HStack>

                    <HStack  flex={'wrap'} w = '300px' ml = '5px'>

                        {/* play Store logo */}

                          <Image ml = '5' _hover = {{cursor : 'pointer'}} w = '140px' borderRadius={'10px'} src = 'Playstore.png' />

                        {/* App Store Logo */}

                          <Image _hover = {{cursor : 'pointer'}} w = '108px' src = 'AppStore.png' />

                         

                    </HStack>



                    </Stack>






    </Box>
  )
}

export default GetOurApp