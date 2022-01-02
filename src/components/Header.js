import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="site-header">
        <nav className="navbar">
            <section className="navbar-dashboard">
                <Link to="/dashboard">Dashboard</Link>
                <div id="guest">
                    <Link className="button" to="/login">Login</Link>
                    <Link className="button" to="/register">Register</Link>
                </div>
                <div id="user">
                    <span>Welcome, email</span>
                    <Link className="button" to="/my-books">My Books</Link>
                    <Link className="button" to="/create">Add Book</Link>
                    <Link className="button" to="/logout">Logout</Link>
                </div>
            </section>
        </nav>
    </header>
    )
}

export default Header;