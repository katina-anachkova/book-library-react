import BookTemplate from "./BookTemplate.js";
import { getUserData } from "../util.js";
import { useState, useEffect } from "react";
import * as bookService from '../services/BookService.js';

export function MyBooks() {

    const [books, setBooks] = useState([]);
    const userData = getUserData();
    const userId = userData.id;

    useEffect(() => {
        bookService.getMyBooks(userId)
            .then((books) => {
                setBooks(books)
            });
    }, []);

    return (
        <section id="my-books-page" className="my-books">
            <h1>My Books</h1>
            <ul className="my-books-list">
                {books.length > 0
                    ? books.map(x => <BookTemplate key={x._id} book={x} />)
                    : <p className="no-books">No books in database!</p>}
            </ul>
        </section>
    );
}



