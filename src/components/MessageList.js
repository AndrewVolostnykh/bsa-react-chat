import React from 'react';

const MessageList = ({ messages }) => {
    return(
        <div className="MessageList">
            <p>This is message list </p>
            {
                messages.map(item => <div>{ item }</div>)
            }
        </div>
    )
}

export default MessageList;