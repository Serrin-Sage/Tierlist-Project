import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = ({ currentUser, setShowForm, setAllCharacters, allCharacters }) => {

    const emptyFields = () => toast.error("All fields must be filled", {
        className: "error-notify"
    })

    //use state for new character name, thumbnail, display, strength and weakness
    const [charName, setCharName] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [display, setDisplay] = useState("")
    const [strength, setStrength] = useState("")
    const [weakness, setWeakness] = useState("")

    const removeDisplay = () => {
        setShowForm(false)
    }

    //creates an object for later PATCH to users characters
    let newCharacter = {
        name: charName, 
        thumbnail, 
        displayImg: display,
        strength,
        weakness
    }

    const addNewCharacter = (e) => {
        e.preventDefault()
        //Checks if any field is empty, will not submit if any are true
        if (charName === "" || thumbnail === "" || display === "" || strength === "" || weakness === "") {
            emptyFields()
            return
        } else {
            setAllCharacters((prevState) => {
                return [...prevState, newCharacter]
            })
            //Patch to users characters, adds new character to database
            fetch(`http://localhost:3000/users/${currentUser.id}`, {
                method: "PATCH", 
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    characters: [...allCharacters, newCharacter]
                })
            })
            .catch((error) => console.log(error))
            removeDisplay()
            return
        }
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