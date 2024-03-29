import styled from "styled-components";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Label } from "../../components/FormComponents";
import DataTable from "react-data-table-component";

export const Salas = () => {
  const [lateralCriar, setLateralCriar] = useState(false);
  const [lateralEditar, setLateralEditar] = useState(false);
  const [salas, setSalas] = useState([
    { sala_id: 1, sala_nome: "bill gates", sala_capacidade: 20 },
    { sala_id: 2, sala_nome: "steve jobs", sala_capacidade: 32 },
    { sala_id: 3, sala_nome: "larry page", sala_capacidade: 32 },
  ]);
  const colunas = [
    {
      name: "Id",
      selector: (row) => row.sala_id,
    },
    {
      name: "Sala",
      selector: (row) => row.sala_nome,
    },
    {
      name: "Capacidade",
      selector: (row) => row.sala_capacidade,
      maxWidth: "120px",
      center: true,
    },
    {
      name: "Acções",
      maxWidth: "120px",
      center: true,
      selector: (row) => (
        <Actions>
          <box-icon
            name="pencil"
            onClick={() => {
              setValue("sala_id", row.sala_id);
              setValue("sala_nome", row.sala_nome);
              setValue("sala_capacidade", row.sala_capacidade);
              setLateralEditar(true);
            }}
          ></box-icon>
          <box-icon
            name="trash"
            onClick={() => deletarSala(row.sala_id)}
          ></box-icon>
        </Actions>
      ),
    },
  ];
  const { register, handleSubmit } = useForm();
  const {
    register: resisterEditar,
    handleSubmit: handleSubmitEditar,
    setValue,
  } = useForm();

  const cadastrarSala = (dados) => {
    setSalas([...salas, dados]);
    setLateralCriar(false);
  };

  const editarSala = (dados) => {
    const salasAtualizadas = salas.map((sala) => {
      if (sala.sala_id === dados.sala_id) {
        let novaSala = {
          sala_id: dados.sala_id,
          sala_nome: dados.sala_nome,
          sala_capacidade: dados.sala_capacidade,
        };
        return novaSala;
      }
      return sala;
    });
    setSalas(salasAtualizadas);
    setLateralEditar(false);
  };

  const deletarSala = (sala_id) => {
    const salasRestantes = salas.filter((sala) => {
      if(sala.sala_id !== sala_id) {
        return sala
      }
    });
    setSalas(salasRestantes);
  };

  return (
    <>
      <Header>
        <h1>Salas</h1>
        <Button title="Nova Sala" click={() => setLateralCriar(true)} />
      </Header>
      <DataTable data={salas} columns={colunas} />
      <Overlay
        className={lateralCriar || lateralEditar ? "active" : ""}
        onClick={() => {
          setLateralCriar(false);
          setLateralEditar(false);
        }}
      />
      <Lateral className={lateralCriar && "active"}>
        <Header>
          <h3>Adicionar</h3>
          <Button
            classe={"circle pilled"}
            title={"X"}
            click={() => setLateralCriar(false)}
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

      <Lateral className={lateralEditar && "active"}>
        <Header>
          <h3>Editar</h3>
          <Button
            classe={"circle pilled"}
            s
            title={"X"}
            click={() => setLateralEditar(false)}
          >
            X
          </Button>
        </Header>
        <Body>
          <form onSubmit={handleSubmitEditar(editarSala)}>
            <Input type="hidden" {...resisterEditar("sala_id")} />
            <Label>Nome</Label>
            <Input
              placeholder="Digite o nome da sala"
              {...resisterEditar("sala_nome")}
            ></Input>

            <Label>Capacidade</Label>
            <Input type="number" {...resisterEditar("sala_capacidade")}></Input>
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

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  & box-icon {
    width: 40px;
    height: 36px;
    text-align: center;
    padding: 8px;
    background-color: blueviolet;
    fill: white;
    cursor: pointer;
    border-radius: 20px;
    transition-duration: 200ms;
  }
  & box-icon:hover {
    background-color: #641da7;
  }
`;
