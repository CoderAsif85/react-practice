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
    Books: [{ book_Name: 1984, author: 'ak' }, { book_Name: 'deyal', author: 'humayun' }, { book_Name: 'riri', author: 'mostak' }],
    msg: 'list ended'
  }

  cngBookName = () => {
    this.setState({
      Books: [{ book_Name: 'voy', author: 'humayun' }, { book_Name: 'inferno', author: 'dan brown' }, { book_Name: 'hat kata robin', author: 'jafor iqbal' }]
    })
  }
  changeBookName = (event) => {
    this.setState({
      Books: [{ book_Name: event.target.value, author: 'humayun' },
      { book_Name: 'inferno', author: 'dan brown' },
      { book_Name: 'hat kata robin', author: 'jafor iqbal' }]
    })

  }


  render() {

    const BookStyleInLine = {
      backgroundColor: 'black',
      color: 'white',
      width: '100px'
    };


    return (
      <div className='App'>
        <input type='text' onChange={this.changeBookName}></input>

        <Book book_Name={this.state.Books[0].book_Name} author={this.state.Books[0].author} />

        <Book book_Name={this.state.Books[1].book_Name} author={this.state.Books[1].author} />
        <Book book_Name={this.state.Books[2].book_Name} author={this.state.Books[2].author}
          inputName={this.changeBookName} />
        <Book msg={this.state.msg} />
        <button onClick={this.cngBookName} style={BookStyleInLine}>click here for change</button>

      </div>
    );


  }
}










export default App;
