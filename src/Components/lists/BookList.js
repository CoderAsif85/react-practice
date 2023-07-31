import React from "react";

import Book from "../book";
import { Component } from "react";


class BookList extends Component {

    constructor(props) {
        super(props);

    }

    componentDidUpdate() {
        console.log('U componentDidUpdate')
    }

    UNSAFE_componentWillUpdatecomponentWillUpdate(nextProps, nextState) {
        console.log(' u componentWillUpdate function', nextProps, nextState)

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(' u shouldComponentUpdate function', nextProps, nextState)
        return true;

    }

    render() {
        console.log(' u render function')



        return (
            this.props.Books.map((item, index) => {


                return (

                    <Book
                        book_Name={item.book_Name}
                        author={item.author}
                        deleteItem={() => this.props.deleteBooks(index)}
                        inputValue={(event) => this.props.changeBookName(event, index)}

                    />


                );

            })
        );
    }
}

export default BookList;