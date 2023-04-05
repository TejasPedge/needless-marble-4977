import React from 'react'

import { Box, HStack, VStack, Image, Divider } from '@chakra-ui/react'

import Emailinpt from './Emailinpt'

import Socialmedia from './Socialmedia'

import GetOurApp from './GetOurApp'

import Callus from './Callus'

import Footeroptions from './Footeroptions'

import FreeShiping from './FreeShiping'

import FooterBottomSection from './FooterBottomSection'

function Footer() {
  return (<Box minW={'332px'}>
    <Box  bg = 'gray.900' mt = '10'>

          <VStack py = {{base  : '3','619px':'10'}} pt = {{base  : '7','619px':'10'}}>

               
              <HStack flexDirection={{base : 'column','756px' : 'row'}}  color={'white'} spacing={'16px'} justify= 'space-between' w = {{base : '92%','619px' : '85%','891px' : '75%','1122px' : '85%','1430px':'75%'}} m = 'auto'>


                   <Box display={{'base' : 'none','619px' : 'block'}}>

                      <Emailinpt></Emailinpt>
                    
                    </Box>


                    <Image display = {{base : 'none','756px' : 'block','1122px' : 'none'}} src = 'ImpressionSignlogo.png'></Image>

                    <GetOurApp />

                    <Box display = {{base : 'none','1122px' : 'block'}}>

                       <Callus />

                    </Box>

              </HStack>

              {/* -------------------------------------------------- */}

              <VStack>

                       <Box color = 'white' mt = '10' display = {{base : 'none','619px' : 'block','1122px' : 'none'}}>

                              <Callus />

                        </Box>


              </VStack>
                

          </VStack>

    </Box>


 {/* ------------Footer Options---------------- */}

     <Box display = {{base : 'none','619px' : 'block'}}>

          <Footeroptions />

     </Box>

   {/* --------------Free shipping -------------- */}


          <Box>
              
          <FreeShiping />

          </Box>


    {/* ---------------Social Media --------------------- */}

           <Box display = {{'base' : 'block','840px' : 'none'}}>

               <Socialmedia />

           </Box>

   {/* -------------------------- Send Email------------------ */}

          <Box display = {{base : 'block','619px' : 'none'}} color = 'white' bg = 'gray.900' pt = '10'>

                 <VStack>

                     <Emailinpt />

                 </VStack>

          </Box>


    {/* ---------------------- Last Section of the Footer ------------------------- */}
 

         <Box>

              <FooterBottomSection />

         </Box>

       


</Box>
  )
}

export default Footer