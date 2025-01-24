# Food Delivery App

## Overview
This is a food delivery application built with React.js. The app allows users to log in, view menu items, manage a cart, and place orders. It features JWT-based authentication and provides a user-friendly interface for managing food items and orders.

## Features
- User authentication with JWT
- Menu page to view, create, update, and delete menu items
- Cart component to manage selected items and quantities
- Order page to review cart items, calculate total price, and place orders
- Responsive design for both desktop and mobile devices

## Project Structure
```
food-delivery-app
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── CartComponent.js
│   │   ├── LoginPage.js
│   │   ├── MenuPage.js
│   │   ├── OrderPage.js
│   │   └── common
│   │       └── Header.js
│   ├── context
│   │   └── AppContext.js
│   ├── services
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/food-delivery-app.git
   ```
2. Navigate to the project directory:
   ```
   cd food-delivery-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

Note : The username is  admin and password is password.

 
