const Header = ({ setLoggedIn, setNewUser, currentUser }) => {

    const LogOut = () => {
        setLoggedIn(false)
        setNewUser(false)
    }

    return (
        <div className="header">
            <button onClick={() => LogOut()}>Log Out</button>
            <h1>Welcome {currentUser.username}</h1>
        </div>
    )
}

export default Header