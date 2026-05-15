"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react"

import { useStore } from "@/lib/store-context"

export default function CartPage() {
  const { cart: cartItems, removeFromCart, updateQuantity } = useStore()

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 5000 ? 0 : 250
  const total = subtotal + shipping

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-12">
            Your <span className="text-primary">Cart</span>
          </h1>

          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Cart Items List */}
              <div className="flex-1 space-y-6">
                <div className="hidden md:grid grid-cols-6 gap-4 pb-4 border-b border-border text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  <div className="col-span-3">Product</div>
                  <div className="text-center">Price</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-right">Total</div>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-6 gap-6 items-center py-6 border-b border-border group">
                    <div className="col-span-3 flex items-center gap-6">
                      <div className="w-24 h-24 bg-muted/20 rounded-2xl overflow-hidden shrink-0 border border-border">
                        <Image src={item.image} alt={item.name} width={100} height={100} className="object-contain p-2" />
                      </div>
                      <div>
                        <h3 className="font-black uppercase tracking-tight text-lg text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{item.category}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="mt-2 text-destructive flex items-center gap-1 text-[10px] font-black uppercase tracking-widest hover:underline"
                        >
                          <Trash2 className="h-3 w-3" /> Remove
                        </button>
                      </div>
                    </div>

                    <div className="text-center font-bold text-foreground">
                      Rs.{item.salePrice || item.price}
                    </div>

                    <div className="flex justify-center">
                      <div className="flex items-center gap-4 bg-muted/10 rounded-full px-4 py-2 border border-border">
                        <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-primary transition-colors">
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-primary transition-colors">
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right font-black text-primary text-lg">
                      Rs.{(item.salePrice || item.price) * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="w-full lg:w-96">
                <div className="bg-card border border-border rounded-3xl p-8 sticky top-32">
                  <h2 className="text-2xl font-black uppercase italic mb-8">Summary</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-muted-foreground font-bold uppercase text-xs tracking-widest">
                      <span>Subtotal</span>
                      <span className="text-foreground">Rs.{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground font-bold uppercase text-xs tracking-widest">
                      <span>Shipping</span>
                      <span className="text-foreground">Rs.{shipping}</span>
                    </div>
                    <div className="h-px bg-border" />
                    <div className="flex justify-between items-baseline">
                      <span className="font-black uppercase italic text-lg">Total</span>
                      <span className="text-3xl font-black text-primary">Rs.{total}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link href="/checkout">
                      <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase italic text-lg rounded-2xl">
                        Checkout <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/shop">
                      <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground font-bold uppercase tracking-widest text-[10px]">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border">
                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest text-center">
                      Free shipping on orders over Rs.5000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-32 bg-muted/5 rounded-3xl border border-dashed border-border">
              <ShoppingBag className="h-20 w-20 text-muted/20 mx-auto mb-6" />
              <h2 className="text-3xl font-black uppercase italic mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 font-bold uppercase tracking-widest text-sm">
                Looks like you haven&apos;t added any shoes to your cart yet.
              </p>
              <Link href="/shop">
                <Button className="bg-primary text-white font-black uppercase italic px-12 h-14 rounded-2xl">
                  Browse Shop
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
