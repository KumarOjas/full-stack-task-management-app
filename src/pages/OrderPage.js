import React from 'react';
import { useAppContext } from '../context/AppContext';

const OrderPage = () => {
  const { state, dispatch } = useAppContext();
  const { cart, orders } = state;

  const handlePlaceOrder = () => {
    const newOrder = { id: Date.now(), items: cart, total: calculateTotalPrice() };
    dispatch({ type: 'ADD_ORDER', payload: newOrder });
    dispatch({ type: 'CLEAR_CART' });
    alert('Order placed successfully!');
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <h1>Order Page</h1>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ${item.price} x {item.quantity}
        </div>
      ))}
      <button onClick={handlePlaceOrder}>Place Order</button>
      <h2>Order History</h2>
      {orders.map(order => (
        <div key={order.id}>
          <h3>Order #{order.id}</h3>
          {order.items.map(item => (
            <div key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
            </div>
          ))}
          <p>Total: ${order.total}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;