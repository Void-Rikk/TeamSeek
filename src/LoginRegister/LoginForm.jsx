import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <>
            <div className="LogContainer">
                <h1 className="textHeader">Login</h1>

                <label className="labels">E-mail</label> <br/>
                <input className="inputs" type="email" placeholder="example@gmail.com" required/> <br/>

                <label className="labels">Password</label> <br/>
                <input className="inputs" type="password" placeholder="🔑" required/> <br/>

                <Link to="/" className="executeButton">Login</Link>

                <Link to="/register" className="alternativeButton">Don`t have an account?</Link>
            </div>
        </>
    );
}

export default LoginForm