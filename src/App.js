import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { createElement } from 'react';
import Person, { Names } from './Components/Person.js';
import { Newperson } from './Components/class';
import Book from './Components/book';

// function App() {

//   // create element with jsx

//   // return (
//   //   <div className="App">
//   //     <h1>Hello buddy</h1>
//   //     <Person />
//   //   </div>
//   // );

//   // create element with react

//   // return React.createElement('div', { className: 'App' }, createElement("h1", null, 'hello buddy'),
//   //   <Person />, <Names name='Reazul' age='423' />, <Names name='alif' age='232' />, <Names name='rifat' age='222' />, <Newperson name='boss' age='22' />)

// // };

class App extends Component {

  state = {
    Books: [{ book_Name: 1984, author: 'ak' },
    { book_Name: 'deyal', author: 'humayun' },
    { book_Name: 'riri', author: 'mostak' }]
  }

  cngBookName = () => {
    this.setState({
      Books: [{ book_Name: 'voy', author: 'humayun' },
      { book_Name: 'inferno', author: 'dan brown' },
      { book_Name: 'hat kata robin', author: 'jafor iqbal' }]
    })
  }
  changeBookName = (event, index) => {
    const newBooKName = {
      ...this.state.Books[index]
    }


    console.log(event.target.value)


    newBooKName.book_Name = event.target.value;

    const Books = [...this.state.Books];
    Books[index] = newBooKName;

    this.setState({
      Books: Books
    })


  }

  deleteBooks = index => {
    const deleteBook = this.state.Books.slice();
    deleteBook.splice(index, 1);
    this.setState({
      Books: deleteBook
    })
  }


  render() {

    const BookStyleInLine = {
      backgroundColor: 'black',
      color: 'white',
      width: '100px'
    };
    const h1Style = {
      backgroundColor: 'black',
      width: '100%',
      color: 'white',
      padding: '10px'

    }

    const bookList = this.state.Books;


    const AllBook = bookList.map((item, index) => {


      return (

        <Book
          book_Name={item.book_Name}
          author={item.author}
          deleteItem={() => this.deleteBooks(index)}
          inputValue={(event) => this.changeBookName(event, index)}

        />


      );

    });




    return (
      <div className='App'>
        <h1 style={h1Style}> All book List</h1>

        {AllBook}

        {/* <Book msg={this.state.msg} /> */}
        <button onClick={this.cngBookName} style={BookStyleInLine}>click here for change</button>

      </div>
    );


  }
}










export default App;
