import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';


import logo from './logo.png';

function Logo() {


    return (
        <Row className="align-items-start mt-3">
            <Col>
                <img src={logo} alt="Logo"/>
                <h2 className="text-primary d-inline-block">elektrikell.ee</h2>
            </Col>
        </Row>
    );
}

export default Logo;