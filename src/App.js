import React from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
    <div className='container'>
      <Body />
    </div>
    </div>
  );
}

export default App;
