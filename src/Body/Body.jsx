import {useEffect, useState} from "react";
import lodash from "lodash";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {LineChart, XAxis, YAxis, Dot, ResponsiveContainer, ReferenceLine, CartesianGrid, ReferenceArea, Line, Tooltip} from 'recharts';
import {getPriceData} from "../services/apiService";
import {chartDataConvertor} from "../utils";
import {currentTimeStamp} from '../utils/dates';
import {getLowPriceInterval} from "../utils/buildIntervals";
import CustomTooltip from "./CustomTooltip";

function Body({from, until, activeHour}) {
    const [priceData, setPriceData] = useState([]);
    const [x1, setX1] = useState(0);
    const [x2, setX2] = useState(0);
    const [averageCost, setAverageCost] = useState(0);
    const renderDot = (line) => {
        const {
            payload: {timestamp},
        } = line;


        return timestamp === currentTimeStamp() ? (
            <Dot {...line}>
                <div></div>
            </Dot>
        ) : null;
    };

    useEffect(() => {
        getPriceData(from, until).then(({data}) => {
            const priceData = chartDataConvertor(data.ee);

            setPriceData(priceData);
        });
    }, [from, until]);

    useEffect(() => {
        const lowPriceIntervals = getLowPriceInterval(priceData, activeHour);

        if (lowPriceIntervals.length) {
            setX1(lowPriceIntervals[0].position);
            setX2(lodash.last(lowPriceIntervals).position);
        }

    }, [priceData, activeHour]);

    useEffect(() => {
        const totalPrices = priceData.map(entry => parseFloat(entry.price)); // Преобразование строк в числа
        const averageCost = lodash.mean(totalPrices);
        setAverageCost(averageCost);
    }, [priceData]);

    return (
        <Row>
            <Col>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="hour" interval={1}/>
                        <YAxis/>
                        <Tooltip content={<CustomTooltip />}/>
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
                            y={averageCost}
                            stroke="red"
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}

export default Body;