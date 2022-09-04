import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Container>
            <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand as={NavLink} to="/">Blog-app</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={NavLink} to="/">Home</ Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</ Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
    };

export default NavBar;