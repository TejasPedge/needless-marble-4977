import styles from '../Styles/Dropdown.module.css'

import {

    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    useColorMode
  } from '@chakra-ui/react'


  import { Stack, Text } from '@chakra-ui/react';



  const dropdown_options = [
    
    {to : '#', text : 'Makeup'},
    {to : '#', text : 'Skin'},
    {to : '#', text : 'Hair'},
    {to : '#', text : 'Appliances'},
    {to : '#', text : 'Bath&Body'},
    {to : '#', text : `Natural`},
    {to : '#', text : 'Mom & Baby'},
    {to : '#', text : 'Health & Wellness'},
    {to : '#', text : 'Fragrance'},
    {to : '#', text : 'Pop Ups'},

];


function Navaccordion() {

   const  {colorMode} = useColorMode();


 
  return (

    <Box mt={'40px'}>


        <Stack>

        {dropdown_options.map((el,i) => {

                return <Text className = {styles[`drp${i}`]} pb = '3' color = {colorMode == 'light' ? ('gray.600') :('gray.300')} key = {el.text} _hover = {{cursor : 'pointer', color : colorMode == 'light' ? 'purple' : 'aqua'}}  fontWeight={'600'} fontSize={['sm','1rem','1rem','1rem']}>{el.text}</Text>

        })}
=
        </Stack>




  {/* -------------------------------------------------------- */}


    

    
    </Box>
  )
}

export default Navaccordion