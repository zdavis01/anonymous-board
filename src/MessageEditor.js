import React, { Component} from 'react'


class MessageEditor extends Component{
  constructor(props){
    super(props)
    this.clickCapture = this.clickCapture.bind(this)
  }

  clickCapture(){
    this.props.publish(document.getElementById("message").value)
  }

  render(){
    return(
      <div class="container">
        <div class="panel-group">
          <div class="panel panel-primary">
            <div class="panel-heading">Post a message</div>
            <div class="panel-body">
              <div class="form-group">
                <label>Message:</label>
                <textarea id="message" type="text" class="form-control"></textarea>
              </div>
              <button id="submit" class="btn btn-default" onClick={this.clickCapture}>Post to board</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageEditor
