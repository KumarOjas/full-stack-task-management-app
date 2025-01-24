import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context/AppContext'; // Correct import

ReactDOM.render(
  <AppProvider> {/* Wrap the App component with AppProvider */}
    <App />
  </AppProvider>,
  document.getElementById('root')
);
