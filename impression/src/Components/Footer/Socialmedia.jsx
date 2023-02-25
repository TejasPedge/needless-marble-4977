import React from 'react'

import { Box, HStack, VStack,Text, Image,useColorModeValue } from '@chakra-ui/react'

function Socialmedia() {
  return (
    <Box p = '8'>
         
         <VStack>

               <Text fontSize={18} fontWeight = '500'>Show us some love 💖 on social media</Text>

               <HStack pt = '3' w = '60%' justify={'space-between'}>

                       <Image _hover = {{cursor : 'pointer'}} src = 'https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialInstagram.svg'></Image>

                       <Image _hover = {{cursor : 'pointer'}} src = 'https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialFacebook.svg'></Image>

                       <Image _hover = {{cursor : 'pointer'}} src = 'https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialYoutube.svg'></Image>

                       <Image _hover = {{cursor : 'pointer'}} src = 'https://adn-static1.nykaa.com/media/wysiwyg/2020/9sep/SocialTwitter.svg'></Image>

                       <Image _hover = {{cursor : 'pointer'}} src = 'https://adn-static2.nykaa.com/media/wysiwyg/2020/9sep/SocialPinterest.svg'></Image>

               </HStack>



         </VStack>
        



    </Box>
  )
}

export default Socialmedia