import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = ({ users, setLoggedIn }) => {
    
    let testArray = users.map((user) => {
        return  { 
                    username: user.username, 
                    password: user.password
                }
    })

    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        let credentials = {
            username,
            password
        }
        console.log(credentials)
        console.log(testArray)
        if (testArray.some(e => e.username === username) && testArray.some(e => e.password === password)) {
            console.log("USER EXISTS")
        } else {
            console.log("GO TO SIGN UP PAGE")
        }
        // setLoggedIn(true)
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
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default SignIn