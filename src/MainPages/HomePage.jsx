import Header from "./HomeComponents/Header.jsx";
import SideBar from "./HomeComponents/SideBar.jsx";
import useFetch from "../Hooks/useFetch.jsx";
import UsersList from "./HomeComponents/UsersList.jsx";
import {useIsLoggedStore, useLoggedNameStore} from "../Store/Store.js";


function HomePage() {
    const userName = useLoggedNameStore(state => state.userName);
    const isLogged = useIsLoggedStore(state => state.isLogged);
    const { data: userList, isPending, error, setData: setUserList } = useFetch("http://localhost:8000/users");

    return(
        <>
            <div className="mainContainer">
                <Header userName={userName} isLogged={isLogged}/>
                { userList &&<SideBar users={userList} setUsers={setUserList}/> }
                { isPending && <div className="loading">Loading...</div> }
                { error && <div>{ error }</div> }
                { userList && <UsersList users={userList} /> }
            </div>
        </>
    );
}

export default HomePage;