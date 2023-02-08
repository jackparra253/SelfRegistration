import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SelfRegistration } from "./models";

interface RegisterProps {
    onSave: (newData: SelfRegistration) => void;
}

function Register({ onSave }: RegisterProps) {

    const [newData, setNewData] = useState<SelfRegistration>({
        id: 0,
        date: '2023-02-10T22:51',
        emotion: '',
        situation: '',
        thoughts: '',
        questions: '',
    });

    function changeData<T>(key: keyof SelfRegistration, value: T) {
        setNewData({ ...newData, [key]: value })
    }

    return (
        <>
            <Grid container width="100%" spacing={3} mb={4}>
                <Grid item xs={3}>
                    <Typography variant="h5">Fecha</Typography>
                    <TextField
                        variant="outlined"
                        type={"datetime-local"}
                        value={newData.date}
                        onChange={({ target }) => {
                            changeData('date', target.value)
                        }}></TextField>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h5">Situación</Typography>
                    <TextField
                        variant="outlined"
                        value={newData.situation}
                        onChange={({ target }) => {
                            changeData('situation', target.value)
                        }}
                    ></TextField>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h5">Emoción (1-10)</Typography>
                    <TextField
                        variant="outlined"
                        value={newData.emotion}
                        onChange={({ target }) => {
                            changeData('emotion', target.value)
                        }}
                    ></TextField>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h5">Pensamientos</Typography>
                    <TextField
                        variant="outlined"
                        value={newData.thoughts}
                        onChange={({ target }) => {
                            changeData('thoughts', target.value)
                        }}
                    ></TextField>
                </Grid>
                <Grid item xs={2}>
                    <Typography variant="h5">¿Como lo resolví? ¿Que hice?</Typography>
                    <TextField
                        variant="outlined"
                        value={newData.questions}
                        onChange={({ target }) => {
                            changeData('questions', target.value)
                        }}
                    ></TextField>
                </Grid>
            </Grid>
            <Button variant="contained" onClick={() => onSave(newData)}>
                Guardar
            </Button>
        </>
    )
}

export default Register;