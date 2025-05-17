import { useRef, useState } from "react";
import {useLoggedUserStore} from "../../Store/Store.js";

function ProfileBlock() {
    const [languages, setLanguages] = useState([]);
    const [roles, setRoles] = useState([]);

    const [isPending, setIsPending] = useState(false);

    const [url, setUrl] = useState('');
    const [about, setAbout] = useState('');
    const [stack, setStack] = useState('');
    const [target, setTarget] = useState('');
    const [background, setBackground] = useState('');
    const [contacts, setContacts] = useState('');

    const name = useLoggedUserStore(state => state.userName);

    const langSelectRef = useRef();
    const roleSelectRef = useRef();

    const handleAddLang = (e) => {
        e.preventDefault();
        if (languages.includes(langSelectRef.current.value)) {
            return;
        }
        else {
            setLanguages([...languages, langSelectRef.current.value]);
        }
    }

    const handleRemoveLang = (e) => {
        e.preventDefault();
        const delIndex = languages.indexOf(langSelectRef.current.value);
        setLanguages(languages.filter(lang => (languages.indexOf(lang)) !== delIndex));
    }

    const handleAddRole = (e) => {
        e.preventDefault();
        if (roles.includes(roleSelectRef.current.value)) {
            return;
        }
        else {
            setRoles([...roles, roleSelectRef.current.value]);
        }
    }

    const handleRemoveRole = (e) => {
        e.preventDefault();
        const delIndex = roles.indexOf(roleSelectRef.current.value);
        setRoles(roles.filter(role => (roles.indexOf(role)) !== delIndex));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = { name, url, about, stack, target, background, contacts, languages, roles };

        setIsPending(true);

        fetch("http://localhost:8000/users", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        }).then(() => {
            console.log("Card created");
            setIsPending(false);
        });
    }

    return(
        <>
            <div className="profileBlock">
                <h1 className="createHeader">Create your card</h1>


                <form className="mainForm"
                      onSubmit={handleSubmit}
                >
                    <h3 className="mainFormHeader">Main info</h3>

                    <label className="createLabels">Your GitHub/GitLab/BitBucket link</label> <br/>
                    <input
                        type="text"
                        className="createInputs"
                        required
                        onChange={(e) => setUrl(e.target.value)}
                    /> <br/>

                    <label className="createLabels">About you</label> <br/>
                    <textarea
                        className="createInputs"
                        required
                        onChange={(e) => setAbout(e.target.value)}
                    /> <br/>

                    <label className="createLabels">Your stack of technologies</label> <br/>
                    <textarea
                        className="createInputs"
                        required
                        onChange={(e) => setStack(e.target.value)}
                    /> <br/>

                    <label className="createLabels">What`s your target?</label> <br/>
                    <textarea
                        className="createInputs"
                        required
                        onChange={(e) => setTarget(e.target.value)}
                    /> <br/>

                    <label className="createLabels">Describe your background</label> <br/>
                    <textarea
                        className="createInputs"
                        required
                        onChange={(e) => setBackground(e.target.value)}
                    /> <br/>

                    <label className="createLabels">Leave some contacts</label> <br/>
                    <textarea
                        className="createInputs"
                        required
                        onChange={(e) => setContacts(e.target.value)}
                    /> <br/>

                    { isPending && <button className="createButton" disabled>Create</button> }
                    { !isPending && <button className="createButton">Create</button> }
                </form>

                <h3 className="cardFormHeader">Card info</h3>

                <label className="createLabels">Choose your languages</label> <br/>
                <select className="langSelect" ref={langSelectRef}>
                    <option value="C#">C#</option>
                    <option value="C++">C++</option>
                    <option value="C">C</option>
                    <option value="Go">Go</option>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Kotlin">Kotlin</option>
                    <option value="Python">Python</option>
                    <option value="PHP">PHP</option>
                    <option value="R">R</option>
                    <option value="Swift">Swift</option>
                    <option value="TypeScript">TypeScript</option>
                </select>
                <button className="addButtons" onClick={handleAddLang}>Add</button>
                <button className="removeButtons" onClick={handleRemoveLang}>Remove</button>
                <br/>
                <select className="roleSelect" ref={roleSelectRef}>
                    <option value="AI Engineer">AI Engineer</option>
                    <option value="Backend">Backend</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Game Developer">Game Developer</option>
                    <option value="Software Developer">Software Developer</option>
                </select>
                <button className="addButtons" onClick={handleAddRole}>Add</button>
                <button className="removeButtons" onClick={handleRemoveRole}>Remove</button>

                <details>
                    <summary>Chosen languages</summary>
                    <ul>
                        {languages.map((lang, index) => (
                            <li key={index}>{lang}</li>
                        ))}
                    </ul>
                </details>

                <details>
                    <summary>Chosen roles</summary>
                    <ul>
                        {roles.map((role, index) => (
                            <li key={index}>{role}</li>
                        ))}
                    </ul>
                </details>
            </div>
        </>
    );
}

export default ProfileBlock;