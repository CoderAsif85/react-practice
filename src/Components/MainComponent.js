import React, { Component } from "react";
import Book from "./book";
import BookState from "../assests/BookState";

import BookList from "./lists/BookList";

class MainComponent extends Component {
    state = {
        Books: BookState,
        showBooks: true
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
    toggleBooks = () => {
        this.setState({
            showBooks: !this.state.showBooks
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





        const AllBook = <BookList Books={this.state.Books}
            deleteBooks={this.deleteBooks}
            changeBookName={this.changeBookName} />






        return (



            <div className='App'>
                <h1 style={h1Style}> All book List</h1>
                <button onClick={this.toggleBooks}> Toggle for books</button>



                {this.state.showBooks ? AllBook : null}

                <button onClick={this.cngBookName} style={BookStyleInLine}>click here for change</button>

            </div>
        );


    }
}

export default MainComponent;