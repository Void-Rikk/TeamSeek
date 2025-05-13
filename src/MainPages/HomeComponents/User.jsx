import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function User({ name, languages, roles, id }) {


    return (
        <>
            <div className="user">
                <Link to={`/users/${id}`}>
                    <p className="name">{name}</p>
                    <div className="langs">
                        {languages.map((lang, index) => (
                            <p key={index}
                               className="lang">{lang}</p>
                        ))}
                    </div>

                    <div className="roles">
                        {roles.map((role, index) => (
                            <p key={index}
                               className="role">{role}</p>
                        ))}
                    </div>
                </Link>
            </div>
        </>
    );
}

User.propTypes = {
    name: PropTypes.string,
    languages: PropTypes.array,
    roles: PropTypes.array,
    id: PropTypes.number,
};

export default User;