import React, { Component } from 'react'
import Message from './Message.js'
import './message-board.css'

class MessageBoard extends Component{
  constructor(props) {
    super(props)
    this.handleClickOrderLike = this.handleClickOrderLike.bind(this)
    this.handleClickOrderDate = this.handleClickOrderDate.bind(this)
  }

handleClickOrderLike(){
  this.props.orderByLikes(this.props)
}

handleClickOrderDate(){
  this.props.orderByDate(this.props)
}

render(){
    return(
    <div class="panel-group">
      <div class="panel panel-default">
        <div>
          Message Board
          <div className="order" >
          <button id="submit" class="btn btn-default" onClick={this.handleClickOrderDate}> Order by Date </button>
          <button id="submit" class="btn btn-default" onClick={this.handleClickOrderLike}> Order by Likes </button>
        </div>
        </div>
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
