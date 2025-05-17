import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useIsLoggedStore } from "../../Store/Store.js";


function Header({ userName, isLogged }) {
    const setIsLogged = useIsLoggedStore(state => state.setIsLogged);

    const handleLogOut = () => {
        setIsLogged(false);
        sessionStorage.clear();
    }

    return(
        <>
            <nav className="homeNav">
                <h1>TeamSeek</h1>
                <div className="navRightCorner">
                    {isLogged && <Link to="/profile">{ userName }</Link>}
                    {isLogged && <button onClick={ handleLogOut }>Log out</button>}
                    {!isLogged && <>
                        <Link to="/login">Log in</Link>
                        <Link to="/register">Register</Link>
                    </>}
                </div>
            </nav>
        </>
    );
}

Header.propTypes = {
    userName: PropTypes.string,
    isLogged: PropTypes.bool,
};

export default Header;