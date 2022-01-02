import { useHistory } from "react-router";
import { register } from "../services/Api";

const Register = () => {

    let history = useHistory();
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('confirm-pass').trim();

        if (email == '' || password == '' || repass == '') {
            return alert('All fields ar required!')
        }

        if(password !== repass){
            return alert(`Passwords must match!`)
        }
        
        register(email, password);

        history.push('/dashboard')
    }

    return (
        <section id="register-page" className="register">
        <form id="register-form" onSubmit={onFormSubmit}>
            <fieldset>
                <legend>Register Form</legend>
                <p className="field">
                    <label htmlFor="email">Email</label>
                    <span className="input">
                        <input type="text" name="email" id="email" placeholder="Email"/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="repeat-pass">Repeat Password</label>
                    <span className="input">
                        <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password"/>
                    </span>
                </p>
                <input className="button submit" type="submit" value="Register"/>
            </fieldset>
        </form>
    </section>
    )
}

export default Register;