import React from "react";

import Book from "../book";


const BookList = (props) => {

    return (
        props.Books.map((item, index) => {


            return (

                <Book
                    book_Name={item.book_Name}
                    author={item.author}
                    deleteItem={() => props.deleteBooks(index)}
                    inputValue={(event) => props.changeBookName(event, index)}

                />


            );

        })
    );
}

export default BookList;