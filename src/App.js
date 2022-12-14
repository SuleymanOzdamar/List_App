import React, { Component } from 'react'
import Contacts from './components/Contacts'
import "./App.css";

class App extends Component {
  constructor(props)
  {
    super(props);
    this.addContact=this.addContact.bind(this);

  }
  state={
    contacts:[
      {
        name :'Öznur',
        phone:'0555 555 55 55'
      },
      {
        name :'Süleyman',
        phone:'0555 221 22 22'
      },
      {
        name :'Ali',
        phone:'0554 252 22 22'
      },
      {
        name :'Veli',
        phone:'0553 232 22 22'
      }
  ]
  };

  addContact(contact)
  {
    const{contacts}=this.state;
    contacts.push(contact);

    this.setState(
      {
        contacts:contacts
      }
    )
  }
  render() {
    return (
      <div className='App'>
        <Contacts addContact={this.addContact} contacts={this.state.contacts}/>
        
      </div>
    )
  }
}

export default App

