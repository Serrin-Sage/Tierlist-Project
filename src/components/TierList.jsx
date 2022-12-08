import { Link } from 'react-router-dom'

const TierList = ({ currentUser, sTier, aTier, bTier, cTier, fTier, setSavedTierList }) => {

    let tierListObj = {
        creator: currentUser.username,
        sTier,
        aTier,
        bTier,
        cTier,
        fTier
    }

    let trial = [
        sTier, aTier, bTier, cTier, fTier
    ]
    const saveTierList = () => {
        // console.log(trial)
        // if (tierListObj.sTier.length === 0) {
        //     console.log("EMPTY")
        // }

        //Need to check if tiers are empty
        let test = Object.values(tierListObj)
        for (let i = 0; i < test.length; i++) {
            if (typeof test[i] !== "string") {
                if (test[i].length > 0) {
                    console.log(test[i] + "NOT EMPTY")
                    break
                } else {
                    console.log("EMPTY")
                    break
                }
            }
        }


        // console.log(tierListObj)
        // setSavedTierList(tierListObj)

        // fetch("http://localhost:3000/global", {
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(tierListObj)
        // })
        // .then((error) => console.log(error))
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