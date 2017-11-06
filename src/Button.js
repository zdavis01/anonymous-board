import React, { Component } from 'react'

class Button extends Component{
  constructor(props){
    super(props)

    this.state = {
      count: 0
    }

    this.handleClickLike = this.handleClickLike.bind(this)
    this.handleClickDislike = this.handleClickDislike.bind(this)
    this.handleClickDelete = this.handleClickDelete.bind(this)
  }

  handleClickLike(){
    this.props.onVote(this.props.id)
  }

  handleClickDislike(){
    this.props.onUnVote(this.props.id)
  }

  handleClickDelete(){
    this.props.remove(this.props.id)
  }


  render(){

    return(
      <div class="pull-right">
        <i class="fa fa-thumbs-up pull-right" onClick={this.handleClickLike}></i>
        <span>{this.props.vote}</span>
        <i class="fa fa-thumbs-down pull-right" onClick= {this.handleClickDislike}></i>

      <i class="fa fa-trash pull-right delete" onClick={this.handleClickDelete}></i>

      </div>
    )
  }
}

export default Button
