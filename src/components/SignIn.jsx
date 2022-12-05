import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignIn = ({ users, setLoggedIn, setNewUser, setCurrentUser }) => {
    
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    
    const [noUser, setNoUser] = useState(false)

    const notify = () => toast("User does not exist: Go to Sign Up")
    const handleSubmit = (e) => {
        e.preventDefault()

        
        users.some(element => {
            if (element.username === username && element.password === password) {
                setCurrentUser(element), 
                setLoggedIn(true)
                return true
            } else {
                console.log("GO TO SIGN UP")
                setNoUser(true)
                return false
            }
        })

        
   
    }
    if (noUser) {
        notify()
        setNoUser(false)
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
                    <div className='submit-btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                <br />
                <div className="signup-link">
                    <Link to="/signup" onClick={() => setNewUser(true)} className="signup-text">Sign Up</Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SignIn