import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


function Header({ userName, isLogged }) {

    return(
        <>
            <nav className="homeNav">
                <h1>TeamSeek</h1>
                <div className="navRightCorner">
                    {isLogged && <Link to="/">{ userName }</Link>}
                    {isLogged && <Link to="/">Log out</Link>}
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