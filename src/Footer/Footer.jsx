import TargetLow from "./TargetLow";
import TargetHigh from "./TargetHigh";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer({ activePrice }) {
    return(
        <Row className="fixed-bottom bg-light justify-content-center">
            <Col className="text-center">
                {activePrice === 'low' && <TargetLow />}
                {activePrice !== 'low' && <TargetHigh />}
            </Col>
        </Row>
    );
}
export default Footer;