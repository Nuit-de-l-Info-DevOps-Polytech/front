import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const MainContainer = styled('div')(() => ({
    display: "grid", 
    maxWidth: "80em", 
    marginRight: "auto", 
    marginLeft: "auto",
    gridTemplateRows: "5fr 1fr",
    borderTop: "solid 1px rgba(189, 195, 199, 0.5)", 
}));

const ElemFooter = styled('div')(() => ({
    display: "flex", 
    flexFlow: "column", 
    alignItems: "center",
    justifyContent: "center", 
}));

const secondaryText = (name: string) => {
    return (
        <Typography color="text.secondary">
            {name}
        </Typography>
    )
};

export default function footer() {
  return (
    <MainContainer>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
            <ElemFooter>
                <Typography
                    variant="h6"
                    component="div"
                >
                    Nom de l'equipe
                </Typography>
                {secondaryText("Fix Typo de Polytech Montpellier DO")}
            </ElemFooter>
            <ElemFooter>
                <Typography
                    variant="h6"
                    component="div"
                >
                    Liens utiles
                </Typography>
                {secondaryText("Nils Ponsard")}
                {secondaryText("Maxime Foucher")}
            </ElemFooter>
            <ElemFooter>
                <Typography
                    variant="h6"
                    component="div"
                >
                    Contact
                </Typography>
                {secondaryText("nils.ponsard")}
                {secondaryText("Maxime Foucher")}
                {secondaryText("Mathieux Soysal")}
            </ElemFooter>
        </Box>
        <Box sx= {{ display: "flex", flexFlow: "row", justifyContent: "center", alignItems: "center" }}>
            <Typography>
                ©2021 Copyright
            </Typography>
        </Box>
    </MainContainer>
  );
}
