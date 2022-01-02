const Header = () => {
    return (
        <header id="site-header">
        <nav class="navbar">
            <section class="navbar-dashboard">
                <a href="/dashboard">Dashboard</a>
                <div id="guest">
                    <a class="button" href="/login">Login</a>
                    <a class="button" href="/register">Register</a>
                </div>
                <div id="user">
                    <span>Welcome, {email}</span>
                    <a class="button" href="/my-books">My Books</a>
                    <a class="button" href="/create">Add Book</a>
                    <a class="button" href="javascript:void(0)">Logout</a>
                </div>
            </section>
        </nav>
    </header>
    )
}

export default Header;