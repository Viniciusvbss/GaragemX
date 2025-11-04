"use client"

import { ShoppingBag, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "./ui/sheet"
import { useCart } from "../hooks/use-cart"
// using standard img elements instead of next/image

export function Cart() {
  const { items, removeItem, updateQuantity, total, itemCount } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
          <Button
            variant="default"
            size="lg"
            className="fixed bottom-6 right-6 h-14 px-6 rounded-full! shadow-2xl gap-2 z-50 font-semibold bg-emerald-700 text-white"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Carrinho</span>
            {itemCount > 0 && (
              <span className="bg-white text-black rounded-full! w-6 h-6 flex items-center justify-center text-sm font-bold">
                {itemCount}
              </span>
            )}
          </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-white">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Seu Carrinho</SheetTitle>
          <SheetDescription>Lista de itens adicionados ao carrinho e resumo do pedido.</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full pt-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
              <p className="text-muted-foreground font-medium">Seu carrinho está vazio</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto space-y-4 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 bg-secondary rounded-xl p-3 border border-border/50">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm mb-1 truncate">{item.name}</h4>
                      <p className="text-primary font-bold text-base mb-2">
                        R$ {item.price.toFixed(2).replace(".", ",")}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 rounded-lg bg-transparent"
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm font-semibold w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 rounded-lg bg-transparent"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 ml-auto text-destructive hover:bg-destructive/10 rounded-lg"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-4">
                <div className="flex items-center justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
                <Button size="lg" className="w-full h-12 text-base font-semibold shadow-lg">
                  Finalizar Pedido
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
