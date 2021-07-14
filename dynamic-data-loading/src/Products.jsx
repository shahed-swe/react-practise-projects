import React,{useState} from 'react';
import {Row,Col,Card,Button} from 'react-bootstrap'
import ShowProduct from './ShowProduct';
// import ShowProduct from './ShowProduct';

function Products(props){
    const products = props.products;
    const [post, setPost] = useState(null);

    const cardStyle = {
        marginBottom: '10px',
    }
    const rowStyle = {
        marginTop: '50px',
    }

    const addToCart = (prod) => {
        setPost(prod);
    }

    
    return(
        <div>
            <Row>
                <Col lg={8}>
                    <Row style={rowStyle}>
                        {products.map(product => {
                            return(
                                <Col lg={6} md={6} key={product.id}>
                                    <Card style={cardStyle}>
                                        <Card.Body>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>
                                                {product.body}
                                            </Card.Text>
                                            <Button variant="success" onClick={() => {
                                                    addToCart(product);
                                                }}
                                            >Show</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>
                <Col lg={4}>
                    <ShowProduct post={post}/>
                </Col>
            </Row>
        
        </div>
    )
}

export default Products;