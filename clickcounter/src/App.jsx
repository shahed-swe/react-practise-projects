import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count-1)}>Decreate</button>
          <button onClick={() => setCount(count+1)}>Increate</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
