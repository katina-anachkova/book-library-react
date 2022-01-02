import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
    return (
        <div id="container">

            <Header />

            <main id="site-content">
                <Dashboard />
            </main>

            <footer id="site-footer">
                <p>@OnlineBooksLibrary</p>
            </footer>
        </div>
    );
}

export default App;
