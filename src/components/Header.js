const Header = () => {
    return (
        <header id="site-header">
        <nav className="navbar">
            <section className="navbar-dashboard">
                <a href="/dashboard">Dashboard</a>
                <div id="guest">
                    <a className="button" href="/login">Login</a>
                    <a className="button" href="/register">Register</a>
                </div>
                <div id="user">
                    <span>Welcome, email</span>
                    <a className="button" href="/my-books">My Books</a>
                    <a className="button" href="/create">Add Book</a>
                    <a className="button" href="#">Logout</a>
                </div>
            </section>
        </nav>
    </header>
    )
}

export default Header;