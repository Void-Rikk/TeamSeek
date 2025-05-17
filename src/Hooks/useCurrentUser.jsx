import { useEffect } from "react";
import { useIsLoggedStore, useLoggedUserStore } from "../Store/Store.js";


function useCurrentUser(url) {
    const setIsLogged = useIsLoggedStore(state => state.setIsLogged);
    const setUserName = useLoggedUserStore(state => state.setUserName);

    const currentUserURL = url + sessionStorage.getItem("id");
    useEffect(() => {
        const abortCont = new AbortController();
        if (sessionStorage.getItem("id") !== null) {
            fetch(currentUserURL, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error("Could not fetch the data");
                    }
                    return res.json();
                })
                .then(data => {
                    setIsLogged(true);
                    setUserName(data.name);
                })
                .catch(err => {
                    if (err.name === "AbortError") {
                        console.log("Fetch aborted");
                    }
                })
        }
        return () => abortCont.abort();
    }, [url]);
}

export default useCurrentUser;