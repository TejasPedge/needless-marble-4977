import { Box, Stack, Text, HStack, Flex, useColorModeValue } from "@chakra-ui/react"

import { ArrowRightIcon } from "@chakra-ui/icons"

import { Heading } from "@chakra-ui/react"

import { useColorMode } from "@chakra-ui/react"

import { useRef } from "react"

import style from '../Styles/Dropdown.module.css'

const Makeup_options = [

    {to : '#', text : 'Face Primer'},
    {to : '#', text : 'Concealer'},
    {to : '#', text : 'Foundation'},
    {to : '#', text : 'Compact'},
    {to : '#', text : 'Contour'},
    {to : '#', text : 'Loose Powder'},
    {to : '#', text : 'Tinted Moisturizer'},
    {to : '#', text : 'Blush'},
    {to : '#', text : 'Bronzer'},
    {to : '#', text : 'BB & CC Cream'},
    {to : '#', text : 'Highlighters'},
    {to : '#', text : 'Setting Spray'},
    {to : '#', text : 'Sindoor'},

]



const Eyes = [ 

    {to : '#', text : 'Kajal'},
    {to : '#', text : 'Eyeliner'},
    {to : '#', text : 'Mascara'},
    {to : '#', text : 'Eye Shadow'},
    {to : '#', text : 'Eye Brow Enhancers'},
    {to : '#', text : 'Eye Primer'},
    {to : '#', text : 'False Eyelashes'},
    {to : '#', text : 'Eye Makeup Remover'},
    {to : '#', text : 'Under Eye Concealer'},
    {to : '#', text : 'Contact Lenses'},

]

const MakeupKit = [

    {to : '#', text : 'Makeup Kits' },
    {to : '#', text : 'Makeup Combos' }

];

const Lips = [

    {to : '#', text : 'Lipstick'},
    {to : '#', text : 'Liquid Lipstick'},
    {to : '#', text : 'Lip Crayon'},
    {to : '#', text : 'Lip Gloss'},
    {to : '#', text : 'Lip Liner'},
    {to : '#', text : 'Lip Plumper'},
    {to : '#', text : 'Lip Stain'},

]

const Nails = [

    {to : '#', text : 'Nail Polish'},
    {to : '#', text : 'Nail Art Kits'},
    {to : '#', text : 'Nail Care'},
    {to : '#', text : 'Nail Polish Remover'},

];



const Tools = [

    {to : '#', text : 'Tools & Brushes'},
    {to : '#', text : 'Face Brush'},
    {to : '#', text : 'Eye Brush'},
    {to : '#', text : 'Lip Brush'},
    {to : '#', text : 'Brush Sets'},
    {to : '#', text : 'Brush Cleaners'},
    {to : '#', text : 'Sponges & Applicators'},
    {to : '#', text : 'Eyelash Curlers'},
    {to : '#', text : 'Tweezers'},
    {to : '#', text : 'Mirrors'},
    {to : '#', text : 'Makeup Pouches'},

]






function Dropdown() {

    const {colorMode} = useColorMode();

  return (
    <>

        <Box bg = {useColorModeValue('white','#001e3c')} className={style.dropdown} position={'absolute'}>

               
                     <Flex h = '600px' justify={'space-between'}>

                                   

                           <Stack  p = '30px'>

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Face</Text>

                                    {Makeup_options.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.400'} key = {el.text}>{el.text}</Text>

                                    })}



                           </Stack>


                           {/* --------------------- */}


                           <Stack bg = {useColorModeValue('#f1e1f8b7','#062443')} p = '30px' >

                                    <Text fontWeight={'bold'}>Eyes</Text>

                                    {Eyes.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.400'} key = {el.text}>{el.text}</Text>

                                    })}

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Makeup Kits & Combos</Text>

                                    {MakeupKit.map((el) =>{

                                    return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.400'} key = {el.text}>{el.text}</Text>

                                    })}



                           </Stack>


                           {/* ---------------------------------- */}


                                    <Stack p = '30px'>

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Lips</Text>

                                    {Lips.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.400'} key = {el.text}>{el.text}</Text>

                                    })}

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Nails</Text>

                                    {Nails.map((el) =>{

                                    return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.400'} key = {el.text}>{el.text}</Text>

                                    })}



                           </Stack>


                           {/* ---------------------------------- */}


                           <Stack bg = {useColorModeValue('#f1e1f8b7','#062443')} p = '30px'>

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Tools & Brushes</Text>

                                    {Tools.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.400'} key = {el.text}>{el.text}</Text>

                                    })}

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Multi-Functional Makeup Palettes</Text>

                
                         </Stack>

                         {/* ------------------------------------------------ */}


                         <Stack p = '30px'>

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Face</Text>

                                    {Makeup_options.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.400'} key = {el.text}>{el.text}</Text>

                                    })}



                            </Stack>


                                    {/* --------------------- */}


                                    <Stack bg = {useColorModeValue('#f1e1f8b7','#062443')} p = '30px'>

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Eyes</Text>

                                    {Eyes.map((el) =>{

                                            return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.400'} key = {el.text}>{el.text}</Text>

                                    })}

                                    <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} fontWeight={'bold'}>Makeup Kits & Combos</Text>

                                    {MakeupKit.map((el) =>{

                                    return <Text _hover =  {{cursor : 'pointer', color : 'hovercolor.100'}} color={colorMode == 'light' ? 'gray.600' : 'gray.400'} key = {el.text}>{el.text}</Text>

                                    })}

                            </Stack>






                     </Flex>



        </Box>
    
    
    
    
    
    </>
  )
}

export default Dropdown