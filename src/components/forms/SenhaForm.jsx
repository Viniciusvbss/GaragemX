import Input from '../Input'
import FormSection from './FormSection'

export default function SenhaForm({ register, errors, watch }) {
  return (
    <FormSection number="4" title="Criar Senha" color="orange">
      <Input
        label="Senha"
        type="password"
        placeholder="Mínimo 8 caracteres"
        error={errors.senha?.message}
        {...register('senha', {
          required: 'Senha é obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres'
          }
        })}
        required
      />

      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Digite a senha novamente"
        error={errors.confirmarSenha?.message}
        {...register('confirmarSenha', {
          required: 'Confirmação de senha é obrigatória',
          validate: (value) =>
            value === watch('senha') || 'As senhas não coincidem'
        })}
        required
      />
    </FormSection>
  )
}
