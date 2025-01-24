import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import { fetchMenuItems } from './services/api';
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import Header from './components/Header';
import './App.css';

const App = () => {
  const { state, dispatch } = useAppContext();
  const { user } = state;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchItems = async () => {
        setLoading(true);
        const items = await fetchMenuItems();
        dispatch({ type: 'SET_MENU_ITEMS', payload: items });
        setLoading(false);
      };
      fetchItems();
    } else {
      setLoading(false);
    }
  }, [user, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={user ? <MenuPage /> : <LoginPage />} />
        <Route path="/menu" element={user ? <MenuPage /> : <LoginPage />} />
        <Route path="/cart" element={user ? <CartPage /> : <LoginPage />} />
        <Route path="/order" element={user ? <OrderPage /> : <LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;