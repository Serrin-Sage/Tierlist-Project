import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Header from './Header'
import CharacterGrid from './CharacterGrid'
import CharacterDisplay from './CharacterDisplay'
import TierList from './TierList'


const MainPage = ({ setLoggedIn, setNewUser, currentUser }) => {

    const [allCharacters, setAllCharacters] = useState([])
    const [displayChar, setDisplayChar] = useState([])
    const [userTiers, setUserTiers] = useState([])
    const [sTier, setSTier] = useState([])
    const [aTier, setATier] = useState([])
    const [bTier, setBTier] = useState([])
    const [cTier, setCTier] = useState([])
    const [fTier, setFTier] = useState([])


    useEffect(() => {
        fetch("http://localhost:3000/characters")
        .then((res) => res.json())
        .then((data) => {
            setAllCharacters(data)
        })
    },[setAllCharacters])

    
    return (
        <div>
            <Header setLoggedIn={setLoggedIn} setNewUser={setNewUser} currentUser={currentUser}/>
            <div className="title">
                <h1>Character Tier List</h1>
                <p>Put Characters in Tiers, add new characters, save your tierlists and vote on others!</p>
            </div>
            <CharacterGrid allCharacters={allCharacters} setDisplayChar={setDisplayChar}/>
            <CharacterDisplay 
                displayChar={displayChar} 
                userTiers={userTiers}
                setUserTiers={setUserTiers}
                setSTier={setSTier}
                setATier={setATier}
                setBTier={setBTier}
                setCTier={setCTier}
                setFTier={setFTier}
            />
            <TierList 
                sTier={sTier}
                aTier={aTier}
                bTier={bTier}
                cTier={cTier}
                fTier={fTier}
            />
        </div>
    )
}

export default MainPage