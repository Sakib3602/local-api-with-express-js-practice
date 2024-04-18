import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './components/Details';
import Root from './components/Root';
import Phone from './components/Phone';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path : "/phone/:id",
        element : <Details></Details>,
        loader : ({params})=> fetch(`http://localhost:7000/phones/${params.id}`)
      },
      {
        path : "/phone",
        element : <Phone></Phone>,
        loader : ()=> fetch("http://localhost:7000/phones/")

        
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
