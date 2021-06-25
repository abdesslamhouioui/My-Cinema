import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
  const Addmovie=({add})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[addmov,setAddmov]=useState({});
    const modify=(event)=>{setAddmov({...addmov,[event.target.placeholder]:event.target.value})}
    return (
      <>
       <Button variant="primary" onClick={handleShow}style={{marginLeft:'46%',marginBottom:'2%',marginTop:'2%'}} >
          Add movie
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form style={{maxWidth:'70%',margin:'auto'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="input" placeholder="Title" onChange={modify}/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Year</Form.Label>
    <Form.Control type="input" placeholder="Year"onChange={modify}/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Poster</Form.Label>
       <Form.Control type="input" placeholder="Poster"onChange={modify}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control type="input" placeholder="Description"onChange={modify}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="input" placeholder="Rating"onChange={modify} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>link</Form.Label>
    <Form.Control type="input" placeholder="link"onChange={modify}/>
  </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>add(addmov)}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>);}
  export default Addmovie;
  