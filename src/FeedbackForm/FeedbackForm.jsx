import { useFormHandling } from "../utils/formUtils";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FeedbackForm = () => {
    const { formData, handleChange, handleSubmit } = useFormHandling();
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control className="custom-short-input" type="text" placeholder="Enter your name" name="name"
                              value={formData.name} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="custom-short-input" type="email" placeholder="Enter your email" name="email"
                              value={formData.email} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control className="custom-short-input" as="textarea" rows={3} placeholder="Enter your message"
                              name="message" value={formData.message} onChange={handleChange}/>
            </Form.Group>

            <Button className="btn-feedback" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default FeedbackForm;

