import React from "react";
import '../styleSheet/bookStyle.css';

const Book = (props) => {




    return (
        <div className="book">
            <h1 onClick={props.deleteItem}>Book Name={props.book_Name}</h1>
            <h3 >  Author={props.author} </h3>
            <input type='text' onChange={props.inputValue} value={props.book_Name}></input>


        </div>
    );

}



export default Book;