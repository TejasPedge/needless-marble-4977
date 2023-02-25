import React from 'react'

import { Box, Text, HStack, VStack } from '@chakra-ui/react'

// Mui icon

import CallIcon from '@mui/icons-material/Call';

function Callus() {
  return (
    <Box >
        
          <HStack mb = '10px' justify={'center'}>

                    <CallIcon /> 

               <Box>

                   <Text mb = '1' fontSize={'15'}>FOR ANY HELP, YOU MAY CALL US AT</Text>

                   <Text textAlign={'center'} fontSize={'15'}>1800-267-4444</Text>

               </Box>

            </HStack>

              <Text textAlign={'center'} fontSize={'15'}> (Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</Text>

    </Box>
  )
}

export default Callus