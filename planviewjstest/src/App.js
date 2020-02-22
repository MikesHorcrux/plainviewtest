import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import {pvAPIItems} from "./Components/pvAPIItems";
//import axios from 'axios';








class App extends Component{
  state ={
    items: [ ]
}



componentDidMount(){
    fetch("https://planview-media.s3.us-west-2.amazonaws.com/interview/sessions.json").then(results => {
        console.log(results);
        this.setState({items: results.data});
    });

}

// render(){
//     return(
//         <ul>
//             {this.state.items.map(item => <li>{item.Items}</li>)}
//         </ul>
//     )
// }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <ul>
            {this.state.items.map(item => <li>{item.Items}</li>)}
        </ul>
        <p>test</p>
      </div>
    );
  }
  
}

export default App;
