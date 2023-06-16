import React from 'react'
import { Container, Login, Logo, Navbar } from '.'
import { NavLink } from 'react-router-dom'
import { GiKnifeFork } from'react-icons/gi'

const Header = () => {
  

  return (
    <Container>
        <Logo>
          <span>CuisineDev</span>
          <GiKnifeFork />
        </Logo>

        <Navbar>
          <NavLink 
            to="/"
            
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
          >
            About
          </NavLink>
          <NavLink 
            to="/dishes"
          >
            New Dishes
          </NavLink>
        </Navbar>

        <Login>
          <button>Login</button>
        </Login>
    </Container>
  )
}

export default Header