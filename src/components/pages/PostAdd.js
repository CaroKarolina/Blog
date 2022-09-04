import { Container } from "react-bootstrap";
import AddPostForm from "../features/AddPostForm";

const PostAdd = () => {
    const { post } = AddPostForm();
    console.log(post);

    return (
        <Container>
            <h2>Post adding</h2>
            <AddPostForm />
        </Container>
    );
};

export default PostAdd;