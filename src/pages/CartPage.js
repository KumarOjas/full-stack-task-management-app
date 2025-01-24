import React from 'react';
import { useAppContext } from '../context/AppContext';

const CartPage = () => {
  const { state, dispatch } = useAppContext();
  const { cart } = state;

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleRemoveFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.name} - ${item.price} x {item.quantity}</h3>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total Price: ${calculateTotalPrice()}</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;