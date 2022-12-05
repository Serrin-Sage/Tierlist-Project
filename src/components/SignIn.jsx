import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignIn = ({ users, setLoggedIn, setNewUser, setCurrentUser }) => {
    
    let testArray = users.map((user) => {
        return  user
    })

    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    
    const handleSubmit = (e) => {
        e.preventDefault()

        users.some(element => {
            if (element.username === username && element.password === password) {
                return setCurrentUser(element), setLoggedIn(true)
            } else {
                console.log("GO TO SIGN UP")
                return
            }
            
        })

        let credentials = {
            username,
            password
        }
        // console.log(credentials)
        // console.log(testArray)

        //trying to check if user exists in db
        // if (testArray.some(e => e.username === username) && testArray.some(e => e.password === password)) {
        //     console.log("USER EXISTS")
        //     setLoggedIn(true)
        //     // setCurrentUser(current)
        // } else {
        //     console.log("GO TO SIGN UP PAGE")
        // }
        

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