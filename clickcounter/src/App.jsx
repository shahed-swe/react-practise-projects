import './App.css';
import React, {useState} from 'react';


function App() {

  const [count, setCount] = useState(0);


  return (
    <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count-1)}>Decreate</button>
        <button onClick={() => setCount(count+1)}>Increate</button>
    </div>
  );
}

export default App;
