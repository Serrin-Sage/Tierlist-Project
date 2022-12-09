const Header = ({ setLoggedIn, setNewUser, currentUser }) => {

    //Log out resets login and new user states
    const LogOut = () => {
        setLoggedIn(false)
        setNewUser(false)
    }

    return (
        <div className="header">
            <span onClick={() => LogOut()} className="logout-btn">Log Out</span>
            <h1 className="welcome-title">Welcome {currentUser.username}</h1>
        </div>
    )
}

export default Header