"use client"

import * as React from "react"
import Image from "next/image"
import { Zap } from "lucide-react"
import { ProductCard } from "./ProductCard"
import { fetchProducts, type AppProduct } from "@/lib/api"

export function FlashSale() {
  const [products, setProducts] = React.useState<AppProduct[]>([])
  const [loading, setLoading] = React.useState(true)
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  })

  React.useEffect(() => {
    async function loadProducts() {
      const allProducts = await fetchProducts()
      // Filter for sale products
      const saleProducts = allProducts.filter(p => p.isSale).slice(0, 2)
      setProducts(saleProducts)
      setLoading(false)
    }
    loadProducts()
  }, [])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-card/30 border-y border-border overflow-hidden relative">
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-bold text-sm mb-6">
              <Zap className="h-4 w-4 fill-current" /> FLASH SALE
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              LIMITED TIME <span className="text-primary italic">OFFERS</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Up to 50% off on selected premium models. Don&apos;t wait, the clock is ticking!
            </p>

            <div className="relative h-[200px] w-full rounded-2xl overflow-hidden mb-8 border border-white/5">
              <Image 
                src="/shoe-2.png" 
                alt="Flash Sale Banner" 
                fill 
                className="object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-black text-2xl uppercase italic">SAVE BIG ON PERFORMANCE</span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              {[
                { label: "HRS", value: timeLeft.hours },
                { label: "MIN", value: timeLeft.minutes },
                { label: "SEC", value: timeLeft.seconds }
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-background border border-border rounded-2xl flex items-center justify-center text-3xl font-black text-primary">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground mt-2 tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full lg:w-auto">
            {loading ? (
              // Skeleton Loading
              [...Array(2)].map((_, i) => (
                <div key={i} className="w-[300px] h-[450px] bg-muted animate-pulse rounded-2xl" />
              ))
            ) : (
              products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  category={product.category}
                  image={product.image}
                  rating={product.rating}
                  isSale={product.isSale}
                  salePrice={product.salePrice}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
