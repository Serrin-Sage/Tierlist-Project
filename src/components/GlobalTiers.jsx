import { useState, useEffect } from 'react'
import GlobalCard from './GlobalCard'

const GlobalTiers = () => {
    
    //use state to get the global list data
    const [globalData, setGlobalData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/global")
        .then((res) => res.json())
        .then((data) => {
            setGlobalData(data)
        })
    },[])

    return (
        <div className='global-main'>
            <h1>GLOBAL TIERS PAGE</h1>
            <hr/>
            <div className='global-tiers-container'>
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