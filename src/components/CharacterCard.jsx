import { useState } from 'react'

const CharacterCard = ({ character, setDisplayChar, hoverCharacter, setSelected}) => {

    const [clicked, setClicked] = useState(false)

    const selectCharacter = (clickedDiv) => {
        setClicked(true)
        setSelected(true)
        setDisplayChar(clickedDiv)
        setTimeout(() => {
            setClicked(false)
            setSelected(false)
        }, 2000)
    }

    return (
        <div key={character.id} className={clicked ? "active-card":"grid-card"} onMouseOver={() => hoverCharacter(character)} onClick={() => selectCharacter(character)}>
            <img src={character.thumbnail} alt="" />
        </div>
    )
}

export default CharacterCard