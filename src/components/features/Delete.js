import { Container, Modal, Button } from "react-bootstrap";

const Delete = ( {closeModal} ) => {
  
   return (
    <Container>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={() => closeModal(false)}>
          <Modal.Title>Are u sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeModal(false)}>Cancel</Button>
          <Button variant="danger">Remove</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Container>
   );
};

 export default Delete;