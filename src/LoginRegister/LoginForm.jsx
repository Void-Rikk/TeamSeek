import { Link } from "react-router-dom";
import {useState} from "react";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <form className="LogContainer">
                <h1 className="textHeader">Login</h1>

                <label className="labels">E-mail</label> <br/>
                <input
                    className="inputs"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                /> <br/>

                <label className="labels">Password</label> <br/>
                <input
                    className="inputs"
                    type="password"
                    placeholder="🔑"
                    required
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                /> <br/>

                <button className="executeButton">Login</button>

                <Link to="/register" className="alternativeButton">Don`t have an account?</Link>
            </form>
        </>
    );
}

export default LoginForm