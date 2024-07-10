import React from 'react'
import styled from 'styled-components'
import  logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'
const Wrapper = styled.section`
    *{
       

        
    
    }
   
    .logo-1{
        width: 50px;
        height: 50px;
    }
    .btn-login,.btn-register{
        border-radius:5 px;
        font-size: large;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 20px;
        padding: 5px 30px 5px 30px;
        text-decoration: none;
        background-color: aqua;
        


    }
    

`

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img className="logo-1" src={logo} alt="RentalApp" />

      </nav>
      <div className='container Page'>
        <div className="info">
           <h1>House <span>Rental</span></h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus repellat et unde ipsa earum veritatis velit dolorem aspernatur id molestiae.</p>
      <Link to='/login' className="btn-login">Login</Link>
      <Link to="/register" className="btn-register">Register</Link>

        </div>
      </div>
    </Wrapper>
  )
}

export default Landing