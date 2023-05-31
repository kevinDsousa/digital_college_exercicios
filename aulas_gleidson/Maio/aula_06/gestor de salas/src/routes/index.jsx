import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Dashboard } from "../layouts/Dashboard"
import { Home } from "../pages/Home"
import { Salas } from "../pages/Salas"
import { Responsaveis } from "../pages/Responsaveis"
import { Eventos } from "../pages/Eventos"
import { NotFound } from "../pages/NotFound"

export const Ways = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/home" element={<Home />} />
            <Route path="/salas" element={<Salas />} />
            <Route path="/responsaveis" element={<Responsaveis />} />
            <Route path="/eventos" element={<Eventos />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}