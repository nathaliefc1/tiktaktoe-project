const inicitalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, board }) {

  // const [gameboard, setGameboard] = useState(inicitalGameBoard);
  // function handleSelectSquare(rowIndex, colIndex) {
  //     setGameboard((prevGameboard) => {
  //         const updatedBoard = [...prevGameboard.map(innerArray => [...innerArray])];
  //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //         return updatedBoard;
  //     });

  //     onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
