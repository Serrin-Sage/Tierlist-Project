import { useState } from "react"
import { Link } from 'react-router-dom'

const SignUp = ({ users, setUsers, setLoggedIn, setCurrentUser }) => {

    let testArray = users.map((user) => {
        return  { 
                    username: user.username, 
                    password: user.password
                }
    })
    
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let newUser = {
            username: username,
            password: password,
            tierlist: []
        }
        if (username === "" && password === "") {
            console.log("ENTER VALID USERNAME AND PASSWORD")
            return
        }
        

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
        <div>
            <div>
            <h1>Sign Up</h1>
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
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
    export default SignUp