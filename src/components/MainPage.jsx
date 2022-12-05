import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import CharacterGrid from './CharacterGrid'
import CharacterDisplay from './CharacterDisplay'
import TietList from './TierList'


const MainPage = ({ setLoggedIn, setNewUser, currentUser }) => {

    const [allCharacters, setAllCharacters] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/characters")
        .then((res) => res.json())
        .then((data) => {
            setAllCharacters(data)
        })
    },[setAllCharacters])

    const LogOut = () => {
        setLoggedIn(false)
        setNewUser(false)
    }
    console.log(currentUser)
    return (
        <div>
            <button onClick={() => LogOut()}>Log Out</button>
            <h1>Welcome {currentUser.username}</h1>
            <h1>Character Tier List</h1>
            <p>Put Characters in Tiers, add new characters, save your tierlists and vote on others!</p>
            <CharacterGrid allCharacters={allCharacters} />
        </div>
    )
}

export default MainPage