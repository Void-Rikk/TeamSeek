import PropTypes from "prop-types";
import { useRef } from "react";

function SideFilter({ users, setUsers }) {
    const filters = [
        {sphere: "Android", roles: ["Game Developer", "Software Engineer"], languages: ["Java", "Kotlin"], id: 1},
        {sphere: "Desktop", roles: ["Game Developer", "Software Engineer"],
            languages: ["C#", "C++", "C", "Java", "Python"], id: 2},
        {sphere: "iOS", roles: ["Game Developer", "Software Engineer"], languages: ["Swift"], id:3},
        {sphere: "Machine Learning", roles: ["AI Engineer", "Data Scientist"], languages: ["Python", "R"], id:4},
        {sphere: "Web Development", roles: ["Frontend", "Backend"],
            languages: ["JavaScript", "Go", "Java", "Python", "PHP", "TypeScript"], id:5},
    ];

    const usersRef = useRef(users);
    const langChecks = useRef([]);
    const roleChecks = useRef([]);

    const deleteCheck = (arr, boxName) => {
        const index = arr.indexOf(boxName);
        arr.splice(index, 1);
    }

    const checkUser = (user) => {
        const checks = [];
        for (let lang of langChecks.current) {
            if (user.languages.includes(lang)) {
                checks.push(true);
            }
            else {
                checks.push(false);
            }
        }
        for (let role of roleChecks.current) {
            if (user.roles.includes(role)) {
                checks.push(true);
            }
            else {
                checks.push(false);
            }
        }
        if (checks.every(item => (item === true))) {
            return true;
        }
        return false;
    }

    const handleChangeLang = (e) => {
        const box = e.target;
        const boxName = box.name;
        if (box.checked === false) {
            deleteCheck(langChecks.current, boxName);
            const newUsers = usersRef.current.filter(user => checkUser(user));
            setUsers(newUsers);
        }
        else {
            langChecks.current.push(boxName);
            const newUsers = users.filter(user => checkUser(user));
            setUsers(newUsers);
        }
    }

    const handleChangeRole = (e) => {
        const box = e.target;
        const boxName = box.name;
        if (box.checked === false) {
            deleteCheck(roleChecks.current, boxName);
            const newUsers = usersRef.current.filter(user => checkUser(user));
            setUsers(newUsers);
        }
        else {
            roleChecks.current.push(boxName);
            const newUsers = users.filter(user => checkUser(user));
            setUsers(newUsers);
        }
    }

    return (
        <>
            <div className="filterContainer">
                <p>Filter</p>
                <ul>
                    {filters.map((item) => (
                        <li key={item.id}>
                            {item.sphere}
                            <details>
                                <summary>Roles</summary>
                                <ul>
                                    {item.roles.map((role, index) => (
                                        <li
                                            key={index}>
                                            <input type="checkbox"
                                                   name={role}
                                                   onChange={handleChangeRole}
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
            </div>
        </>
    );
}

SideFilter.propTypes = {
    users: PropTypes.array,
    setUsers: PropTypes.func,
};

export default SideFilter;