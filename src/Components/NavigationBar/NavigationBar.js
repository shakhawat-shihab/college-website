import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../cpc.png';
import login from '../../login.png';
import './NavigationBar.css'

const NavigationBar = () => {
    const [showAdministrationDropdown, setShowAdministrationDropdown] = useState(false);
    const [showAdmissionDropdown, setShowAdmissionDropdown] = useState(false);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='border-top' >
                <Container>
                    <NavLink to='/home' className='text-decoration-none' >
                        <Navbar.Brand className='font-statl fs-2' style={{ letterSpacing: '.16rem' }}><img src={logo} alt="" width='50px' /> <span className=''>CBC</span>  </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto ">
                            <NavLink to='/home' className='nav-link link px-3 mx-1 text-decoration-none'>
                                Home
                            </NavLink>
                            <NavLink to='/services' className='nav-link link px-3 mx-1 text-decoration-none'>
                                Services
                            </NavLink>
                            <NavDropdown title="Administration"
                                className=' link px-2 mx-1'
                                show={showAdministrationDropdown}
                                onMouseEnter={() => { setShowAdministrationDropdown(true) }}
                                onMouseLeave={() => { setShowAdministrationDropdown(false) }}
                            >
                                <Link to='/college-comitte' className='text-decoration-none dropdown-item'>
                                    College Executive Comitte
                                </Link>
                                <Link to='/teachers' className='text-decoration-none dropdown-item'>
                                    Teachers
                                </Link>
                                <Link to='/' className='text-decoration-none dropdown-item'>
                                    Publications
                                </Link>
                            </NavDropdown>
                            <NavDropdown title="Admission"
                                className=' link px-2 mx-1'
                                show={showAdmissionDropdown}
                                onMouseEnter={() => { setShowAdmissionDropdown(true) }}
                                onMouseLeave={() => { setShowAdmissionDropdown(false) }}
                            >
                                <Link to='/' className='text-decoration-none dropdown-item'>
                                    HSC Admission
                                </Link>
                                <Link to='/' className='text-decoration-none dropdown-item'>
                                    Hon's Admission
                                </Link>
                            </NavDropdown>
                            <NavLink to='/about' className='nav-link link px-3 mx-1 text-decoration-none'>
                                About
                            </NavLink>
                            <NavLink to='/login' className='nav-link link px-3 mx-1 text-decoration-none'>
                                <img src={login} alt="" width='30px' />
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavigationBar;