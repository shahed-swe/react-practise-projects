import React,{useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Navbar';
import axios from 'axios';
import Products from './Products';
import {Container} from 'react-bootstrap';

function App() {

  const [products, setProducts] = useState(null);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      setProducts(res.data);
    })
  },[])



  if (products == null) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <Navigationbar/>
      <Container>
            <Products products={products}/>
      </Container>
    </div>
  );
}

export default App;
