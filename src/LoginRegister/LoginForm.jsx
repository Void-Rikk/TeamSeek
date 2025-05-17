import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import useFetch from "../Hooks/useFetch.jsx";
import { useIsLoggedStore, useLoggedUserStore } from "../Store/Store.js";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { data: userList } = useFetch("http://localhost:3001/loggedUsers");
    const setIsLogged = useIsLoggedStore(state => state.setIsLogged);
    const setUserName = useLoggedUserStore(state => state.setUserName);
    const user = useRef({});

    const history = useNavigate();

    const checkPassword = () => {
        if (user.current.password === password) {
            return true;
        }
        return false;
    }

    const findID = (email) => {
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].email === email) {
                user.current = userList[i];
                if (checkPassword() === true) {
                    return userList[i].id;
                }
            }
        }

        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const neededID = findID(email);
        if (neededID !== null) {
            console.log('User logged');
            sessionStorage.setItem("id", neededID);
            setIsLogged(true);
            setUserName(user.current.name);
            history('/');
        }
        else {
            setEmail("User is not found");
        }
    }

    return (
        <>
            <form
                className="LogContainer"
                onSubmit={ handleSubmit }
            >
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