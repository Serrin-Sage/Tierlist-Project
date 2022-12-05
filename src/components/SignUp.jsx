import { useState } from "react"
import { Link } from 'react-router-dom'

const SignUp = ({ users, setUsers, setLoggedIn, setCurrentUser }) => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userExists, setUserExists] = useState()

    let newID = users.map((user) => {
        return user.id
    })
    newID = Math.max(...newID) + 1

    let newUser = {
        id: newID,
        username: username,
        password: password,
        tierlist: []
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        users.some(element => {
            if (element.username == username) {
                console.log("USER ALREADY EXISTS")
                setUserExists(true)
                return true
            } else {
                setUserExists(false)
                return false
            }
        })
    }

    if (userExists === false) {
        console.log("CREATE A NEW USER")
        fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })


        setUsers((prevState) => {
            return [...prevState, newUser]
        })
        setLoggedIn(true)
        setCurrentUser(newUser)
    }

    return (
        <div className="main-signin">
            <div className="signin-content">
            <h1>Sign Up Here</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Enter Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)} />
                    </label>
                    <label>
                        <p>Enter Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div className="submit-btn">
                        <button type='submit'>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
    export default SignUp