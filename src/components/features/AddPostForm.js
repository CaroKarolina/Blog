import { useState } from "react";
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router";

const AddPostForm = () => {
    const url = 'http://localhost:3000/blogs';
    const [ title, setTitle ] = useState('');
    const [ author, setAuthor ] = useState('john doe');
    const [ shorterForm, setShorterForm ] = useState('')
    const [ content, setContent ] = useState('');
    const [ publishedDate, setPublishedDate ] = useState('');
    const [ isPanding, setIsPanding ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, shorterForm, content, publishedDate };
        setIsPanding(true);

        fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(response => {
            navigate('/');
            setIsPanding(false)
        })

    };

    return (
        <Container>
            <Row>
                <Col lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Label>Blog title:</Form.Label>
                                <Form.Control
                                as="input"
                                placeholder="Blog title"
                                value={ title }
                                onChange={(e) => {setTitle(e.target.value)}}
                                required
                                />
                                <Form.Label>Blog author:</Form.Label>
                                <Form.Select value={ author } onChange={(e) => {setAuthor(e.target.value)}}>
                                    <option>john doe</option>
                                    <option>doe doe</option>
                                </Form.Select>
                                <Form.Label>Published:</Form.Label>
                                <Form.Control
                                    as="input"
                                    type="date"
                                    value={ publishedDate }
                                    onChange={(e) => {setPublishedDate(e.target.value)}}
                                    required
                                />
                            </Col>
                        </Row>
                    <Form.Label>Short description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={ shorterForm }
                        onChange={(e) => {setShorterForm(e.target.value)}}
                    />
                    <Form.Label>Main content:</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={ content }
                        onChange={(e) => {setContent(e.target.value)}}
                        required
                    />
                    { !isPanding && <Button variant="primary" type="submit">Submit</Button> }
                    { isPanding && <Button disabled variant="primary" type="submit">Adding post ...</Button> }
                    </Form>
                </Col>
            </Row>

        </Container>
    );
};

export default AddPostForm;