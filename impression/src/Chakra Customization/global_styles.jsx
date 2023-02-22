import { mode } from '@chakra-ui/theme-tools';

const Custom_theme = {

    styles: {
      global: (props) => ({
        body: {
          fontFamily: 'body',
          color: mode('gray.800', 'whiteAlpha.900')(props),
          bg: mode('white', '#001e3c')(props),
          lineHeight: 'base',
        },
      }),
    },
  }

  //darkmode color : mui :  #001e3c, #0a1929

export default Custom_theme