const TierList = ({ tierlist, sTier, aTier }) => {

    return (
        <div className="tierlist-container">
            <div className="tier-collection">
                <div className="tier" id="s-tier">
                    <div className="tier-letter">S</div>
                    {
                        sTier.map((char) => {
                            return (
                                <img src={char.thumbnail} height={50} />
                            )
                        })
                    }
                </div>
                <div className="tier" id="a-tier">
                    <div className="tier-letter">A</div>
                    {
                        aTier.map((char) => {
                            return (
                                <img src={char.thumbnail} height={50} />
                            )
                        })
                    }
                </div>
                <div className="tier" id="b-tier">

                </div>
                <div className="tier" id="c-tier">

                </div>
                <div className="tier" id="f-tier">

                </div>
            </div>
        </div>
    )
}

export default TierList