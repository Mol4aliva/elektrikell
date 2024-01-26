import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PRICE_BUTTONS, BADGES } from "./constants";
import Badge from 'react-bootstrap/Badge';

function Info({ activePrice, setActivePrice }) {

    return(
        <Row>
            <Col>
                <div>The current price of electricity is</div>
                <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
            </Col>
            <Col>
                <ButtonGroup>
                    {PRICE_BUTTONS.map(({ name, id}) => (
                    <Button
                        key={id}
                        active={activePrice === id}
                        onClick={() => setActivePrice(id)}
                        variant="secondary"
                    >
                        {name}
                    </Button>
                    ))}
                </ButtonGroup>

            </Col>
            <Col>
                <h2>XX.XX</h2>
                <div>cent / kilowatt-hour</div>
            </Col>
        </Row>
    );
}
export default Info;