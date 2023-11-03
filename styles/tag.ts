import { tagAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys)
  
  const ml_label = defineStyle({
    px: '3',
    py: '2',
    fontSize: '40',
  })

  const ml_cont = defineStyle({
    px: '3',
    py: '2',
    mx: '1',
    my: '1',
    fontSize: '15',
    rounded: '20'
  })

  const sizes = {
    ml: definePartsStyle({
      // define the parts that will change for each size
      container: ml_cont, label: ml_label,
    }),
  };
  
  // export the component theme
  export const tagTheme = defineMultiStyleConfig({ sizes });