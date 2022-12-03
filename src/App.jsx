import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import GlobalTiers from './components/GlobalTiers'
function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data)
    })
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="mainpage" element={MainPage}/>
        <Route path="signin" element={<SignIn users={users} />} />
        <Route path="signup" element={<SignUp users={users} />} />
        <Route path="globaltiers" element={GlobalTiers} />
      </Routes>
    </div>
  )
}

export default App
