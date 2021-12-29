import "./App.css";
import Header from "./Header";
import Board from "./Board";

function App() {
  return (
    <div style={{display:"flex", padding:"26px",flexDirection:"column", justifyContent:"center"}}>
      <Header />
      <Board />
    </div>
  );
}

export default App;
