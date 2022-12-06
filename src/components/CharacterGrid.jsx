const CharacterGrid = ({ allCharacters, setDisplayChar }) => {
    
    const selectCharacter = (clickedDiv) => {
        setDisplayChar(clickedDiv)
    }

    return (
        <div className="character-grid-container">
            <div className="character-grid">
                {
                    allCharacters.map((character) => {
                        return (
                            <div key={character.id} className="grid-card" onMouseOver={() => selectCharacter(character)}>
                                <img src={character.thumbnail} alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CharacterGrid