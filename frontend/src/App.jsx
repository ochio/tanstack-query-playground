import Todo from "./components/Todo";
import User from "./components/User";
import "./App.css";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>Todo Toggle</button>
      <div className="App">{show && <Todo />}</div>
      <div>
        <User />
      </div>
    </>
  );
}
export default App;
