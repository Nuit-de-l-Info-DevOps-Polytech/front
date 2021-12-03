import Login from '../components/Login';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import type { NextPage } from 'next';
import React, { Ref, useEffect, useState } from 'react';
import useSWRInfinite from "swr/infinite";
import GenericEditor from '../components/GenericEditor';
import useSWR from 'swr';
import RescueSummary from '../components/RescueSummary';
import styled from '@mui/styled-engine';
import { Button, TextField } from '@mui/material';
import SearchResult from "../components/SearchResult";
import DatePicker from '@mui/lab/DatePicker';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import useUser from '../hooks/useUser';

const fetcher = (url: string) => fetch(url).then(res => res.json());

const Result = (image: string, name: string, desc: string, type: string) => {
  return (
    <Box sx={{ marginTop: "3em" }}>
      <SearchResult image={image} name={name} shortDescription={desc} type={type} />
    </Box>
  );
};

const MainContainer = styled('div')(() => ({
  display: "grid",
  gridTemplateRows: "100px 3fr",
  margin: "1.5em",
  marginRight: "auto",
  marginLeft: "auto",
}));



enum mode {
  Sauvetage = "Sauvetage"
  , Bateau = "Bateau"
  , Sauveteur = "Sauveteur"
  , Naufragé = "Naufragé"

}


const Home: NextPage = () => {
  const user = useUser();

  useEffect(() => {
    if (window.location.search === '?l=1') {
      user?.setIsAuthenticated(true);
    }
  }, []);

  const { data, error } = useSWR('https://api.ndl.iverly.net/sauvetage', fetcher) as {
    data: Array<{
      dateSauvetage: string,
      descriptionSauvetage: string,
      id: 0,
      sourcesSauvetage: string,
      temoignagesSauvetage: string,
      titre: string;
    }>, error: Error;
  };

  const Filter = (name: mode, selected: boolean) => {
    return (
      <Button onClick={() => { setFilter(name); }} sx={{ margin: "1em" }} variant={selected ? "contained" : "outlined"} >{name}</Button>
    );
  };

  const [filter, setFilter] = useState(mode.Sauvetage);

  if (error) {
    return <div>Erreur</div>;
  }
  if (!data) {
    return <CircularProgress />;
  }


  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <MainContainer>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Box sx={{ display: "flex", marginRight: "8em" }}>
            {Filter(mode.Sauvetage, (filter == mode.Sauvetage))}
            {Filter(mode.Bateau, (filter == mode.Bateau))}
            {Filter(mode.Sauveteur, (filter == mode.Sauveteur))}
            {Filter(mode.Naufragé, (filter == mode.Naufragé))}
          </Box>
          <Box sx={{ display: "flex" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box sx={{ marginRight: "1em" }}>
                <DatePicker
                  disableFuture
                  label="date début événement"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={null}
                  onChange={(newValue) => {
                    // setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
              <Box>
                <DatePicker
                  disableFuture
                  label="date fin événement"
                  openTo="year"
                  views={['year', 'month', 'day']}
                  value={null}
                  onChange={(newValue) => {
                    // setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>
            </LocalizationProvider>
          </Box>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignSelf: "center",
          justifySelf: "center"
        }}>
          {
            data.map((value, index) => {
              return (

                <Box sx={{ marginTop: "3em" }} key={index}>
                  <SearchResult image={""} name={value.titre} shortDescription={value.descriptionSauvetage} type={filter} />
                </Box>
              );
            })
          }
        </Box>
      </MainContainer>
    </div>
  );
};

export default Home;
