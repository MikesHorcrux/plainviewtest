import React, { Component } from 'react';
import './App.css';
import logo from './logo-planview-rebrand.png';
import PostList from './data/PostList'; 



class App extends Component{
  render(){
    return (
      <div className="App">
        <div>
        <img src={logo} alt="planview logo" className="Logo" />
        
        </div>
        <div>
          <h2>Data should show here when working:</h2>
          <PostList/>
        </div>
      </div>
    );
  }
  
}

export default App;
