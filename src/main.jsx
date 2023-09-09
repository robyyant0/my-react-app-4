import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegisterPage from './Pages/Register.jsx';
import ErrorPage from './Pages/404.jsx';
import LoginPage from './Pages/login';
import ProductPage from './Pages/Product';


const router = createBrowserRouter ([
  {
    path : "/",  
    element : <div>Hello World</div>,
    errorElement : <ErrorPage  />
  },
  {
    path : "/login",  
    element : <LoginPage />,
  },
  {
    path : "/register",  
    element : <RegisterPage />,
  },
  {
    path : "/product",  
    element : <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
