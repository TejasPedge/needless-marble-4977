import React from 'react'

import { Box, Text,Stack , HStack, Button} from '@chakra-ui/react'

import MailIcon from '@mui/icons-material/Mail';

import { Input } from '@chakra-ui/react';


function Emailinpt() {
  return (
    <Box mb = {{base : '48px','756px' : '0px'}}  >

        <Stack>

               <HStack mb = '12px'>

                  <MailIcon />

                  <Text fontWeight={500} fontSize={15}>Get special discount on your inbox</Text>

               </HStack>

               <HStack>

                       <Input w = '192px' placeholder='Your Email' bg = 'none' borderRadius = '0px' variant={'none'} borderBottom = '2px solid ' />

                       <Button border={'1.7px solid'} variant={'none'}>SEND</Button>


               </HStack>

               

        </Stack>

        


    </Box>
  )
}

export default Emailinpt