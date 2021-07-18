import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#999999',
      800: '#47585B'
    },
    white: {
      900: '#ffffff',
      800: '#F5F8FA',
      500: '#DADADA'
    },
    yellow: {
      600: '#FFBA08',
      500: 'rgba(255, 186, 8, 0.5)'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    barlow: 'Barlow'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.900'
      }
    }
  }
});
