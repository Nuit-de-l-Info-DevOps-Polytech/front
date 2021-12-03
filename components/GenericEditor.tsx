import { Button, IconButton, Popover, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ListSelect from './ListSelect';


export function GenericEditor() {
    const [date, setDate] = React.useState<Date | null>(null);

    let [boats, setBoats] = useState([{ id: 1, nom: "Ponsard", prenom: "Nils" }, { id: 2, nom: "Baron", prenom: "Esteban" }] as Array<{ id: number, nom: string, prenom: string; }>);
    let [boatDialog, setBoatsDialog] = useState(false);

    let [wrecked, setWrecked] = useState([{ id: 1, nom: "Ponsard", prenom: "Nils" }, { id: 2, nom: "Baron", prenom: "Esteban" }] as Array<{ id: number, nom: string, prenom: string; }>);
    let [boatDialog, setBoatsDialog] = useState(false);
    let [boats, setBoats] = useState([{ id: 1, nom: "Ponsard", prenom: "Nils" }, { id: 2, nom: "Baron", prenom: "Esteban" }] as Array<{ id: number, nom: string, prenom: string; }>);
    let [boatDialog, setBoatsDialog] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
        setBoatsDialog(false);

    };

    return (<Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">

        <div>

            <TextField
                required
                id="outlined-name"
                variant="outlined"
                label="Titre"
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Date "
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>
        <Box sx={{ display: "flex", }}>
            <div>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {boats.map((value, index) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                            <ListItem key={index} secondaryAction={
                                <IconButton
                                    onClick={() => {
                                        setBoats(boats.slice(0, index).concat(boats.slice(index + 1)));
                                    }}
                                    color="error" edge="end" >
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>}
                                dense>
                                <ListItemText id={labelId} primary={`${value.prenom} ${value.nom}`} secondary={null} />
                            </ListItem>
                        );
                    })}
                </List>

                <Button color="primary" variant="contained" sx={{ m: 1 }} onClick={(evt) => { setBoatsDialog(true); handleClick(evt); }}>Ajouter un nouveau ...</Button>
                <Popover
                    id={"popover-boat"}
                    open={boatDialog}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <ListSelect />
                </Popover>
            </div>

            <div>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {boats.map((value, index) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                            <ListItem key={index} secondaryAction={
                                <IconButton
                                    onClick={() => {
                                        setBoats(boats.slice(0, index).concat(boats.slice(index + 1)));
                                    }}
                                    color="error" edge="end" >
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>}
                                dense>
                                <ListItemText id={labelId} primary={`${value.prenom} ${value.nom}`} secondary={null} />
                            </ListItem>
                        );
                    })}
                </List>

                <Button color="primary" variant="contained" sx={{ m: 1 }} onClick={(evt) => { setBoatsDialog(true); handleClick(evt); }}>Ajouter un nouveau ...</Button>
                <Popover
                    id={"popover-boat"}
                    open={boatDialog}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <ListSelect />
                </Popover>
            </div>
            <div>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {boats.map((value, index) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                            <ListItem key={index} secondaryAction={
                                <IconButton
                                    onClick={() => {
                                        setBoats(boats.slice(0, index).concat(boats.slice(index + 1)));
                                    }}
                                    color="error" edge="end" >
                                    <DeleteOutlineOutlinedIcon />
                                </IconButton>}
                                dense>
                                <ListItemText id={labelId} primary={`${value.prenom} ${value.nom}`} secondary={null} />
                            </ListItem>
                        );
                    })}
                </List>

                <Button color="primary" variant="contained" sx={{ m: 1 }} onClick={(evt) => { setBoatsDialog(true); handleClick(evt); }}>Ajouter un nouveau ...</Button>
                <Popover
                    id={"popover-boat"}
                    open={boatDialog}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <ListSelect />
                </Popover>
            </div>

        </Box>


    </Box>);

}

export default GenericEditor;