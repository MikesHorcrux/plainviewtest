import React, { Component } from 'react';
import './App.css';
import logo from './logo-planview-rebrand.png';

class App extends Component{
  render(){
    return (
      <div className="App">
        <div>
        <img src={logo} alt="planview logo" className="Logo" />
        </div>
        <header className="App-header">
          <p>Hey Mike Lets Start Again!</p>
        </header>
      </div>
    );
  }
  
}

export default App;
