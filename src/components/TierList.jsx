import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TierList = ({ currentUser, sTier, aTier, bTier, cTier, fTier, setSavedTierList }) => {

    const cannotSave = () => toast.error("Cannot save empty Tier List", {
        className: "error-notify"
    })

    const saveSuccess = () => toast.success("Tier List Saved! View in Global Lists", {
        className: "success-notify"
    })

    let tierListObj = {
        creator: currentUser.username,
        sTier,
        aTier,
        bTier,
        cTier,
        fTier
    }

    let testingArray = [
        sTier, aTier, bTier, cTier, fTier
    ]

    const saveTierList = () => {

        let tierLength = testingArray.map((tier) => {
            return tier.length
        })
        if (Math.max(...tierLength) === 0) {
            cannotSave()
            return
        } else {
            setSavedTierList(tierListObj)
            fetch("http://localhost:3000/global", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tierListObj)
            })
            .then((save) => {
                if (save.ok) {
                    saveSuccess()
                }
            })
        }
    }

    
    return (
        <div className="tierlist-container">
            <div className="tier-collection">
                <div className="tier" id="s-tier">
                    <div className="tier-letter" id="s-letter">S</div>
                    {
                        sTier.map((char) => {
                            return (
                                <img key={char.i} src={char.thumbnail} className="tier-img" />
                            )
                        })
                    }
                </div>
                <div className="tier" id="a-tier">
                    <div className="tier-letter" id="a-letter">A</div>
                    {
                        aTier.map((char) => {
                            return (
                                <img key={char.i} src={char.thumbnail} className="tier-img" />
                            )
                        })
                    }
                </div>
                <div className="tier" id="b-tier">
                    <div className="tier-letter" id="b-letter">B</div>
                    {
                        bTier.map((char) => {
                            return (
                                <img key={char.i} src={char.thumbnail} className="tier-img" />
                            )
                        })
                    }
                </div>
                <div className="tier" id="c-tier">
                    <div className="tier-letter" id="c-letter">C</div>
                    {
                        cTier.map((char) => {
                            return (
                                <img key={char.i} src={char.thumbnail} className="tier-img" />
                            )
                        })
                    }
                </div>
                <div className="tier" id="f-tier">
                    <div className="tier-letter" id="f-letter">F</div>
                    {
                        fTier.map((char) => {
                            return (
                                <img key={char.i} src={char.thumbnail} className="tier-img" />
                            )
                        })
                    }
                </div>
                <div className="tier-btns">
                    <div className="bottom-btn" id="save-tier" >SAVE LIST</div>
                    <Link to="/globaltiers"className="bottom-btn" id="global-btn">Global Lists</Link>
                </div>
                
            </div>
        </div>
    )
}

export default TierList

// onClick = {() => saveTierList()}
//PUT THIS BACK IN SAVE LIST BUTTON