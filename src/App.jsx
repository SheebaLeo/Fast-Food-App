import React, { useState } from 'react';
import Menu from './components/Menu';
import OrderList from './components/OrderList';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [order, setOrder] = useState([]);

  const menuItems = [
    { id: 1, name: 'Burger', description: 'A delicious burger with all the fixings.', price: 79.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Pizza', description: 'Classic pizza with your favorite toppings.', price: 99.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Fries', description: 'Crispy golden fries served hot and fresh.', price: 59.99, image: 'https://via.placeholder.com/150' },
  ];

  const addToOrder = (item) => {
    const existingItem = order.find((o) => o.id === item.id);
    if (existingItem) {
      setOrder(order.map((o) => o.id === item.id ? { ...o, quantity: o.quantity + 1 } : o));
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setOrder(order
      .map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)
      .filter((item) => item.quantity > 0));
  };

  const totalPrice = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Menu menuItems={menuItems} addToOrder={addToOrder} />
      <OrderList order={order} updateQuantity={updateQuantity} totalPrice={totalPrice} />
    </div>
  );
};

export default App;
