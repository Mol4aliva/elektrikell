import { useLocation, useParams, useNavigate } from "react-router-dom";
import {useEffect} from "react";

function About() {
    const location = useLocation();
    const params = useParams();
    const navigete = useNavigate();

    useEffect(()=> {
        if(params.id === '999') navigete('/');
    },[params, navigete]);


    return <>About component</>;
}

export default About;