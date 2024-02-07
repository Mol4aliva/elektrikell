import React, {useState} from "react";
import './App.scss'
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head, {DEFAULT_ACTIVE_BUTTON} from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import {getDefaultFrom, getDefaultUntil} from "./utils/dates";
import ErrorModal from "./ErrorModal";

function App() {
    const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
    const [activeHour, setActiveHour] = useState(1);
    const [showSideBar, setShowSideBar] = useState(false);
    const [from, setFrom] = useState(getDefaultFrom());
    const [until, setUntil] = useState(getDefaultUntil());
    const [errorMessage, setErrorMessage] = useState(null);
    const [bestUntil, setBestUntil] = useState(0);
    const handleCloseSideBar = () => setShowSideBar(false);
    const handleOpenSideBar = () => setShowSideBar(true);
    return (
        <Container>
            <Head
                activePrice={activePrice}
                setActivePrice={setActivePrice}
                handleOpenSideBar={handleOpenSideBar}
                setErrorMessage={setErrorMessage}
            />
            <Body
                activeHour={activeHour}
                from={from}
                until={until}
                setErrorMessage={setErrorMessage}
                setBestUntil={setBestUntil}
            />
            <Footer
                activePrice={activePrice}
                activeHour={activeHour}
                setActiveHour={setActiveHour}
                bestUntil={bestUntil}
            />
            <LeftSideBar
                show={showSideBar}
                handleClose={handleCloseSideBar}
                from={from}
                until={until}
                setFrom={setFrom}
                setUntil={setUntil}
            />
            <ErrorModal
                show={!!errorMessage}
                handleClose={() => setErrorMessage(null)}
                errorMessage={errorMessage}
            />
        </Container>
    );
}

export default App;
