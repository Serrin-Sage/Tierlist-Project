import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Header from './Header'
import CharacterGrid from './CharacterGrid'
import CharacterDisplay from './CharacterDisplay'
import TierList from './TierList'


const MainPage = ({ setLoggedIn, setNewUser, currentUser, setSavedTierList }) => {

    //Placeholder to display when no character is selected
    let placeHolder = {
        name: "Choose a Character",
        thumbnail: "",
        displayImg: "https://tinyurl.com/question-mark",
        strength: "N/A",
        weakness: "N/A"
    }

    //Use states for all characters, displayed character, and each tier as their own array
    const [allCharacters, setAllCharacters] = useState(currentUser.characters)
    const [displayChar, setDisplayChar] = useState(placeHolder)
    const [sTier, setSTier] = useState([])
    const [aTier, setATier] = useState([])
    const [bTier, setBTier] = useState([])
    const [cTier, setCTier] = useState([])
    const [fTier, setFTier] = useState([])
 
    const tiers = {sTier, aTier, bTier, cTier, fTier}
    const tierSets = {setSTier, setATier, setBTier, setCTier, setFTier}

    return (
        <div>
            <Header setLoggedIn={setLoggedIn} setNewUser={setNewUser} currentUser={currentUser}/>
            <div className="title">
                <h1>Fic-Tier-al Display</h1>
                <p>Rank Fictional Characters from any media in Tiers, <br/>add new characters, <br/>save your tierlists, <br />and view other users lists!</p>
            </div>
            <CharacterGrid currentUser={currentUser} allCharacters={allCharacters} setAllCharacters={setAllCharacters} setDisplayChar={setDisplayChar}/>
            <CharacterDisplay 
                displayChar={displayChar}
                tierSets={tierSets}
            />
            <TierList 
                currentUser={currentUser}
                tiers={tiers}
                tierSets={tierSets}
                setSavedTierList={setSavedTierList}
            />
        </div>
    )
}

export default MainPage