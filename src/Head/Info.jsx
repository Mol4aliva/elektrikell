import {useEffect, useState} from "react";

import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';

import {PRICE_BUTTONS, BADGES} from "./constants";
import {getCurrentPrice} from "../services/apiService";
import {mwToKw, addTax} from "../utils/priceFormats";
import {ERROR_MESSAGE} from "./constants";
import {useSelector, useDispatch} from "react-redux";
import {setActivePrice, setErrorMessage, setShowSideBar} from "../services/stateService";

function Info() {
    const dispatch = useDispatch();

    const [currentPrice, setCurrentPrice] = useState(0);
    const activePrice = useSelector((state) => state.main.activePrice);
    const handleOpenSideBar = () => dispatch(setShowSideBar(true));

    useEffect(() => {

        (async () => {
            try {
                const {data, success} = await getCurrentPrice();

                if (!success) throw new Error();
                setCurrentPrice(addTax(mwToKw(data[0].price), "EE"));
            } catch {
                dispatch(setErrorMessage(ERROR_MESSAGE));
            }

        })();
    }, [dispatch]);

    return (
        <Row>
            <Col>
                <div>The current price of electricity is</div>
                <Badge bg={BADGES[0].name}>{BADGES[0].id}</Badge>

            </Col>
            <Col>
                <Button className="ms-3" variant="primary" onClick={handleOpenSideBar}>
                    Search
                </Button>
            </Col>
            <Col className="text-center">
                <ButtonGroup>
                    {PRICE_BUTTONS.map(({name, id}) => (
                        <Button
                            key={id}
                            active={activePrice === id}
                            onClick={() => dispatch(setActivePrice(id))}
                            variant="secondary"
                        >
                            {name}
                        </Button>
                    ))}
                </ButtonGroup>

            </Col>
            <Col className="text-end">
                <h2>{currentPrice}</h2>
                <div>cent / kilowatt-hour</div>
            </Col>
        </Row>
    );
}

export default Info;