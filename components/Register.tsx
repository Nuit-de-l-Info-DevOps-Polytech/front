import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@mui/styled-engine';
import { Button } from '@mui/material';
import { useCallback, useState } from 'react';
import axios from 'axios';
import { AUTH_ENDPOINT } from '../utils/contants';
import { useRouter } from 'next/router';

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

const FormElem = (label: string, getter?: any, setter?: any) => {
    return (
        <TextField
            id="outlined-name"
            label={label}
            value={getter}
            onChange={e => setter && setter(e.target.value)}
            sx= {{
                width: "50%",
                maxWidth: "100%",
                marginTop: "1em"
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
    const router = useRouter();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = useCallback(async () => {
        try {
            await axios.post(AUTH_ENDPOINT + '/auth/register', {
                mail: email,
                prenom: firstName,
                nom: lastName,
                password: password
            })
        } catch (err) {
            alert('Impossible de créer votre compte :(')
            return;
        }

        router.push('/login');
    }, [firstName, lastName, email, password]);

    const canSubmit = useCallback(() => firstName && lastName && email && password, [firstName, lastName, email, password]);

    return (
        <MainContainer>
            <Typography variant="h6" sx={{ justifySelf: "center", marginTop: "3em", marginBottom: "1em" }}>
                Créer un nouveau compte
            </Typography>
            <Form>
                {FormElem("Prénom", firstName, setFirstName)}
                {FormElem("Nom", lastName, setLastName)}
                {FormElem("Email", email, setEmail)}
                {FormElem("Mot de passe", password, setPassword)}
                <Button variant="contained" disabled={!canSubmit()} onClick={onSubmit} sx={{ width: "50%", marginTop: "3em", marginBottom: "2.5em" }}>S'inscrire</Button>
        </Form>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.5em"}}>
                {secondaryText("Déjà un compte ? ")}
                <Button color="secondary" variant="text" onClick={() => router.push('/login')}>Connectez-vous</Button>
        </Box>
        </MainContainer>
    );
}
