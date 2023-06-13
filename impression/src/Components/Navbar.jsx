import style from '../Styles/Navbar.module.css'

import styles from '../Styles/Dropdown.module.css'

import { Center } from '@chakra-ui/react';

import Navdrawer from './Navdrawer';

import Dropdown from './Dropdown';

import { IconButton } from '@chakra-ui/react'

import { Button, Text, useDisclosure } from "@chakra-ui/react";

import { Link } from 'react-router-dom';

import { Box,HStack,VStack,Image, Input } from "@chakra-ui/react";

import { useColorMode,  useColorModeValue } from "@chakra-ui/react";

import { InputRightElement,InputGroup} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import { Badge } from '@chakra-ui/react';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { useBreakpointValue } from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

import { useRef } from 'react';

import {LoginModal} from './Modal/Modal'


// Material UI Imports [ LOGOS ]  //

import LocalMallIcon from '@mui/icons-material/LocalMall';

import LoginIcon from '@mui/icons-material/Login';


// ------------------------------------- //

import Slider from './Slider/Slider';
// ---------- after Navbar dropdown Array ------------- \\


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



export default function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isOpen : isOpen_LoginModal, onOpen : onOpen_LoginModal , onClose : onClose_LoginModal} = useDisclosure();


  const { colorMode, toggleColorMode } = useColorMode();

  const btnRef = useRef();

  const x = useRef();

  const Hidedrawer = ( ) => {

       let width = window.innerWidth;

       console.log(' ✈️🛩️from Navbar component', width);

       if (width >= 1157 ) {

           onClose();

       }

  }

  
  window.addEventListener('resize', function(event) {
    // Call your function here
    Hidedrawer();
  });


  document.addEventListener('click', (e) =>{

    if(!e.target.closest('.login-modal') && !x.current.contains(e.target)) {
        onClose_LoginModal();
    }

  });


//   hides the login modal if open on scrolling  little down 

document.addEventListener('scroll', () => {

    let scrollPosition = window.scrollY;

    if(scrollPosition >= 656) {
        onClose_LoginModal();
    }


})

console.log('rerendered');



  const responsive_search = {

                           base : '25%',

                          '944px' : '35%',

                          '1067px' : '40%',

                          '1161px' : '45%',
                      };

  return <>

  {/* ------------ [ Top Part (before Navbar) ] Points Perks Excusive ---------- */}
     

  {/*-------- minW={'415px'}  ----------*/}


       <Box minW = '332px' w = '100%'  bg = {useColorModeValue('pink.50','rgb(12, 12, 59)')}>

           <HStack margin={'auto'} w = '95%' justify={'space-between'}  p = '2' bg = {useColorModeValue('pink.50','rgb(12, 12, 59)')}>

                <HStack>

                    <Text fontSize={'11'} color={useColorModeValue('#e20887','pink.300')}>POINTS. PERKS. EXCLUSIVES.</Text>

                    <Text display = {{base : 'none','419px' : 'flex'}} _hover={{cursor : 'pointer'}} textDecoration={'underline'} fontSize={'11'} color={useColorModeValue('gray.700','gray.200')}>Join Rewards !</Text>

                 </HStack>

                 <Box display = {{base : 'none', '1157px' : 'flex'}}>
                
                 <Image  h = '25px'  src = {useColorModeValue("https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=2000&pause=1000&color=711BF7&width=550&height=30&lines=Try+Impression+for+Impressing+someone",'https://readme-typing-svg.herokuapp.com?font=Fira+Code&duration=2000&pause=1000&color=31F79F&width=550&height=30&lines=Try+Impression+for+Impressing+someone')} ></Image>
 
                 </Box>
                 

                 <HStack >

                    <Image src = 'https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/en_US/v1676717188851/images/svg-icons/bopis-icon-small.svg?yocs=s_'></Image>

                    <Text fontWeight={'bold'} fontSize={'15'} color={useColorModeValue('cyan.700','aqua')}>Pick Up In Store</Text>

                    <Text display = {{base : 'none','491px' : 'flex'}}  _hover={{cursor : 'pointer'}} textDecoration={'underline'} fontSize={'12'} color={useColorModeValue('gray.700','gray.200')}>Set Store</Text>

                 </HStack>

           </HStack>

        </Box>


        {/* ---*****--- NavBar Code starts from here ---*****--- */}


{/* ----------minW = '415px'---- */}
       
       <Box  minW = '332px' w = '100%' bg ={useColorModeValue('rgba(255, 255, 255, 0.564)','#001e3cb4')} background={useColorModeValue('linear-gradient(324deg, rgba(255,255,255,1) 0%, rgba(225,240,255,1) 60%, rgba(222,217,255,1) 94%, rgba(253,242,255,1) 100%)',   'linear-gradient(324deg, rgba(1,32,64,1) 0%, rgba(0,29,54,1) 53%, rgba(8,24,62,1) 94%, rgba(1,29,34,1) 100%)')} zIndex={2} className="blur-nav" filter={'auto'} backdropFilter='blur(26px)' position={'sticky'} top='0' as = 'nav' >


              {/* minW = '415px' */}


            <HStack borderBottom = {{base : '1px solid','1157px' : 'none'}} borderColor={useColorModeValue('gray.300','blue.700')}  py={'10px'}  px = {{ base : '0px', '528px' : '10px'}} paddingRight = {{base : '15px','528px' : '30px','1095px' : '45px'}} justify={'space-between'}  >


                    <HStack  display = {{base : 'flex', '1157px' : 'none'}} pl = {{base : '3','395px' : '5'}}>
                            {/* Menu icon visible on responsive screen  */}

                            <IconButton ref={btnRef} onClick={onOpen} size  = {{base : 'sm','528px' : 'md'}}  display = {{base : 'flex', '1157px' : 'none'}}  aria-label='menu bar' icon={<HamburgerIcon color = {useColorModeValue('black','dark.primary') } />} />

                            {/* Search box visible on responsive screen  */}

                            <IconButton size  = {{base : 'sm','528px' : 'md'}} display={{base : 'flex','976px':'none'}}  aria-label='Search database' icon={<SearchIcon  color = {useColorModeValue('black','dark.primary') } />} />

                    </HStack>



                    <Box h = 'auto' borderRadius={'20px'}  w = {{base : '41%','369px' : '45%' ,'444px' : '50%','450px' : '220px','675px' : '250px','852px' : '280px','990px' : '300px'}}>

                       <Link className='link' to = '/'>

                        <Image borderRadius={'20px'} src = {useColorModeValue(`${process.env.PUBLIC_URL}/ImpressionLogolighttheme.png`,`${process.env.PUBLIC_URL}/ImpressionLogo.png`)}></Image>

                       </Link>

                    </Box>

           
               

                 {/* ---------- Search Box -------- */}

                 <InputGroup display={{base : 'none','976px':'flex'}} w = {responsive_search}>
                     
                            <InputRightElement  pointerEvents='none' children={<SearchIcon color={useColorModeValue('gray.600','gray.300')} />} />

                            <Input  _focus={{borderBottom : '1px solid', borderColor: useColorModeValue('pink.600','pink')}} focusBorderColor="transparent" borderBottom={'1px solid'} variant='flushed' type='search' placeholder='Search by Fragrance or Product...' />
                     
                 </InputGroup>   





               <HStack w = {{ base : '100px','528px' : '150px','638px':'190px'}} justify={'space-between'}  position={'relative'}>

                             {/* Mui User login logo */}

                             <Box position={'relative'}  display={{base : 'none','528px' : 'flex'}} justify = 'center' align = 'center'>

                                    <LoginIcon ref = {(el) => x.current = el} onClick = {onOpen_LoginModal} className = {style.muiicon} sx = {{color : colorMode == 'light' ? '#6B46C1' : 'rgb(0, 255, 213)'}} />
                                    
                                        {/* Tooltip */}

                                    <Box zIndex={2} bg = {useColorModeValue('gray.200','rgb(15, 39, 87)')} w = '54px' borderRadius={'10px'} className={style.tooltip}  px = '2' border = '1px solid' >Login</Box>

                                    {/* Login modal  */}
                                    <LoginModal  isOpen = {isOpen_LoginModal} onClose = {onClose_LoginModal} />
                             </Box>
                            
                             {/* Mui  Cart Logo with badge */}

                             <Box position={'relative'} >

                                      <LocalMallIcon className = {style.muimallicon} sx = {{color : colorMode == 'light' ? '#6B46C1' : 'rgb(0, 255, 213)'}} />
                                      
                                      <Badge zIndex={'-1'} display={'flex'} justifyContent='center' alignItems={'center'} w = '25px' h = '25px' borderRadius={'50%'} position={'absolute'} top = '-3' right = '-3' colorScheme='green'>10</Badge>

                                      {/* Tooltip */}

                                      <Box zIndex={2} bg = {useColorModeValue('gray.200','rgb(15, 39, 87)')} w = '44px' borderRadius={'10px'} className={style.tooltip2}  px = '2' border = '1px solid'>Cart</Box>

                            </Box>


                         
                 
                            {/* [ Light Mode / Dark Mode] Theme Changer */}

                            <Button bg = '' size  = {{base : 'sm','528px' : 'md'}} w = '20px' borderRadius={'50%'} onClick = {toggleColorMode}>

                                    {useColorModeValue(<SunIcon color = {useColorModeValue('light.primary','dark.primary')}/>,<MoonIcon color = {useColorModeValue('light.primary','dark.primary')}/>)}

                            </Button>

                        


                 </HStack>
                
            </HStack>



            



            {/* After Navbar Dropdown options*/}


            <HStack  position={'relative'} display = {{base : 'none', '1157px' : 'flex'}} pt='4' borderBottom = '1px solid' borderTop = '1px solid' borderColor={useColorModeValue('gray.300','blue.700')} px = '10px' justify = 'space-around'  >


                   {dropdown_options.map((el,i) => {

                       return <Text className = {styles[`drp${i}`]} pb = '3' color = {colorMode == 'light' ? ('gray.600') :('gray.300')} key = {el.text} _hover = {{cursor : 'pointer', color : colorMode == 'light' ? 'purple' : 'aqua'}}  fontWeight={'600'} fontSize={'14'}>{el.text}</Text>

                   })}

                    {/* Dropdown div  */}

                    <Dropdown />

                   
            </HStack>

           

        </Box>


      
        <Navdrawer  isOpen = {isOpen} onOpen = {onOpen} onClose = {onClose} btnRef = {btnRef}></Navdrawer>

 
    </>

}