import { getUserData } from '../util';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import * as bookService from '../services/BookService';

const BookControls = ({match}) => {

    const [book, setBook] = useState({});

    useEffect(() => {
        bookService.getOne(match.params.bookId)
            .then(book => {
                setBook(book)
            });
    }, [])
    const userData = getUserData();
    const isOwner = userData && userData.id == book._ownerId;


    return (
        (isOwner)
            ? <><Link className="button" to={`/edit/${book._id}`}>Edit</Link>
                <Link className="button" to="#">Delete</Link>
            </>
            : null
    );
}

export default BookControls;