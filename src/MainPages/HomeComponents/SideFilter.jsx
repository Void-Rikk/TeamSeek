import PropTypes from "prop-types";
import useFetch from "../../Hooks/useFetch.jsx";
import {useRef, useState} from "react";

function SideFilter({ users, setUsers }) {
    const filters = [
        {sphere: "Android", roles: ["Game Developer", "Software Engineer"], languages: ["Java", "Kotlin"], id: 1},
        {sphere: "Desktop", roles: ["Game Developer", "Software Engineer"],
            languages: ["C#", "C++", "C", "Java", "Python"], id: 2},
        {sphere: "iOS", roles: ["Game Developer", "Software Engineer"], languages: ["Swift"], id:3},
        {sphere: "Machine Learning", roles: ["AI Engineer", "Data Scientist"], languages: ["Python", "R"], id:4},
        {sphere: "Web Development", roles: ["Frontend Developer", "Backend Developer"],
            languages: ["JavaScript", "Go", "Java", "Python", "PHP", "TypeScript"], id:5},
    ];

    const usersRef = useRef(users);

    const checkUser = (user, boxName, prop) => {
        if (prop === 'lang') {
            const arrLang = user.languages;
            return arrLang.some(lang => {
                return lang === boxName;
            });
        }
    }

    const handleChangeLang = (e) => {
        const box = e.target;
        const boxName = e.target.name;

        if (box.checked === false) {
            setUsers(usersRef.current);
        }
        else {
            const newUsers = users.filter((user) => checkUser(user, boxName, "lang"));
            setUsers(newUsers);
        }
    }

    return (
        <>
            <div className="filterContainer">
                <p>Filter</p>
                <details>
                    <summary>Spheres</summary>
                    <ul>
                        {filters.map((item) => (
                            <li key={item.id}><input
                                type="checkbox"
                                name={item.sphere}
                                // onChange={handleChangeSphere}
                            />{item.sphere}
                                <details>
                                    <summary>Roles</summary>
                                    <ul>
                                        {item.roles.map((role, index) => (
                                            <li
                                                key={index}>
                                                <input type="checkbox"
                                                       name={role}
                                                       // onChange={handleChangeRole}
                                                />{role}
                                            </li>
                                        ))}
                                    </ul>
                                </details>

                                <details>
                                    <summary>Languages</summary>
                                    <ul>
                                        {item.languages.map((lang, index) => (
                                            <li
                                                key={index}>
                                                <input type="checkbox"
                                                       name={lang}
                                                       onChange={handleChangeLang}
                                                />{lang}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                                <br/>
                            </li>
                        ))}
                    </ul>
                </details>
            </div>
        </>
    );
}

SideFilter.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func,
};

export default SideFilter;