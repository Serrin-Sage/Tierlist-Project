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

    // const assignToS = ( character ) => {
    //     setSTier((prevState) => {
    //         if (prevState.includes(character)) return [...prevState]
    //         return [...prevState, character]
    //     })
    //     setATier((prevState) => {
    //         return [...prevState.filter((toRemove) =>{
    //             return toRemove.id !== character.id
    //         })]
    //     })
    // }
    
    // const assignToA = ( character ) => {
    //     setATier((prevState) => {
    //         if (prevState.includes(character)) return [...prevState]
    //         return [...prevState, character]
    //     })
    //     setSTier((prevState) => {
    //         return [...prevState.filter((toRemove) =>{
    //             return toRemove.id !== character.id
    //         })]
    //     })
    // }

    
    return (
        <div className="display-container">
            {
                displayChar && <div className="display-card" >
                    <p>{displayChar.name}</p>
                    <img src={displayChar.displayImg} className="display-image"/>
                    <p>Strength: {displayChar.strength}</p>
                    <p>Weakness: {displayChar.weakness}</p>
                    <div className="tier-btn-container">
                        <div className="tier-btn" onClick={() => assignToTier(displayChar, setSTier, ["A", "B", "C", "F"])}>S</div>
                        <div className="tier-btn" onClick={() => assignToTier(displayChar, setATier, ["S", "B", "C", "F"])}>A</div>
                        <div className="tier-btn" onClick={() => assignToTier(displayChar, setBTier, ["S", "A", "C", "F"])}>B</div>
                        <div className="tier-btn" onClick={() => assignToTier(displayChar, setCTier, ["S", "A", "B", "F"])}>C</div>
                        <div className="tier-btn" onClick={() => assignToTier(displayChar, setFTier, ["S", "A", "B", "C"])}>F</div>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default CharacterDisplay