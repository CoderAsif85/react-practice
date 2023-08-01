import React, { Component } from "react";
import Book from "./book";
import BookState from "../assests/BookState";

import BookList from "./lists/BookList";

import NewBook from "./NewBook";
import { Routes, Route, NavLink } from "react-router-dom";
import SignIn from "./authorization/SignIn";
import PrivateRoute from "./authorization/PrivateRoute";

class MainComponent extends Component {
    state = {
        Books: BookState,
        showBooks: true
    }

    render() {

        const BookStyleInLine = {
            backgroundColor: 'black',
            color: 'white',
            width: '100px'
        };






        const AllBook = <BookList Books={this.state.Books}
            deleteBooks={this.deleteBooks}
            changeBookName={this.changeBookName} />






        return (



            <div className='App'>

                <div className="nav-bar">
                    <ul>

                        <li>
                            <NavLink to='/'> Sign in </NavLink>
                        </li>
                        <li>
                            <NavLink to='/books'> Books </NavLink>
                        </li>
                        <li>
                            <NavLink to='/new-book'> New Book </NavLink>
                        </li>

                    </ul>
                </div>

                <Routes>
                    <Route path='/' element={<SignIn />}></Route>

                    <Route element={<PrivateRoute />}>
                        <Route path='/books' element={AllBook}></Route>
                        <Route path='/new-book' element={<NewBook />}></Route>
                    </Route>
                </Routes>







            </div>
        );


    }
}

export default MainComponent;