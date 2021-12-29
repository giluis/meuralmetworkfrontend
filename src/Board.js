import { useState } from "react";
import Square from "./Square";
import ClearButton from "./ClearButton";

export const SQUARE_SIZE = 20;
export const BOARD_SIZE = 28;
export default function Board() {
  const [squares, setSquares, setSingleSquare] = useSquares(initialData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={gridStyling}>
        {squares.map((s, i) => (
          <Square
            key={i}
            handleMouseOver={(e) => {
              if (e.buttons !== 1) return;
              setSingleSquare(coors(i), activate(s));
            }}
            coordinates={coors(i)}
            color={color(s)}
          />
        ))}
      </div>
      <ClearButton
        size={SQUARE_SIZE * BOARD_SIZE}
        handleClear={() => setSquares(squares.map((_) => 0))}
      />
    </div>
  );
}
function activate(s) {
  return 1;
}
function color(v) {
  return Number(1 - v);
}

function useSquares(initialData) {
  const [squares, setSquares] = useState(initialData);
  function setSingleSquare([i, j], value) {
    const newSquares = [...squares];
    newSquares[index(i, j)] = value;
    setSquares(newSquares);
  }
  return [squares, setSquares, setSingleSquare];
}

function index(i, j) {
  return i * BOARD_SIZE + j;
}
function coors(i) {
  return [Math.floor(i / BOARD_SIZE), i % BOARD_SIZE];
}

const gridStyling = {
  width: "100%",
  borderColor: "black",
  borderWidth: "1px",
  justifyContent: "center",
  display: "grid",
  gridTemplateColumns: Array(28).fill(`${SQUARE_SIZE}px`).join(" "),
  gridTemplateRows: Array(28).fill(`${SQUARE_SIZE}px`).join(" "),
};

const initialData = [];
for (let i = 0; i < BOARD_SIZE; i++) {
  for (let j = 0; j < BOARD_SIZE; j++) {
    initialData.push(Number(i > j));
  }
}
