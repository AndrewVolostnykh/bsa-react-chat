import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const MessageInput = () => {
    return (
        <div className="MessageInput">
            <TextField
                id="outlined-helperText"
                label="New message: "
                helperText="Write your message here"
                variant="outlined"
            />
            <Button variant="contained" color="primary">
                Send
            </Button>
        </div>
    )
}

export default MessageInput;