"use client"

import { create } from "zustand"

// Plain JavaScript zustand store (no TypeScript) so this file runs under Vite/react
export const useCart = create((set, get) => ({
  items: [],
  total: 0,
  itemCount: 0,

  addItem: (item) => {
    const items = get().items
    const existingItem = items.find((i) => i.id === item.id)

    if (existingItem) {
      set({
        items: items.map((i) => (i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i)),
      })
    } else {
      set({ items: [...items, { ...item, quantity: 1 }] })
    }

    const newItems = get().items
    set({
      total: newItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
      itemCount: newItems.reduce((sum, i) => sum + i.quantity, 0),
    })
  },

  removeItem: (id) => {
    const items = get().items.filter((i) => i.id !== id)
    set({
      items,
      total: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      itemCount: items.reduce((sum, i) => sum + i.quantity, 0),
    })
  },

  updateQuantity: (id, quantity) => {
    if (quantity === 0) {
      get().removeItem(id)
      return
    }

    const items = get().items.map((i) => (i.id === id ? { ...i, quantity } : i))
    set({
      items,
      total: items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      itemCount: items.reduce((sum, i) => sum + i.quantity, 0),
    })
  },
}))
