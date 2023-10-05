import React from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Greeter from './Greeter';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Greeter name="World" />
    </div>
  );
}

export default App;
