import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';


 function Header() {
  return (
    <div>
           <Navbar style={{ zIndex:"999", backgroundColor:'#1a0933',width:'100%', }} className='head'  data-bs-theme="atch">
        <Container>
          <Link to={"/"} style={{textDecoration:'none'}}>
          <Navbar.Brand  className='font text-light ms-2' href="#home"> 
          <img className='img' src="https://i.postimg.cc/hGTHjQ7Q/wired-gradient-62-film.gif" alt=""/>
           
<span>V</span>ideoo <span> U</span>ploader</Navbar.Brand>
          <Nav className="me-auto">
           
          </Nav>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
