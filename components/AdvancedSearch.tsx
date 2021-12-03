import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@mui/styled-engine';
import { Button, TextField } from '@mui/material';
import SearchResult from "./SearchResult"
import DatePicker from '@mui/lab/DatePicker';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const MainContainer = styled('div')(() => ({
    display: "grid",
    gridTemplateRows: "100px 3fr",
    margin: "1.5em",
    marginRight: "auto", 
    marginLeft: "auto",
}));

const Filter = (name: string) => {
    return (
        <Button variant="outlined" sx={{ margin: "1em" }}>{name}</Button>
    )
};

const Result = (image: string, name: string, desc: string, type: string) => {
    return (
        <Box sx={{ marginTop: "3em" }}>
            <SearchResult image={image} name={name} shortDescription={desc} type={type} />
        </Box>
    )
};

export default function FullWidthTextField() {
    return (  
        <MainContainer>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Box sx={{ display: "flex", marginRight: "8em"}}>
                    {Filter("Sauvetage")}
                    {Filter("Bateau")}
                    {Filter("Sauveteur")}
                    {Filter("Naufragé")}
                </Box>
                <Box sx={{ display: "flex"}}>
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
    );
  }