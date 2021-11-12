import React from 'react'
import '../App.css'


function Navbar() {
    return (
        <div className='Navbar'>
                <div className="leftSide">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav links">
                                <li className="nav-item">
                                <a className="nav-link" href='/about.html'>ABOUT</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href='/muscle'>ANATOMY</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href='body'>STRENGTHEN</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
        </div>
    )
}

//<div className="rightSide">
//<input type='text' placeholder='Search...'/>
//<button>Search</button>
//</div>

export default Navbar;