export const Square = ({ children, updateBoard, index, isSelected }) => {
  
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