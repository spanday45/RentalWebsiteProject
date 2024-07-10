import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from 'styled-components';
import {
  HomeLayout,
  ErrorPage,
  Login,
  Register,
  About,
  Landing,



} from './components'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>,
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