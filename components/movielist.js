import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.css';
import ReactStars from "react-rating-stars-component"
import { useState } from 'react';

const Movielist = ({movies}) =>{
  const[searchmov,setsearchmov]=useState('')
    return (
      <>
      <div style={{color:'white',fontSize:'60px',textAlign:'center',}}>Movie App</div>
    <Form inline style={{marginLeft:'43%',marginBottom:'3%',paddingTop:'3%'}}>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>setsearchmov(e.target.value)} />
    </Form>
    <div>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
        {movies.filter(el=>el.Title.toUpperCase().includes(searchmov.toUpperCase())||el.Rating.includes(searchmov)).map((el)=>(
        <div style={{margin:'auto',textAlign:'center',marginTop:'10px'}} >
    <Card style={{ width: '18rem'}}>
      <a href={el.link}><Card.Img variant="top" src={el.Poster} /></a>
      <Card.Body>
        <Card.Title>{el.Title}</Card.Title>
        <Card.Title>{el.Year}</Card.Title>
        <Card.Text>{el.Description}</Card.Text>
        <div style={{marginLeft:'5rem'}}>
        <ReactStars value={parseInt(el.Rating)/2} edit={false}isHalf={true}/></div>
      </Card.Body>
    </Card>
       </div>
 ))}  </div>
    </div>
  </>)} ;
  export default Movielist;
