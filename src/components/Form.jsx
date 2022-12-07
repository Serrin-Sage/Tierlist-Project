import { useState } from 'react'

const Form = ({ setShowForm, setAllCharacters }) => {
    const [charName, setCharName] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [display, setDisplay] = useState("")
    const [strength, setStrength] = useState("")
    const [weakness, setWeakness] = useState("")

    const removeDisplay = () => {
        setShowForm(false)
    }

    let testObj = {
        charName, 
        thumbnail, 
        display,
        strength,
        weakness
    }

    const addNewCharacter = (e) => {
        e.preventDefault()
        console.log(testObj)
    }

    return (
        <div className="form-container">
            <div className="form-content">
                <span className="exit-btn" onClick={() => removeDisplay()}>X</span>
                <h2>Add A New Character</h2>
                <form onSubmit={addNewCharacter}>
                    <input type="text" placeholder="Character Name" className="input-box" onChange={(e) => setCharName(e.target.value)}/><br /><br />
                    <input type="text" placeholder="Character Thumbnail Image" className="input-box" onChange={(e) => setThumbnail(e.target.value)} /><br /><br />
                    <input type="text" placeholder="Character Display Image" className="input-box" onChange={(e) => setDisplay(e.target.value)} /><br /><br />
                    <input type="text" placeholder="Character Strength" className="input-box" onChange={(e) => setStrength(e.target.value)} /><br /><br />
                    <input type="text" placeholder="Character Weakness" className="input-box" onChange={(e) => setWeakness(e.target.value)} /><br /><br />
                    <input type="submit" value="Add" className="add-submit"/>
                </form>
            </div>
        </div>
    )
}

export default Form