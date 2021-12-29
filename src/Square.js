import { SQUARE_SIZE } from "./Board";
export default function Square({ handleMouseOver, color }) {
  const paddedSize = 17;
  return (
    <div


      style={{ height: SQUARE_SIZE, width: SQUARE_SIZE }}
      onMouseOver={handleMouseOver}
    >
      <div
        style={{
          width: `${paddedSize}px`,
          border: "1px solid #8e8e8e",
          height: `${paddedSize}px`,
          backgroundColor: colorToHex(color),
        }}
      ></div>
    </div>
  );
}

function colorToHex(color) {
  return "#" + (color * 255).toString(16).repeat(3);
}
