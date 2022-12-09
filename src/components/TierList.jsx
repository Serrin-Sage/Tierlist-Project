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

    //Saved object for later POST to global database
    let tierListObj = {
        creator: currentUser.username,
        sTier,
        aTier,
        bTier,
        cTier,
        fTier
    }

    //Array to test array length when save is pressed
    let testingArray = [
        sTier, aTier, bTier, cTier, fTier
    ]

    const saveTierList = () => {

        //makes an array of the array lengths of the tiers
        let tierLength = testingArray.map((tier) => {
            return tier.length
        })
        //if the max length of the tierLength array is 0 then tier list will not be saved
        //this prevents saving an empty tier list
        if (Math.max(...tierLength) === 0) {
            cannotSave()
            return
        } else {
            //otherwise save the tier list and send to global list
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
                    <div className="bottom-btn" id="save-tier" onClick={() => saveTierList()}>SAVE LIST</div>
                    <Link to="/globaltiers"className="bottom-btn" id="global-btn">Global Lists</Link>
                </div>
                
            </div>
        </div>
    )
}

export default TierList