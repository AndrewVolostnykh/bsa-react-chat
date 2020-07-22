import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const InputStyle = {
    display: "flex", 
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
}

const InputFieldStyle = {
    width: "60%",
    marginTop: "10px",
    marginBottom: "10px",
}

const SendButton = {
    marginLeft: "10px"
}

const MessageInput = ({ addMessageHandler, currentUser }) => {
    const [message, setMessage] = useState("");
    const fullMessageObject = {
        ...currentUser,
        "id": "80f08600-1b8f-11e8-9629-c7eca82aa7b1",
        "text": "",
        "createdAt": new Date().toISOString(),
        "editedAt": ""
    }
    return (
        <div style={InputStyle}>
            <TextField
                id="outlined-helperText"
                label="New message: "
                helperText="Write your message here"
                variant="outlined"
                style={InputFieldStyle}
                onChange={e => setMessage(e.target.value)}
            />
            <Button variant="contained" color="primary" style={SendButton} onClick={ () => {addMessageHandler({...fullMessageObject, text: message})} }>
                Send
            </Button>
        </div>
    )
}

export default MessageInput;