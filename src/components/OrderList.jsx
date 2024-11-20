import React from 'react';
import { Button, Table } from 'react-bootstrap';

const OrderList = ({ order, updateQuantity, totalPrice }) => {
  return (
    <div className="mt-5">
      <h3>Your Order</h3>
      <Table bordered hover>
        <tbody>
          {order.map((item) => (
            <tr key={item.id}>
              <td>{item.name} x{item.quantity}</td>
              <td>SEK {(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button variant="success" size="sm" onClick={() => updateQuantity(item.id, 1)}>+</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => updateQuantity(item.id, -1)}>-</Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="2"><strong>Total</strong></td>
            <td><strong>SEK {totalPrice.toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
