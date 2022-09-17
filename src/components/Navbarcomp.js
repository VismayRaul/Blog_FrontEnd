import React from 'react'
import{Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Navbarcomp = () => {
  return(
         <>
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">Blog Website</Navbar.Brand> */}
        <div className='bg-danger text-dark w-40 h-10 py-2 h5'><Link to="/home" className='nav-link px-3 py-2'>Blog Website</Link></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className='nav-link ml-5'>Home</Link>
            <Link to="/blog" className='nav-link ml-5'>Blog</Link>
            <Link to="/contact" className='nav-link ml-5'>Contact</Link>
          </Nav>
        </Navbar.Collapse>
        <div className='justify-content-end"'> Profile </div>
      </Container>
    </Navbar>
         </>
  )
}

export default Navbarcomp