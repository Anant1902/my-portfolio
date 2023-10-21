import { ChakraProvider, ColorModeContext, ColorModeScript } from "@chakra-ui/react";
import { StrictMode } from "react";
import MyApp from './components/MyApp';

export default function Home() {
  return (
    <StrictMode>
      <ChakraProvider>
        <ColorModeScript initialColorMode="light"></ColorModeScript>
        <MyApp />
      </ChakraProvider>      
    </StrictMode>
  )
}
