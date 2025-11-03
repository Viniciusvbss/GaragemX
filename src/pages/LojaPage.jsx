import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function LojaPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('dashboard')

  // Dados mockados - substituir por dados reais da API
  const lojaInfo = {
    nome: 'Oficina do Jo�o',
    cnpj: '12.345.678/0001-00',
    email: 'contato@oficinadojoao.com'
  }

  const stats = [
    { nome: 'Vendas do M�s', valor: 'R$ 12.500', icone: '=�', cor: 'green' },
    { nome: 'Produtos Ativos', valor: '24', icone: '=�', cor: 'blue' },
    { nome: 'Clientes', valor: '156', icone: '=e', cor: 'purple' },
    { nome: 'Pedidos Pendentes', valor: '8', icone: '=', cor: 'orange' }
  ]

  const pedidosRecentes = [
    { id: '#001', cliente: 'Maria Silva', servico: 'Troca de �leo', valor: 'R$ 150', status: 'Conclu�do' },
    { id: '#002', cliente: 'Jo�o Santos', servico: 'Alinhamento', valor: 'R$ 200', status: 'Em andamento' },
    { id: '#003', cliente: 'Ana Costa', servico: 'Revis�o completa', valor: 'R$ 850', status: 'Pendente' }
  ]

  const handleLogout = () => {
    // Implementar logout
    navigate('/login-lojista')
  }

  const colorClasses = {
    green: 'bg-green-100 text-green-600 border-green-200',
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200'
  }

  const statusColors = {
    'Conclu�do': 'bg-green-100 text-green-700',
    'Em andamento': 'bg-blue-100 text-blue-700',
    'Pendente': 'bg-yellow-100 text-yellow-700'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header brandName={BRAND_NAME} /> */}

      <div className="container mx-auto px-4 py-8">
        {/* Cabe�alho da loja */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{lojaInfo.nome}</h1>
              <div className="text-gray-600 space-y-1">
                <p>CNPJ: {lojaInfo.cnpj}</p>
                <p>Email: {lojaInfo.email}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => navigate('/loja/configuracoes')}
              >
                � Configura��es
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="text-red-600! border-red-300! hover:bg-red-50!"
              >
                =� Sair
              </Button>
            </div>
          </div>
        </div>
        {/* Navega��o por abas */}
        <div className="bg-white rounded-2xl shadow-md mb-8 overflow-hidden">
          <div className="flex flex-wrap border-b border-gray-200">
            {['dashboard', 'produtos', 'pedidos', 'clientes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === tab
                    ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Conte�do das abas */}
          <div className="p-6">
            {activeTab === 'dashboard' && (
              <div>
                {/* Cards de estat�sticas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`${colorClasses[stat.cor]} rounded-xl p-6 border-2 transition-transform hover:scale-105`}
                    >
                      <div className="text-3xl mb-2">{stat.icone}</div>
                      <p className="text-sm opacity-80 mb-1">{stat.nome}</p>
                      <p className="text-2xl font-bold">{stat.valor}</p>
                    </div>
                  ))}
                </div>


                {/* Pedidos recentes */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Pedidos Recentes</h2>
                  <div className="space-y-3">
                    {pedidosRecentes.map((pedido) => (
                      <div
                        key={pedido.id}
                        className="bg-white rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-bold text-gray-800">{pedido.id}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[pedido.status]}`}>
                              {pedido.status}
                            </span>
                          </div>
                          <p className="text-gray-600">{pedido.cliente} - {pedido.servico}</p>
                        </div>
                        <div className="text-xl font-bold text-green-600">{pedido.valor}</div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full mt-4"
                    onClick={() => setActiveTab('pedidos')}
                  >
                    Ver todos os pedidos
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'produtos' && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">=�</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Gerenciamento de Produtos</h3>
                <p className="text-gray-600 mb-6">Gerencie seus produtos e servi�os aqui</p>
                <Button variant="primary">+ Adicionar Produto</Button>
              </div>
            )}

            {activeTab === 'pedidos' && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">=�</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Seus Pedidos</h3>
                <p className="text-gray-600">Visualize e gerencie todos os pedidos da sua loja</p>
              </div>
            )}

            {activeTab === 'clientes' && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">=e</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Base de Clientes</h3>
                <p className="text-gray-600 mb-6">Gerencie sua base de clientes</p>
                <Button variant="primary">+ Adicionar Cliente</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
