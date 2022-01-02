import { useState, useEffect } from "react";
import BookTemplate from "./BookTemplate";
import * as gameService from '../services/BookService'
const Dashboard = ({navigationChangeHandler}) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(books => {
                setBooks(books)
            });
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            {books.length > 0
                ? <ul className="other-books-list">
                    {books.map(x => <BookTemplate key={x._id} book={x} navigationChangeHandler={navigationChangeHandler} />)}
                </ul>
                : <p className="no-books">No books in database!</p>
            }
        </section>
    );
}

export default Dashboard;