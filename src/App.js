import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  document.body.style = 'background: #181717;';
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
