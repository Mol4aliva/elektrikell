import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import logo from './logo.png';
function Logo({ handleOpenSideBar }) {


    return(
        <Row className="align-items-start mt-3">
            <Col>
                <img src={logo} alt="Logo" />
                <h2 className="text-primary d-inline-block">elektrikell.ee</h2>
                <Button className="ms-3" variant="primary" onClick={handleOpenSideBar}>
                    Search
                </Button>
            </Col>
        </Row>
    );
}

export default Logo;