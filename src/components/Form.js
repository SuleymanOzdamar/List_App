import React, { Component } from 'react'
import "./style.css";

class Form extends Component {
  render() {
    return (
      <div>
        <form className='form'>
          <input name='name' id='name' placeholder='Bir isim giriniz'/>
          <input name='phone' id='phone' placeholder='Bir telefon giriniz'/>
          <br/>
          <button>Ekle</button>
        </form>
        
      </div>
    )
  }
}

export default Form
