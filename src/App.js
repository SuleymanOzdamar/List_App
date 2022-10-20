import React, { Component } from 'react'
import Contacts from './components/Contacts'
import "./App.css";

class App extends Component {
  state={
    contacts:[
      {
        name :' Öznur',
        phone:'0555 555 55 55'
      },
      {
        name :' Süleyman',
        phone:'0555 222 22 22'
      }
  ]
  }
  render() {
    return (
      <div className='App'>
        <Contacts contacts={this.state.contacts}/>
        
      </div>
    )
  }
}

export default App

