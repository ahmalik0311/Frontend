"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export interface CartItem {
  id: string | number
  name: string
  price: number
  image: string
  quantity: number
  size?: number
  color?: string
}

export interface WishlistItem {
  id: string | number
  name: string
  price: number
  image: string
  brand?: string
  category?: string
}

interface StoreContextType {
  cart: CartItem[]
  wishlist: WishlistItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string | number) => void
  updateQuantity: (id: string | number, delta: number) => void
  toggleWishlist: (item: WishlistItem) => void
  isInWishlist: (id: string | number) => boolean
  clearCart: () => void
}

const StoreContext = createContext<StoreContextType | undefined>(undefined)

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])

  // Load from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("shoebox-cart")
    const savedWishlist = localStorage.getItem("shoebox-wishlist")
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem("shoebox-cart", JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem("shoebox-wishlist", JSON.stringify(wishlist))
  }, [wishlist])

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        )
      }
      return [...prev, item]
    })
  }

  const removeFromCart = (id: string | number) => {
    setCart((prev) => prev.filter((i) => i.id !== id))
  }

  const updateQuantity = (id: string | number, delta: number) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
      )
    )
  }

  const toggleWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === item.id)
      if (exists) return prev.filter((i) => i.id !== item.id)
      return [...prev, item]
    })
  }

  const isInWishlist = (id: string | number) => {
    return wishlist.some((i) => i.id === id)
  }

  const clearCart = () => setCart([])

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider")
  }
  return context
}
