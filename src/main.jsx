import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Componenets/Home/Home.jsx'
import About from './Componenets/About/About.jsx'
import Books from './Componenets/Books/Books.jsx'
  
const router = createBrowserRouter([
 {path: '/',
 element: <App/>,
 children: [
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/books',
    element: <Books></Books>
  },
  {
    path: '/about',
    element: <About></About>
  }
 ]
 }
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)