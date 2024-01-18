import { Square } from "./Square.jsx"

export function WinnerModal ({winner, resetGame}) {
    if(winner == null) return null

    const winText = ({winner}) ? 'Win: ' : 'Tie'

    return (
        <section className="winner">
            <div className="text">
                <h2>{winText}</h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Restart</button>
                </footer>
            </div>
        </section>
    )
}