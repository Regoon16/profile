import { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(i) {
    if (board[i] || winner) return;
    const newBoard = board.slice();
    newBoard[i] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsX(true);
  }

  return (
    <div className="bg-slate-800 p-6 rounded-2xl">
      <h3 className="text-xl font-semibold mb-4 text-center">
        Tic Tac Toe
      </h3>

      <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="h-14 w-14 bg-black text-2xl font-bold
                       flex items-center justify-center
                       hover:bg-slate-700 transition"
          >
            {cell}
          </button>
        ))}
      </div>

      <p className="text-center mt-4 text-gray-300">
        {winner
          ? `Winner: ${winner}`
          : `Next turn: ${isX ? "X" : "O"}`}
      </p>

      <button
        onClick={resetGame}
        className="mt-4 block mx-auto px-4 py-2
                   bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Restart
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
    <section id="projects" className="py-20 bg-slate-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Projects & Games
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        
        {/* Normal project card */}
        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-3">
            TGLOOOM Game
          </h3>
          <p className="text-gray-400">
            JavaScript логик дээр суурилсан mini game.
          </p>
        </div>

        {/* REAL GAME */}
        <TicTacToe />
      </div>
    </section>
  );
}
