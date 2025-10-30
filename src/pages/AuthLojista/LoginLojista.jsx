import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { BRAND_NAME } from '../../constants/brand'

export default function LoginLojista() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log('Dados de login:', data)
    alert('Login realizado com sucesso!')
    // Aqui você faria a autenticação real
    // navigate('/dashboard') // após autenticação
  }

  const handleGoToCadastro = () => {
    navigate('/cadastro-loja')
  }

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
      </div>

      <Header brandName={BRAND_NAME} />

      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Header do formulário */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-green-400 to-emerald-500 rounded-2xl mb-4 shadow-lg shadow-green-500/20">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Login 
            </h1>
            <p className="text-gray-400 text-lg">
              Acesse sua conta e gerencie sua loja
            </p>
          </div>

          {/* Card do formulário */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-10">
            {/* Formulário */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                placeholder="Digite sua senha"
                error={errors.senha?.message}
                {...register('senha', {
                  required: 'Senha é obrigatória',
                  minLength: {
                    value: 6,
                    message: 'Senha deve ter no mínimo 6 caracteres'
                  }
                })}
                required
              />

              {/* Link esqueci senha */}
              <div className="text-right">
                <a href="#" className="text-sm text-green-600 hover:text-green-700 font-semibold">
                  Esqueci minha senha
                </a>
              </div>

              {/* Botões */}
              <div className="flex flex-col gap-4 pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full shadow-xl shadow-green-500/20 hover:shadow-green-500/40"
                >
                  <span className="flex items-center justify-center gap-2">
                    Entrar
                  </span>
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full border-green-500! text-green-600! hover:bg-green-50! hover:text-green-700!"
                  onClick={handleCancel}
                >
                  Voltar
                </Button>
              </div>
            </form>

            {/* Link para cadastro */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                Não tem uma conta?{' '}
                <button
                  type="button"
                  onClick={handleGoToCadastro}
                  className="text-green-600 hover:text-green-700 font-bold underline"
                >
                  Cadastre-se
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
