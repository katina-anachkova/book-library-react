import { useState } from "react";
import CreateBook from "./components/CreateBook";
import Dashboard from "./components/Dashboard";
import EditBook from "./components/EditBook";
import Header from "./components/Header";
import Login from "./components/Login";
import MyBooks from "./components/MyBooks";
import PageNotFound from "./components/PageNotFound";
import Register from "./components/Register";

function App() {
    const [page, setPage] = useState('/home');

    const routes = {
        '/home': <Dashboard/>,
        '/create': <CreateBook/>,
        '/edit': <EditBook/>,
        '/my-books': <MyBooks/>,
        '/login': <Login/>,
        '/register': <Register/>,
    };

    const navigationChangeHandler = (path) => {
        setPage(path);
    }

    return (
        <div id="container">

            <Header navigationChangeHandler={navigationChangeHandler} />

            <main id="site-content">
                {routes[page] || <PageNotFound/> }
            </main>

            <footer id="site-footer">
                <p>@OnlineBooksLibrary</p>
            </footer>
        </div>
    );
}

export default App;
