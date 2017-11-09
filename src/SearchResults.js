import React, { Component } from 'react'
import Message from './Message'


class SearchResults extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <ul class="message-board">

            {this.props.results.map(result => {
              return (
                <div>
                  <Message
                    text={ result.text}
                    votes ={result.votes}
                    handleVoteDislike ={this.props.handleUnVote}
                    handleVoteLike ={this.props.handleVote}
                    handleClickDelete={this.props.delete}
                    id={result.id}
                  />
                </div>
              )
            })}
          </ul>
      </div>
    )
  }
}

export default SearchResults
