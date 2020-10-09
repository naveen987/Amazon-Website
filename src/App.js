import React from 'react';
import './App.css';
import SignUp from './Onboarding/Signup/Signup';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SignUp />
    </div>
  );
}

export default App;
