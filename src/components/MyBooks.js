//TODO request

import { Link } from "react-router-dom";

const MyBooks = () => {
    return (
        <section id="my-books-page" className="my-books">
        <h1>My Books</h1>
        <ul className="my-books-list">
            <li className="otherBooks">
                <h3>A Court of Thorns and Roses</h3>
                <p>Type: Fiction</p>
                <p className="img"><img src="/images/book1.png"/></p>
                <Link className="button" to="#">Details</Link>
            </li>
        </ul>
        <p className="no-books">No books in database!</p>
    </section>
    );
}

export default MyBooks;