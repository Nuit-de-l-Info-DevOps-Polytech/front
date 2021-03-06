import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeOptions } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { UserProvider } from '../contexts/user';
import { Box } from '@mui/system';

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
    <UserProvider>
      <ThemeProvider theme={theme}>

        <Nav connected />

      <Box sx={{minHeight:"70vh"}}>

        <Component {...pageProps} />
      </Box>

        <Footer />
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
