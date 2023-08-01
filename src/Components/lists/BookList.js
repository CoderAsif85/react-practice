import React from "react";

import Book from "../book";
import { Component } from "react";


class BookList extends Component {





    render() {




        return (
            this.props.Books.map((item, index) => {


                return (

                    <Book
                        book_Name={item.book_Name}
                        author={item.author}


                    />


                );

            })
        );
    }
}

export default BookList;