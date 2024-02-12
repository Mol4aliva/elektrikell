import Container from "react-bootstrap/Container";
import Navigation from "../Navigation/Navigation";
import BodyAbout from "./BodyAbout";
import FooterAbout from "./FooterAbout";

function About() {

    return (
        <Container className="color">

            <Navigation/>
            <BodyAbout/>
            <FooterAbout/>

        </Container>
    );

}

export default About;