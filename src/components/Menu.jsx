import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Menu = ({ menuItems, addToOrder }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {menuItems.map((item) => (
        <Card className="m-3" style={{ width: '18rem' }} key={item.id}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text><strong>SEK {item.price.toFixed(2)}</strong></Card.Text>
            <Button variant="dark" onClick={() => addToOrder(item)}>Add to Order</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Menu;
