import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { Container, Main } from "./style";

export const Dashboard = () => {
  return (
    <>
      <Container>
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  );
};
