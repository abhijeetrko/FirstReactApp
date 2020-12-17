import logo from './logo.svg';
import './App.css';
import React from 'react'


import {books} from './Books'




function BookList() {
 return (
  <div>
  {books.map((book)=> {
    
    return(

<Book key={book.id} book={book}>
</Book>

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
      <img src="C:\Users\Abhijeet\Downloads\MSD.jpg" alt="MSD" />
      {/* <Author author={props.book.author} /> */}
      <Subject subject={props.book.subject }/>
      <Rating Rating={props.book.Rating} /> 
      
      <button type='button' onClick={()=> alert(props.book.author)} >Click here to see Author </button>
      <p>--------------------------</p>
      
      </div>
  )
}
export default BookList;