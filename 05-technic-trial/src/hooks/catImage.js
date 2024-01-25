import { useEffect, useState } from "react"

export function useImageOfCat({ fact }) {
    const [image, setImageUrl] = useState()

    useEffect(() => {
        if(!fact) return
            /* const firstWord = fact.split(' ').slice(0, 3).join(' ') */
            const threeWords = (fact.split(' ', 3).join(' '))
            console.log(threeWords)
            setImageUrl(`https://cataas.com/cat/says/${threeWords}?size=50&color=red`)
    }, [fact])
    return { image }
}