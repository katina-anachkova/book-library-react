const BookTemplate = ({book}) => {
    return (
        <li className="otherBooks">
            <h3>{book.title}</h3>
            <p>Type: {book.type}</p>
            <p className="img"><img alt="" src={book.imageUrl} /></p>
            <a className="button" href="#">Details</a>
        </li>
    );
}

export default BookTemplate;