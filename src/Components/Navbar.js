import React from 'react'
import '../App.css'


function Navbar() {
    return (
        <div className='Navbar'>
            <div className="leftSide">
                <div className='links'>
                <a href='/about'>ABOUT</a>
                <a href='/muslce'>MUSCLE GROUPS</a>
                <a href='body'>MY BODY</a>
                </div>
            </div>
            <div className="rightSide">
                <input type='text' placeholder='Search...'/>
                <button>Search</button>

            </div>
        </div>
    )
}

export default Navbar;