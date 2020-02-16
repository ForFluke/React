import React , { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import User from './user/User';
import Post from './post/Post';
import { Route,Link } from "react-router-dom";

class App extends Component {
  state = {
    name : 'tawin'
  };

  onNameChange = name => {
    this.setState({name : name})
  }

  render() {
    const { name } = this.state ;
    return (
      <div>  
        <div>
          Hello { name }
        </div>
        <div>
          <Link to="/" >Home</Link>|
          <Link to="/users" >User</Link>|
          <Link to="/posts" >Posts</Link>
        </div>
        <Route path="/users" component={User}/>
        <Route path="/posts" component={Post}/>
      </div>
    );
  }
}

export default App;
