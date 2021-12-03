import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeOptions } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4f5ebf',
      dark: '#303964',
    },
    secondary: {
      main: '#1e1b18',
    },
    warning: {
      main: '#ffa921',
    },
    error: {
      main: '#fd3d31',
    },
  },

});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>

      <Nav connected />

      <Component {...pageProps} />

      <Footer />
    </ThemeProvider>

  );
}

export default MyApp;
