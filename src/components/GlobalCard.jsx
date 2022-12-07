const GlobalCard = ({ tierlist }) => {

    console.log(tierlist.sTier[0].thumbnail)
    return (
        <div>
            {tierlist.creator}
            <img src={tierlist.sTier[0].thumbnail} alt="" />
        </div>
    )
}

export default GlobalCard