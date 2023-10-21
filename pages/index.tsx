import { ChakraProvider, ColorModeContext, ColorModeScript, CSSReset } from "@chakra-ui/react";
import { ThemeProvider } from "@chakra-ui/react";
import { StrictMode } from "react";
import MyApp from './components/MyApp';

export default function Home() {
  return (
    <StrictMode>
      <ThemeProvider theme="">
        <CSSReset />
        <ChakraProvider>
          <ColorModeScript initialColorMode="dark"></ColorModeScript>
          <MyApp />
        </ChakraProvider>
      </ThemeProvider>
    </StrictMode>
  )
}
