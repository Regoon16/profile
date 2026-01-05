import { useState } from "react";

/* ============ HELPER ============ */
function calculateWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // мөрүүд
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // баганууд
    [0, 4, 8], [2, 4, 6],             // диагональ
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

/* ============ TIC TAC TOE ============ */
function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = xTurn ? "X" : "O";
    setBoard(newBoard);
    setXTurn(!xTurn);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setXTurn(true);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl text-white mb-4">🎮 Tic Tac 🎮</h2>

      <div className="grid grid-cols-3 gap-2 w-60 mx-auto">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-20 h-20 bg-slate-700 text-3xl text-white rounded-lg hover:bg-slate-600 transition"
          >
            {value}
          </button>
        ))}
      </div>

      <p className="text-white mt-4">
        {winner
          ? `Ялагч: ${winner}`
          : board.every(cell => cell !== null)
          ? "Тэнцэв!"
          : `Ээлж: ${xTurn ? "X" : "O"}`}
      </p>

      <button
        onClick={restartGame}
        className="mt-4 bg-blue-600 px-6 py-2 rounded-xl text-white hover:bg-blue-700 transition"
      >
        Шинээр эхлүүлэх
      </button>
    </div>
  );
}

/* ============ SHAGAI ============ */
function Shagai() {
  const images = [
    "/shagai/shagai1.png",
    "/shagai/shagai2.png",
    "/shagai/shagai3.png",
    "/shagai/shagai4.png",
  ];

  const [dice, setDice] = useState([0, 1, 2, 3]);

  const throwShagai = () => {
    setDice(Array.from({ length: 4 }, () => Math.floor(Math.random() * 4)));
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl text-white mb-4">🐑 Шагай</h2>

      <div className="grid grid-cols-2 gap-6 mb-4">
        {dice.map((i, idx) => (
          <img
            key={idx}
            src={images[i]}
            className="w-32 h-32 mx-auto rounded-full shadow-lg transform hover:rotate-12 hover:scale-110 transition duration-300"
          />
        ))}
      </div>

      <button
        onClick={throwShagai}
        className="bg-green-600 px-6 py-2 rounded-xl text-white hover:bg-green-700 transition"
      >
        Шагай хаях
      </button>
    </div>
  );
}

/* ============ PROJECTS ============ */
export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-slate-900 pt-28 px-10">
      <h1 className="text-4xl text-white text-center mb-8">
        🕹 Миний тоглоомууд
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <TicTacToe />
        <Shagai />
      </div>
    </section>
  );
}
