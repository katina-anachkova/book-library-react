const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
        <h1>Dashboard</h1>
        <ul className="other-books-list">
            <li className="otherBooks">
                <h3>A Court of Thorns and Roses</h3>
                <p>Type: Fiction</p>
                <p className="img"><img alt="" src="./images/book1.png"/></p>
                <a className="button" href="#">Details</a>
            </li>

            <li className="otherBooks">
                <h3>Outlander</h3>
                <p>Type: Other</p>
                <p className="img"><img alt="" src="/images/book2.png"/></p>
                <a className="button" href="#">Details</a>
            </li>

            <li className="otherBooks">
                <h3>To Kill a Mockingbird</h3>
                <p>Type: Classic</p>
                <p className="img"><img alt="" src="/images/book3.png"/></p>
                <a className="button" href="#">Details</a>
            </li>
        </ul>
        <p className="no-books">No books in database!</p>
    </section>
    );
}

export default Dashboard;