import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand='lg'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand as={NavLink} to="/">Blog-app</Navbar.Brand>           
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link as={NavLink} to="/">Home</ Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</ Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
    };

export default NavBar;