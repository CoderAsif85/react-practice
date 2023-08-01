import React from "react";
import '../styleSheet/bookStyle.css';

const Book = (props) => {




    return (
        <div className="book">
            <h1 >Book Name= {props.book_Name}</h1>
            <h3 >  Author: {props.author} </h3>



        </div>
    );

}



export default Book;