import {useEffect, useContext} from "react";
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './style.scss';
import {PRICE_BUTTONS} from "./constants";
import {getCurrentPrice} from "../services/apiService";
import {mwToKw, addTax} from "../utils/priceFormats";
import {ERROR_MESSAGE} from "./constants";
import {useSelector, useDispatch} from "react-redux";
import {setActivePrice, setErrorMessage, setShowSideBar} from "../services/stateService";
import BadgePrice from "./BadgePrice"
import {ElectricPriceContext} from "../contexts/ElectricPriceContext";

function Info() {
    const dispatch = useDispatch();

    const activePrice = useSelector((state) => state.main.activePrice);
    const handleOpenSideBar = () => dispatch(setShowSideBar(true));

    const {values, actions} = useContext(ElectricPriceContext);

    useEffect(() => {

        (async () => {
            try {
                const {data, success} = await getCurrentPrice();

                if (!success) throw new Error();
                actions.setCurrentPrice(addTax(mwToKw(data[0].price), "EE"));
            } catch {
                dispatch(setErrorMessage(ERROR_MESSAGE));
            }

        })();
    }, [dispatch, actions]);

    return (

        <Row>
            <Col>
                <div>The current price of electricity is</div>
                <BadgePrice {...values} />

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
                <h2>{values.currentPrice}</h2>
                <div>cent / kilowatt-hour</div>
            </Col>
        </Row>
    );
}

export default Info;