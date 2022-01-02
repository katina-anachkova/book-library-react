import Header from "./components/Header";

function App() {
    return (
        <div id="container">

        <Header />

        <main id="site-content"></main>

        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <ul class="other-books-list">
                <li class="otherBooks">
                    <h3>A Court of Thorns and Roses</h3>
                    <p>Type: Fiction</p>
                    <p class="img"><img src="./images/book1.png"/></p>
                    <a class="button" href="#">Details</a>
                </li>

                <li class="otherBooks">
                    <h3>Outlander</h3>
                    <p>Type: Other</p>
                    <p class="img"><img src="/images/book2.png"/></p>
                    <a class="button" href="#">Details</a>
                </li>

                <li class="otherBooks">
                    <h3>To Kill a Mockingbird</h3>
                    <p>Type: Classic</p>
                    <p class="img"><img src="/images/book3.png"/></p>
                    <a class="button" href="#">Details</a>
                </li>
            </ul>
            <p class="no-books">No books in database!</p>
        </section>

        <section id="login-page" class="login">
            <form id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login"/>
                </fieldset>
            </form>
        </section>

        <section id="register-page" class="register">
            <form id="register-form" action="" method="">
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email"/>
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password"/>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register"/>
                </fieldset>
            </form>
        </section>

        <section id="details-page" class="details">
            <div class="book-information">
                <h3>A Court of Thorns and Roses</h3>
                <p class="type">Type: Fiction</p>
                <p class="img"><img src="/images/book1.png"/></p>
                <div class="actions">
                    <a class="button" href="#">Edit</a>
                    <a class="button" href="#">Delete</a>
                    <a class="button" href="#">Like</a>

                    <div class="likes">
                        <img class="hearts" src="/images/heart.png"/>
                        <span id="total-likes">Likes: 0</span>
                    </div>
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold,
                    bleak place in the long winter months. So when she spots a deer in the forest being pursued by a
                    wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and
                    killing something so precious comes at a price ...</p>
            </div>
        </section>

        <section id="create-page" class="create">
            <form id="create-form" action="" method="">
                <fieldset>
                    <legend>Add new Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" placeholder="Title"/>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image"/>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type">
                                <option value="Fiction">Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Add Book"/>
                </fieldset>
            </form>
        </section>

        <section id="edit-page" class="edit">
            <form id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" value="A Court of Thorns and Roses"/>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold, bleak place in the long winter months. So when she spots a deer in the forest being pursued by a wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and killing something so precious comes at a price ...</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value="/images/book1.png"/>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input">
                            <select id="type" name="type" value="Fiction">
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save"/>
                </fieldset>
            </form>
        </section>

        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <ul class="my-books-list">
                <li class="otherBooks">
                    <h3>Outlander</h3>
                    <p>Type: Other</p>
                    <p class="img"><img src="/images/book2.png"/></p>
                    <a class="button" href="#">Details</a>
                </li>
                <li class="otherBooks">
                    <h3>A Court of Thorns and Roses</h3>
                    <p>Type: Fiction</p>
                    <p class="img"><img src="/images/book1.png"/></p>
                    <a class="button" href="#">Details</a>
                </li>
            </ul>
            <p class="no-books">No books in database!</p>
        </section>

        <footer id="site-footer">
            <p>@OnlineBooksLibrary</p>
        </footer>
    </div>
    );
}

export default App;
