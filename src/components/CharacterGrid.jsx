import { useState } from 'react'
import Form from './Form'
import CharacterCard from './CharacterCard'

const CharacterGrid = ({ currentUser, allCharacters, setAllCharacters, setDisplayChar }) => {
    
    //Set states for Form display and selected character
    const [showForm, setShowForm] = useState(false)
    const [selected, setSelected] = useState(false)

    //hovering over character div will set them as selected
    const hoverCharacter = (hoverDiv) => {
        if (selected) return
        setDisplayChar(hoverDiv)
    }

    //Swap bewtween states for display form
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
            {showForm && <Form allCharacters={allCharacters} currentUser={currentUser} setShowForm={setShowForm} setAllCharacters={setAllCharacters}/>}
        </div>
    )
}

export default CharacterGrid