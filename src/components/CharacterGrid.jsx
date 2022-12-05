const CharacterGrid = ({ allCharacters, setDisplayChar }) => {
    
    const selectCharacter = (clickedDiv) => {
        setDisplayChar(clickedDiv)
    }

    return (
        <div>
            <div className="character-grid-container">
                {
                    allCharacters.map((character) => {
                        return (
                            <div key={character.id} className="grid-card" onClick={() => selectCharacter(character)}>
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