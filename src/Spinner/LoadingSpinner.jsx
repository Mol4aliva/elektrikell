import {useEffect} from "react";
import Spinner from 'react-bootstrap/Spinner';
import {getPriceData, getCurrentPrice} from "../services/apiService";

function LoadingSpinner({setLoading}) {
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                await getPriceData();
                await getCurrentPrice();
            } catch (error) {
                console.error(error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchData();
    }, [setLoading]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" variant="primary"/>
        </div>
    );
}

export default LoadingSpinner;

