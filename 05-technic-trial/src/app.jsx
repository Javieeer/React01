import './app.css'
import { useImageOfCat } from './hooks/catImage.js'
import { useCatFact } from './hooks/catFact.js'

export function App () {

    const { fact, refreshFact } = useCatFact()
    const { image } = useImageOfCat({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return(
        <main className="appDeGatitos">
            <h1>APP DE GATITOS</h1>
            {fact && <span>{fact}</span>}
            {image && <img src={image} alt={`Image extracted using the first three words from ${fact}`}/ >}
            <button onClick={handleClick}>Get new Fact</button>
        </main>
    )
}