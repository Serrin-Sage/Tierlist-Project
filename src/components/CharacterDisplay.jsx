const CharacterDisplay = ({ displayChar, userTiers,setUserTiers, setSTier, setATier }) => {

    const assignToTier = (clickedTier, tierSetter) => {
        //NEED TO FIND A WAY TO NOT ASSIGN TO MULTIPLE TIERS
        setUserTiers((prevState) => {
            if (prevState.includes(clickedTier)) return [...prevState]
            return [...prevState, clickedTier]
        })

        tierSetter((prevState) => {
            if (prevState.includes(clickedTier)) return [...prevState]
            return [...prevState, clickedTier]
        })
        

    }
    return (
        <div className="display-container">
            {
                displayChar && <div className="display-card" >
                    <p>{displayChar.name}</p>
                    <img src={displayChar.displayImg} className="display-image"/>
                    <p>Strength: {displayChar.strength}</p>
                    <p>Weakness: {displayChar.weakness}</p>
                    <div className="tier-btn-container">
                        <div className="tier-btn" onClick={() => assignToTier(displayChar, setSTier)}>S</div>
                        <div className="tier-btn" onClick={() => assignToTier(displayChar, setATier)}>A</div>
                        <div className="tier-btn">B</div>
                        <div className="tier-btn">C</div>
                        <div className="tier-btn">F</div>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default CharacterDisplay