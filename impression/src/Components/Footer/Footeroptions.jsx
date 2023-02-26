import { Box, Stack, Text, HStack, Flex, useColorModeValue , SimpleGrid} from "@chakra-ui/react"

import { ArrowRightIcon } from "@chakra-ui/icons"

import { Heading, Image,  } from "@chakra-ui/react"

import { useColorMode } from "@chakra-ui/react"

import { useRef } from "react"

// import style from '../Styles/Dropdown.module.css'


const Impression = [

    {to : '#', text : 'Who are we?'},
    {to : '#', text : 'Careers'},
    {to : '#', text : 'Authenticity'},
    {to : '#', text : 'Press'},
    {to : '#', text : 'Testimonials'},
    {to : '#', text : 'Impression CSR'},
    {to : '#', text : 'Responsible Disclosure'},
    {to : '#', text : 'Investor Relations'},

]


const Help = [ 

    {to : '#', text : 'Contact Us'},
    {to : '#', text : 'Frequently asked questions'},
    {to : '#', text : 'Store Locator'},
    {to : '#', text : 'Cancellation & Return'},
    {to : '#', text : 'Shipping & Delivery'},
    {to : '#', text : 'Sell on Impression'},

];


const Inspire_Me = [

    {to : '#', text : 'Beauty Book'},
    {to : '#', text : 'Impression TV'},
    {to : '#', text : 'Impression Network'},
    {to : '#', text : 'Buying Guides'},

];



const Quick_Links = [

    {to : '#', text : 'Offer Zone'},
    {to : '#', text : 'New Launches'},
    {to : '#', text : 'Impression Man'},
    {to : '#', text : 'Impression Fashion'},
    {to : '#', text : 'Impression Pro'},

];

const Top_categories = [

    {to : '#', text : 'Makeup'},
    {to : '#', text : 'Skin'},
    {to : '#', text : 'Hair'},
    {to : '#', text : 'Bath & Body'},
    {to : '#', text : 'Appliances'},
    {to : '#', text : 'Wellness'},
    {to : '#', text : 'Fragrance'},
    {to : '#', text : 'Natural'},
    {to : '#', text : 'Luxe'},

]







function Footeroptions() {

    const {colorMode} = useColorMode();

  return (
    
    <>

        <Box bg = {useColorModeValue('linear-gradient(to right top, #f0349f, #f149b0, #f05ac0, #f06acf, #ee79dd, #ed7be4, #eb7deb, #e980f2, #e778f4, #e570f6, #e368f9, #e05ffb)', 'linear-gradient(to right top, #073d4f, #003956, #00355c, #002f60, #002761, #0c2562, #172263, #201f63, #212467, #21296a, #232e6e, #243371)')} >

            <Box  w = '90%' m = 'auto'>
                   
                     <SimpleGrid pb = '10' pt = '3' columns = {{base : '2','886px' : '3','1080px' : '4','1351px' : '5'}} justify={'space-between'}>

                                   

                           <Stack align={'center'}   p = '40px'>

                                <Image mb = {'5'} w = '200px' minW = '180px' borderRadius={'20px'} src = {useColorModeValue(`${process.env.PUBLIC_URL}/Impression Logo lighttheme.png`,`${process.env.PUBLIC_URL}/Impression Logo.png`)}></Image>

                                <Stack>

                                    {Impression.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.200'} key = {el.text}>{el.text}</Text>

                                    })}

                                </Stack>



                           </Stack>


                           {/* --------------------- */}


                           <Stack     p = '30px' >

                                    
                                <Stack  >

                                   <Text fontWeight={'bold'}>Help</Text>


                                    {Help.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.200'} key = {el.text}>{el.text}</Text>

                                    })}

                                </Stack>



                           </Stack>


                           {/* ---------------------------------- */}


                           <Stack align = 'center' p = '30px' >

                                 <Stack >

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Inspire Me</Text>

                                    {Inspire_Me.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.200'} key = {el.text}>{el.text}</Text>

                                    })}

                                   </Stack>

                           </Stack>


                           {/* ---------------------------------- */}


                           <Stack   align = 'center' display = {{base : 'block','886px' : 'none','1080px' : 'block'}} p = '30px'>

                                  <Stack>

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Quick Links</Text>

                                    {Quick_Links.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.200'} key = {el.text}>{el.text}</Text>

                                    })}

                                    </Stack>

                
                         </Stack>

                                    {/* --------------------- */}


                            <Stack  display = {{base : 'none','1351px' : 'block'}} p = '30px'>

                                   <Stack>


                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Top Categories</Text>

                                    {Top_categories.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.200'} key = {el.text}>{el.text}</Text>

                                    })}

                            </Stack>
             
                               
                            </Stack>






                     </SimpleGrid>


              </Box>



        </Box>
    
    
    
    
    
    </>
  )
}

export default Footeroptions