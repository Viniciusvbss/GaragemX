# GaragemX - React + Vite + Tailwind CSS

Sistema de gerenciamento para oficinas mecânicas.

## Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server rápido
- **Tailwind CSS** - Framework CSS utility-first
- **React Router DOM** - Roteamento de páginas
- **React Hook Form** - Gerenciamento de formulários
- **Headless UI** - Componentes acessíveis sem estilo

## Estrutura do Projeto

```
src/
├── pages/
│   ├── Auth/              # Páginas de autenticação de usuários
│   ├── AuthLojista/       # Páginas de autenticação de lojistas
│   │   └── CadastroLoja.jsx
│   ├── Home.jsx
│   └── LojaPage.jsx
├── components/
│   ├── Header.jsx         # Navbar/Cabeçalho
│   ├── Input.jsx          # Componente de input reutilizável
│   ├── Button.jsx         # Componente de botão reutilizável
│   ├── Logo.jsx
│   ├── Footer.jsx
│   ├── LojaCard.jsx
│   └── RegionSelector.jsx
├── Context/
│   └── RegionContext.jsx
├── routes/
│   └── AppRoutes.jsx      # Configuração de rotas
├── constants/
│   └── brand.js           # Constantes da marca
└── assets/                # Imagens e arquivos estáticos
```

## Componentes Disponíveis

O projeto possui componentes reutilizáveis e bem documentados:

- **[Button](docs/BUTTON_USAGE.md)** - Botões com múltiplas variantes (primary, secondary, outline, ghost)
- **[Input](docs/INPUT_USAGE.md)** - Inputs com validação e integração com React Hook Form
- **[Header/Navbar](docs/NAVBAR_USAGE.md)** - Cabeçalho responsivo com menu mobile

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## Build para Produção

```bash
npm run build
```

## Preview da Build

```bash
npm run preview
```

## Rotas

- `/` - Página inicial
- `/cadastro-loja` - Cadastro de loja/oficina

## Configuração do ESLint

Se você está desenvolvendo uma aplicação de produção, é recomendado usar TypeScript com regras de lint type-aware. Confira o [template TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para mais informações.

## Documentação dos Componentes

Para ver exemplos de uso detalhados dos componentes, consulte a pasta [docs/](docs/).
