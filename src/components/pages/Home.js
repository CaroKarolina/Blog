import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/store';
import { Card, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    const posts = useSelector(getAllPosts);
    
    return (
        <Container>
            <div>
                <h2>All posts</h2>
                <Button href="#" className='' variant="outline-primary">Add post</ Button>
            </div>
            <div>
            {posts.map(post => (
            <Card style={{ width: '18rem' }} key={post.id}>
                <Card.Body>
                    <h3>{post.title}</h3>
                    <h4>{post.author}</h4>
                    <h4>{post.publishedDate}</h4>
                    <Card.Text>{post.shortDescription}</Card.Text>
                    <Link to={'/post/' + post.id}>
                        <Button variant="primary">Read more</Button>
                    </Link>
                </Card.Body>
            </Card>
            ))}
            </div>
        </Container>
    )
};

export default Home;