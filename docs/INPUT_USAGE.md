# Input Component - Exemplo de Uso

## Importação

```jsx
import Input from './components/Input'
import { useForm } from 'react-hook-form'
```

## Exemplos Básicos

### Input simples
```jsx
<Input
  label="Nome"
  placeholder="Digite seu nome"
  type="text"
/>
```

### Input com validação (usando React Hook Form)
```jsx
function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        type="email"
        placeholder="seu@email.com"
        error={errors.email?.message}
        {...register('email', {
          required: 'Email é obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email inválido'
          }
        })}
        required
      />

      <Input
        label="Senha"
        type="password"
        placeholder="Sua senha"
        error={errors.password?.message}
        {...register('password', {
          required: 'Senha é obrigatória',
          minLength: {
            value: 6,
            message: 'Senha deve ter no mínimo 6 caracteres'
          }
        })}
        required
      />

      <button type="submit">Enviar</button>
    </form>
  )
}
```

## Variantes de Estilo

### Default (padrão)
```jsx
<Input
  label="Nome"
  variant="default"
  placeholder="Fundo branco"
/>
```

### Filled
```jsx
<Input
  label="Email"
  variant="filled"
  placeholder="Fundo cinza"
/>
```

## Tipos de Input

### Texto
```jsx
<Input type="text" label="Nome" />
```

### Email
```jsx
<Input type="email" label="Email" />
```

### Senha
```jsx
<Input type="password" label="Senha" />
```

### Número
```jsx
<Input type="number" label="Idade" />
```

### Telefone
```jsx
<Input type="tel" label="Telefone" />
```

### Data
```jsx
<Input type="date" label="Data de Nascimento" />
```

## Estados

### Com erro
```jsx
<Input
  label="Email"
  error="Email inválido"
  type="email"
/>
```

### Desabilitado
```jsx
<Input
  label="Nome"
  disabled
/>
```

### Campo obrigatório
```jsx
<Input
  label="Nome"
  required
/>
```

## Exemplo Completo de Formulário

```jsx
import { useForm } from 'react-hook-form'
import Input from './components/Input'
import Button from './components/Button'

function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    console.log('Dados do formulário:', data)
    // Enviar para API
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
      <Input
        label="Nome Completo"
        placeholder="João Silva"
        error={errors.name?.message}
        {...register('name', { required: 'Nome é obrigatório' })}
        required
      />

      <Input
        label="Email"
        type="email"
        placeholder="joao@email.com"
        error={errors.email?.message}
        {...register('email', {
          required: 'Email é obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email inválido'
          }
        })}
        required
      />

      <Input
        label="Telefone"
        type="tel"
        placeholder="(11) 98765-4321"
        error={errors.phone?.message}
        {...register('phone', { required: 'Telefone é obrigatório' })}
        required
      />

      <Input
        label="Senha"
        type="password"
        placeholder="Mínimo 6 caracteres"
        error={errors.password?.message}
        {...register('password', {
          required: 'Senha é obrigatória',
          minLength: {
            value: 6,
            message: 'Senha deve ter no mínimo 6 caracteres'
          }
        })}
        required
      />

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Cadastrar
      </Button>
    </form>
  )
}
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | string | - | Texto do label |
| `type` | string | 'text' | Tipo do input (text, email, password, etc.) |
| `placeholder` | string | '' | Texto placeholder |
| `error` | string | - | Mensagem de erro |
| `disabled` | boolean | false | Desabilita o input |
| `variant` | string | 'default' | Estilo: 'default', 'filled' |
| `className` | string | '' | Classes CSS adicionais |
| `required` | boolean | false | Campo obrigatório (adiciona asterisco) |
| `ref` | ref | - | Ref do React (usado com React Hook Form) |

## Recursos

✅ **Integração com React Hook Form** - Suporta validação completa
✅ **Acessibilidade** - ARIA labels e mensagens de erro
✅ **Validação visual** - Estados de erro com ícone
✅ **Responsivo** - Funciona em todos os tamanhos de tela
✅ **Customizável** - Aceita className e outras props HTML
✅ **Tipos diversos** - Suporta todos os tipos de input HTML
