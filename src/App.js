import React, { Component } from 'react';
import uuid from 'uuid'
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Message from './Message'
import MessageEditor from './MessageEditor'
import MessageBoard from './MessageBoard'
import Fuzzy from './Fuzzy'
import Fuse from 'fuse.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleVote = this.handleVote.bind(this)
    this.handleUnVote = this.handleUnVote.bind(this)
    this.delete = this.delete.bind(this)
    this.publish = this.publish.bind(this)
    this.orderByLikes = this.orderByLikes.bind(this)
    this.orderByDate = this.orderByDate.bind(this)
    this.createResults = this.createResults.bind(this)

    this.state = {
      messages: [],
      results: []
    }

    const options = {
      shouldSort: true,
      tokenize: true,
      matchAllTokens: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "text"
      ]
    };

    this.fuse = new Fuse(this.state.messages, options)
  }

  handleVote(id){
    const message = this.state.messages.find(message => message.id === id)
    message.votes = message.votes +1
    this.setState({
      messages: this.state.messages
    })
  }

  handleUnVote(id){
    const message = this.state.messages.find(message => message.id === id)
    if(message.votes !== 0){
      message.votes = message.votes -1
    }
    this.setState({
      messages: this.state.messages
    })
  }

  delete(id){
    const cleanMsgs = this.state.messages.filter(message => { return message.id !== id})
    this.setState({
      messages: cleanMsgs
    })
  }

  publish(msg){
    var newMessages = this.state.messages.concat({id: uuid.v4(),text: msg, votes: 0, stamp: Date.now()})
    this.fuse.setCollection(newMessages);
    this.setState({
      messages: newMessages
    })
  }

  orderByLikes(){
    this.setState({
      messages: this.state.messages.sort(function(a,b) { return b.votes - a.votes})
    })

  }

  orderByDate(){
    this.setState({
      messages: this.state.messages.sort(function(a,b) { return a.stamp - b.stamp})
    })
  }

  createResults(term){
    var newResults = this.fuse.search(term)
    console.log(newResults);
    this.setState({
      results: newResults
    })
  }

  render() {
    return (
      <div className="App">
        <Header title={"Zach's Message Board"} />
        <MessageEditor publish = {this.publish}/>
        <MessageBoard
          createResults ={this.createResults}
          messages = {this.state.messages}
          handleVote ={this.handleVote}
          handleUnVote = {this.handleUnVote}
          delete={this.delete}
          orderByLikes={this.orderByLikes}
          orderByDate={this.orderByDate}
        />
      </div>
    );
  }
}

export default App;
