import { extendTheme } from '@chakra-ui/react'

import Custom_theme from './global_styles';

import colors from './Colors';

import Breakpoints from './Breakpoints';

// Dark and light theme customization 


const Overridesobj = {
                      
                      ...Custom_theme,

                      ...colors,

                      ...Breakpoints,

                      }


const overrides =  extendTheme(Overridesobj);

export default overrides





