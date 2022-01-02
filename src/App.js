import Details from "./components/BookDetailsPage";
import CreateBook from "./components/CreateBook";
import Dashboard from "./components/Dashboard";
import EditBook from "./components/EditBook";
import Header from "./components/Header";
import Login from "./components/Login";
import MyBooks from "./components/MyBooks";
import Register from "./components/Register";
import { Route, Switch, Redirect } from 'react-router-dom'
import { logout } from "./services/Api";

function App() {
    return (
        <div id="container">

            <Header />

            <main id="site-content">
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/create" component={CreateBook} />
                    <Route path="/edit" component={EditBook} />
                    <Route path="/my-books" component={MyBooks} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/details/:bookId" component={Details} />
                    <Route path="/logout" render={(props) => {
                        logout()
                        return <Redirect to="/dashboard"/>
                    }} />
                </Switch>
            </main>

            <footer id="site-footer">
                <p>@OnlineBooksLibrary</p>
            </footer>
        </div>
    );
}

export default App;
