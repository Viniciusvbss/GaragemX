"use client"

import { useState } from "react"
import { Flame, Pizza, Beef, Coffee, IceCream } from "lucide-react"
import { cn } from "../lib/utils"

const categories = [
  { id: "promocoes", label: "Promoções", icon: Flame },
  { id: "pizzas", label: "Pizzas", icon: Pizza },
  { id: "hamburgueres", label: "Hambúrgueres", icon: Beef },
  { id: "bebidas", label: "Bebidas", icon: Coffee },
  { id: "sobremesas", label: "Sobremesas", icon: IceCream },
]

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState("promocoes")

  const scrollToSection = (id) => {
    setActiveCategory(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 180
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
     <nav className="sticky fixed top-[120px] z-40 bg-white shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-200 font-medium",
                    "hover:bg-emerald-700 hover:text-white",
                    activeCategory === category.id
                      ? "bg-emerald-700 text-white"
                      : "bg-white text-gray-700 border border-gray-200",
                )}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
