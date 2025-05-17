import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useIsLoggedStore, useLoggedUserStore } from "../Store/Store.js";



function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const setIsLogged = useIsLoggedStore(state => state.setIsLogged);
    const setUserName = useLoggedUserStore(state => state.setUserName);

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const loggedUser = { name, email, password };

        setIsPending(true);

        fetch('http://localhost:3001/loggedUsers', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loggedUser),
        }).then(() => {
            console.log('New user registered');
            setIsLogged(true);
            setUserName(loggedUser.name);
            setIsPending(false);
            history('/');
        });
    }

    return (
        <>
            <form
                className="RegContainer"
                onSubmit={ handleSubmit }>
                <h1 className="textHeader">Register</h1>

                <label className="labels">Nickname</label> <br/>
                <input
                    className="inputs"
                    type="text"
                    placeholder="Your name"
                    required
                    value={ name }
                    onChange={ (e) => setName(e.target.value)}
                /> <br/>

                <label className="labels">E-mail</label> <br/>
                <input
                    className="inputs"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value)}
                /> <br/>

                <label className="labels">Password</label> <br/>
                <input
                    className="inputs"
                    type="password"
                    placeholder="🔑"
                    required
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value)}
                /> <br/>

                { !isPending && <button className="executeButton">Register</button> }
                { isPending && <button disabled className="executeButton">Registration...</button> }

                <Link to="/login" className="alternativeButton">Already have an account?</Link>
            </form>
        </>
    );
}

export default RegisterForm