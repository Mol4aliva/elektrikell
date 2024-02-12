import React, {useEffect, useState} from "react";
import './App.scss'
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head, {DEFAULT_ACTIVE_BUTTON} from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import {getDefaultFrom, getDefaultUntil} from "./utils/dates";
import ErrorModal from "./ErrorModal";
import LoadingSpinner from "./Spinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

function ElectricPrice() {
    const params = useParams();

    const [activePrice, setActivePrice] = useState(DEFAULT_ACTIVE_BUTTON);
    const [activeHour, setActiveHour] = useState(1);
    const [showSideBar, setShowSideBar] = useState(false);
    const [from, setFrom] = useState(getDefaultFrom());
    const [until, setUntil] = useState(getDefaultUntil());
    const [errorMessage, setErrorMessage] = useState(null);
    const [bestUntil, setBestUntil] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleCloseSideBar = () => setShowSideBar(false);
    const handleOpenSideBar = () => setShowSideBar(true);

    useEffect(() => {
        if(params.hours) setActiveHour(+params.hours);
    },[params]);

    return (
        <Container>

    <div
    className={isLoading ? 'd-none' : ''}
    >
    <Navigation

    />
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
        setIsLoading={setIsLoading}

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
    </div>


    {isLoading && <LoadingSpinner/>}
        </Container>
    );
}

export default ElectricPrice;
