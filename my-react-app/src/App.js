import logo from './logo.svg';
import './App.css';
import React from 'react'

function BookList() {
 return (
  <div>
     <Book />
     <Book />
     <Book />
     <Book />
  </div>

 )
    
  
}


function Author() {
  return React.createElement('h2',{},'Abhijeet Marathe' )
}

function Title() {
  return React.createElement('h1',{},'Lifes Amazing Secrets' )
}

function Subject() { 
  return <h3>Spirituality</h3>
}

function Book() {
  return (
    
    <div>
      <Title />
      <Author />
      <Subject />
    </div>
  )
}
export default BookList;