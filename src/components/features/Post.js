import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from '../../redux/store';
import { Button, Row, Col, Container, } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Delete from "./Delete";
import { useState } from "react";
import { removePost } from "../../redux/postsRedux";

const Post = () => {

    const [deletePost, setDeletePost] = useState(false)

    const dispatch = useDispatch();

    const params = useParams()

    const post = useSelector(getAllPosts)
    .find(post => post.id === params.postId)

    const handleDeleteAtion = () => {
        dispatch(removePost(params.postId));
        setDeletePost(false);
    }

	return post? (
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
            {deletePost && <Delete closeModal={setDeletePost} onRemove={handleDeleteAtion}/>}
        </Container>
    ) : <Navigate to="/"/>
    ;
};

export default Post;