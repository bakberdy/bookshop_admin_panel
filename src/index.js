import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './screens/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App';
import Products from './screens/Products';
import Orders from './screens/Orders';
import Users from './screens/Users';
import { Provider } from 'react-redux'; 
import { store } from './redux/store';
import NewProductAdding from './screens/NewProductAdding';
import Login from './screens/Login';
import EditProductDetails from './screens/EditProductDetails';
import User from './screens/User';


const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/add-product',
        element: <NewProductAdding />
      },
      {
        path: '/edit-details',
        element: <EditProductDetails />
      },
      { path: '/users/:userId', element: <User /> },
      
    ]
  },
  {
    path: '/login',
    element: <Login />
  }, 

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
