import React, {useEffect, useState} from "react";
import './App.scss'
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import LoadingSpinner from "./Spinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import {useDispatch} from "react-redux";
import { setActiveHour } from "./services/stateService";

function ElectricPrice() {
    const params = useParams();
    const dispatch = useDispatch();

    const [showSideBar, setShowSideBar] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [bestUntil, setBestUntil] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleCloseSideBar = () => setShowSideBar(false);
    const handleOpenSideBar = () => setShowSideBar(true);

    useEffect(() => {
        if(params.hours) dispatch(setActiveHour(+params.hours));
    },[params,dispatch]);

    return (
        <Container>

    <div
    className={isLoading ? 'd-none' : ''}
    >
    <Navigation/>
    <Head
        handleOpenSideBar={handleOpenSideBar}
        setErrorMessage={setErrorMessage}
    />
    <Body
        setErrorMessage={setErrorMessage}
        setBestUntil={setBestUntil}
        setIsLoading={setIsLoading}
    />
    <Footer
        bestUntil={bestUntil}
    />
    <LeftSideBar
        show={showSideBar}
        handleClose={handleCloseSideBar}
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
