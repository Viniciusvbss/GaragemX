import BebidasIcon from '../assets/icons/Bebidas.svg?react'
import LanchoneteIcon from '../assets/icons/Lanchonete.svg?react'

export default function MenuLojas() {
  const servicos = [
    { nome: 'Bebidas', icone: BebidasIcon },
    { nome: 'Comidas', icone: LanchoneteIcon },
    { nome: 'Sobremesas', icone: BebidasIcon },
    { nome: 'Lanches', icone: BebidasIcon },
    { nome: 'Doces', icone: BebidasIcon },
    { nome: 'Salgados', icone: BebidasIcon },
    { nome: 'Outros', icone: BebidasIcon },
    { nome: 'Extras', icone: BebidasIcon },
    { nome: 'Qualquer coisa', icone: BebidasIcon },
  ]

  const circleclass = [
    "h-24 w-24 rounded-full flex items-center justify-center cursor-pointer",
    "bg-white/10 backdrop-blur-md",
    "border border-white/20 hover:border-white/40 active:border-emerald-200",
    "shadow-lg hover:shadow-2xl",
    "transform transition-all duration-250 ease-out hover:scale-105 active:scale-95",
    "text-white" // importante: faz o svg herdar essa cor se o SVG usar currentColor
  ].join(" ")

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <div className="mx-auto w-full max-w-[880px] backdrop-blur-lg rounded-3xl bg-white/10 shadow-2xl border border-white/10 p-8">
          <p className="text-white text-2xl font-bold italic text-center mb-8 drop-shadow-md">
            Escolha seu serviço
          </p>

          <div className="grid grid-cols-3 gap-6 place-items-center">
            {servicos.map((servico, index) => {
              const Icon = servico.icone
              return (
                <div key={index} className="flex flex-col items-center gap-3">
                  <button className={circleclass} aria-label={servico.nome}>
                    {/* 
                      Observação: para o ícone herdar a cor, o SVG precisa usar fill/stroke = currentColor.
                      Aqui passamos 'text-white' na bolinha e 'w-10 h-10' no SVG.
                    */}
                    <Icon className="w-10 h-10" />
                  </button>
                  <span className="text-white text-sm font-medium">{servico.nome}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
