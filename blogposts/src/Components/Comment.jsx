import React from 'react'
import profile1 from '../img/man1.png'

export default function Comment() {
  return (
    <div className='ui comments'>
        <div className='comment'>
            <a href="/" className='avatar'>
                <img src={profile1} alt="Image" />
            </a>
            <div className='content'>
                <a href="/" className='author'>
                    Sakib
                </a>
                <div className="metadata">
                    <span className='date'>Today at 5:00 PM</span>
                </div>
                <div className="text">
                    You are amazing
                </div>
            </div>
        </div>
    </div>
  )
}
