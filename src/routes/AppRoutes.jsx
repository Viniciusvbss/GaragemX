import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import CadastroLoja from '../pages/CadastroLoja.jsx';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-loja" element={<CadastroLoja />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
