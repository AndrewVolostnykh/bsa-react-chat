import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Card, Avatar, CardContent } from '@material-ui/core';

const MessageList = ({ messages }) => {
    return(
        <Container>
            <div className="MessageList">
                <h3>This is message list </h3>
                {
                    messages.map(item => {
                        return(
                            <Card>
                                <CardContent>
                                    <Avatar src={item.avatar} />
                                    <Typography gutterBottom variant="h6" component="h2">
                                        {item.user}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.text}
                                    </Typography>
                                    <Typography align="right" variant="body2" color="textSecondary">
                                        {item.createdAt}
                                    </Typography>
                                        
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>
        </Container>
    )
}



export default MessageList;