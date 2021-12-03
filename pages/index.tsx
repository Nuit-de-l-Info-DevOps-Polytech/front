import Login from '../components/Login';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import { Ref, useEffect, useState } from 'react';
import useSWRInfinite from "swr/infinite";
import GenericEditor from '../components/GenericEditor';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());


const Home: NextPage = () => {
  const { data, error } = useSWR('https://api.ndl.iverly.net/sauvetage', fetcher) as { data: Array<any>, error: Error; };

  if (error) {
    return <div>Erreur</div>;
  }
  if (!data) {
    return <CircularProgress />;
  }


  return (
    <div style={{ fontFamily: "sans-serif" }}>
      {
        data.map((value) => {
          return (<div>{value}</div>);
        })
      }
    </div>
  );
};

export default Home;
