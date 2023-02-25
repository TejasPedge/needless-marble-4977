
 import Navbar from "./Components/Navbar";

 import Slider from "./Components/Slider/Slider";

 import './index.css'

 import { Box,Center, Button,Text, Image,HStack, Flex, VStack} from "@chakra-ui/react";

 import { useColorModeValue } from "@chakra-ui/react";

 import Topbrands from "./Components/Topbrands";

 import Dealsbanner from "./Components/Dealsbanner";

 import OnlyatImpression from "./Components/OnlyatImpression";

 import NewatImpression from "./Components/Slider/NewatImpression";

 import { NewonImpression } from "./Components/Slider/Slider_Data";

 import { useState, useEffect } from "react";

 import DiscoverFavourite from "./Components/Slider/DiscoverFavourite";

 import PopularPics from "./Components/Slider/PopularPics";

 import Everyday from "./Components/Slider/Everyday";

 import CategoriesinFocus from "./Components/CategoriesinFocus";

 import InfluencersPicks from "./Components/Slider/InfluencersPicks";

 import BuyingGuides from "./Components/Slider/BuyingGuides";

 import EditorsChoise from "./Components/Slider/EditorsChoise";

 import Gamezone from "./Components/Gamezone";

 import GiftingAtImpression from "./Components/GiftingAtImpression";

 import BeautyAdvice from "./Components/BeautyAdvice";

 import Footer from "./Components/Footer/Footer";

 function App() {

   const [slidervisibility,setSliderbtnvisibility] = useState(true)

   const visibilityfun = () => {

       const width = window.innerWidth;

       console.log( width,'✈️😅from App.js');

       width <= 512 ? setSliderbtnvisibility(false) : setSliderbtnvisibility(true)
    
  }


  useEffect(() => {

       visibilityfun();

  },[])





  
   window.addEventListener('resize', visibilityfun )



   console.log('rendered');


  return (
    <>

            <Navbar />


      <Box border = '2px solid red' minW={'415px'}>

        
               {/*  Mobile view skin  care  section */}

               <HStack display = {{base : useColorModeValue('flex','none'),'472px' : 'none'}} pl = '18px' mt = '3' className="scrollbar" overflowX = 'scroll'>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/4c8e34bc-47a3-4d2e-bf9e-0ac7f7e24af5.jpg?tr=w-1600,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/58f65c1d-e2df-4ba3-8248-933fbc749af9.jpg?tr=w-1600,cm-pad_resize'></Image>

                       <Image w = '21%'src = 'https://images-static.nykaa.com/uploads/6dc4baa8-c667-4ecc-bf24-afa38fd85ede.jpg?tr=w-1600,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/543e26ec-6b33-42e1-b57d-db0cf07590d7.jpg?tr=w-1600,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/e7b936cf-b64f-49ab-86a3-f8b8119b86ca.jpg?tr=w-1600,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/1cec5682-d8d8-48e4-b3d5-c23027bc4e66.jpg?tr=w-1600,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/8f017709-bfa9-4c52-b837-72263308a00d.jpg?tr=w-1600,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/d84b1075-0b0b-49f0-b3cb-d380e122ee32.jpg?tr=w-1600,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/329bb06d-9dfd-4bae-95f1-8d5f18aaa7ce.jpg?tr=w-1600,cm-pad_resize'></Image>

                       <Image w = '21%' src = 'https://images-static.nykaa.com/uploads/e877f1b2-495e-4450-ac17-e7ab26432e39.jpg?tr=w-1600,cm-pad_resize'></Image>


               </HStack>


           
 {/* main Box after nav */} 
 
        <Box width = {['92%','94%']}  m = 'auto' mt = {{base :useColorModeValue('0','3'),'472px' : '3'}}>



                <Box mt = {{base : useColorModeValue('0','2'),'472px' : '2'}}>

                    <Text color={useColorModeValue('black', 'white')} mb = '2.5' fontWeight={'600'} fontSize={'24px'}>Best In Beauty</Text>
                          
                    <Slider navigation = {slidervisibility} />
                    
                </Box>


              {/* visible on mobile view */}

                <VStack mt = '3' display = {{base : 'flex','974px' : 'none'}}>

                <Text fontWeight={'500'} mb = '2' color={useColorModeValue('black', 'white')} fontSize={['15.6px','17px','18px','18px']}>First Purchase App Offers</Text>
                      
                <Image w = {{base : '95%','510px':'80%' , '614px' : '70%'}} borderRadius={'5px'} src = 'https://images-static.nykaa.com/uploads/d52cb61f-c859-474b-9192-238c4aee97f1.jpg?tr=w-1600,cm-pad_resize'></Image>


                </VStack>


                {/* scrollbar css is added in index.css */}


                <HStack className="scrollbar" overflowX={'scroll'} justify={'space-between'} mt = '4' display = {useColorModeValue('flex','none')}>

                       <Image _hover = {{cursor : 'pointer'}} w = {{base : '305px','640px' : '49%'}} src = 'https://images-static.nykaa.com/uploads/9882cc03-45ed-4d66-b4a7-4d34db83e720.png?tr=w-1600,cm-pad_resize'></Image>

                       <Image _hover = {{cursor : 'pointer'}} w = {{base : '305px','640px' : '49%'}} src = 'https://images-static.nykaa.com/uploads/cb621d04-dd19-4707-bc2e-47a2636e6b39.jpg?tr=w-1600,cm-pad_resize'></Image>

                </HStack>

                {/* hiddien on mobile view */}


                <Box mt = '10' display = {{base : 'none','974px' : 'block'}}>

                    <Text mb = '2.5' color={useColorModeValue('black', 'white')} fontWeight={'600'} fontSize={'24px'}>First Purchase App Offers</Text>
                          
                    <Image _hover = {{cursor : 'pointer'}} w = '100%' borderRadius={'5px'} src = 'https://images-static.nykaa.com/uploads/8aa5e37a-3b29-46da-b782-9ed02a4ec064.jpg?tr=w-1600,cm-pad_resize'></Image>

                    
                </Box>


{/* ------------------------- All Code below this is in components form ------------------------------------------------- */}

                           
                        <Topbrands />

                        <Dealsbanner />

            </Box>

{/* -------------------------giving background ------------ */}
                   
                    <Box bg = {useColorModeValue('#FFF6F9','rgba(0, 255, 213, 0.053);')} mt = {{base : '5','512px':'8'}} pb = '3.5'>

                           <OnlyatImpression />

                    </Box>


{/* -------------------------New at Impresssion------------- */}

                     <Box width = {['92%','94%']} m = 'auto'  mt = '4'>

                           <NewatImpression navigation={slidervisibility} Impression_data = {NewonImpression} heading = {'New at Impression'}/>

                            {/* ------Discover our Favourites ----------- */}

                           <DiscoverFavourite navigation={slidervisibility}/>

                           {/* ----------Popular Picks ---------------- */}

                           <PopularPics navigation = {slidervisibility} />

                     </Box>


    {/* -------------------------giving background ------------ */}
                   
                  <Box bg = {useColorModeValue('rgb(229 242 244)','rgba(111, 0, 208, 0.105)')} mt = {{base : '5','512px':'8'}} pb = '3.5'>

                            <Everyday navigation={slidervisibility} />

                  </Box>

      {/* -------------------------------------------------------------- */}
                      

              <Box width = {['92%','94%']} m = 'auto' mt = '4'>

                     <CategoriesinFocus />   

                         {/* ---------------Influencer's Picks -------------------- */}

                     <InfluencersPicks navigation={slidervisibility} />

                         {/*-----------------Buying Guides--------------------------*/}

                     <BuyingGuides navigation={slidervisibility} />

                         {/* ----------------Editor's Choice ------------------------*/}

                     <EditorsChoise navigation={slidervisibility}/>

                         {/* ---------------Game Zone -------------------------------*/}
                
                     <Gamezone/>


                          {/* ---------------Gifting At Impression ---------------*/}

                     <GiftingAtImpression />

                          {/* --------------Beauty Advice----------------------------*/}

                     <BeautyAdvice/>

                            {/* Fraudulent Calls Warning */}

                    <Center border = '2px solid' borderColor={useColorModeValue('rgba(246, 203, 210, 0.753)', 'rgb(0, 183, 255)')} bg = {useColorModeValue('rgba(255, 219, 225, 0.732)', 'rgba(23, 139, 185, 0.752)')} mt = '10'  borderRadius = '10px' p = {{base : '3','512px' : '4','1239px':'10'}}>


                           <Text textAlign={'center'} fontSize={{base : '10' , '512px' : '18'}}> Please be careful of fraudulent calls & SMSes! Impression will never 
                                  call you with offers pertaining to free gifts or prizes or ask for payments through links.</Text>

                    </Center>

              </Box>


              {/* ----------------------- Footer------------------------ */}

              <Footer />


 
                       


      
     </Box>
            
             



    </>
  );
}

export default App;
