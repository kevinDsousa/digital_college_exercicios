import "./global.css";
import axios from "axios";
import Table from "./components/Table"
import { useState, useEffect } from "react";

/*const buscarCidades = async () => {
  await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/CE/municipios')
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp)
  })
}*/

function App() {
  const [dados, setDados] = useState([])
  const [uf, setUf] = useState('CE')

  useEffect(() => {
    buscarCidades(uf);
  }, [uf])
  
  const buscarCidades = async (estado="CE") => {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
    setDados(response.data)
  }
  return (
    <div>
      <h1>Estados de {uf}</h1>
      <button onClick={() => setUf(`CE`)}>CE</button>
      <button onClick={() => setUf(`RJ`)}>RJ</button>
      <button onClick={() => setUf(`RN`)}>RN</button>
      <Table data={dados}></Table>
    </div>
  )
}

export default App;