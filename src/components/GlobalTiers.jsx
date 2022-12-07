import { useState, useEffect } from 'react'
import GlobalCard from './GlobalCard'
//Eventually pull from global tier list db
const GlobalTiers = () => {
    
    const [globalData, setGlobalData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/global")
        .then((res) => res.json())
        .then((data) => {
            setGlobalData(data)
        })
    },[])

    console.log(globalData)
    return (
        <div>
            <h1>GLOBAL TIERS PAGE</h1>
            <div>
                {
                    globalData.map((tierlist) => {
                        return (
                            <GlobalCard key={tierlist.id} tierlist={tierlist}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default GlobalTiers