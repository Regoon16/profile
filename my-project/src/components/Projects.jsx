import { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(i) {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsX(true);
  }

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl shadow-2xl">
      <h3 className="text-2xl font-bold text-center mb-6 text-white">
        🎮 Tic Tac Toe
      </h3>

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
                  ? "text-blue-400"
                  : cell === "O"
                  ? "text-pink-400"
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
        {winner ? (
          <span className="text-green-400 font-semibold">
            🎉 Winner: {winner}
          </span>
        ) : (
          <span className="text-gray-300">
            Next turn:{" "}
            <span className="font-bold text-white">
              {isX ? "X" : "O"}
            </span>
          </span>
        )}
      </p>

      {/* Reset */}
      <button
        onClick={resetGame}
        className="mt-6 block mx-auto px-6 py-2 rounded-full
                   bg-blue-600 hover:bg-blue-700
                   transition text-white font-semibold"
      >
        Restart Game
      </button>
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

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-14">
        Projects & Games
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        
        {/* TGLOOOM */}
        <div className="bg-slate-900 p-8 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">
            🕹️ TGLOOOM Game
          </h3>
          <p className="text-gray-400">
            JavaScript логик, user interaction дээр суурилсан mini game.
            (дараагийн шатанд playable болгоно)
          </p>
        </div>

        {/* REAL GAME */}
        <TicTacToe />
      </div>
    </section>
  );
}
