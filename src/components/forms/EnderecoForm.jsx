import Input from '../Input'
import FormSection from './FormSection'

export default function EnderecoForm({ register, errors }) {
  return (
    <FormSection number="2" title="Endereço" color="blue">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <Input
            label="CEP"
            type="text"
            placeholder="00000-000"
            error={errors.cep?.message}
            {...register('cep', {
              required: 'CEP é obrigatório',
              pattern: {
                value: /^\d{5}-?\d{3}$/,
                message: 'CEP inválido'
              }
            })}
            required
          />
        </div>

        <div className="md:col-span-2">
          <Input
            label="Rua"
            type="text"
            placeholder="Av. Paulista"
            error={errors.rua?.message}
            {...register('rua', { required: 'Rua é obrigatória' })}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <Input
            label="Número"
            type="text"
            placeholder="123"
            error={errors.numero?.message}
            {...register('numero', { required: 'Número é obrigatório' })}
            required
          />
        </div>

        <div className="md:col-span-2">
          <Input
            label="Complemento"
            type="text"
            placeholder="Sala 5 (opcional)"
            {...register('complemento')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Bairro"
          type="text"
          placeholder="Centro"
          error={errors.bairro?.message}
          {...register('bairro', { required: 'Bairro é obrigatório' })}
          required
        />

        <Input
          label="Cidade"
          type="text"
          placeholder="São Paulo"
          error={errors.cidade?.message}
          {...register('cidade', { required: 'Cidade é obrigatória' })}
          required
        />
      </div>

      <Input
        label="Estado"
        type="text"
        placeholder="SP"
        error={errors.estado?.message}
        {...register('estado', {
          required: 'Estado é obrigatório',
          maxLength: {
            value: 2,
            message: 'Use a sigla do estado (ex: SP)'
          }
        })}
        required
      />
    </FormSection>
  )
}
