import { useForm } from 'react-hook-form'
import Input from '../components/Input'
import Button from '../components/Button'
import Header from '../components/Header'
import { BRAND_NAME } from '../constants/brand'

export default function CadastroLoja() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()

  const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'Cadastro', href: '/cadastro-loja', current: true },
  ]

  const onSubmit = async (data) => {
    console.log('Dados do formulário:', data)
    alert('Cadastro realizado com sucesso!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <Header brandName={BRAND_NAME} navigationItems={navigation} />

      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header do formulário */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl mb-4 shadow-lg shadow-green-500/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Cadastro de Loja
            </h1>
            <p className="text-gray-400 text-lg">
              Preencha os dados abaixo para começar sua jornada
            </p>
          </div>

          {/* Card do formulário */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10">
            {/* Formulário */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Seção: Dados da Loja */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">1</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Dados da Loja
                  </h2>
                </div>

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
              </div>

              {/* Divisor */}
              <div className="border-t border-gray-200"></div>

              {/* Seção: Endereço */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Endereço
                  </h2>
                </div>

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
              </div>

              {/* Divisor */}
              <div className="border-t border-gray-200"></div>

              {/* Seção: Dados do Responsável */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-lg">3</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Dados do Responsável
                  </h2>
                </div>

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
              </div>

              {/* Divisor */}
              <div className="border-t border-gray-200"></div>

              {/* Seção: Senha */}
              <div className="space-y-5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-lg">4</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Criar Senha
                  </h2>
                </div>

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
              </div>

              {/* Termos e Condições */}
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="termos"
                    className="mt-1 w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    {...register('termos', {
                      required: 'Você deve aceitar os termos e condições'
                    })}
                  />
                  <label htmlFor="termos" className="text-sm text-gray-700 leading-relaxed">
                    Eu li e aceito os{' '}
                    <a href="#" className="text-green-600 hover:text-green-700 font-semibold underline">
                      termos e condições
                    </a>{' '}
                    e a{' '}
                    <a href="#" className="text-green-600 hover:text-green-700 font-semibold underline">
                      política de privacidade
                    </a>
                  </label>
                </div>
                {errors.termos && (
                  <p className="text-sm text-red-600 flex items-center gap-1 mt-2 ml-8">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.termos.message}
                  </p>
                )}
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="flex-1 shadow-xl shadow-green-500/20 hover:shadow-green-500/40"
                >
                  <span className="flex items-center justify-center gap-2">
                    Cadastrar Loja
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="flex-1 border-green-500! text-green-600! hover:bg-green-50! hover:text-green-700!"
                  onClick={() => window.location.href = '/'}
                >
                  Cancelar
                </Button>
              </div>
            </form>

            {/* Link para login */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                Já tem uma conta?{' '}
                <a href="/login" className="text-green-600 hover:text-green-700 font-bold underline">
                  Fazer login
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
