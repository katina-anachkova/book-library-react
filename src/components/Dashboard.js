import { useState, useEffect } from "react";
import BookTemplate from "./BookTemplate";
import * as bookService from '../services/BookService';

const Dashboard = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        bookService.getAll()
            .then((books) => {
                setBooks(books);
            });
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            {books.length > 0
                ? <ul className="other-books-list">
                    {books.map(x => <BookTemplate key={x._id} book={x} />)}
                </ul>
                : <p className="no-books">No books in database!</p>
            }
        </section>
    );
}

export default Dashboard;