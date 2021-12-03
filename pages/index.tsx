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

const Filter = (name: string, selected: boolean) => {
  return (
    <Button variant="outlined" sx={{ margin: "1em" }}>{name}</Button>
  );
};

const Home: NextPage = () => {
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
            {Filter("Sauvetage",false)}
            {Filter("Bateau",false)}
            {Filter("Sauveteur",false)}
            {Filter("Naufragé",false)}
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
          {Result("", "oui oui", "ok bg de la night", "Bateau")}
          {Result("", "oui oui", "ok bg de la night", "Bateau")}
          {Result("", "oui oui", "ok bg de la night", "Bateau")}
          {Result("", "oui oui", "ok bg de la night", "Bateau")}
          {Result("", "oui oui", "ok bg de la night", "Bateau")}
        </Box>
      </MainContainer>
      {
        data.map((value) => {
          return (<RescueSummary image="" name={value.titre} shortDescription={value.descriptionSauvetage} />);
        })
      }
    </div>
  );
};

export default Home;
