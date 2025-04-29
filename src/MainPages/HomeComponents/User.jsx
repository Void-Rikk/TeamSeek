import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function User({ name, languages, roles }) {


    return (
        <>
            <div className="user">
                <Link to="/">
                    <p className="name">{name}</p>
                    <table className="langsTable">
                        <tbody>
                        <tr>
                            {languages.map((lang, index) => (
                                <td key={index}>{lang}</td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                    <table className="rolesTable">
                        <tbody>
                        <tr>
                            {roles.map((role, index) => (
                                <td key={index}>{role}</td>
                            ))}
                        </tr>
                        </tbody>
                    </table>
                </Link>
            </div>
        </>
    );
}

User.propTypes = {
    name: PropTypes.string,
    languages: PropTypes.array,
    roles: PropTypes.array,
};

export default User;