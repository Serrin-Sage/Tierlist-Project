import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import GlobalTiers from './components/GlobalTiers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [newUser, setNewUser] = useState(false)
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data)
      console.log(users)
    })
  },[setUsers])

  //if the user is not logged in, show the login page
  if(!loggedIn) {
    if(newUser) {
      return <SignUp 
        users={users} 
        setUsers={setUsers} 
        setLoggedIn={setLoggedIn}
        setCurrentUser={setCurrentUser}/>
    }
    return <SignIn 
      users={users} 
      setLoggedIn={setLoggedIn} 
      setNewUser={setNewUser} 
      setCurrentUser={setCurrentUser}/>
    
  }

  
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/mainpage" element={<MainPage setLoggedIn={setLoggedIn} setNewUser={setNewUser}/>}/>
        <Route path="/" element={<MainPage setLoggedIn={setLoggedIn} setNewUser={setNewUser}/>}/> */}

        {['mainpage', '/'].map(path => <Route path={path} element={<MainPage 
          setLoggedIn={setLoggedIn} 
          setNewUser={setNewUser}
          currentUser={currentUser}/>} />)}
          
        <Route path="signin" element={<SignIn users={users} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} setNewUser={setNewUser} />} />
        <Route path="signup" element={<SignUp users={users} setUsers={setUsers} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />} />
        <Route path="globaltiers" element={GlobalTiers} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
