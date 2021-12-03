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
            id="outlined-name"
            label={label}
            sx={{
                width: "50%",
                maxWidth: "100%",
                marginTop: "1em",
            }}
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
            S'identifier
        </Typography>
        <Form>
            {FormElem("Identifiant")}
            {FormElem("Mot de passe")}
            <Button variant="contained" sx={{ width: "50%", marginTop: "3em", marginBottom: "1em" }}>S'indentifier</Button>
       </Form>
       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0.5em"}}>
            <Button startIcon={<FcGoogle size={25} />}>S'identifier avec Google</Button>
       </Box>
       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2em"}}>
            <Button startIcon={<FaGithub size={25} />}>S'identifier avec GitHub</Button>
       </Box>
       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.5em"}}>
            {secondaryText("Première visite ? ")}
            <Button color="secondary" variant="text">Inscrivez-vous</Button>
       </Box>
    </MainContainer>
  );
}