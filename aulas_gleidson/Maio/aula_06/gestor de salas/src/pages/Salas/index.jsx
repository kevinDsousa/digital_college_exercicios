import styled from "styled-components";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DataTable from "react-data-table-component";

export const Salas = () => {
  const [lateral, setLateral] = useState(false);
  const [salas, setSalas] = useState([
    { sala_nome: "bill gates", sala_capacidade: 20 },
    { sala_nome: "steve jobs", sala_capacidade: 32 },
    { sala_nome: "larry page", sala_capacidade: 32 }
  ]);
  const colunas = [
    {
      name: "Sala",
      selector: (row) => row.sala_nome,
    },
    {
      name: "Capacidade",
      selector: (row) => row.sala_capacidade,
    },
    {
      name: "Acções",
      selector: () => 
      (<>
      <Button title={"Editar"}/>
      <Button title={"Fechar"}/>
      </>)
    }
  ];
  const { register, handleSubmit } = useForm();

  const cadastrarSala = (dados) => {
    setSalas([...salas, dados]);
    setLateral(false)
    console.log(dados);
  };

  return (
    <>
      <Header>
        <h1>Salas</h1>
        <Button title="teste" click={() => setLateral(true)} />
      </Header>
      <DataTable data={salas} columns={colunas} />
      <Overlay
        className={lateral && "active"}
        onClick={() => setLateral(false)}
      />
      <Lateral className={lateral && "active"}>
        <Header>
          <h3>Adicionar</h3>
          <Button
            classe={"circle pilled"}
            title={"X"}
            click={() => setLateral(false)}
          >
            X
          </Button>
        </Header>
        <Body>
          <form onSubmit={handleSubmit(cadastrarSala)}>
            <Label>Nome</Label>
            <Input
              placeholder="Digite o nome da sala"
              {...register("sala_nome")}
            ></Input>

            <Label>Capacidade</Label>
            <Input type="number" {...register("sala_capacidade")}></Input>
            <Button title={"Salvar"} classe={"w-full"} />
          </form>
        </Body>
      </Lateral>
    </>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

const Body = styled.div`
  width: 100%;
  overflow: auto;
  padding-top: 26px;
  height: calc(100vh - 72px);
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00000070;
  position: fixed;
  top: 0;
  left: 0;
  backdrop-filter: blur(3px);
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition-duration: 300ms;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

const Lateral = styled.div`
  width: 350px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  padding: 16px;
  right: -100%;
  transition-duration: 300ms;
  transition-delay: 300ms;
  opacity: 0;
  visibility: hidden;
  z-index: 101;
  &.active {
    right: 0;
    opacity: 1;
    visibility: visible;
  }
`;

const Label = styled.label`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 6px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 2px solid #dddddd;
  border-radius: 5px;
  padding-left: 10px;
  margin-bottom: 16px;
  outline: none;
  &:focus {
    border-color: blueviolet;
  }
`;
