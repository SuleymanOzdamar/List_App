import React, { Component } from 'react'
import List from './List'
import Form from './Form'
import "./style.css"

class Contacts extends Component {
  render() {
    return (
      <div>
        <List contacts={this.props.contacts}/>
        <Form />
      </div>
    )
  }
}

export default Contacts
