
import { HashLink } from 'react-router-hash-link';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
     const { user, logOut } = useAuth();
     return (
          <div>
               <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                   />
                              </Nav>
                              <Nav className="d-flex align-items-center">
                                   <Nav.Link as={Link} to="/home#news">News</Nav.Link>
                                   <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                                   <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                                   <Nav.Link as={Link} to="/contact"> Contact </Nav.Link>
                                   {user.email && <Nav.Link as={Link} to=""> {user.displayName} </Nav.Link>}
                                   {user.email ? <Button onClick={logOut} className="bg-warning" variant="outline-success"> <i class="fas fa-sign-out-alt me-3"></i>LogOut</Button>
                                        : <Nav.Link as={Link} to="/login">  <Button className="bg-warning" variant="outline-success">Login</Button> </Nav.Link>}

                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div >
     );
};

export default Header;