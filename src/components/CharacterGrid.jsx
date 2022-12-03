const CharacterGrid = ({ allCharacters }) => {
    
    return (
        <div>
            <div>
                {
                    allCharacters.map((character) => {
                        return (
                            <div key={character.id}>
                                <img src={character.thumbnail} alt="" height={70} width={50}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CharacterGrid