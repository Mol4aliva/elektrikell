import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DATA } from "./constants";
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Body() {
    return(
        <Row>
            <Col>
                <ResponsiveContainer width="100%" height={400}>
                <LineChart data={DATA}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
                </ResponsiveContainer>
            </Col>
        </Row>
    );
}
export default Body;