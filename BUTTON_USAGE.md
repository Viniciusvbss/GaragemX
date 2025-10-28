# Button Component - Exemplo de Uso

## Importação

```jsx
import Button from './components/Button'
```

## Exemplos

### Botão Primary (padrão)
```jsx
<Button onClick={() => console.log('Clicado!')}>
  Começar Agora
</Button>
```

### Botão Secondary
```jsx
<Button variant="secondary">
  Saiba Mais
</Button>
```

### Botão Outline
```jsx
<Button variant="outline">
  Contato
</Button>
```

### Botão Ghost
```jsx
<Button variant="ghost">
  Cancelar
</Button>
```

## Tamanhos

### Small
```jsx
<Button size="sm">Pequeno</Button>
```

### Medium (padrão)
```jsx
<Button size="md">Médio</Button>
```

### Large
```jsx
<Button size="lg">Grande</Button>
```

## Estados

### Desabilitado
```jsx
<Button disabled>
  Desabilitado
</Button>
```

### Submit em formulário
```jsx
<Button type="submit">
  Enviar
</Button>
```

## Exemplo Completo

```jsx
import Button from './components/Button'

function App() {
  const handleClick = () => {
    alert('Botão clicado!')
  }

  return (
    <div className="flex gap-4">
      <Button
        variant="primary"
        size="lg"
        onClick={handleClick}
      >
        Cadastrar
      </Button>

      <Button
        variant="outline"
        size="lg"
      >
        Ver Mais
      </Button>
    </div>
  )
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | ReactNode | - | Conteúdo do botão |
| `variant` | string | 'primary' | Estilo: 'primary', 'secondary', 'outline', 'ghost' |
| `size` | string | 'md' | Tamanho: 'sm', 'md', 'lg' |
| `onClick` | function | - | Função ao clicar |
| `type` | string | 'button' | Tipo: 'button', 'submit', 'reset' |
| `disabled` | boolean | false | Desabilita o botão |
| `className` | string | '' | Classes CSS adicionais |

## Variantes de Estilo

- **primary**: Gradiente verde (tema do site) com sombra
- **secondary**: Fundo cinza escuro
- **outline**: Borda branca, fundo transparente
- **ghost**: Texto branco, hover sutil
