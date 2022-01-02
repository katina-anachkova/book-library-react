import { useState, useEffect } from "react";
import BookTemplate from "./BookTemplate";

const Dashboard = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/data/books?sortBy=_createdOn%20desc')
            .then(res => res.json())
            .then(books => {
                setBooks(books)
            })
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