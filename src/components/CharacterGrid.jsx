import { useState } from 'react'
import Form from './Form'
import CharacterCard from './CharacterCard'

const CharacterGrid = ({ allCharacters, setAllCharacters, setDisplayChar }) => {
    
    
    const [showForm, setShowForm] = useState(false)
    const [selected, setSelected] = useState(false)

    const hoverCharacter = (hoverDiv) => {
        if (selected) return
        setDisplayChar(hoverDiv)
    }

    const displayForm = () => {
        setShowForm(current => !current)
    }

    return (
        <div className="character-grid-container">
            <div className="character-grid">
                {
                    allCharacters.map((character) => {
                        return (
                            <CharacterCard 
                                character={character} 
                                setDisplayChar={setDisplayChar} 
                                hoverCharacter={hoverCharacter}
                                setSelected={setSelected}/>
                        )
                    })
                }
            </div>
            <button className='add-btn' onClick={() => displayForm()}>+</button>
            {showForm && <Form setShowForm={setShowForm} setAllCharacters={setAllCharacters}/>}
        </div>
    )
}

export default CharacterGrid