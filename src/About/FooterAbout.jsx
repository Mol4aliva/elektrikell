import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const FooterAbout = () => {
    return (
        <Row className="fixed-bottom bg-light h-25">
            <Col className="text-center align-self-end">
                <p>&copy; {new Date().getFullYear()} elektrikell.ee</p>
            </Col>
        </Row>

    );
};

export default FooterAbout;
