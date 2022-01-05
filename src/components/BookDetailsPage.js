import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as bookService from '../services/BookService'

const Details = ({ match }) => {

    const [book, setBook] = useState({});

    useEffect(() => {
        bookService.getOne(match.params.bookId)
            .then(book => {
                setBook(book)
            });
    }, [])

    
    return (
        <section id="details-page" className="details">
            <div className="book-information">
                <h3>{book.title}</h3>
                <p className="type">Type: {book.type}</p>
                <p className="img"><img src={book.imageUrl} /></p>
                <div className="actions">
                    <Link className="button" to={`/edit/${book._id}`}>Edit</Link>
                    <Link className="button" to="#">Delete</Link>
                    <Link className="button" to="#">Like</Link>

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {book.likes}</span>
                    </div>
                </div>
            </div>
            <div className="book-description">
                <h3>Description:</h3>
                <p>{book.description}</p>
            </div>
        </section>
    );
}

export default Details;