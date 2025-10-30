import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Header from '../../components/Header'
import DadosLojaForm from '../../components/forms/DadosLojaForm'
import EnderecoForm from '../../components/forms/EnderecoForm'
import DadosResponsavelForm from '../../components/forms/DadosResponsavelForm'
import SenhaForm from '../../components/forms/SenhaForm'
import TermosCondicoesCheckbox from '../../components/forms/TermosCondicoesCheckbox'
import { BRAND_NAME } from '../../constants/brand'

export default function CadastroLoja() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log('Dados do formulário:', data)
    alert('Cadastro realizado com sucesso!')
    // Redireciona para a página de login após cadastro bem-sucedido
    navigate('/login-lojista')
  }

  const handleGoToLogin = () => {
    navigate('/login-lojista')
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
        <div className="max-w-3xl mx-auto">
          {/* Header do formulário */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-green-400 to-emerald-500 rounded-2xl mb-4 shadow-lg shadow-green-500/20">
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
              <DadosLojaForm register={register} errors={errors} />

              {/* Divisor */}
              <div className="border-t border-gray-200"></div>

              {/* Seção: Endereço */}
              <EnderecoForm register={register} errors={errors} />

              {/* Divisor */}
              <div className="border-t border-gray-200"></div>

              {/* Seção: Dados do Responsável */}
              <DadosResponsavelForm register={register} errors={errors} />

              {/* Divisor */}
              <div className="border-t border-gray-200"></div>

              {/* Seção: Senha */}
              <SenhaForm register={register} errors={errors} watch={watch} />

              {/* Termos e Condições */}
              <TermosCondicoesCheckbox register={register} errors={errors} />

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
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </div>
            </form>

            {/* Link para login */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                Já tem uma conta?{' '}
                <button
                  type="button"
                  onClick={handleGoToLogin}
                  className="text-green-600 hover:text-green-700 font-bold underline"
                >
                  Fazer login
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
