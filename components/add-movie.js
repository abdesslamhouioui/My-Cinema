import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import ReactStars from "react-rating-stars-component"
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
  const Addmovie=({add})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[addmov,setAddmov]=useState({});
    const modify=(event)=>{setAddmov({...addmov,[event.target.placeholder]:event.target.value})}
    const save=()=>{add(addmov);handleClose()}
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
    <ReactStars  edit={true}isHalf={true} onChange={(value)=>setAddmov({...addmov,Rating:value*2})}/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Link</Form.Label>
    <Form.Control type="input" placeholder="Link"onChange={modify}/>
  </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={save}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>);}
  export default Addmovie;
  
