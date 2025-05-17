import Header from "./HomeComponents/Header.jsx";
import { useIsLoggedStore, useLoggedUserStore } from "../Store/Store.js";
import SideBar from "./HomeComponents/SideBar.jsx";
import useCurrentUser from "../Hooks/useCurrentUser.jsx";
import ProfileBlock from "./ProfileComponents/ProfileBlock.jsx";


function UserProfile() {
    const page = true;

    useCurrentUser("http://localhost:3001/loggedUsers/");

    const userName = useLoggedUserStore(state => state.userName);
    const isLogged = useIsLoggedStore(state => state.isLogged);


    return(
        <>
            <div className="mainContainer">
                <Header userName={ userName } isLogged={isLogged}/>
                <SideBar page={ page }/>
                <ProfileBlock />
            </div>
        </>
    );
}

export default UserProfile;