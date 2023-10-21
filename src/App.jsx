import "./App.css";
import Card from "./Card";
import { robots } from "./robot";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      {robots.map((robot) => {
        return <Card id={robot.id} name={robot.name} email={robot.email} />;
      })}
    </>
  );
}

export default App;
