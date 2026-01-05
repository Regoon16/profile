import { useState } from "react";

/* ================= TIC TAC TOE ================= */

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = board.every(Boolean) && !winner;

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
      <h3 className="text-2xl font-bold text-center mb-6">
        🎮 Tic Tac Toe
      </h3>

      <div className="grid grid-cols-3 gap-3 w-60 mx-auto">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`h-16 w-16 rounded-xl text-3xl font-extrabold
              flex items-center justify-center transition
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

      <p className="text-center mt-5 text-gray-300">
        {winner && <span className="text-green-400">🎉 Winner: {winner}</span>}
        {isDraw && <span className="text-yellow-400">🤝 Draw</span>}
        {!winner && !isDraw && `Next turn: ${isX ? "X" : "O"}`}
      </p>

      <button
        onClick={resetGame}
        className="mt-5 block mx-auto px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
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

/* ================= SHAGAI GAME ================= */

function ShagaiGame() {
  const shagaiArray = [
    "/shagai/shagai1.png",
    "/shagai/shagai2.png",
    "/shagai/shagai3.png",
    "/shagai/shagai4.png",
  ];

  const [randomArray, setRandomArray] = useState([0, 1, 2, 3]);

  const hayh = () => {
    const temp = [];
    for (let i = 0; i < 4; i++) {
      temp.push(Math.floor(Math.random() * 4));
    }
    setRandomArray(temp);
  };

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl shadow-2xl">
      <h3 className="text-2xl font-bold text-center mb-6">
        🐑 Шагай тоглоом
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {randomArray.map((i, index) => (
          <img
            key={index}
            src={shagaiArray[i]}
            alt="shagai"
            className="w-32 h-32 object-contain bg-black rounded-xl p-2"
          />
        ))}
      </div>

      <button
        onClick={hayh}
        className="w-full py-3 bg-blue-600 hover:bg-blue-700
                   rounded-full text-white font-semibold transition"
      >
        Шагай хаях
      </button>
    </div>
  );
}

/* ================= PROJECTS SECTION ================= */

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-14">
        Projects & Games
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        <TicTacToe />
        <ShagaiGame />
      </div>
    </section>
  );
}
