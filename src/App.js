import React, { Component } from 'react';
import Header from './components/Header';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList'

class App extends Component {

  render() {
    const messages = ["hi", "what's up?"]
    return(
      <div>
        <Header/>
        <h1>Hi</h1>
        <MessageList messages={messages} />
        <MessageInput/>
      </div>
    )
  }
}

export default App;
