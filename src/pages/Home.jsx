import Header from '../components/Header.jsx';
import Logo from '../components/Logo.jsx';
import { BRAND_NAME } from '../constants/brand';

function Home() {

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      <Header brandName={BRAND_NAME} />

      {/* Logo centralizada */}
      <main className="flex items-center justify-center min-h-[calc(100vh-5rem)] relative">
        <Logo
          onCadastroClick="/cadastro-loja"
          onLoginClick="/login-lojista"
        />
      </main>
    </div>
  );
}

export default Home;