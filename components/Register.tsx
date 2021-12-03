import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import styled from '@mui/styled-engine';
import { Button } from '@mui/material';
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

const MainContainer = styled('div')(() => ({
    display: "grid",
    maxWidth: "40em",
    margin: "3em",
    marginRight: "auto", 
    marginLeft: "auto",
    border: "1px solid black",
}));

const Form = styled('div')(() => ({
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
}));

const FormElem = (label: string) => {
    return (
        <TextField
            id="filled-search"
            label={label}
            type="search"
            variant="filled"
            sx= {{ margin: "0.5em" }}
        />
    )
};

const secondaryText = (text: string) => {
    return (
        <Typography color="text.secondary">
            {text}
        </Typography>
    )
};

export default function FullWidthTextField() {
  return (
    <MainContainer>
        <Typography variant="h6" sx={{ justifySelf: "center", marginTop: "3em", marginBottom: "1em" }}>
            Créer un nouveau compte
        </Typography>
        <Form>
            {FormElem("Nom")}
            {FormElem("Prenom")}
            {FormElem("Email")}
            {FormElem("Mot de passe")}
            <Button variant="contained" sx={{ width: "50%", marginTop: "3em", marginBottom: "2.5em" }}>S'inscrire</Button>
       </Form>
    </MainContainer>
  );
}