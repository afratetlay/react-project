import "./App.css";
// import Header from "./Header";
import Avenger from "./Avenger";

function App() {
  return (
    <div className="App">
      <h1>Hello Everyone</h1>
      <Avenger name="Ironman" age="34"></Avenger>
      <Avenger name="Thor" age="1500"></Avenger>
      <Avenger name="Captain America" age="105"></Avenger>
    </div>
  );
}

export default App;
