import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function TargetLow() {

    return (
        <>
            <Row className="justify-content-md-center">
                <Col xs lg="2">
                    <p>I want to consume</p>
                </Col>
                <Col md="auto">
                    <Button variant="secondary">before morning</Button>
                </Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
        </>
    );
}
export default TargetLow;