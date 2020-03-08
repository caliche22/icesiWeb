import React from 'react';
import NavBar from './components/NavBar';
import logo from './logo.svg';
import './App.css';
import Login from './login';
import { UserForm } from './components/UserForm';
function App() {
  return (
    <div>
      <NavBar></NavBar>

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Login/>
        </header>
      </div>
    </div>
  );
}

export default App;
