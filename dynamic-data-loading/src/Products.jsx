import React from 'react';
import {Row,Col,Card,Button} from 'react-bootstrap'

function Products(props){
    const products = props.products;

    const cardStyle = {
        marginBottom: '10px',
    }
    const rowStyle = {
        marginTop: '50px',
    }

    const addToCart = (add) => {
        localStorage.setItem("postId",add)
    }

    return(
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
                                        addToCart(product.id);
                                    }}
                                >Show</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

export default Products;