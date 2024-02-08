import {useEffect} from "react";
import Spinner from 'react-bootstrap/Spinner';


function LoadingSpinner({setLoading}) {

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                setTimeout(() => {
                    setLoading(false);
                }, 1000);

            } catch (error) {
                console.error(error);
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

