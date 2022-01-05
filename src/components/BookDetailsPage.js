import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getUserData } from "../util.js";
import BookControls from "./BookControls.js";
import * as bookService from '../services/BookService.js';

const Details = ({ match }) => {
    const history = useHistory();
    const [book, setBook] = useState({});
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(0);
    const userData = getUserData();

    useEffect(() => {
        bookService.getOne(match.params.bookId)
            .then(book => {
                setBook(book);
            });
    }, [likes]);

    useEffect(() => {
        bookService.getLikesByBookId(match.params.bookId)
            .then(likes => {
                setLikes(likes);
            });
    }, [likes]);

    useEffect(() => {
        bookService.getMyLikeByBookId(match.params.bookId, userData.id)
            .then(like => {
                setHasLiked(like);
            });
    }, [likes]);

    const isOwner = userData && userData.id == book._ownerId;

    let showLikeButton = userData != null && isOwner == false && hasLiked == false;

    async function onLike() {
        await bookService.likeBook(match.params.bookId);
        // showLikeButton = false;
        history.push('/dashboard')

    }

    return (
        <section id="details-page" className="details">
            <div className="book-information">
                <h3>{book.title}</h3>
                <p className="type">Type: {book.type}</p>
                <p className="img"><img src={book.imageUrl} /></p>
                <div className="actions">
                    <BookControls match={match} />
                    {showLikeButton
                        ? <button className="button" onClick={onLike} to="#">Like</button>
                        : null}
                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {likes}</span>
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