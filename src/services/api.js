import axios from 'axios';

export const fetchMenuItems = async () => {
    try {
      // Mock response data
      const mockResponse = [
        { id: 1, name: 'Pizza', price: 10 },
        { id: 2, name: 'Burger', price: 8 },
        { id: 3, name: 'Pasta', price: 12 }
      ];
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockResponse;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  };
  
  // Add other API functions for CRUD operations
// Add other API functions for CRUD operations