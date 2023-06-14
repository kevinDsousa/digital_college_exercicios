import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../layouts/Dashboard";
import { Home } from "../pages/Home";
import { Salas } from "../pages/Salas";
import { Responsaveis } from "../pages/Responsaveis";
import { Eventos } from "../pages/Eventos";
import { NotFound } from "../pages/NotFound";
import { Login } from "../pages/Login";
import { useContext } from "react";
import { LoginContext } from "../App";

export const Ways = () => {

  const { logado } = useContext(LoginContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {logado ? (
            <Route path="/" element={<Dashboard />}>
              <Route path="/home" element={<Home />} />
              <Route path="/salas" element={<Salas />} />
              <Route path="/responsaveis" element={<Responsaveis />} />
              <Route path="/eventos" element={<Eventos />} />
            </Route>
          ) : (
            <Route path="/" element={<Login />} />
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
