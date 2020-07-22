import React, { Component } from 'react';
import Messages from './data/Messages';
import Header from './components/Header';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {messages: Messages};
  }

  render() {
    const messages = this.state.messages;
    return(
      <div>
        <Header messages={this.state.messages}/>
        <h1>Hi</h1>
        <MessageList messages={messages} />
        <MessageInput/>
      </div>
    )
  }
}

export default App;
