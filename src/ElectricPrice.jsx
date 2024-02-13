import {useEffect} from "react";
import './App.scss'
import Container from 'react-bootstrap/Container';
import Body from "./Body";
import Head from "./Head";
import Footer from "./Footer";
import LeftSideBar from "./LeftSideBar";
import ErrorModal from "./ErrorModal";
import LoadingSpinner from "./Spinner/LoadingSpinner";
import {useParams} from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {setActiveHour} from "./services/stateService";

function ElectricPrice() {
    const params = useParams();
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.main.isLoading);

    useEffect(() => {
        if (params.hours) dispatch(setActiveHour(+params.hours));
    }, [params, dispatch]);

    return (
        <Container>

            <div className={isLoading ? 'd-none' : ''}>
                <Navigation/>
                <Head/>
                <Body/>
                <Footer/>
                <LeftSideBar/>
                <ErrorModal/>
            </div>

            {isLoading && <LoadingSpinner/>}
        </Container>
    );
}

export default ElectricPrice;
