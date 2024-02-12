
import Info from './Info';
import Row from 'react-bootstrap/Row';

function Head(props) {
    const {handleOpenSideBar, ...restProps} = props;
    return (
        <>
            <Row>

            </Row>
            <Row>
                <Info
                    handleOpenSideBar={handleOpenSideBar}
                    {...restProps}
                />
            </Row>
        </>
    );
}

export default Head;