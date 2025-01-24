import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl">Food Delivery App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/menu" className="hover:underline">Menu</Link></li>
          <li><Link to="/cart" className="hover:underline">Cart</Link></li>
          <li><Link to="/order" className="hover:underline">Orders</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;