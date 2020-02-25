import React, { Component } from 'react';
import './App.css';
import logo from './logo-planview-rebrand.png';
import PostList from './data/PostList'; 


//
// NAV BARS ARE IN PLACE BUT NOT YET DYNAMIC BASSED ON ARRAYS 
// MIKE FIX THIS WHEN YOU GET ARRAYS SORTED AND E=DELLETE THIS!!!
//
class App extends Component{
  render(){
    return (
      <div className="App">
        <div>
        <img src={logo} alt="planview logo" className="Logo" />
        

        
        
          
          <PostList/>
        </div>
      </div>
    );
  }
  
}

export default App;
