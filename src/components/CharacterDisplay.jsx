const CharacterDisplay = ({ displayChar }) => {

    return (
        <div className="display-container">
            {
                displayChar && <div className="display-card">
                    <p>{displayChar.name}</p>
                    <img src={displayChar.displayImg} />
                    <p>Strength: {displayChar.strength}</p>
                    <p>Weakness: {displayChar.weakness}</p>
                </div>
            }
            
        </div>
    )
}

export default CharacterDisplay