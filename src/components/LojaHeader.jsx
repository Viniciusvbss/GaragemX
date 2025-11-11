import Bebidas from '../assets/icons/Bebidas.svg?react'
import { Search } from 'lucide-react'
import Input from './Input.jsx'

export default function LojaHeader({ lojaInfo = { nome: '', titulo: '' }, Icon = Bebidas, className = '' }) {
  return (
     <header className="sticky top-0 z-50 bg-gradient-to-br from-[rgb(17,153,142)] to-[rgb(56,239,125)] shadow-lg">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <div>
              <h1 className="font-bold text-xl leading-tight text-white">{lojaInfo.nome}</h1>
              <p className="text-xs text-white/80 font-medium">{lojaInfo.titulo}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Buscar no cardápio..."
            className="pl-11 bg-white border-0 h-11 text-base shadow-md placeholder:text-gray-400"
          />
        </div>
      </div>
    </header>
  )
}
