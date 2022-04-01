import React from 'react';
import { Col, Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const TShirt = ({ tShirt, handleAddToCart }) => {
    const { name, picture, price } = tShirt;
    return (
        <Col>
        <Card>
          <img height={'300px'} variant="top" src={picture} />
          <Card.Body>
            <h4>{name} </h4>
            <p>Price : ${price} </p>
          </Card.Body>
          <div className='mb-1'>
            <Button onClick={()=>handleAddToCart(tShirt)} variant="outline-primary">Add To Cart</Button>
          </div>
        </Card>
      </Col>

    );
};

export default TShirt;