import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link active" to="/">Home </Link>
                    <Link className="nav-link active" to="/about">About</Link>
                    <Link className="nav-link active" to="/lowprice/8">Low Price 8h</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;