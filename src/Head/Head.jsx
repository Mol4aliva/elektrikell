import Logo from './Logo';
import Info from './Info';
import Row from 'react-bootstrap/Row';
function Head(props) {
    return(
        <>
            <Row>
                <Logo/>
            </Row>
            <Row>
                <Info {...props}/>
            </Row>
        </>
    );
}
export default Head;