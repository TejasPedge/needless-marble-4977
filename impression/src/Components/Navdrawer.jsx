import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

  import style from '../Styles/Navbar.module.css'

  import Navaccordion from './Navaccordion';

  import { useColorModeValue } from '@chakra-ui/react'

  import { Button,Input, Text, HStack } from '@chakra-ui/react'

  import { SunIcon, MoonIcon } from '@chakra-ui/icons';

  import { useColorMode } from '@chakra-ui/react';

  import { Box } from '@chakra-ui/react';

  import { Flex } from '@chakra-ui/react';

  import { Badge } from '@chakra-ui/react';
  



// ------------ MUI Icon ----------- \\
  
import LoginIcon from '@mui/icons-material/Login';


import LocalMallIcon from '@mui/icons-material/LocalMall';





function Navdrawer({isOpen, onOpen, onClose, btnRef}) {

   const {toggleColorMode, colorMode} =  useColorMode(); 

   console.log(window.screen)

  return (
    <>

<Drawer
        blockScrollOnMount={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        isFullHeight = {true}
       
 
      >

        {/* i added height for responsiveness in draweroverlay  */}


        <DrawerOverlay minW = {'332px'} display = {{base : 'flex', '1157px' : 'none'}}  />

        <DrawerContent display = {{base : 'flex', '1157px' : 'none'}} bg = '#001e3c' background={useColorModeValue('linear-gradient(324deg, rgba(255,255,255,1) 0%, rgba(225,240,255,1) 60%, rgba(222,217,255,1) 94%, rgba(253,242,255,1) 100%)',   'linear-gradient(324deg, rgba(1,32,64,1) 0%, rgba(0,29,54,1) 53%, rgba(8,24,62,1) 94%, rgba(1,29,34,1) 100%)')}>
         
          <DrawerCloseButton />



          <DrawerHeader>

                     
                     <HStack _hover = {{cursor : 'pointer', color : useColorModeValue('light.primary','dark.primary')}}>

                         <LoginIcon  /> 
                         
                         <Text fontSize={'18'}>Login</Text>
                   
                     </HStack>
                      


          </DrawerHeader>

          <DrawerBody>


            <Flex p = '15px' align={'center'} justify={'space-between'}  bg = {useColorModeValue('rgba(255, 255, 255, 0.782)','rgba(13, 31, 75, 0.473)')} h = '50px' borderRadius={'5px'}> 

              <Text>⭐ 0</Text> 

              <Text _hover = {{cursor : 'pointer'}} bg = {useColorModeValue('rgb(237, 233, 233)','rgba(7, 18, 47, 0.473)')} px = '10px' py = '5px' borderRadius={'10px'}>Earn Coins</Text>               

            </Flex>

             <Navaccordion/>




          </DrawerBody>

          <DrawerFooter>


            <HStack justify = 'space-between' w = '100px'>


                        <Box  position={'relative'} >

                                <LocalMallIcon className = {style.muimallicon} sx = {{color : colorMode == 'light' ? '#6B46C1' : 'rgb(0, 255, 213)'}} />

                                <Badge zIndex={'-1'} display={'flex'} justifyContent='center' alignItems={'center'} w = '25px' h = '25px' borderRadius={'50%'} position={'absolute'} top = '-3' right = '-3' colorScheme='green'>10</Badge>

                                {/* Tooltip */}

                                <Box bg = {useColorModeValue('gray.200','rgb(15, 39, 87)')} w = '44px' borderRadius={'10px'} className={style.tooltip2}  px = '2' border = '1px solid'>Cart</Box>
                    
                        </Box>


                            <Button bg = '' size  = {{base : 'sm','528px' : 'md'}} w = '20px' borderRadius={'50%'} onClick = {toggleColorMode}>

                                                    {useColorModeValue(<SunIcon color = {useColorModeValue('light.primary','dark.primary')}/>,<MoonIcon color = {useColorModeValue('light.primary','dark.primary')}/>)}

                            </Button>

               </HStack>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    
    
    
    </>
  )
}

export default Navdrawer