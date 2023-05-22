import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Contato } from './pages/Contato'
import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import { NotFount } from './pages/NotFound'
import { PageLayout } from './layouts/PageLayout/PageLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route index element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/contato' element={<Contato />} />
          </Route>
          <Route path='*' element={<NotFount />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
