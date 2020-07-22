import React from 'react';
import { Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const Headder = ({ messages }) => {
    let numberOfMessages = messages.length;
    let participants = Array.from(new Set(messages.map((item) => item.userId))).length;
    let lastMessageIn = null;

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography>
                    <p>Messages: {numberOfMessages}; Participants: {participants}; Last message in: {lastMessageIn}; </p>
                    
                    
                </Typography>
                <Typography align="right" variant="h6">   Bsa Chat!   </Typography>
            </Toolbar>
        </AppBar>
    )
}

const lastMessage = () => {
    return null;
}

export default Headder;
