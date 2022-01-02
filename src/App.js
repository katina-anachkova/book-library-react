import { useState } from "react";
import Details from "./components/BookDetailsPage";
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

    const navigationChangeHandler = (path) => {
        setPage(path);
    }

    const router = (path) => {
        let pathNames = path.split('/');
        let rootPath = pathNames[1];
        let argument = pathNames[2];

        const routes = {
            'home': <Dashboard navigationChangeHandler={navigationChangeHandler}/>,
            'create': <CreateBook/>,
            'edit': <EditBook/>,
            'my-books': <MyBooks/>,
            'login': <Login/>,
            'register': <Register/>,
            'details': <Details id={argument}/>
        };

        return routes[rootPath]
    }


    return (
        <div id="container">

            <Header navigationChangeHandler={navigationChangeHandler} />

            <main id="site-content">
                {router(page) || <PageNotFound/> }
            </main>

            <footer id="site-footer">
                <p>@OnlineBooksLibrary</p>
            </footer>
        </div>
    );
}

export default App;
