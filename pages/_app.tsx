import '../styles/globals.css'
import '../styles/fonts.css'
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        field: {
          backgroundColor: 'white',
          padding: '1.5rem',
        },
      },
      defaultProps: {
        variant: 'none',
      },
    },
  },
})

function MainApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MainApp
