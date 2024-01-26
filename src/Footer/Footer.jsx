import TargetLow from "./TargetLow";
import TargetHigh from "./TargetHigh";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {DEFAULT_ACTIVE_BUTTON} from "../Head";

function Footer({ activePrice }) {
    return(
        <Row className="fixed-bottom bg-light justify-content-center">
            <Col className="text-center">
                {activePrice === DEFAULT_ACTIVE_BUTTON && <TargetLow />}
                {activePrice !== DEFAULT_ACTIVE_BUTTON && <TargetHigh />}
            </Col>
        </Row>
    );
}
export default Footer;