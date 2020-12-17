import logo from './logo.svg';
import './App.css';
import React from 'react'
import Button from './../node_modules/react-bootstrap/Button';
import Badge from './../node_modules/react-bootstrap/Badge';
import { useState } from 'react'  
import {books} from './Books'
import Card from './../node_modules/react-bootstrap/Card';



const UseStateCounter= () =>{
const [counter,setCounter]=useState(0);

return(

  <div>
    <Card style={{ width: '18rem' }}>

    <h1>Give us Rating</h1>
  <h3>{counter}</h3>
  <Button variant="primary" onClick= {() => { setCounter(counter + 1);}}>ADD</Button>
  
  <Button onClick={() => {setCounter(counter - 1)}}>DECREASE</Button> 
  <Button onClick={() => {setCounter(0)}}>RESET</Button> 
</Card>
  </div>  
)
}


function BookList() {
 return (
  <div>
  {books.map((book)=> {
    
    return(
<div>
<div><UseStateCounter></UseStateCounter></div>

<Book key={book.id} book={book}>
</Book>
</div>

    )


  } )
  }

  </div>

 )
    
  
}


function Author(props) {
  return React.createElement('h2',{},props.author )
}

function Title(props) {
  return React.createElement('h1',{},props.title )
}

function Subject(props) { 
  const Subject=props.subject
  return <h3>{ Subject}</h3>
}

function Rating(props){
  return <p>{props.Rating}</p>

}

function Book(props) {
  console.log(props + "Props")
console.log(props.book + "Props.Book")
console.log(props.book.author)
  
  return (
    
    <div> 
      <Title  title={props.book.bookName} />
      {/* <Author author={props.book.author} /> */}
      <Subject subject={props.book.subject }/>
      <Rating Rating={props.book.Rating} /> 
      
      <button type='button' onClick={()=> alert(props.book.author)} >Click here to see Author </button>
      <p>--------------------------</p>
      
      </div>
  )
}
export default BookList;