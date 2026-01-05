import { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const winner = calculateWinner(board);
  const isDraw = board.every(Boolean) && !winner;

  function handleClick(i) {
    if (board[i] || winner) return;

    const newBoard = [...board];
    newBoard[i] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
  }

  function resetBoard() {
    setBoard(Array(9).fill(null));
    setIsX(true);
  }

  function resetGame() {
    resetBoard();
    setScore({ X: 0, O: 0 });
  }

  if (winner) {
    setTimeout(() => {
      setScore((prev) => ({
        ...prev,
        [winner]: prev[winner] + 1,
      }));
      resetBoard();
    }, 800);
  }

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl shadow-2xl">

      <h3 className="text-2xl font-bold text-center mb-6">
        🎮 Tic Tac Toe
      </h3>

      {/* Score */}
      <div className="flex justify-center gap-8 mb-6 text-lg">
        <span className="text-blue-400">X: {score.X}</span>
        <span className="text-pink-400">O: {score.O}</span>
      </div>

      {/* Board */}
      <div className="grid grid-cols-3 gap-3 w-60 mx-auto">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`h-16 w-16 rounded-xl text-3xl font-extrabold
              flex items-center justify-center
              transition duration-200
              ${
                cell === "X"
                  ? "text-blue-400 shadow-blue-500/50 shadow-lg"
                  : cell === "O"
                  ? "text-pink-400 shadow-pink-500/50 shadow-lg"
                  : "text-gray-400"
              }
              bg-black hover:bg-slate-700`}
          >
            {cell}
          </button>
        ))}
      </div>

      {/* Status */}
      <p className="text-center mt-6 text-lg">
        {winner && (
          <span className="text-green-400 font-semibold animate-pulse">
            🎉 {winner} wins!
          </span>
        )}
        {isDraw && (
          <span className="text-yellow-400 font-semibold">
            🤝 Draw!
          </span>
        )}
        {!winner && !isDraw && (
          <span className="text-gray-300">
            Next turn:{" "}
            <span className="font-bold text-white">
              {isX ? "X" : "O"}
            </span>
          </span>
        )}
      </p>

      {/* Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={resetBoard}
          className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition"
        >
          Restart Round
        </button>
        <button
          onClick={resetGame}
          className="px-4 py-2 rounded-full bg-gray-600 hover:bg-gray-700 transition"
        >
          Reset Score
        </button>
      </div>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ];
  for (let [a,b,c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default TicTacToe;
