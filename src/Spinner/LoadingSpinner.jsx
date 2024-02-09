import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect } from "react";
import { getCurrentPrice } from "../services/apiService";

function LoadingSpinner({ setLoading }) {


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                await getCurrentPrice();
                await new Promise(resolve => setTimeout(resolve, 1000));

                setLoading(false);

            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        // Вызываем функцию для загрузки данных
        fetchData();
    }, [setLoading]);
    return (

        <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" variant="primary"/>
        </div>
        );
}

export default LoadingSpinner;



