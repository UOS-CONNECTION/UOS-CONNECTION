import React, { useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState<string>('');

  fetch('http://localhost:4000/api/temp')
    .then((res) => res.json())
    .then((data) => {
      setTemp(data.message);
    });
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>{temp}</h3>
      </header>
    </div>
  );
}

export default App;
