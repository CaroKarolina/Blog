import { useSelector } from "react-redux";
import { getAllPosts } from '../../redux/store';
import { Button, Row, Col, Container, } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Delete from "./Delete";
import { useState } from "react";

const Post = () => {

    const [deletePost, setDeletePost] = useState(false)

    const params = useParams()

    const post = useSelector(getAllPosts)
    .find(post => post.id === params.postId)

	return (        
        <Container>
            <Row>
                <Col md='4'><h2>{post.title}</h2></Col>
                <Col md='2'>
                    <Link to={'/post/edit/' + post.id}>
                        <Button variant="outline-primary">Edit</Button>
                    </Link>
                </Col>
                <Col md='2'>
                    <Link to={'/post/' + post.id}>
                        <Button variant="outline-danger" onClick={() => setDeletePost(true)}>Delete</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <div>Author: {post.author}</div>
                <div>Published: {post.publishedDate}</div> 
                <div>{post.content}</div>
            </Row>
            {deletePost && <Delete closeModal={setDeletePost}/>}
        </Container>
    );
};

export default Post;