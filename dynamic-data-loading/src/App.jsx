import React,{useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './Navbar';
import axios from 'axios';
import Products from './Products';
import {Container, Row, Col} from 'react-bootstrap';
import ShowProduct from './ShowProduct';

function App() {

  const [products, setProducts] = useState(null);

  const postid = localStorage.getItem('postid');

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
        <Row>
          <Col lg={8}>
            <Products products={products}/>
          </Col>
          <Col lg={4}>
            <ShowProduct post={postid}/>
          </Col>
        </Row>
          
      </Container>
    </div>
  );
}

export default App;
