import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import GlobalTiers from './components/GlobalTiers'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  /* Use states to check if the user is logged in, if the user is new,
    user array to check, the current user, and the saved tier list
  */
  const [loggedIn, setLoggedIn] = useState(false)
  const [newUser, setNewUser] = useState(false)
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const [savedTierList, setSavedTierList] = useState([])
  
  
  //get users from db and set users into array
  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data)
      console.log(users)
    })
  },[setUsers])

  //if the user is not logged in, show the Sign in page
  //if the user is new show the Sign up page
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
        
        {['mainpage', '/'].map(path => <Route path={path} element={<MainPage 
          setLoggedIn={setLoggedIn} 
          setNewUser={setNewUser}
          currentUser={currentUser}
          setSavedTierList={setSavedTierList}/>} />)}
          
        <Route path="signin" element={<SignIn users={users} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} setNewUser={setNewUser} />} />
        <Route path="signup" element={<SignUp users={users} setUsers={setUsers} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />} />
        <Route path="globaltiers" element={<GlobalTiers savedTierList={savedTierList}/>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
