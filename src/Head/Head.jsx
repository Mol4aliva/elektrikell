import Logo from './Logo';
import Info from './Info';
import Row from 'react-bootstrap/Row';

function Head(props) {
    const {handleOpenSideBar, ...restProps} = props;
    return (
        <>
            <Row>
                <Logo handleOpenSideBar={handleOpenSideBar}/>
            </Row>
            <Row>
                <Info {...restProps}/>
            </Row>
        </>
    );
}

export default Head;