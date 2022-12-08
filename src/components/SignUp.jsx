import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ users, setUsers, setLoggedIn, setCurrentUser }) => {

    const navigate = useNavigate();

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [userExists, setUserExists] = useState()

    const notify = () => toast.error("Username Taken", {
        className: "black-background"
    })
    const notifyBlank = () => toast.error("All fields must be filled", {
        className: "black-background"
    })
    
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
        
        if (username === "" || password === "") {
            notifyBlank()
            return
        }
        users.some(element => {
            if (element.username == username) {
                // console.log("USER ALREADY EXISTS")
                setUserExists(true)
                return true
            } else {
                setUserExists(false)
                return false
            }
        })
    }

    if (userExists === false) {
        console.log("NEW USER CREATED")
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
        setUserExists()
        navigate('/mainpage')
    }

    if (userExists === true) {
        notify()
        setUserExists()
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
                    <div className="confirm-container">
                        <button type='submit' className="submit-btn">Confirm</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
    export default SignUp