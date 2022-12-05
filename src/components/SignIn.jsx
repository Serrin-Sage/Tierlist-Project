import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = ({ users, setLoggedIn, setNewUser, setCurrentUser }) => {
    
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    
    const handleSubmit = (e) => {
        e.preventDefault()

        
        users.some(element => {
            if (element.username === username && element.password === password) {
                setCurrentUser(element), 
                setLoggedIn(true)
                return true
            } else {
                console.log("GO TO SIGN UP")
                return false
            }
        })
   
    }

    return (
        <div className="main-signin">
            <div className="signin-content">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)} />
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                <br />
                <Link to="/signup" onClick={() => setNewUser(true)}>Sign Up</Link>
            </div>
        </div>
    )
}

export default SignIn