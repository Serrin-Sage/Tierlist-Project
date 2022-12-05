import { useState } from "react"
import { Link } from 'react-router-dom'

const SignUp = ({ users, setUsers, setLoggedIn, setCurrentUser }) => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let newUser = {
            username: username,
            password: password,
            tierlist: []
        }
        
        users.some(element => {
            if (element.username == username) {
                console.log("USER ALREADY EXISTS")
                return true
            } else {
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
                return false
            }
        })
    }

    return (
        <div>
            <div>
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
                    <div>
                        <button type='submit'>Complete</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
    export default SignUp