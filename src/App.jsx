import "./App.css";
import Card from "./Card";
import { robots } from "./robot";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

function App() {
  return (
    <>
      <h1>Robo Friends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </>
  );
}

export default App;
