import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import CadastroLoja from '../pages/AuthLojista/CadastroLoja.jsx';
import LoginLojista from '../pages/AuthLojista/LoginLojista.jsx';
import LojaPage from '../pages/LojaPage.jsx';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-loja" element={<CadastroLoja />} />
        <Route path="/login-lojista" element={<LoginLojista />} />
        <Route path="/loja" element={<LojaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
