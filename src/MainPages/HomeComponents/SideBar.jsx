import { Link } from "react-router-dom";
import SideFilter from "./SideFilter.jsx";
import PropTypes from "prop-types";

function SideBar({ users, setUsers, page }) {

    return(
        <>
            <div className="sideBar">
                <div className="links">
                    <Link to='/'>Find team</Link>
                </div>
                {!page && <SideFilter users={users} setUsers={setUsers}/>}
            </div>
        </>
    );
}

SideBar.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func,
    page: PropTypes.bool,
};

export default SideBar;