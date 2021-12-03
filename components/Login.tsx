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


export default function FullWidthTextField() {
  return (
    <MainContainer>
        <Typography variant="h6" sx={{ justifySelf: "center", marginTop: "3em", marginBottom: "1em" }}>
            S'identifier
        </Typography>
        <Form>
            {FormElem("Username")}
            {FormElem("Password")}
            <Button variant="contained" sx={{ width: "50%", marginTop: "3em", marginBottom: "1em" }}>S'indentifier</Button>
       </Form>
       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0.5em"}}>
            <FcGoogle size={25} />
            <Button>S'identifier avec Google</Button>
       </Box>
       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1em"}}>
            <FaGithub size={25} />
            <Button>S'identifier avec GitHub</Button>
       </Box>
    </MainContainer>
  );
}