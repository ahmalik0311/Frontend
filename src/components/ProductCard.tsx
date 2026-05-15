"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShoppingCart, Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

import Link from "next/link"
import { useStore } from "@/lib/store-context"

interface ProductCardProps {
  id: string | number
  name: string
  price: string | number
  category: string
  image: string
  rating?: number
  isNew?: boolean
  isSale?: boolean
  salePrice?: number
  brand?: string
  sizes?: number[]
}

const DEFAULT_SIZES = [37, 38, 39, 40, 41, 42]

export function ProductCard({
  id,
  name,
  price,
  category,
  image,
  rating = 4.5,
  isNew,
  isSale,
  salePrice,
  brand,
  sizes = DEFAULT_SIZES
}: ProductCardProps) {
  const [selectedSize, setSelectedSize] = React.useState<number | null>(null)
  const { addToCart, toggleWishlist, isInWishlist } = useStore()

  const numericPrice = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.]/g, '')) : price
  const displayPrice = isSale && salePrice ? salePrice : numericPrice

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart({
      id,
      name,
      price: displayPrice,
      image,
      quantity: 1,
      size: selectedSize || sizes[0]
    })
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleWishlist({ id, name, price: numericPrice, image, brand, category })
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-card pt-0 border-border overflow-hidden group relative">
        <Link href={`/product/${id}`}>
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            {isNew && (
              <Badge className="bg-primary text-primary-foreground font-bold">NEW</Badge>
            )}
            {isSale && (
              <Badge className="bg-destructive text-destructive-foreground font-bold">SALE</Badge>
            )}
          </div>

          <Button
            variant="secondary"
            size="icon"
            className={`absolute top-3 right-3 z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm ${
              isInWishlist(id) ? "text-primary" : "text-foreground"
            }`}
            onClick={handleWishlist}
          >
            <Heart className={`h-4 w-4 ${isInWishlist(id) ? "fill-current" : ""}`} />
          </Button>

          <CardContent className="p-0 aspect-square relative overflow-hidden bg-muted/20">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain transform group-hover:scale-110 transition-transform duration-500"
            />
          </CardContent>

          <CardFooter className="flex flex-col items-start p-6">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${i < Math.floor(rating) ? "fill-secondary text-secondary" : "fill-muted text-muted"}`}
                />
              ))}
              <span className="text-[10px] text-muted-foreground ml-1">({rating})</span>
            </div>

            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{brand || category}</p>
            <h3 className="font-medium text-2xl tracking-wider text-foreground mb-4 uppercase font-heading">{name}</h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {sizes.slice(0, 4).map((size) => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedSize(size)
                  }}
                  className={`w-8 h-8 rounded-md text-[10px] font-bold border transition-all ${selectedSize === size
                    ? "bg-primary border-primary text-white"
                    : "bg-transparent border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                >
                  {size}
                </button>
              ))}
              {sizes.length > 4 && <span className="text-[10px] text-muted-foreground flex items-center">+{sizes.length - 4}</span>}
            </div>

            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col">
                {isSale && salePrice ? (
                  <>
                    <span className="text-xl font-black text-primary">Rs.{salePrice}</span>
                    <span className="text-xs text-muted-foreground line-through">Rs.{price}</span>
                  </>
                ) : (
                  <span className="text-xl font-black text-primary">Rs.{price}</span>
                )}
              </div>
              <Button
                size="icon"
                className={`rounded-full transition-all ${selectedSize ? "bg-primary text-white" : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
                  }`}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  )
}
