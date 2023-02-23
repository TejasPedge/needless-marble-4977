
 import Navbar from "./Components/Navbar";

 import Slider from "./Components/Slider/Slider";

 import './index.css'

 import { Box, Button,Text, Image,HStack, Flex, VStack} from "@chakra-ui/react";

 import { useColorModeValue } from "@chakra-ui/react";

 import Topbrands from "./Components/Topbrands";

 import Dealsbanner from "./Components/Dealsbanner";


function App() {
  return (
    <>

            <Navbar />


      <Box border = '2px solid red' h = '600vh' minW={'415px'}>

        
               {/*  Mobile view skin  care  section */}

               <HStack display = {{base : useColorModeValue('flex','none'),'472px' : 'none'}} pl = '18px' mt = '3' className="scrollbar" border={'2px solid red'} overflowX = 'scroll'>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/4c8e34bc-47a3-4d2e-bf9e-0ac7f7e24af5.jpg?tr=w-300,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/58f65c1d-e2df-4ba3-8248-933fbc749af9.jpg?tr=w-300,cm-pad_resize'></Image>

                       <Image w = '21%'src = 'https://images-static.nykaa.com/uploads/6dc4baa8-c667-4ecc-bf24-afa38fd85ede.jpg?tr=w-300,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/543e26ec-6b33-42e1-b57d-db0cf07590d7.jpg?tr=w-300,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/e7b936cf-b64f-49ab-86a3-f8b8119b86ca.jpg?tr=w-300,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/1cec5682-d8d8-48e4-b3d5-c23027bc4e66.jpg?tr=w-300,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/8f017709-bfa9-4c52-b837-72263308a00d.jpg?tr=w-300,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/d84b1075-0b0b-49f0-b3cb-d380e122ee32.jpg?tr=w-300,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/329bb06d-9dfd-4bae-95f1-8d5f18aaa7ce.jpg?tr=w-300,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/e877f1b2-495e-4450-ac17-e7ab26432e39.jpg?tr=w-300,cm-pad_resize'></Image>

k 
               </HStack>


           
 {/* main Box after nav */} 
 
        <Box width = {['92%','94%']}  border = '2px solid green'  m = 'auto' mt = {{base :useColorModeValue('0','3'),'472px' : '3'}}>



                <Box mt = {{base : useColorModeValue('0','2'),'472px' : '2'}}>

                    <Text color={useColorModeValue('black', 'white')} mb = '3' fontWeight={'600'} fontSize={['20px','19px','23px','24px']}>Best In Beauty</Text>
                          
                    <Slider />
                    
                </Box>


              {/* visible on mobile view */}

                <VStack mt = '3' display = {{base : 'flex','974px' : 'none'}}>

                <Text fontWeight={'500'} mb = '2' color={useColorModeValue('black', 'white')} fontSize={['15.6px','17px','18px','18px']}>First Purchase App Offers</Text>
                      
                <Image w = {{base : '95%','510px':'80%' , '614px' : '70%'}} borderRadius={'5px'} src = 'https://images-static.nykaa.com/uploads/d52cb61f-c859-474b-9192-238c4aee97f1.jpg?tr=w-1200,cm-pad_resize'></Image>


                </VStack>


                {/* scrollbar css is added in index.css */}


                <HStack className="scrollbar" overflowX={'scroll'} justify={'space-between'} mt = '4' display = {useColorModeValue('flex','none')}>

                       <Image _hover = {{cursor : 'pointer'}} w = {{base : '305px','640px' : '49%'}} src = 'https://images-static.nykaa.com/uploads/9882cc03-45ed-4d66-b4a7-4d34db83e720.png?tr=w-650,cm-pad_resizehttps://images-static.nykaa.com/uploads/9882cc03-45ed-4d66-b4a7-4d34db83e720.png?tr=w-600,cm-pad_resize'></Image>

                       <Image _hover = {{cursor : 'pointer'}} w = {{base : '305px','640px' : '49%'}} src = 'https://images-static.nykaa.com/uploads/0d1c3504-723a-40b7-b688-2f9abe8b4ee6.jpg?tr=w-650,cm-pad_resize'></Image>

                </HStack>

                {/* hiddien on mobile view */}


                <Box mt = '10' display = {{base : 'none','974px' : 'block'}}>

                    <Text mb = '3' color={useColorModeValue('black', 'white')} fontWeight={'600'} fontSize={['19px','20px','23px','24px']}>First Purchase App Offers</Text>
                          
                    <Image _hover = {{cursor : 'pointer'}} w = '100%' borderRadius={'5px'} src = 'https://images-static.nykaa.com/uploads/8aa5e37a-3b29-46da-b782-9ed02a4ec064.jpg?tr=w-1440,cm-pad_resize'></Image>

                    
                </Box>


{/* ------------------------- All Code below this is in components form ------------------------------------------------- */}

                           
                        <Topbrands />

                        <Dealsbanner />




            </Box>
      
     </Box>
            
             



    </>
  );
}

export default App;
