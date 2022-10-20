import React, { Component } from 'react'
import "./style.css";

class Form extends Component {

    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onChange.bind(this);
    }

    state = {
        name: '',
        phone: '',
    }

    onChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
    onSubmit(e){
      e.preventDefault();
      this.props.addContact(
        {
        ...this.state
        }
      );
    }

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input name='name' id='name' onChange={this.onChange} value={this.state.name} placeholder='Bir isim giriniz'/>
          <br />
          <input name='phone' id='phone' onChange={this.onChange} value={this.state.phone} placeholder='Bir telefon giriniz'/>
          <br/>
          <button>Add</button>
        </form>
        
      </div>
    )
  }
}

export default Form
