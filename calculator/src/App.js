import "./App.css";

<input type="number" name="calculator"></input>;

function App() {
  return (
    <div>
      <h1>calculator</h1>
      <input type="number" name="calculator"></input>
      <button onclick="add()"> + </button>
      <button onclick="substract"> - </button>
      <button onclick="multiply"> * </button>
      <button onclick="dividing"> / </button>
      {/* function add() {
       return () */}
      {/* } */}
    </div>
  );
}

export default App;
