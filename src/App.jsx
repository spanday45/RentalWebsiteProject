import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  ErrorPage,
  Login,
  Register,
  About,



} from './components'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/login',
    element:  <Login/>,
  },
  {
    path:'/error',
    element:<ErrorPage/>
  },
  {
    path:'/register',
    element:<Register/>
  }
]);


function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App