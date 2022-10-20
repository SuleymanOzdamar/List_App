import React, { Component } from 'react'
import './style.css'


class List extends Component {
  render() {
    return (
      <div className='listArea'>
        <input name="filter" id='filter' placeholder={'Filter by name or phone'} />
        <ul className='list'>
            <li>
                <span className='name'>Süleyman Özdamar</span>
                <span className='phone'>0555 555 55 66</span>
            </li>
            <li>
                <span className='name'>Öznur Özen</span>
                <span className='phone'>0555 555 55 55</span>
            </li>
            <li>
                <span className='name'>Elon Musk</span>
                <span className='phone'>0555 555 55 44</span>
            </li>
        </ul>
      </div>
    )
  }
}

export default List
