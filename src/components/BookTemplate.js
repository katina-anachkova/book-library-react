import { Link } from "react-router-dom";

export function BookTemplate({ book }){
    
    return (
        <li className="otherBooks">
            <h3>{book.title}</h3>
            <p>Type: {book.type}</p>
            <p className="img"><img alt="" src={book.imageUrl} /></p>
            <Link className="button" to={`/details/${book._id}`}>Details</Link>
        </li>
    );
}


