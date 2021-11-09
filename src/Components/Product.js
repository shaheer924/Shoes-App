import React from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import shoes from './../Shoe.json';
import './Product.css'
import {Link} from 'react-router-dom';


function Product() {
    console.log(shoes)
    return (
        <div className="head">
            <h1>See Products</h1>
            <div className="product-see">
                <Container>
                    <Row>
                        {Object.keys(shoes).map(keyName => {
                            const shoe = shoes[keyName];
                            return (
                                <Col>
                                        <Card>
                                            <Card.Img variant="top" src={shoe.img} />
                                            <Card.Body>
                                                <Card.Title>{shoe.name}</Card.Title>
                                                <Link to={"/product/"+keyName}><Button variant="primary">Check Out</Button></Link>
                                            </Card.Body>                                            
                                        </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Product;
