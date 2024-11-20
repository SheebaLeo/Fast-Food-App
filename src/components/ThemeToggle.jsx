import React from 'react';
import { Button } from 'react-bootstrap';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <h1 className={theme === 'dark' ? 'text-light' : 'text-dark'}>Fast Food Menu</h1>
      <Button variant="secondary" onClick={toggleTheme}>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </div>
  );
};

export default ThemeToggle;
