import Input from '../Input'
import FormSection from './FormSection'

export default function DadosLojaForm({ register, errors }) {
  return (
    <FormSection number="1" title="Dados da Loja" color="green">
      <Input
        label="Nome da Loja"
        type="text"
        placeholder="Ex: Oficina do João"
        error={errors.nomeLoja?.message}
        {...register('nomeLoja', {
          required: 'Nome da loja é obrigatório',
          minLength: {
            value: 3,
            message: 'Nome deve ter no mínimo 3 caracteres'
          }
        })}
        required
      />

      <Input
        label="CNPJ"
        type="text"
        placeholder="00.000.000/0000-00"
        error={errors.cnpj?.message}
        {...register('cnpj', {
          required: 'CNPJ é obrigatório',
          pattern: {
            value: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
            message: 'CNPJ inválido (formato: 00.000.000/0000-00)'
          }
        })}
        required
      />

      <Input
        label="Telefone"
        type="tel"
        placeholder="(11) 98765-4321"
        error={errors.telefone?.message}
        {...register('telefone', {
          required: 'Telefone é obrigatório'
        })}
        required
      />

      <Input
        label="Email da Loja"
        type="email"
        placeholder="contato@minhaloja.com"
        error={errors.emailLoja?.message}
        {...register('emailLoja', {
          required: 'Email é obrigatório',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Email inválido'
          }
        })}
        required
      />
    </FormSection>
  )
}
