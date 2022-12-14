import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext, useState } from 'react';
import { SocketContext } from '../../SocketContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';



const root = {
    display: 'flex',
    flexDirection: 'column',
}

const gridContainer = {
    width: '100%',
}

const container = {
    width: '600px',
    margin: '35px 0',
    padding: 0,
}

const paper = {
    padding: '10px 20px',
    border: '2px solid black',
}

const margin = {
    marginTop: '20px'
}

const padding = {
    padding: '20px'
}

const Options = ({ children }) => {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <Container style={container}>
            <Paper elevation={10} style={paper}>
                <form style={root} noValidate autoComplete="off">
                    <Grid container style={gridContainer}>
                        <Grid item xs={12} md={6} style={padding}>
                            <Typography gutterBottom variant="h6">Account Info</Typography>
                            <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
                            <CopyToClipboard text={me} style={margin}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} style={padding}>
                            <Typography gutterBottom variant="h6">Make a call</Typography>
                            <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                            {callAccepted && !callEnded ? (
                                <Button variant="contained" color="secondary" fullWidth onClick={leaveCall} style={margin}>
                                    Hang Up
                                </Button>
                            ) : (
                                <Button variant="contained" color="primary" fullWidth onClick={() => callUser(idToCall)} style={margin}>
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    );
};

export default Options;