import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
import Delete from "./Delete";

const BlogDetails = () => {
    const url = 'http://localhost:3000/blogs';
    const { id } = useParams();
    const { data: blog, isPanding, error } = useFetch(`${url}/${id}`);
    const [deletePost, setDeletePost] = useState(false)

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('klik');
        setDeletePost(false);
        fetch(`${url}/${blog.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/')
        })
    }
    return (
        <Container>
            { isPanding && <div>Loading..</div> }
            { error && <div>{ error }</div> }
            { blog &&
            <Container>
                <Row>
                    <Col><h2>{ blog.title }</h2></Col>
                    <Col style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <Link to={`/post/edit/'${blog.id}`}>
                        <Button variant="outline-primary">Edit</Button>
                        </Link>
                    </Col>
                    <Col  style={{
                                display: 'flex',
                                justifyContent: 'flex-end'
                            }}>
                        <Link to={`/blogs/${blog.id}`}>
                            <Button variant="outline-danger" onClick={() => setDeletePost(true)}>Delete</Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Autor: { blog.author }</p>
                        <p>Published: { blog.publishedDate }</p>
                        <div>{ blog.content }</div>
                    </Col>
                </Row>
            </Container>
            }
                        {deletePost && <Delete closeModal={setDeletePost} onRemove={handleClick}/>}
        </Container>
    )
}
export default BlogDetails;