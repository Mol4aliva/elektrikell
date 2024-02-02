import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Intervals from "./Intervals";
import Countdown from 'react-countdown';
import { addHourToCurrentTSML} from "../utils/dates";


function TargetLow(props) {
    const countDownDate = addHourToCurrentTSML().toDate();

    return (
        <>
            <Row className="justify-content-md-center">
                <Col xs={12} md={8} className="d-flex justify-content-center mb-3 mt-3">
                    <p>I want to consume</p>
                    <Button variant="secondary" className="ms-2 ">before morning</Button>
                </Col>
            </Row>
            <Row>
                <Col className="mb-3">
                    <Intervals {...props}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Countdown
                        className="display-3 fw-bold"
                        date={countDownDate}
                    >

                    </Countdown>
                </Col>
            </Row>
        </>
    );
}

export default TargetLow;