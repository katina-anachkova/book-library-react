import { Link } from "react-router-dom";
import AuthCtx from "../context/AuthCtx";
import { useContext } from "react";

const Header = () => {
    
    const userInfo = useContext(AuthCtx);

    let guestNav = <div id="guest">
        <Link className="button" to="/login">Login</Link>
        <Link className="button" to="/register">Register</Link>
    </div>

    let userNav = <div id="user">
        <span>Welcome, {userInfo.user.email}</span>
        <Link className="button" to="/my-books">My Books</Link>
        <Link className="button" to="/create">Add Book</Link>
        <Link className="button" to="/logout">Logout</Link>
    </div>

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/dashboard">Dashboard</Link>
                    {userInfo.user.isAuthenticated
                        ? userNav
                        : guestNav
                    }
                </section>
            </nav>
        </header>
    )
}

export default Header;
