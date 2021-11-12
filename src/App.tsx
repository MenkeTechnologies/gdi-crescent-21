import React from 'react';
import Navbar from './Components/Navbar';
import BodyParts from './Components/BodyParts';
import crescentlogo from './crescent_logo_v1.png';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className="container">
          <div className="row pt-5">
            <div className="col-md-3">
              <a href="index.html"><img src={crescentlogo} alt="Crescent Logo" className="crescent-logo logo" /></a>
            </div>
            <div className="col-md-9">
            <Navbar />
            </div>
          </div>
            <BodyParts />
        <footer className="App-footer">
        </footer>
      </div>
    </div>
  );
}

export default App;
