import { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';

import logo from './logo.png';
function Logo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (event) => {
        event.preventDefault();

        const fromValue = event.target.elements.from?.value;
        const untilValue = event.target.elements.until?.value;


        if (fromValue && untilValue) {
            console.log("From:", fromValue);
            console.log("Until:", untilValue);

        } else {
            console.error("Values are undefined");
        }

    };
    return(
        <Row className="align-items-start mt-3">
            <Col>
                <img src={logo} alt="Logo" />
                <h2 className="text-primary d-inline-block">elektrikell.ee</h2>
                <Button className="ms-3" variant="primary" onClick={handleShow}>
                    Search
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Search</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formFrom">
                                <Form.Label>From</Form.Label>
                                <Form.Control name="from" type="date" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formUntil">
                                <Form.Label>Until</Form.Label>
                                <Form.Control name="until" type="date" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Search
                            </Button>
                        </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </Col>
        </Row>
    );
}

export default Logo;