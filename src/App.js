import Details from "./components/BookDetailsPage";
import CreateBook from "./components/CreateBook";
import Dashboard from "./components/Dashboard";
import EditBook from "./components/EditBook";
import Header from "./components/Header";
import Login from "./components/Login";
import { MyBooks } from "./components/MyBooks";
import Register from "./components/Register";
import { Route, Switch, Redirect } from 'react-router-dom'
import { logout } from "./services/Api";
import { useState, useEffect } from 'react'
import * as util from './util.js'
import AuthCtx from "./context/AuthCtx";


function App() {
    const [userInfo, setUserInfo] = useState({ isAuthenticated: false, user: {} });

    const onRegister = (user) => {
        setUserInfo({user});
    }

    const onLogin = (user) => {
        setUserInfo({user});
    }

    const onLogout = () => {
        util.clearUserData();
    }

    return (
        <AuthCtx.Provider value={userInfo}>
            <div id="container">
                <Header userInfo={userInfo} />
                <main id="site-content">
                    <Switch>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/create" component={CreateBook} />
                        <Route path="/edit/:bookId" component={EditBook} />
                        <Route path="/my-books" component={MyBooks} />
                        <Route path="/login">
                            <Login onLogin={onLogin} />
                        </Route>
                        <Route path="/register">
                            <Register onRegister={onRegister} />
                        </Route>
                        <Route path="/details/:bookId" component={Details} />
                        <Route path="/logout" render={(props) => {
                            logout()
                            onLogout()
                            return <Redirect to="/dashboard" />
                        }} />
                    </Switch>
                </main>
                <footer id="site-footer">
                    <p>@OnlineBooksLibrary</p>
                </footer>
            </div>
        </AuthCtx.Provider>
    );
}

export default App;
