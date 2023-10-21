import "./App.css";
import Card from "./Card";
import { robots } from "./robot";
import CardList from "./CardList";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <CardList robots={robots} />
    </>
  );
}

export default App;
