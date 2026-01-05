import { useState } from "react";

/* ================= TIC TAC TOE ================= */

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    if (board[i] || winner) return;
    const newBoard = [...board];
    newBoard[i] = xTurn ? "X" : "O";
    setBoard(newBoard);
    setXTurn(!xTurn);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-2xl text-center">
      <h2 className="text-2xl text-white mb-4">🎮 Tic Tac</h2>

      <div className="grid grid-cols-3 gap-2 w-60 mx-auto">
        {board.map((item, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className="w-20 h-20 bg-slate-700 text-3xl text-white font-bold rounded-lg"
          >
            {item}
          </button>
        ))}
      </div>

      <p className="text-white mt-4">
        {winner ? `🎉 Ялагч: ${winner}` : `Turn: ${xTurn ? "X" : "O"}`}
      </p>

      <button
        onClick={reset}
        className="mt-4 bg-blue-600 px-5 py-2 rounded-xl text-white hover:bg-blue-700"
      >
        Дахин эхлүүлэх
      </button>
    </div>
  );
}


function ShagaiGame() {
  const images = [
    "/shagai/shagai1.png",
    "/shagai/shagai2.png",
    "/shagai/shagai3.png",
    "/shagai/shagai4.png",
  ];

  const [result, setResult] = useState([0, 1, 2, 3]);

  const hayh = () => {
    setResult(
      Array.from({ length: 4 }, () => Math.floor(Math.random() * 4))
    );
  };

  return (
    <div className="bg-slate-800 p-6 rounded-2xl text-center">
      <h2 className="text-2xl text-white mb-4">🐑 Шагай тоглоом</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {result.map((i, idx) => (
          <img
            key={idx}
            src={images[i]}
            alt="shagai"
            className="w-32 h-32 mx-auto"
          />
        ))}
      </div>

      <button
        onClick={hayh}
        className="bg-green-600 px-6 py-2 rounded-xl text-white hover:bg-green-700"
      >
        Шагай хаях
      </button>
    </div>
  );
}

/* ================= MAIN PROJECTS ================= */

export default function Projects() {
  return (
    <section className="min-h-screen bg-slate-900 p-10">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        🚀 Миний тоглоомын төслүүд 🚀
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <TicTacToe />
        <ShagaiGame />
      </div>
    </section>
  );
}

/* ================= HELPER ================= */

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
