import React from 'react'
import{Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navbarcomp = () => {
  return(
         <>
    <Navbar expand="lg" className='StylingNavbar'>
      <Container>
        {/* <Navbar.Brand href="#home">Blog Website</Navbar.Brand> */}
        <div className='Blogstyling text-light w-40 h-10 py-2 h5'>
          <Link to="/home" className='nav-link px-3 py-2'>Blog Website</Link>
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className=' ml-5 linkstyle'>Home</Link>
            <Link to="/blog" className=' ml-5 linkstyle'>Blog</Link>
            <Link to="/contact" className=' ml-5 linkstyle'>Contact</Link>
          </Nav>
          <div className='d-flex justify-content-end '> 
            <Link to="/login" className=' linkstyle'>Login</Link>&nbsp;/&nbsp;
            <Link to="/register" className=' linkstyle'>Register</Link>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
         </>
  )
}

export default Navbarcomp