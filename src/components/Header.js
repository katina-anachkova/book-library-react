const Header = ({navigationChangeHandler}) => {

    const onHeaderClick = (e) => {
        e.preventDefault();
        if ( e.target.tagName == 'A'){
            let url = new URL(e.target.href);
            navigationChangeHandler(url.pathname)
        }
    }
    return (
        <header onClick={onHeaderClick} id="site-header">
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
                    <a className="button" href="/logout">Logout</a>
                </div>
            </section>
        </nav>
    </header>
    )
}

export default Header;