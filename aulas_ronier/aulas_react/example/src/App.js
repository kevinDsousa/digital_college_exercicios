import { useState } from "react";
import "./global.css";
import { Button } from "./Button";

function App() {

  const [count, setCount] = useState(0);

  function handclik() {
    setCount(count + 1) // forma usual de realizar a contagem
  }

  return (
    <div>
      <h1>{count}</h1>
      <Button handleClick={handclik} children={"clique"}/>
    </div>
  );
}

export default App;