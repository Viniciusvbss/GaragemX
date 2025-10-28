import Button from "./Button"

/**
 * Logo Component - Hero section with CTA buttons
 *
 * @param {Object} props
 * @param {string} props.onCadastroClick - URL ou função para o botão Cadastre-se
 * @param {string} props.onLoginClick - URL ou função para o botão Login
 */
export default function Logo({ onCadastroClick = '#', onLoginClick = '#' }) {
  const handleCadastro = () => {
    if (typeof onCadastroClick === 'function') {
      onCadastroClick()
    } else {
      window.location.href = onCadastroClick
    }
  }

  const handleLogin = () => {
    if (typeof onLoginClick === 'function') {
      onLoginClick()
    } else {
      window.location.href = onLoginClick
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Animated gradient background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Logo Text */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl font-black text-white tracking-tight mb-4 sm:mb-6 drop-shadow-2xl">
            GARAGE<span className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl text-garage-end italic">X</span>
          </h1>
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
              Transformando vidas e aproximando famílias
            </p>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Button
            variant="primary"
            size="lg"
            className="w-56 shadow-2xl shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105 transition-transform"
            onClick={handleCadastro}
          >
            <span className="flex items-center justify-center gap-2">
              Cadastre-se
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-56 hover:scale-105 transition-transform border-green-500! text-green-400! hover:bg-green-50! hover:text-green-700!"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>

        {/* Features badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-16 sm:mt-20">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-200">Rápido e Seguro</span>
          </div>
         
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-200">Suporte 24/7</span>
          </div>
        </div>
      </div>
    </div>
  )
}
