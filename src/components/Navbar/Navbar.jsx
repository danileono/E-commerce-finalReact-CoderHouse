import React, { useEffect, useState } from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


const NavigationBar = () => {
const [categorias, setCategorias] = useState([])


useEffect(() => {
fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>setCategorias(json))
}, [])


return (

        <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container>
            <Navbar.Brand as={Link} to="/">
                <h1>Tienda de Dani</h1> 
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto mx-5">
                    {categorias.length > 0 && categorias.map(e => (
                        <NavLink className="mx-2 text-decoration-none text-light" key={e} as={Link} to={`/categoria/${e}`}>
                            {e}
                        </NavLink>
                    ))}
                </Nav>
                <Nav>
                    <Nav.Item>
                        <CartWidget />
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>



)
}

export default NavigationBar