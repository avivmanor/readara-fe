import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        background: {
          body: '#F9F7F4',
          surface: '#FFFFFF',
          level1: '#F9F7F4',
          level2: '#f7f1e9',
        },
        primary: {
          solidColor: '#FFFFFF',
          solidBg: '#4B5768',
          plainColor: '#4B5768',
          100: '#4B5768',
          500: '#4B5768',
        },
        neutral: {
          plainColor: '#2F2F2F',
          100: '#7A7A7A',
          200: '#6c785f'
        },
        danger: {
          500: '#D1735A',
        },
        warning: {
          500: '#F0C58B',
        },
        divider: '#E5E5E5',
        text: {
          primary: '#2F2F2F',
          secondary: '#7A7A7A',
        },
      },
    },
  },
  fontFamily: {
    display: 'Georgia, serif',
    body: '"Inter", sans-serif',
  },
  typography: {
    h1: {
      fontWeight: 'bold',
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    "body-xs": {
      fontSize: '1rem',
    },
  },
});
export default theme;