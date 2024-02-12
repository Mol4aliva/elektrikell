import {useLocation} from 'react-router-dom';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FeedbackForm from '../FeedbackForm/FeedbackForm';
import './style.scss';

const BodyAbout = () => {
    let info;

    const location = useLocation();

    if (location.pathname === "/about/gamma") {
        info = {
            title: "Gamma Intelligence",
            description: "Since July 2020, Gamma Intelligence Training Centre has been offering courses aimed at training professionals in the most advanced digital technologies, including software development, digital technology implementation, business process automation and optimization, machine learning, data analysis, and computer modeling."
        };
    } else if (location.pathname === "/about/me") {
        info = {
            title: "Hello, Irina Vedennikova",
            description: "Software developer who is continuously advancing in her profession. Her diligence and dedication to work make her a valuable asset to the team."
        };
    } else if (location.pathname === "/about/feedback") {
        info = {
            title: "Feedback ",
            description: " "
        };
    } else {
        info = {title: "Unknown", description: "Unknown information..."};
    }

    return (
        <>
            <Row className="height">
                <Col xs={6} className="d-flex flex-column justify-content-center custom-col ms-5">

                    <h1>{info.title}</h1>
                    <p>{info.description}</p>
                    {location.pathname === "/about/me" && (
                        <a href="/about/feedback" className="btn btn-feedback active">Feedback</a>
                    )}
                    {location.pathname === "/about/feedback" && (
                        <FeedbackForm/>
                    )}
                </Col>
            </Row>

        </>
    );
};

export default BodyAbout;
