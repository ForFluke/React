import React , { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import User from './user/User';

class App extends Component {
  render() {
    const name = "Tawin Pasmanee";
    return (
      <div>  
        Hello {name} 
        <User/>
      </div>
    );
  }
}

export default App;
