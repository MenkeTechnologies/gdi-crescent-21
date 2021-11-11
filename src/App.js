import React from 'react';
import Navbar from './Components/Navbar';
import crescentlogo from './crescent_logo_v1.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row p-5">
            <div className="col-sm-3">
              <img src={crescentlogo} alt="Crescent Logo" className="crescent-logo" />
            </div>
            <div className="col-sm-9">
              <Navbar />
            </div>
          </div>
        </header>
        <div className="row">
          <div className="col-3">
            <h2>No muscle left behind.</h2>
            <p>You have one body.</p>
            <p>Crescent is for every body.</p>
            <p>Train, Learn and Strengthen.</p>
          </div>
          <div className="col-9">
            
          </div>
        </div>
        <footer className="App-footer">

        </footer>
      </div>
    </div>
  );
}

export default App;
