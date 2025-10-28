import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            React + Tailwind CSS
          </h1>
          <p className="text-gray-600">Projeto configurado e pronto para uso!</p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 mb-6 text-white text-center">
          <p className="text-sm font-semibold mb-2">Contador</p>
          <p className="text-5xl font-bold mb-4">{count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Incrementar
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <span className="text-2xl">⚡</span>
            <span className="text-gray-700">Vite para build ultra-rápido</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
            <span className="text-2xl">🎨</span>
            <span className="text-gray-700">Tailwind CSS configurado</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg">
            <span className="text-2xl">⚛️</span>
            <span className="text-gray-700">React 18 atualizado</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Edite <code className="bg-gray-100 px-2 py-1 rounded text-purple-600">src/App.jsx</code> para começar
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
