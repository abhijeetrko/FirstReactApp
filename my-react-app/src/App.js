import logo from './logo.svg';
import './App.css';
import React from 'react'

function BookList() {
 return (
  <div>
    <Book bookName='MS Dhoni Untold Story' author='MSD' subject='Cricket'/>
     <Book bookName='Chasing the way' author='Virat Kohli'subject='Football'/>

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

function Book(props) {
  return (
    
    <div>
      <Title  title={props.bookName} />
      <Author author={props.author} />
      <Subject subject={props.subject }/>
    </div>
  )
}
export default BookList;