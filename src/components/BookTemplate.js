const BookTemplate = ({ book, navigationChangeHandler }) => {

    const onDetailsClick = (e) => {
        e.preventDefault();
        navigationChangeHandler(`/details/${book._id}`)
    }

    return (
        <li className="otherBooks">
            <h3>{book.title}</h3>
            <p>Type: {book.type}</p>
            <p className="img"><img alt="" src={book.imageUrl} /></p>
            <a className="button" onClick={onDetailsClick} href={`/details/${book._id}`}>Details</a>
        </li>
    );
}

export default BookTemplate;