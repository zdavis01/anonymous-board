import React, { Component } from 'react';
import uuid from 'uuid'
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Message from './Message'
import MessageEditor from './MessageEditor'
import MessageBoard from './MessageBoard'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleVote = this.handleVote.bind(this)
    this.handleUnVote = this.handleUnVote.bind(this)
    this.delete = this.delete.bind(this)
    this.publish = this.publish.bind(this)

    this.state = {
      messages: [

      ]
    }
  }

  handleVote(id){
    const message = this.state.messages.find(message => message.id === id)
    message.votes = message.votes +1


    this.setState({
      messages: this.state.messages
    })
    this.orderByLikes();
  }

  handleUnVote(id){
    const message = this.state.messages.find(message => message.id === id)
    if(message.votes !== 0){
      message.votes = message.votes -1
    }

    this.setState({
      messages: this.state.messages
    })
    this.orderChron();
  }

  delete(id){
    const cleanMsgs = this.state.messages.filter(message => { return message.id !== id})
    this.setState({
      messages: cleanMsgs
    })
  }

  // orderMessages(){
  //   const orderedMessages = this.state.messages.sort(function(a,b) { return b.votes - b.votes})
  //   this.setState({
  //     messages: orderedMessages
  //   })
  // }

  publish(msg){
    var newMessages = this.state.messages.concat({id: uuid.v4(),text: msg, votes: 0, stamp: Date.now()})

    this.setState({
      messages: newMessages
    })
  }

  orderByLikes(){
    this.setState({
      messages: this.state.messages.sort(function(a,b) { return b.votes - a.votes})
    })

  }

  orderChron(){
    this.setState({
      messages: this.state.messages.sort(function(a,b) { return a.stamp - b.stamp})
    })
  }


  render() {
    return (
      <div className="App">
        <Header title={"Zach's Message Board"} />
        <MessageEditor publish = {this.publish}/>
        <MessageBoard messages = {this.state.messages} handleVote ={this.handleVote} handleUnVote = {this.handleUnVote} delete={this.delete} />
      </div>
    );
  }
}

export default App;
