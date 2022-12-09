import { useState } from "react"

const GlobalCard = ({ tierlist }) => {

    const [agree, setAgree] = useState(false)
    const [disagree, setDisagree] = useState(false)

    return (
        <div className="global-container">
            <div className="global-content">
                <div className="global-tier">
                    <div className="global-letter" id="s-letter">S</div>
                        {
                            tierlist.sTier.map((character) => {
                                return (
                                    <img src={character.thumbnail} alt="" className="global-image"/>
                                )
                            })
                        }
                </div>
                <div className="global-tier">
                    <div className="global-letter" id="a-letter">A</div>
                        {
                            tierlist.aTier.map((character) => {
                                return (
                                    <img src={character.thumbnail} alt="" className="global-image"/>
                                )
                            })
                        }
                </div>
                <div className="global-tier">
                    <div className="global-letter" id="b-letter">B</div>
                        {
                            tierlist.bTier.map((character) => {
                                return (
                                    <img src={character.thumbnail} alt="" className="global-image"/>
                                )
                            })
                        }
                </div>
                <div className="global-tier">
                    <div className="global-letter" id="c-letter">C</div>
                        {
                            tierlist.cTier.map((character) => {
                                return (
                                    <img src={character.thumbnail} alt="" className="global-image"/>
                                )
                            })
                        }
                </div>
                <div className="global-tier">
                    <div className="global-letter" id="f-letter">F</div>
                        {
                            tierlist.fTier.map((character) => {
                                return (
                                    <img src={character.thumbnail} alt="" className="global-image"/>
                                )
                            })
                        }
                        
                </div>
                <div className="vote-buttons">
                    <button className={agree ? "agree-button" : "no-vote"}>AGREE</button>
                    <button className={disagree ? "disagree-button" : "no-vote"}>DISAGREE</button>

                </div>
                <div>
                    <h4 className="creator-title">Creator: <br />{tierlist.creator}</h4>
                </div>
                
            </div>
        </div>
    )
}

export default GlobalCard