import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from '../../redux/store';
import { Button, Row, Col, Container, } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Delete from "./Delete";
import { useState } from "react";
import { removePost } from "../../redux/postsRedux";
import useFetch from "../../useFetch";

const Post = () => {

    const [deletePost, setDeletePost] = useState(false)
    const dispatch = useDispatch();

    // const params = useParams()
    const { id } = useParams();
    const post = useSelector(getAllPosts)
    // .find(post => post.id === params.postId)
    .find(post => post.id)

    const handleDeleteAction = () => {
        dispatch(removePost(post.id));
        setDeletePost(false);
    }

    // const url = 'http://localhost:3000/blogs';
    // const { data, isPanding, error } = useFetch(`${url}/${id}`);

	return post? (
        <h2>Hello. world</h2>
                //     <Link to={'/post/' + post.id}>
                //         <Button variant="outline-danger" onClick={() => setDeletePost(true)}>Delete</Button>
                //     </Link>
        //     <Row>
                // <p>Autor: { post.author }</p>
                // <p>Published: { post.publishedDate }</p>
                // <div>{ post.content }</div>
        //     </Row>
            // {deletePost && <Delete closeModal={setDeletePost} onRemove={handleDeleteAction}/>}
        // </Container>
    ) : <Navigate to="/"/>
    ;
};

export default Post;