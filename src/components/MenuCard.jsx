import { Plus } from "lucide-react"

export function MenuCard({ id, name, description, price, image }) {
  return (
    <div className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-200 rounded-lg">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 leading-tight">{name}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-emerald-700">
            {"R$ "}
            {price.toFixed(2).replace(".", ",")}
          </span>
          <button
            onClick={() => {/* TODO: Implementar adição ao carrinho */}}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
            {"Adicionar"}
          </button>
        </div>
      </div>
    </div>
  )
}