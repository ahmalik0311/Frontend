"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingCart, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  price: string
  category: string
  image: string
  rating: number
  isNew?: boolean
  isSale?: boolean
  sizes?: number[]
}

const DEFAULT_SIZES = [37, 38, 39, 40, 41, 42]

export function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = React.useState<number | null>(null)
  const sizes = product.sizes || DEFAULT_SIZES

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-card pt-0 border-border overflow-hidden group relative">
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-primary text-primary-foreground font-bold">NEW</Badge>
          )}
          {product.isSale && (
            <Badge className="bg-destructive text-destructive-foreground font-bold">SALE</Badge>
          )}
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="absolute top-3 right-3 z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm text-foreground"
        >
          <Heart className="h-4 w-4" />
        </Button>

        <CardContent className="p-0 aspect-square relative overflow-hidden bg-muted/20">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain transform group-hover:scale-110 transition-transform duration-500"
          />
        </CardContent>

        <CardFooter className="flex flex-col items-start p-6">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < product.rating ? "fill-secondary text-secondary" : "fill-muted text-muted"}`}
              />
            ))}
            <span className="text-[10px] text-muted-foreground ml-1">(4.8)</span>
          </div>

          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{product.category}</p>
          <h3 className="font-medium text-2xl tracking-wider text-foreground mb-4">{product.name}</h3>

          {/* Sizes Row below Title */}
          <div className="flex flex-wrap gap-2 mb-6">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedSize(size)
                }}
                className={`w-8 h-8 rounded-md text-[12px] font-bold border transition-all ${selectedSize === size
                  ? "bg-primary border-primary text-white"
                  : "bg-transparent border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-xl font-black text-primary">{product.price}</span>
            <Button
              size="icon"
              className={`rounded-full transition-all ${selectedSize ? "bg-primary text-white" : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
                }`}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
