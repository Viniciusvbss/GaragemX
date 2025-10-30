import Input from '../Input'
import FormSection from './FormSection'

export default function DadosResponsavelForm({ register, errors }) {
  return (
    <FormSection number="3" title="Dados do Responsável" color="purple">
      <Input
        label="Nome Completo"
        type="text"
        placeholder="João Silva"
        error={errors.nomeResponsavel?.message}
        {...register('nomeResponsavel', {
          required: 'Nome do responsável é obrigatório'
        })}
        required
      />

      <Input
        label="CPF"
        type="text"
        placeholder="000.000.000-00"
        error={errors.cpf?.message}
        {...register('cpf', {
          required: 'CPF é obrigatório',
          pattern: {
            value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
            message: 'CPF inválido (formato: 000.000.000-00)'
          }
        })}
        required
      />

      <Input
        label="Email do Responsável"
        type="email"
        placeholder="joao@email.com"
        error={errors.emailResponsavel?.message}
        {...register('emailResponsavel', {
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
