import * as bookService from '../services/BookService';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const EditBook = ({ match }) => {
    const history = useHistory();

    const bookId = match.params.bookId;

    const [book, setBook] = useState([]);

    useEffect(() => {
        bookService.getOne(bookId)
            .then(book => {
                setBook(book)
            });
    }, [book]);

    const onBookEdit = (e) => {
        e.preventDefault();

        let bookData = Object.fromEntries(new FormData(e.currentTarget))

        bookService.editBook(bookId, bookData);
        history.push('/dashboard');
    }

    return (

        <section id="edit-page" className="edit">
            <form id="edit-form" onSubmit={onBookEdit}>
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title" defaultValue={book.title} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" >{book.description}</textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={book.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" defaultValue={book.type}>
                                <option value="Fiction" defaultValue>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" defaultValue="Save" />
                </fieldset>
            </form>
        </section>
    );
}

export default EditBook;