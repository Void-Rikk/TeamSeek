import Header from "./HomeComponents/Header.jsx";
import SideBar from "./HomeComponents/SideBar.jsx";
import UserBlock from "./UserComponents/UserBlock.jsx";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch.jsx";

function UserPage() {
    const page = true;

    const { id } = useParams();
    const { data: user, isPending, error } = useFetch("http://localhost:7000/usersInfo/" + id);

    return (
        <>
            <div className="mainContainer">
                <Header />
                <SideBar page={page}/>
                { isPending && <div className="loading">Loading...</div> }
                { error && <div>{ error }</div>}
                { user &&
                    <UserBlock
                    page={page}
                    userName={user.name}
                    about={user.about}
                    stack={user.stack}
                    target={user.target}
                    bg={user.background}
                    url={user.url}
                /> }

            </div>
        </>
    );
}

export default UserPage;