import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
class App extends Component{
  render() {
    return(
      <div className = "App">
        <Message></Message>
        {/* <Greet name = "Bruce" heroName = "Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name = "Clark" heroName = "SuperMan" >
          <button>Action</button>
        </Greet>
        <Greet name = "Diana" heroName = "Wonder Woman "/>
        <Welcome name = "Bruce" heroName = "Batman"></Welcome>
        <Welcome name = "Clark" heroName = "SuperMan"></Welcome>
        <Welcome name = "Diana" heroName = "Wonder Woman"></Welcome> */}

      </div>
    )
   
  }
}

export default App;
