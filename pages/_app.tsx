import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    ocean: {
      50: '#e7fbff',
      100: '#c5f2fb',
      200: '#92e3f3',
      300: '#5bd0e8',
      400: '#20b8d5',
      500: '#0897b4',
      600: '#087892',
      700: '#0d6076',
      800: '#124f61',
      900: '#0f3948',
    },
    lagoon: {
      50: '#e9fff9',
      100: '#c7f7ec',
      200: '#91ead7',
      300: '#53d5bd',
      400: '#25bba2',
      500: '#149783',
      600: '#0f796b',
      700: '#115f56',
      800: '#124d47',
      900: '#103a37',
    },
    palm: {
      50: '#efffed',
      100: '#d2f8ce',
      200: '#a9efa2',
      300: '#73df6b',
      400: '#45c83f',
      500: '#28a924',
      600: '#1e861d',
      700: '#1d691d',
      800: '#1b531c',
      900: '#174419',
    },
    sun: {
      50: '#fff8df',
      100: '#ffefb0',
      200: '#ffe077',
      300: '#ffcc3d',
      400: '#f8b60b',
      500: '#d99a00',
      600: '#a87200',
      700: '#815604',
      800: '#68450a',
      900: '#573a0d',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'ocean.100',
      },
    },
  },
  fonts: {
    heading: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    body: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
            <Component {...pageProps} />
    </ChakraProvider>
  )
}
