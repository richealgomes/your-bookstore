import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Componenets/Home/Home.jsx'
import About from './Componenets/About/About.jsx'
import Books from './Componenets/Books/Books.jsx'
import BooksDetails from './Componenets/BookDetails/BooksDetails.jsx'
import Error from './Componenets/Error.jsx'
  
const router = createBrowserRouter([
 {path: '/',
 element: <App/>,
 errorElement:<Error></Error>,
 children: [
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/books',
    element: <Books></Books>,
    loader: ()=>fetch ('https://api.itbook.store/1.0/new')
  },
  {
    path: '/books/:id',
    element:<BooksDetails></BooksDetails>,
    loader:({params})=> fetch(`https://api.itbook.store/1.0/books/${params.id}`)
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