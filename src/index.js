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
import AddDetails from './screens/AddDetails';


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
        path: '/add-details',
        element: <AddDetails />
      }
    ]
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
