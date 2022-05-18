import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded justify-content-end" >
    <Container className="">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Navbar.Brand as={NavLink} to="/">Blog-app</Navbar.Brand>
            <Nav.Link as={NavLink} to="/">Home</ Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</ Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    );
};

export default NavBar;