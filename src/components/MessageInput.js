import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const InputStyle = {
    display: "flex", 
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "20px"
}

const InputFieldStyle = {
    width: "60%",
    marginTop: "10px",
    marginBottom: "10px",
}

const SendButton = {
    marginLeft: "10px"
}

function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
 }

const MessageInput = ({ 
    addMessageHandler, 
    currentUser, 
    messageToEdit = null, 
    editMessageHandler,
    isEditMode
}) => {
    const [message, setMessage] = useState(isEditMode ? messageToEdit.text : null);

    useEffect(() => {
        messageToEdit ?  setMessage(messageToEdit.text) : setMessage(null)
      }, [messageToEdit]);

    const fullMessageObject = {
        ...currentUser,
        "id": 0,
        "text": "",
        "createdAt": new Date().toISOString(),
        "editedAt": ""
    }

    const newMessage = () => {
        addMessageHandler({
            ...fullMessageObject, 
            text: message, 
            id: createUUID()
        });
        setMessage(null);
    }

    const editMessage = () => {
        editMessageHandler({
            ...fullMessageObject, 
            text: message
        });
        setMessage(null);
    }

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    return (
        <div style={InputStyle}>
            <TextField
                id="outlined-helperText"
                name="message"
                label="New message: "
                helperText="Write your message here"
                value={message}
                variant="outlined"
                style={InputFieldStyle}
                onChange={handleChange}
            />
            <Button 
                variant="contained" 
                color="primary" 
                style={SendButton} 
                onClick={ isEditMode ? editMessage : newMessage }
                >
                {isEditMode ? "Edit" : "Send"}
            </Button>
        </div>
    )
}

export default MessageInput;