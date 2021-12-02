import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import React from 'react';
import Footer from '../components/Footer';
import { Box, typography } from '@mui/system';
import { CircularProgress, Typography } from '@mui/material';


import useSWR from 'swr';

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {

  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );



  if (error) {
    return (<Typography>Error loading data</Typography>);
  }
  if (!data) {
    return <CircularProgress />;
  }


  return (
    <Box>
      <Typography variant="h6" component="h2" >Nouveautés</Typography>



    </Box>

  );
};

export default Home;
