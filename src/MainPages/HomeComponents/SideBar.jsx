import { Link } from "react-router-dom";
import SideFilter from "./SideFilter.jsx";
import PropTypes from "prop-types";

function SideBar({ users, setUsers }) {

    return(
        <>
            <div className="sideBar">
                <div className="links">
                    <Link to='/'>Find team</Link>
                    <Link to='/'>Requests</Link>
                </div>
                <SideFilter users={users} setUsers={setUsers}/>
            </div>
        </>
    );
}

SideBar.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func,
};

export default SideBar;