import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchForm() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const from = event.target.from.value;
        const until = event.target.until.value;


        if (from && until) {
            console.log("From:", from);
            console.log("Until:", until);

        } else {
            console.error("Values are undefined");
        }

    };
    return (
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formFrom">
            <Form.Label>From</Form.Label>
            <Form.Control name="from" type="date" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUntil">
            <Form.Label>Until</Form.Label>
            <Form.Control name="until" type="date" />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
            Search
        </Button>
    </Form>
);
}
export default SearchForm;