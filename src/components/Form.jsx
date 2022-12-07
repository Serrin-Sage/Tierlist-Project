const Form = ({ setShowForm }) => {

    const removeDisplay = () => {
        setShowForm(false)
    }
    return (
        <div className="form-container">
            <div className="form-content">
                <span className="exit-btn" onClick={() => removeDisplay()}>X</span>
                <h2>Add A New Character</h2>
                <form>
                    <input type="text" />
                </form>
            </div>
        </div>
    )
}

export default Form