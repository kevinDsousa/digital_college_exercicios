import styled from "styled-components";
import { Button } from "../../components/Button";
import { useState } from "react";

export const Salas = () => {
  const [lateral, setLateral] = useState(false);

  return (
    <>
      <Header>
        <h1>Salas</h1>
        <Button title="teste" click={() => setLateral(true)} />
      </Header>
      Tabela
      <Overlay className={lateral && "active"}>
        <Lateral>
          <Header>
            <h3>Adicionar</h3>
            <LateralClose onClick={() => setLateral(false)}>
              X
            </LateralClose>
          </Header>
        </Lateral>
      </Overlay>
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
  position: absolute;
  top: 0;
  right: -100%;
  transition-duration: 300ms;
  transition-delay: 300ms;
  ${Overlay}.active &{
    right: 0;
  }
`;

const LateralClose = styled.button`
  width: 40px;
  height: 40px;
  text-align: center;
  font-weight: bold;
  background-color: blueviolet;
  border-radius: 25px;
  color: #ffffff;
  cursor: pointer;
`;
