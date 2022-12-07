import { useState } from 'react'
import Form from './Form'

const CharacterGrid = ({ allCharacters, setAllCharacters, setDisplayChar }) => {
    
    const [clicked, setClicked] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const hoverCharacter = (clickedDiv) => {
        if (clicked) return
        setDisplayChar(clickedDiv)
    }

    const selectCharacter = (clickedDiv, event) => {
        event.target.style.border = "solid 2px red"
        setClicked(true)
        setDisplayChar(clickedDiv)
        setTimeout(() => {
            setClicked(false)
            event.target.style.border = "solid 2px transparent"
        }, 2000)
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
                            <div key={character.id} className="grid-card" onMouseOver={() => hoverCharacter(character)} onClick={(e) => selectCharacter(character, e)}>
                                <img src={character.thumbnail} alt="" />
                            </div>
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