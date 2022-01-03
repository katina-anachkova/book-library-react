// import { Link } from "react-router-dom";
import { BookTemplate } from "./BookTemplate";
import { getUserData } from "../util.js";
import { getMyBooks } from "../services/BookService";

export function MyBooks(books) {
    return (
        <section id="my-books-page" className="my-books">
            <h1>My Books</h1>
            <ul className="my-books-list">
                {books.lenght > 0
                    ? books.map(x => <BookTemplate book={x} />)
                    : <p className="no-books">No books in database!</p>}
            </ul>

        </section>
    );
}

export async function myBooksPage() {
    const userData = getUserData();
    const userId = userData.id

    return await getMyBooks(userId);

}


