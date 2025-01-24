import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchMenuItems } from '../services/api';

const MenuPage = () => {
  const { state, dispatch } = useAppContext();
  const { menuItems } = state;

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        const items = await fetchMenuItems();
        dispatch({ type: 'SET_MENU_ITEMS', payload: items });
      } catch (error) {
        console.error('Error loading menu items:', error);
      }
    };

    loadMenuItems();
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });
  };

  return (
    <div>
      <h1>Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;