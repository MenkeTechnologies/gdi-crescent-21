import React from 'react';
import Navbar from './Components/Navbar';
import BodyParts from './Components/BodyParts';
import crescentlogo from './crescent_logo_v1.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="row p-5">
            <div className="col-sm-3">
              <img src={crescentlogo} alt="Crescent Logo" className="crescent-logo" />
              <br />
              <h2>No muscle left behind.</h2>
              <ul className='motto'>
                <li>You have one body.</li>
                <li>Crescent is for every body.</li>
                <li>Train, Learn and Strengthen.</li>
              </ul>
            </div>
            <div className="col-sm-9">
            <Navbar />
            <BodyParts />
            </div>
          </div>
        <footer className="App-footer">
        </footer>
      </div>
    </div>
  );
}

export default App;
