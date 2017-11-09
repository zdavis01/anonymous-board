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
            <p>{this.props.title}</p>
          </div>
        </div>
    </nav>
    )
  }
}

export default Header
