import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import {Link} from 'react-router-dom'
import router from './router'

function App() {
  return (
    <div>
    <div className="App">
    <Link to="/">Login</Link>
    <Link to="chat">Chat</Link>
    </div>
    {router}
    </div>
  );
}

export default App;
