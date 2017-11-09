import React, { Component } from 'react'
import Fuse from 'fuse.js'
import './fuzzy.css'

class Fuzzy extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
}
  handleSearch() {
    this.props.search(document.getElementById("term").value)
  }

  render() {
    return (
      <div>
        <input type='text' id="term" onClick={this.handleSearch} />
        <button id="search" class="btn btn-default" onClick={this.handleSearch}> Search </button>
      </div>
    );
  }
}

export default Fuzzy;
