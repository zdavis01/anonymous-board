import React, { Component } from 'react'
import Message from './Message.js'

class MessageBoard extends Component{
  constructor(props) {
    super(props)
  }


render(){
    return(
    <div class="panel-group">
      <div class="panel panel-default">
        <div class="panel-heading">Message Board</div>
        <button id="submit" class="btn btn-default"> Order by Date </button>
        <button id="submit" class="btn btn-default"> Order by Likes </button>
          <div class="panel-body">
            <ul class="message-board">
              {this.props.messages.map(message => {
                return (
                  <Message
                    text={ message.text}
                    votes ={message.votes}
                    handleVoteDislike ={this.props.handleUnVote}
                    handleVoteLike ={this.props.handleVote}
                    handleClickDelete={this.props.delete}
                    id={message.id}
                  />
                )
              })}
          </ul>
        </div>
      </div>
    </div>
  )}

}

export default MessageBoard
