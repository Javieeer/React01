import { useEffect, useState } from "react"
import './app.css'

export function App () {
    
    const [fact, setFact] = useState()
    const [image, setImageUrl] = useState()
    const [error, setError] = useState()
    
    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
    /* const CAT_ENDPOINT_IMAGE_URL = `` */

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => {
            /* Manejar errores de ultimo y resolver primero el happy Path, luego si se continua con las buenas practicas */
            if(!res.ok) {
                setError('No se pudo recuperar la cita')
            }
            return res.json()
        })
        .then(data => {
            const { fact } = data
            setFact(fact)
        })
    }, [])

    useEffect(() => {
        if(!fact) return
            /* const firstWord = fact.split(' ').slice(0, 3).join(' ') */
            const threeWords = (fact.split(' ', 3).join(' '))
            console.log(threeWords)
            setImageUrl(`https://cataas.com/cat/says/${threeWords}?size=50&color=red`)
    }, [fact])

    return(
        <main className="appDeGatitos">
            <h1>APP DE GATITOS</h1>
            {fact && <span>{fact}</span>}
            {image && <img src={image} alt={`Image extracted using the first three words from ${fact}`}/ >}
        </main>
    )
}