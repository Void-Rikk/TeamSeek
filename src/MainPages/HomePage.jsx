import Header from "./HomeComponents/Header.jsx";
import SideBar from "./HomeComponents/SideBar.jsx";
import { useState } from "react";
import useFetch from "../Hooks/useFetch.jsx";
import UsersList from "./HomeComponents/UsersList.jsx";


function HomePage() {
    const [isLogged, setIsLogged] = useState(false); // нужно реализовать логику изменения этого стейта
    const { data: userList, isPending, error, setData: setUserList } = useFetch("http://localhost:8000/users");

    return(
        <>
            <div className="mainContainer">
                <Header userName="Denis" isLogged={isLogged}/>
                {userList &&<SideBar users={userList} setUsers={setUserList}/>}
                {isPending && <div>Loading...</div> /*Сделать нормальное расположение*/}
                {userList && <UsersList users={userList} />}
            </div>
        </>
    );
}

export default HomePage;