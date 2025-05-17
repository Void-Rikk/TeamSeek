import PropTypes from "prop-types";

function UserBlock( {userName, about, stack, target, bg, contacts, url} ) {

    return (
        <>
            <div className="blockContainer">
                <div className="userHeader">
                    <h2 className="userName">{userName}</h2>
                    <a href={ url } target="_blank">My GitHub</a>
                </div>

                <div className="infoContainer">
                    <label className="infoLabels">About me</label>
                    <p className="aboutUser">{ about }</p>

                    <label className="infoLabels">Stack</label>
                    <p className="stackUser">{ stack }</p>

                    <label className="infoLabels">Target</label>
                    <p className="targetUser">{ target }</p>

                    <label className="infoLabels">Background</label>
                    <p className="backgroundUser">{ bg }</p>

                    <label className="infoLabels">Contacts</label>
                    <p className="contactsUser">{ contacts }</p>
                </div>
            </div>
        </>
    );
}

UserBlock.propTypes = {
    userName: PropTypes.string,
    about: PropTypes.string,
    stack: PropTypes.string,
    target: PropTypes.string,
    bg: PropTypes.string,
    contacts: PropTypes.string,
    url: PropTypes.string,
}

export default UserBlock;