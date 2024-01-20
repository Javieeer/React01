import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinner, checkEndGame } from "./logic/board"
import { WinnerModal } from "./components/winnerModal"
import { resetGameStorage } from "./logic/storage"
import { saveGame } from "./logic/storage"

function App() {
  document.title = 'Cuatro en raya - Javier'

  /* Creamos cuadros en un array y que esten vacios */
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(64).fill(null)
  })

  /* Creando alternancia de turnos si se pulsa un cuadro */
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
      setBoard(Array(64).fill(null))
      setWinner(null)
      setTurn(TURNS.X)
      resetGameStorage()
  }
  
  const updateBoard = (index) => {
    /* Si ya hay algo dentro del cuadro, no se puede sobreescribir
    Si ya hay 3 seguidos debe parar (winner)*/
    if (board[index] || winner) return 

    /* Se guarda los cambios del tablero en una copia */
    const newBoard = [... board]

    /* Se reenderiza el nuevo tablero */
    newBoard[index] = turn
    setBoard(newBoard) 

    /* Se alternan los turnos */
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    /* Guardamos los cambios del tablero en el local storage */
    saveGame({
      board: newBoard,
      turn: newTurn
    })

    /* Revisar si hay ganador */
    const evaluateWin = []
    const newWinner = checkWinner(newBoard, evaluateWin)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
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
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
      <button onClick={resetGame}>
        <strong>Restart</strong>
      </button>
    </main>
  )
} 

export default App