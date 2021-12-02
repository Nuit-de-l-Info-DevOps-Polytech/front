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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function footer() {
  return (
    <div>
        <Stack sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "5fr 1fr"}}>
            <Item>
                <Box>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="div"
                            >
                                Composition de l'equipe
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Item>
            <Item>
                <Box>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="div"
                            >
                                Liens utiles
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Item>
            <Item>
                <Box>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="div"
                            >
                                Contact
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                            <Typography color="text.secondary">
                            well meaning and kindly.
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Item>
        </Stack>
        
    </div>
  );
}
