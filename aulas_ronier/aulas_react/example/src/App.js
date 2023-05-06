import Table from "./components/Table";

import "./global.css";

function App() {
  const data = [
    {
      id: 1,
      nome: "Ronier da Silva Lima",
      usuario: "ronier.lima",
      email: "ronier.lima@email",
    },
    {
      id: 2,
      nome: "Ronier da Silva Lima",
      usuario: "ronier.lima",
      email: "ronier.lima@email",
    },
    {
      id: 3,
      nome: "Ronier da Silva Lima",
      usuario: "ronier.lima",
      email: "ronier.lima@email",
    },
  ];


  return (
    <div id="app">
      <Table data={data} />
    </div>
  );
}

export default App;