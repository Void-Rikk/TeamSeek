import { Link } from "react-router-dom";

function RegisterForm() {
    return (
        <>
            <div className="RegContainer">
                <h1 className="textHeader">Register</h1>

                <label className="labels">Nickname</label> <br/>
                <input className="inputs" type="text" placeholder="Your name" required/> <br/>

                <label className="labels">E-mail</label> <br/>
                <input className="inputs" type="email" placeholder="example@gmail.com" required/> <br/>

                <label className="labels">Password</label> <br/>
                <input className="inputs" type="password" placeholder="🔑" required/> <br/>

                <Link to="/" className="executeButton">Register</Link>

                <Link to="/login" className="alternativeButton">Already have an account?</Link>
            </div>
        </>
    );
}

export default RegisterForm