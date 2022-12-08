import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Header from './Header'
import CharacterGrid from './CharacterGrid'
import CharacterDisplay from './CharacterDisplay'
import TierList from './TierList'


const MainPage = ({ setLoggedIn, setNewUser, currentUser, setSavedTierList }) => {

    
    let placeHolder = {
        name: "Choose a Character",
        thumbnail: "",
        displayImg: "https://tinyurl.com/question-mark",
        strength: "N/A",
        weakness: "N/A"
    }

    const [allCharacters, setAllCharacters] = useState(currentUser.characters)
    const [displayChar, setDisplayChar] = useState(placeHolder)
    const [sTier, setSTier] = useState([])
    const [aTier, setATier] = useState([])
    const [bTier, setBTier] = useState([])
    const [cTier, setCTier] = useState([])
    const [fTier, setFTier] = useState([])


    // useEffect(() => {
    //     fetch("http://localhost:3000/users")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data.characters)
    //         setAllCharacters(data)
    //     })
    // },[setAllCharacters])

    
    return (
        <div>
            <Header setLoggedIn={setLoggedIn} setNewUser={setNewUser} currentUser={currentUser}/>
            <div className="title">
                <h1>Character Tier List</h1>
                <p>Rank Fictional Characters from any media in Tiers, <br/>add new characters, <br/>save your tierlists, <br />and view other users lists!</p>
            </div>
            <CharacterGrid allCharacters={allCharacters} setAllCharacters={setAllCharacters} setDisplayChar={setDisplayChar}/>
            <CharacterDisplay 
                displayChar={displayChar}
                setSTier={setSTier}
                setATier={setATier}
                setBTier={setBTier}
                setCTier={setCTier}
                setFTier={setFTier}
            />
            <TierList 
                currentUser={currentUser}
                sTier={sTier}
                aTier={aTier}
                bTier={bTier}
                cTier={cTier}
                fTier={fTier}
                setSavedTierList={setSavedTierList}
            />
        </div>
    )
}

export default MainPage