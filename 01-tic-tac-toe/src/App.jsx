import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, updateBoard, index, isSelected }) => {
  
  const turnState = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  
  return (
    <div onClick={handleClick} className={turnState}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  /* Creamos cuadros en un array y que esten vacios */
  const [board, setBoard] = useState(Array(9).fill(null))

  /* Creando alternancia de turnos si se pulsa un cuadro */
  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }
  
  /* Actualizar tablero */
  const updateBoard = (index) => {
    /* Si ya hay algo dentro del cuadro, no se puede sobreescribir */
    if (board[index] || winner) return

    /* Se guarda los cambios del tablero en una copia */
    const newBoard = [... board]

    /* Se reenderiza el nuevo tablero */
    newBoard[index] = turn
    setBoard(newBoard) 

    /* Se alternan los turnos */
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    /* Revisar si hay ganador */
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    }
  }

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <section className="game">
        {
          board.map((_,index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
} 

export default App
