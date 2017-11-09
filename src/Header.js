import React, { Component } from 'react'
import './header.css'

class Header extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <nav class="navbar">
        <div class="container-fluid">
          <div class="navbar-header ">
            <h1>{this.props.title}</h1>
          </div>
        </div>
    </nav>
    )
  }
}

export default Header
