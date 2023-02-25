
import { Box, Image,ColorMode, Text } from "@chakra-ui/react"

import NewatImpression from "./NewatImpression"

import { NewonImpression } from "./Slider_Data"

function PopularPics({navigation}) {


  
  return (

    <Box mt = '54px'>

         
        <Text  mb = '2.5' fontWeight={'600'} fontSize={'24px'}>Popular Picks</Text>

        <Image display = {{base : 'none','730px' : 'block'}} mb = '9' _hover = {{cursor : 'pointer'}} borderRadius={'8px'} src = {'https://images-static.nykaa.com/uploads/fd34eddd-690e-4f5b-b656-859c1e8df184.png?tr=w-3600,cm-pad_resize'}></Image>

        <Image display = {{base : 'block','730px' : 'none'}} mb = '4' _hover = {{cursor : 'pointer'}} borderRadius={'8px'} src = {'https://images-static.nykaa.com/uploads/764af803-1f11-42ec-835e-f687dc2b4256.png?tr=w-1200,cm-pad_resize'}></Image>

        <NewatImpression Impression_data = {NewonImpression} />

    </Box>
 
  )
}

export default PopularPics