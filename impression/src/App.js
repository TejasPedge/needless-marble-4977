
 import Navbar from "./Components/Navbar";

 import Slider from "./Components/Slider/Slider";

 import { Box } from "@chakra-ui/react";


function App() {
  return (
    <>

            <Navbar />

            <Box mt = '8px' minW={'415px'} border = '2px solid green' h = '100vh'>

              <Box>
                        
                    <Slider />

              </Box>

                










            </Box>
      
            
             



    </>
  );
}

export default App;
