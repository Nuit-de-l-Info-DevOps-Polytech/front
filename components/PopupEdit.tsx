import { Button, IconButton, TextField } from '@mui/material';
import Box from '@mui/system/Box';
import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export function PopupEdit() {

    const [date, setDate] = React.useState<Date | null>(null);

    const [details, setDetails] = React.useState([] as Array<{ name: string, content: string; }>);



    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    m: 1,
                    width: '25ch',
                },
            }}
            noValidate
            autoComplete="off"
        >

            <div>

                <TextField
                    required
                    id="outlined-name"
                    variant="outlined"
                    label="Prénom"
                />

                <TextField
                    required
                    id="outlined-name"
                    variant="outlined"
                    label="Nom"
                />
            </div>
            <div>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date de naissance"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <TextField
                    id="outlined-required"
                    variant="outlined"
                    label="Lieu de résidence"
                />
            </div>
            <div>

                {details.map((value, index) => {
                    return (<div key={index} style={{ verticalAlign: "middle", display: "flex" }}>
                        <TextField
                            onChange={(evt) => {
                                const copy = details.slice();
                                copy[index].name = evt.target.value;
                                setDetails(copy);
                            }}
                            value={value.name}
                            id={`name-${index}`}
                            variant="outlined"
                            label="Nom"
                        />
                        <TextField
                            onChange={(evt) => {
                                const copy = details.slice();
                                copy[index].content = evt.target.value;
                                setDetails(copy);
                            }}
                            value={value.content}
                            id={`content-${index}`}
                            variant="outlined"
                            label="Contenu"
                        />
                        <div style={{ height: "inherit", display: "flex" }}>
                            <IconButton onClick={() => {
                                setDetails(details.slice(0, index).concat(details.slice(index + 1)));
                            }}
                                color="error" sx={{ marginTop: "auto", marginBottom: "auto" }} >
                                <DeleteOutlineOutlinedIcon />
                            </IconButton>
                        </div>
                    </div>);
                })}

                <Button size="small" onClick={
                    () => {
                        setDetails(details.concat({ name: "", content: "" }));
                    }
                }>Ajouter un nouveau champ</Button>


            </div>


        </Box>
    );



}