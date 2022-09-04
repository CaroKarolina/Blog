import { Button, Container, Row, Col } from 'react-bootstrap';
import useFetch from '../../useFetch';
import BlogList from './BlogList';

const Home = () => {
    const url = 'http://localhost:3000/blogs';
    const { data: blogs, isPanding, error } = useFetch(url); // zapis data: blogs oznacza przypisanie nowej nazwy (blogs) do właściwości data zaimportowanej w komponencie

    return (
        <Container>
            <Row>
                <Col><h1>All posts</h1></Col>
                <Col md='auto'><Button href="/adding">Add post</Button></Col>
            </Row>
            {/* wstawienie warunku === true powoduje, że funckja wykonuje się */}
            { error && <div>{ error }</div>}
            { isPanding && <div>Loading...</div> }
            {blogs && <BlogList blogs={ blogs } />}
        </Container>
    )
};

export default Home;