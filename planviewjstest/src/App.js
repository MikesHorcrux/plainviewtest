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
        </div>

        
        <div className="nav-container">
        <navbar className="navbar">
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
        </navbar>
        </div>
        <div>
          <div className="side-nav-div">
            <navbar className="nav-side-bar">
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
            <li><a className= ".side-nav-bar-li-a" href="#">PlaceHolder</a></li>
          

        </navbar>
          </div>
          <div className="description">
              <h2>Data should show here when working:</h2>
              <h3>Description</h3>
          </div>
          
          <PostList/>
        </div>
      </div>
    );
  }
  
}

export default App;
