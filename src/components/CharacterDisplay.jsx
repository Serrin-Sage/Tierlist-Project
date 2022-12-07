const CharacterDisplay = ({ displayChar, setSTier, setATier, setBTier, setCTier, setFTier }) => {

    const assignToTier = (character, tierSetter, tierArray) => {
        tierSetter((prevState) => {
            if (prevState.includes(character)) return [...prevState]
            return [...prevState, character]
        })

        tierArray.forEach((tier) =>{
            if (tier === "S") {
                setSTier((prevState) => {
                    return [...prevState.filter((toRemove) => {
                        return toRemove.id !== character.id
                    })]
                })
            }
            if (tier === "A") {
                setATier((prevState) => {
                    return [...prevState.filter((toRemove) =>{
                        return toRemove.id !== character.id
                    })]
                })
            }
            if (tier === "B") {
                setBTier((prevState) => {
                    return [...prevState.filter((toRemove) =>{
                        return toRemove.id !== character.id
                    })]
                })
            }
            if (tier === "C") {
                setCTier((prevState) => {
                    return [...prevState.filter((toRemove) =>{
                        return toRemove.id !== character.id
                    })]
                })
            }
            if (tier === "F") {
                setFTier((prevState) => {
                    return [...prevState.filter((toRemove) =>{
                        return toRemove.id !== character.id
                    })]
                })
            }
        })  
    }
    
    return (
        <div className="display-container">
            {
                displayChar && <div className="display-card" >
                    <h2>{displayChar.name}</h2>
                    <img src={displayChar.displayImg} className="display-image"/>
                    <div className="attributes"> 
                        <p><strong>Strength:</strong> {displayChar.strength}</p>
                        <p><strong>Weakness:</strong> {displayChar.weakness}</p>
                    </div>
                    <div className="tier-btn-container">
                        <div className="tier-btn" id="s-btn" onClick={() => assignToTier(displayChar, setSTier, ["A", "B", "C", "F"])}>S</div>
                        <div className="tier-btn" id="a-btn"onClick={() => assignToTier(displayChar, setATier, ["S", "B", "C", "F"])}>A</div>
                        <div className="tier-btn" id="b-btn"onClick={() => assignToTier(displayChar, setBTier, ["S", "A", "C", "F"])}>B</div>
                        <div className="tier-btn" id="c-btn" onClick={() => assignToTier(displayChar, setCTier, ["S", "A", "B", "F"])}>C</div>
                        <div className="tier-btn" id="f-btn" onClick={() => assignToTier(displayChar, setFTier, ["S", "A", "B", "C"])}>F</div>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default CharacterDisplay