export default function ClearButton({ size, handleClear }) {
  const buttonStyle = {
    width: `${size/2}px`,
    margin: "15px 0 0 0",
    height: `${35}px`,
    fontSize: '16px',
  };
  return (
    <button style={buttonStyle} onClick={handleClear}>
      Clear the board
    </button>
  );
}
