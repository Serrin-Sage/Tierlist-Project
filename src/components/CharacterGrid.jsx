const CharacterGrid = ({ allCharacters }) => {
    
    return (
        <div>
            <div className="character-grid-container">
                {
                    allCharacters.map((character) => {
                        return (
                            <div key={character.id} className="grid-card" onClick={() => console.log(character)}>
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