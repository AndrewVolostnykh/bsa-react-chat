import React, { Component } from 'react';
import Messages from './data/Messages';
import Header from './components/Header';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import Container from '@material-ui/core/Container';


const ContainerStyle = {
  background: "#F0F8FF",
  maxHeight: "100%"
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: Messages,
      messagesLength: Messages.length,
      currentUser: {
        user: "Andrew",
        userId: "121314",
        avatar: null
      }
    };
    this.receiveMessage = this.receiveMessage.bind(this);
    this.likeMessage = this.likeMessage.bind(this);
  }

  receiveMessage(message) {
    console.log("Catched message: ", message.text);
    this.state.messages.push(message);
    this.setState({messagesLength: this.state.messages.length})
      console.log("this.state.messages 2: ", this.state.messages);
  }

  likeMessage(id) {
    const newArr = [...this.state.messages];
    newArr[id].isLiked = !this.state.messages[id].isLiked;

    this.setState({message: newArr});
  }

  render() {
    const { messages, messagesLength, currentUser } = this.state;
    return(
      <div>
        <Container style={ContainerStyle}>
          <Header messages={messages}/>
          <h1>Hi</h1>
          <MessageList 
            numberOfMessages={messagesLength} 
            messages={messages} 
            currentUser={currentUser} 
            likeMessageHandler={this.likeMessage}
          />
          <MessageInput addMessageHandler={this.receiveMessage} currentUser={currentUser}/>
        </Container>
      </div>
    )
  }
}

export default App;
