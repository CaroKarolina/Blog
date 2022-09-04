import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {

    return (
        <Container>
            <Row md={2} lg={3} xs={1}>
            {blogs.map((blog) => (
                <Col>
                    <Card key={blog.id}>
                        <Card.Body>
                            <h2>{ blog.title }</h2>
                            <h4>{blog.author}</h4>
                                <h4>{blog.publishedDate}</h4>
                                <Card.Text>{blog.shortDescription}</Card.Text>
                                <Link to={`/blogs/${blog.id}`}>
                                    <Button>Read more</Button>
                                </Link>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
);
}

export default BlogList;