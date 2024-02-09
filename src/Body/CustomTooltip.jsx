import React from 'react';
import moment from "moment";
import {getDayOfWeek, convertFormatData} from "../utils/dates";
import {Table} from "react-bootstrap";

const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        const dateTime = convertFormatData(data.timestamp); // Преобразуем timestamp в дату-время
        const dayOfWeek = getDayOfWeek(dateTime); // Получаем день недели
        const time = moment.unix(data.timestamp).format("HH:mm");
        const nextHour = moment.unix(data.timestamp).add(1, 'hour').format("HH:mm");

        return (
            <div className="my-4">
                <Table striped bordered hover>
                    <tbody>
                    <tr>
                        <td>{`${dayOfWeek} ${time} - ${nextHour}`}</td>
                    </tr>
                    <tr>
                        <td>{`Price: ${data.price} s/kWh`}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;

