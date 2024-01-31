import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PRICE_BUTTONS, BADGES } from "./constants";
import Badge from 'react-bootstrap/Badge';
import { getPriceCurrent } from "../services/apiServicePrice";
import {useEffect, useState} from "react";
import { chartTopPrice } from "../utils";

function Info({ activePrice, setActivePrice }) {
    const [priceCurrent, setPriceCurrent] = useState(null);


    useEffect(() => {
        getPriceCurrent()
            .then(({ data }) => {
                const processedData = chartTopPrice(data);
                setPriceCurrent(processedData[0].price);
            })
            .catch(error => {
                console.error("Error price:", error);
            });
    }, []);

    return(
        <Row>
            <Col>
                <div>The current price of electricity is</div>
                <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>
            </Col>
            <Col className="text-center">
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
            <Col className="text-end">
                <h2>{priceCurrent}</h2>
                <div>cent / kilowatt-hour</div>
            </Col>
        </Row>
    );
}
export default Info;