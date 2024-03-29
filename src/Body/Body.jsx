import {useEffect, useState, useCallback, useContext} from "react";
import lodash from "lodash";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    LineChart,
    XAxis,
    YAxis,
    Dot,
    ResponsiveContainer,
    ReferenceLine,
    CartesianGrid,
    ReferenceArea,
    Line,
    Tooltip
} from 'recharts';
import {getPriceData} from "../services/apiService";
import {chartDataConvertor} from "../utils";
import {currentTimeStamp} from '../utils/dates';
import {getLowPriceInterval} from "../utils/buildIntervals";
import CustomTooltip from "./CustomTooltip";
import {getAveragePrice} from "../utils/maths";
import {ERROR_MESSAGE} from "./constants";
import {useDispatch, useSelector} from "react-redux";
import {setErrorMessage, setBestUntil, setIsLoading} from "../services/stateService";
import {ElectricPriceContext} from "../contexts/ElectricPriceContext";

function Body() {
    const [priceData, setPriceData] = useState([]);
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);

    const {actions: {setAveragePrice}, values} = useContext(ElectricPriceContext);

    const dispatch = useDispatch();

    const from = useSelector((state) => state.date.from);
    const until = useSelector((state) => state.date.until);
    const activeHour = useSelector((state) => state.main.activeHour);

    const renderDot = useCallback((line) => {
        const {
            payload: {timestamp},
        } = line;

        return timestamp === currentTimeStamp() ? (
            <Dot {...line}>
                <div></div>
            </Dot>
        ) : null;
    }, []);

    useEffect(() => {
        getPriceData(from, until)
            .then(({data, success}) => {
                const priceData = chartDataConvertor(data.ee);

                if (!success) throw new Error();
                setPriceData(priceData);

                setAveragePrice(getAveragePrice(priceData));

            })
            .catch(() => dispatch(setErrorMessage(ERROR_MESSAGE)))
            .finally(() => dispatch(setIsLoading(false)));
    }, [from, until, dispatch, setAveragePrice]);


    useEffect(() => {
        const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);

        if (lowPriceIntervals.length) {
            setX1(lowPriceIntervals[0].position);
            setX2(lodash.last(lowPriceIntervals).position + 1);
            dispatch(setBestUntil(lowPriceIntervals[0].timestamp));
        }
    }, [priceData, activeHour, dispatch]);
    return (
        <Row>
            <Col>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="hour" interval={1}/>
                        <YAxis/>
                        <Tooltip content={<CustomTooltip/>}/>
                        <Line
                            type="stepAfter"
                            dataKey="price"
                            strokeWidth={3}
                            stroke="#8884d8"
                            dot={renderDot}
                            isAnimationActive={false}
                        />

                        <ReferenceArea
                            x1={x1}
                            x2={x2}
                            stroke="blue"
                            strokeOpacity={0.3}
                        />
                        <ReferenceLine
                            y={values.averagePrice}
                            label="Avrage"
                            stroke="grey"
                            strokeDasharray="3 3"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;