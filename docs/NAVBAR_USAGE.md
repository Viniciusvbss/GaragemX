# Header/Navbar - Exemplo de Uso

## Uso Básico

```jsx
import Header from './components/Header'

function App() {
  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Equipe', href: '#', current: false },
    { name: 'Projetos', href: '#', current: false },
    { name: 'Calendário', href: '#', current: false },
  ]

  return (
    <div>
      <Header
        brandName="GaragemX"
        navigationItems={navigation}
      />
      {/* Seu conteúdo aqui */}
    </div>
  )
}
```

## Com Actions (botões do lado direito)

```jsx
import Header from './components/Header'

function App() {
  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Sobre', href: '/about', current: false },
    { name: 'Contato', href: '/contact', current: false },
  ]

  const actions = (
    <div className="flex gap-2">
      <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
        Login
      </button>
      <button className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100">
        Cadastrar
      </button>
    </div>
  )

  return (
    <Header
      brandName="GaragemX"
      navigationItems={navigation}
      actions={actions}
      brandHref="/"
    />
  )
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `brandName` | string | 'GaragemX' | Nome da marca/logo |
| `navigationItems` | Array | [] | Lista de itens de navegação |
| `actions` | ReactNode | null | Componentes/botões do lado direito |
| `brandHref` | string | '/' | Link do logo |

## Estrutura do navigationItems

```javascript
[
  {
    name: 'Nome do Item',  // Texto exibido
    href: '/caminho',      // URL de destino
    current: false         // true = item ativo
  }
]
```

## Recursos

- Totalmente responsivo com menu mobile
- Usa Headless UI para acessibilidade
- Estilizado com Tailwind CSS
- Menu hambúrguer no mobile
- Suporte a ações customizadas (botões, menus de usuário, etc.)
