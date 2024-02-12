import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import Logo from "../Head/Logo";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation({handleOpenSideBar}) {

    return (
        <Navbar bg="transparent" variant="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <Logo handleOpenSideBar={handleOpenSideBar}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link active" to="/">Home</Link>
                        <NavDropdown title="About" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/about/gamma" onClick={() => ("gamma")}>Gamma</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/me" onClick={() => ("me")}>About Me</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/about/feedback" onClick={() => ("feedback")}>Feedback</NavDropdown.Item>
                        </NavDropdown>
                        <Link className="nav-link active" to="/lowprice/8">Low Price 8h</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;

