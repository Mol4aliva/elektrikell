import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {convertToInputFormat, convertToRequestFormat} from "../utils/dates";
import {useSelector, useDispatch} from "react-redux";
import {setFrom, setUntil} from "../services/stateService";

function SearchForm({handleClose}) {
    const dispatch = useDispatch();
    const from = useSelector((state) => state.date.from);
    const until = useSelector((state) => state.date.until);
    const handleSubmit = (event) => {
        event.preventDefault();

        const from = event.target.from.value;
        const until = event.target.until.value;

        dispatch(setFrom(convertToRequestFormat(from)));
        dispatch(setUntil(convertToRequestFormat(until)));

        handleClose();
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formFrom">
                <Form.Label>From</Form.Label>
                <Form.Control
                    name="from"
                    type="datetime-local"
                    placeholder="Date from"
                    defaultValue={convertToInputFormat(from)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUntil">
                <Form.Label>Until</Form.Label>
                <Form.Control
                    name="until"
                    type="datetime-local"
                    placeholder="Date until"
                    defaultValue={convertToInputFormat(until)}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
                Search
            </Button>
        </Form>
    );
}


export default SearchForm;