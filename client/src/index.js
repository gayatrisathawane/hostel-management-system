import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './view/Home/Home.js'
import SignUp from './view/SignUp/SignUp'
import Login from './view/Login/Login'
import Contact from './view/Contact/Contact'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />
 
);