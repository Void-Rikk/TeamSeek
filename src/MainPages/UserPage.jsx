import Header from "./HomeComponents/Header.jsx";
import SideBar from "./HomeComponents/SideBar.jsx";
import UserBlock from "./UserComponents/UserBlock.jsx";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch.jsx";
import { useIsLoggedStore, useLoggedUserStore } from "../Store/Store.js";
import useCurrentUser from "../Hooks/useCurrentUser.jsx";

function UserPage() {
    useCurrentUser("http://localhost:3001/loggedUsers/");

    const page = true;

    const isLogged = useIsLoggedStore(state => state.isLogged);
    const currentUserName = useLoggedUserStore(state => state.userName);

    const { id } = useParams();
    const { data: user, isPending, error } = useFetch("http://localhost:8000/users/" + id);

    return (
        <>
            <div className="mainContainer">
                <Header userName={ currentUserName } isLogged={ isLogged }/>
                <SideBar page={ page }/>
                { isPending && <div className="loading">Loading...</div> }
                { error && <div>{ error }</div>}
                { user &&
                    <UserBlock
                    page={ page }
                    userName={ user.name }
                    about={ user.about }
                    stack={ user.stack }
                    target={ user.target }
                    bg={ user.background }
                    contacts={ user.contacts }
                    url={ user.url }
                /> }

            </div>
        </>
    );
}

export default UserPage;