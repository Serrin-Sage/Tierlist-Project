const CharacterDisplay = ({ displayChar, tierSets }) => {

    /*Assign character to a given tier, takes in the selected character,
    the tier that was selected and an array of letters that does not include the selected letter.
    Character can only be assigned to one tier and will be removed if put into another.
    */
    const assignToTier = (character, tierSetter, tierArray) => {
        tierSetter((prevState) => {
            if (prevState.includes(character)) return [...prevState]
            return [...prevState, character]
        })

        tierArray.forEach((tier) =>{
            if (tier === "S") {
                tierSets.setSTier((prevState) => {
                    return [...prevState.filter((toRemove) => {
                        return toRemove.id !== character.id
                    })]
                })
            }
            if (tier === "A") {
                tierSets.setATier((prevState) => {
                    return [...prevState.filter((toRemove) =>{
                        return toRemove.id !== character.id
                    })]
                })
            }
            if (tier === "B") {
                tierSets.setBTier((prevState) => {
                    return [...prevState.filter((toRemove) =>{
                        return toRemove.id !== character.id
                    })]
                })
            }
            if (tier === "C") {
                tierSets.setCTier((prevState) => {
                    return [...prevState.filter((toRemove) =>{
                        return toRemove.id !== character.id
                    })]
                })
            }
            if (tier === "F") {
                tierSets.setFTier((prevState) => {
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
                displayChar.name !== "Choose a Character" ?
                    <div className="display-card" >
                        <h2>{displayChar.name}</h2>
                        <img src={displayChar.displayImg} className="display-image"/>
                        <div className="attributes">
                            <p><strong>Strength:</strong> {displayChar.strength}</p>
                            <p><strong>Weakness:</strong> {displayChar.weakness}</p>
                        </div>
                        <div className="tier-btn-container">
                            <div className="tier-btn" id="s-btn" onClick={() => assignToTier(displayChar, tierSets.setSTier, ["A", "B", "C", "F"])}>S</div>
                            <div className="tier-btn" id="a-btn" onClick={() => assignToTier(displayChar, tierSets.setATier, ["S", "B", "C", "F"])}>A</div>
                            <div className="tier-btn" id="b-btn" onClick={() => assignToTier(displayChar, tierSets.setBTier, ["S", "A", "C", "F"])}>B</div>
                            <div className="tier-btn" id="c-btn" onClick={() => assignToTier(displayChar, tierSets.setCTier, ["S", "A", "B", "F"])}>C</div>
                            <div className="tier-btn" id="f-btn" onClick={() => assignToTier(displayChar, tierSets.setFTier, ["S", "A", "B", "C"])}>F</div>
                        </div>
                    </div>
                    :
                    <div className="display-card" >
                        <h2>{displayChar.name}</h2>
                        <img src={displayChar.displayImg} className="display-image" />
                        <div className="attributes">
                            <p><strong>Strength:</strong> {displayChar.strength}</p>
                            <p><strong>Weakness:</strong> {displayChar.weakness}</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default CharacterDisplay