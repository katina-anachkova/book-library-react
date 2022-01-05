import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { getUserData } from '../util';
import * as bookService from '../services/BookService';

const BookControls = ({ match }) => {

    const [book, setBook] = useState({});

    let history = useHistory();
    const userData = getUserData();
    const isOwner = userData && userData.id == book._ownerId;

    useEffect(() => {
        bookService.getOne(match.params.bookId)
            .then(book => {
                setBook(book);
            });
    }, [])
    
    const onDelete = () => {
        setBook(bookService.getOne(match.params.bookId));
        bookService.deleteBook(match.params.bookId)
            .then(history.replace('/dashboard'));
    }

    return (
        (isOwner)
            ? <><Link className="button" to={`/edit/${book._id}`}>Edit</Link>
                <Link className="button" to="#" onClick={onDelete} >Delete</Link>
            </>
            : null
    );
}

export default BookControls;