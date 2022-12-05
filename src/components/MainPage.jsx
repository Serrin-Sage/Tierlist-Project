import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Header from './Header'
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

    
    console.log(currentUser)
    return (
        <div>
            <Header setLoggedIn={setLoggedIn} setNewUser={setNewUser} currentUser={currentUser}/>
            <h1>Character Tier List</h1>
            <p>Put Characters in Tiers, add new characters, save your tierlists and vote on others!</p>
            <CharacterGrid allCharacters={allCharacters} />
        </div>
    )
}

export default MainPage