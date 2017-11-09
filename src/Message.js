import React, { Component } from 'react'
import Button from './Button.js'
import './Message.css';

class Message extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="msg-style">
        {this.props.text}
        <Button
          vote= {this.props.votes}
          onVote={this.props.handleVoteLike}
          onUnVote={this.props.handleVoteDislike}
          remove={this.props.handleClickDelete}
          id={this.props.id}
        />
      </div>
    )
  }
}

export default Message
