import { useState, useEffect } from 'react'

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
                    
                }
            </div>
        </div>
    )
}

export default GlobalTiers