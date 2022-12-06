import { useState } from 'react'

const CharacterGrid = ({ allCharacters, setDisplayChar }) => {
    
    const [clicked, setClicked] = useState(false)
    const hoverCharacter = (clickedDiv) => {
        if (clicked) return
        setDisplayChar(clickedDiv)
    }

    const selectCharacter = (clickedDiv, event) => {
        console.log(event.target)
        event.target.style.border = "solid 2px red"
        setClicked(true)
        setDisplayChar(clickedDiv)
        setTimeout(() => {
            setClicked(false)
            event.target.style.border = "solid 2px transparent"
        }, 2000)
    }

    // window.addEventListener('click', (event) => {
    //     setClicked(current => !current)
    // })
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
        </div>
    )
}

export default CharacterGrid