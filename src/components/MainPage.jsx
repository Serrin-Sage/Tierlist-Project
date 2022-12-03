import { useState, useEffect } from "react"
import CharacterGrid from './CharacterGrid'
import CharacterDisplay from './CharacterDisplay'
import TietList from './TierList'


const MainPage = () => {

    const [allCharacters, setAllCharacters] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/characters")
        .then((res) => res.json())
        .then((data) => {
            setAllCharacters(data)
        })
    },[setAllCharacters])


    return (
        <div>
            <h1>Character Tier List</h1>
            <p>Put Characters in Tiers, add new characters, save your tierlists and vote on others!</p>
            <CharacterGrid allCharacters={allCharacters} />
        </div>
    )
}

export default MainPage