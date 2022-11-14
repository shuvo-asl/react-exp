import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
const MyNav = () => {
  return (
   <Container>
    <nav>
          <NavLink to="/" className='nav-link' end>Home</NavLink>
          <NavLink to="/posts" className='nav-link' end>Posts</NavLink>
    </nav>
   </Container>
  )
}

export default MyNav 