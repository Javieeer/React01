import { useEffect, useState } from "react"
import { getNewFact } from "../services/fact"

export function useCatFact () {
    
    const [fact, setFact] = useState()
    
    const refreshFact = () => {
        getNewFact().then(newfact => setFact(newfact))
    }

    useEffect(refreshFact, [])

    return { fact, refreshFact }
}