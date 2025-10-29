import { useState } from 'react'

export default function Header({ brandName, navigationItems = [] }) {

  // Define a variavel que controla o estado do menu mobile
  // isOpen = Variável que guarda o valor(começa com false)
  // setIsOpen = Função para mudar o valor
  // useState(false) = Valor inicial é false(menu fechado)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-garage-gradient-to-br shadow-md shadow-black/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <a href="/" className="text-white text-2xl font-bold italic">
            {brandName}
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-base font-medium transition-colors ${item.current ? 'text-white font-semibold' : 'text-white/90 hover:text-white'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/*  Menu Hamburguer */}
          <button
          // Quando clicar no botão, chama a função setIsOpen
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>


        {/* Menu mobile aparece/desaparece  */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 text-base font-medium ${item.current ? 'text-white font-semibold' : 'text-white/90'
                  }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
