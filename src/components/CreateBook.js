import { useHistory } from "react-router";
import * as bookService from '../services/BookService';

const CreateBook = () => {
    let history = useHistory();

    const onBookCreate = (e) => {

        let formData = new FormData(e.target);

        let title = formData.get('title').trim();
        let description = formData.get('description').trim();
        let imageUrl = formData.get('imageUrl').trim();
        let type = formData.get('type');

        bookService.createBook({
            title,
            description,
            imageUrl,
            type
        });
        history.push('/dashboard');
    }

    return (
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onBookCreate}>
                <fieldset>
                    <legend>Add new Book</legend>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="input">
                            <input type="text" name="title" id="title" placeholder="Title"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Book"/>
                </fieldset>
            </form>
        </section>
    );
}

export default CreateBook;