import User from "./User.jsx";
import PropTypes from "prop-types";

function UsersList( {users} ) {


    return (
        <>
            <div className="usersContainer">
                {users.map((user) => (
                    <User key={ user.id }
                          name={ user.name }
                          languages={ user.languages }
                          roles={ user.roles }
                          id={ user.id }
                    />
                ))}
            </div>
        </>
    );
}

UsersList.propTypes = {
    users: PropTypes.array,
};

export default UsersList;