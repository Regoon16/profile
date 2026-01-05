import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

/* ================= TIC TAC TOE ================= */

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winner = calculateWinner(board);

  const handlePress = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isX ? "X" : "O";
    setBoard(newBoard);
    setIsX(!isX);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>🎮 Tic Tac Toe</Text>

      <View style={styles.grid}>
        {board.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cell}
            onPress={() => handlePress(index)}
          >
            <Text style={styles.cellText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.info}>
        {winner ? `🎉 Winner: ${winner}` : `Turn: ${isX ? "X" : "O"}`}
      </Text>

      <TouchableOpacity onPress={reset} style={styles.btn}>
        <Text style={styles.btnText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
};

/* ================= SHAGAI ================= */

const Shagai = () => {
  const shagaiArray = [
    require("@/assets/shagai/shagai1.png"),
    require("@/assets/shagai/shagai2.png"),
    require("@/assets/shagai/shagai3.png"),
    require("@/assets/shagai/shagai4.png"),
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
    <View style={styles.card}>
      <Text style={styles.title}>🐑 Шагай тоглоом</Text>

      <View style={styles.shagaiBox}>
        {randomArray.map((i, index) => (
          <Image
            key={index}
            source={shagaiArray[i]}
            style={styles.shagaiImg}
          />
        ))}
      </View>

      <TouchableOpacity onPress={hayh} style={styles.btn}>
        <Text style={styles.btnText}>Шагай хаях</Text>
      </TouchableOpacity>
    </View>
  );
};

/* ================= MAIN ================= */

const Projects = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>📂 Projects</Text>
      <TicTacToe />
      <Shagai />
    </View>
  );
};

export default Projects;

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },
  mainTitle: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 20,
    padding: 20,
    marginBottom: 25,
  },
  title: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "600",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 240,
    alignSelf: "center",
  },
  cell: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
  },
  info: {
    color: "#e5e7eb",
    textAlign: "center",
    marginVertical: 10,
  },
  btn: {
    backgroundColor: "#2563eb",
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  shagaiBox: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
    marginBottom: 15,
  },
  shagaiImg: {
    width: 120,
    height: 120,
  },
});

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
