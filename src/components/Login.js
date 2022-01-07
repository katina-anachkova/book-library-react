import { useHistory } from "react-router";
import { login } from "../services/Api";

const Login = ({ onLogin }) => {
    let history = useHistory();

    const onLoginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const isAuthenticated = true;

        if (email == '' || password == '') {
            return alert('All fields ar required');
        }

        login(email, password);

        onLogin({ email, password, isAuthenticated });

        if (sessionStorage.length > 0) {
            history.push('/dashboard');
        }
    }

    return (
        <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );
}

export default Login;
