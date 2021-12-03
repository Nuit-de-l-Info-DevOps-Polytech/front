import { Button, Checkbox, Dialog, DialogContent, DialogContentText, DialogTitle, Input, InputAdornment, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import React from 'react';
import { PopupEdit } from './PopupEdit';

export function ListSelect() {

    const [search, setSearch] = React.useState("");



    let result: Array<{ id: number, nom: string, prenom: string; }> = [{ id: 1, nom: "Ponsard", prenom: "Nils" }, { id: 2, nom: "Baron", prenom: "Esteban" }];

    let [checked, setChecked] = useState([] as Array<number>);

    let [openDialog, setOpenDialog] = useState(false);



    return (<Box>


        <TextField
            label="Chercher"
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
            variant="standard"
            value={search} onChange={(evt) => { setSearch(evt.target.value); }}
        />


        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {result.map((value, index) => {
                const labelId = `checkbox-list-label-${value}`;

                return (<ListItem
                    key={index}
                    disablePadding
                >
                    <ListItemButton role={undefined} onClick={() => {

                        const i = checked.indexOf(value.id);
                        if (i === -1) {

                            setChecked(checked.concat([value.id]));
                        } else {
                            setChecked(checked.slice(0, i).concat(checked.slice(i + 1)));
                        }
                    }} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(value.id) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`${value.prenom} ${value.nom}`} />
                    </ListItemButton>
                </ListItem>
                );
            })}
        </List>


        <Button color="primary" variant="contained" sx={{ m: 1 }} onClick={() => { setOpenDialog(true); }}>Ajouter un nouveau ...</Button>
        <div>
            <Button color="error" variant="contained" sx={{ m: 1 }}>Annuler</Button>
            <Button color="success" variant="contained" sx={{ m: 1 }}>Valider</Button>
        </div>
        <Dialog open={openDialog} onClose={() => { setOpenDialog(false); }}>
            <PopupEdit />
        </Dialog>
    </Box >);

}

export default ListSelect;