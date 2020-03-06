import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login';
import { UserForm } from './components/UserForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login/>
        <UserForm/>
      </header>
    </div>
  );
}

export default App;
