// import Bebidas from "../assets/icons/Bebidas.svg"
import BebidasIcon from '../assets/icons/Bebidas.svg?react'

export default function MenuLojas() {

    const servicos = [
        { nome: 'Bebidas', icone: BebidasIcon },
        { nome: 'Comidas', icone: BebidasIcon },
        { nome: 'Sobremesas', icone: BebidasIcon },
        { nome: 'Lanches', icone: BebidasIcon },
        { nome: 'Doces', icone: BebidasIcon },
        { nome: 'Salgados', icone: BebidasIcon },
        { nome: 'Outros', icone: BebidasIcon },
        { nome: 'Extras', icone: BebidasIcon },
        { nome: 'qualquercoisa', icone: BebidasIcon },
    
    ]
    const circleclass = [
        "h-20 w-20 rounded-full cursor-pointer",
        "bg-white/10 active:bg-white/20 hover:bg-white/30",
        "border border-yellow-500 active:border-blue-500 hover:border-red-500",
        "text-yellow-500 active:text-blue-500 hover:text-red-500",
    ].join(" ")
    return (
        <div className="flex bg-gradient-to-br from-emerald-400 to-emerald-600 min-h-screen">
            <div className="container mx-auto px-4 py-8 flex justify-center items-center">
                <div className="w-96 h-96 backdrop-blur-sm rounded-xl bg-white/10">
                    <p className="text-white text-2xl font-bold italic text-center p-8 pb-10">Escolha seu serviço</p>
                    <div className="grid grid-cols-3 gap-4">
                        {servicos.map((servico, index) => (    
                            <div key={index} className="flex justify-center items-center bg-transparent">
                                <servico.icone className={circleclass} />
                            </div>  
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}