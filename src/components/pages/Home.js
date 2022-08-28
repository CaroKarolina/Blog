import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/store';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    const posts = useSelector(getAllPosts);

    return (
        <Container>
            <Row>
                <Col>All posts</Col>
                <Col md='auto'><Button href="/postAdd">Add post</Button></Col>
            </Row>
            <Row md={2} lg={3}>
                {posts.map(post => (
                    <Col>
                        <Card key={post.id}>
                            <Card.Body>
                                <h3>{post.title}</h3>
                                <h4>{post.author}</h4>
                                <h4>{post.publishedDate}</h4>
                                <Card.Text>{post.shortDescription}</Card.Text>
                                <Link to={'/post/' + post.id}>
                                    <Button>Read more</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
};

export default Home;