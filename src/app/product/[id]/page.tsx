"use client"

import * as React from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { fetchProducts, type AppProduct } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Share2, Truck, RotateCcw, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

import { useStore } from "@/lib/store-context"

export default function ProductDetailsPage() {
  const { id } = useParams()
  const [product, setProduct] = React.useState<AppProduct | null>(null)
  const [loading, setLoading] = React.useState(true)
  const [selectedSize, setSelectedSize] = React.useState<number | null>(null)
  const [selectedColor, setSelectedColor] = React.useState("Default")
  const { addToCart, toggleWishlist, isInWishlist } = useStore()

  React.useEffect(() => {
    async function loadProduct() {
      const allProducts = await fetchProducts()
      const found = allProducts.find((p) => p.id.toString() === id)
      if (found) {
        setProduct(found)
        if (found.colors && found.colors.length > 0) {
          setSelectedColor(found.colors[0])
        }
      }
      setLoading(false)
    }
    loadProduct()
  }, [id])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary" />
    </div>
  )

  if (!product) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
      <h1 className="text-2xl font-black uppercase">Product not found</h1>
      <Button onClick={() => window.history.back()}>Go Back</Button>
    </div>
  )

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.")
      return
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.isSale && product.salePrice ? product.salePrice : product.price,
      image: product.image,
      quantity: 1,
      size: selectedSize,
      color: selectedColor
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="flex-1 space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-square relative bg-card rounded-3xl overflow-hidden border border-border group"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-12"
                />
                <div className="absolute top-6 left-6 z-10">
                  {product.isSale && product.salePrice && (
                    <Badge className="bg-primary text-white hover:bg-primary/90 px-4 py-1.5 rounded-full font-black text-sm border-none">
                      -{Math.round((1 - product.salePrice / product.price) * 100)}% OFF
                    </Badge>
                  )}
                </div>
                
                {/* Carousel Arrows (Visual only for mockup) */}
                <div className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center cursor-pointer border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-foreground text-xl">‹</span>
                </div>
                <div className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center cursor-pointer border border-border opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-foreground text-xl">›</span>
                </div>
              </motion.div>
              <div className="grid grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`aspect-square relative bg-card rounded-xl border-2 cursor-pointer transition-colors ${i === 1 ? "border-primary" : "border-transparent hover:border-border"}`}>
                    <Image src={product.image} alt="" fill className="object-contain p-2 opacity-80" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="px-4 py-1.5 rounded-full border border-border inline-block text-xs font-black tracking-widest uppercase text-muted-foreground">
                  {product.brand}
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted/20 transition-colors"
                  >
                    <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted/20 transition-colors">
                    <Share2 className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-4 font-heading">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"}`} />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">{product.rating.toFixed(1)} ({product.reviews} reviews)</span>
                </div>
                <span className="text-sm font-bold text-green-500 uppercase">In Stock</span>
              </div>

              {/* Price Container */}
              <div className="bg-card rounded-3xl p-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-border">
                <div className="flex items-baseline gap-4">
                  {product.isSale && product.salePrice ? (
                    <>
                      <span className="text-4xl font-black text-primary">Rs. {product.salePrice.toLocaleString()}</span>
                      <span className="text-xl text-muted-foreground line-through font-bold">Rs. {product.price.toLocaleString()}</span>
                    </>
                  ) : (
                    <span className="text-4xl font-black text-primary">Rs. {product.price.toLocaleString()}</span>
                  )}
                </div>
                {product.isSale && product.salePrice && (
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm">
                    Save Rs. {(product.price - product.salePrice).toLocaleString()}
                  </div>
                )}
              </div>

              {/* Selection */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-sm font-bold text-foreground">Select Size</h4>
                  <span className="text-sm font-bold text-primary">
                    {selectedSize ? `EU ${selectedSize}` : "Required"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-full font-bold transition-all flex items-center justify-center border ${
                        selectedSize === size
                          ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-card border-border text-muted-foreground hover:border-primary hover:text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Actions */}
              <div className="flex gap-4 mb-4">
                <div className="flex items-center justify-between bg-card border border-border rounded-full px-4 h-16 w-32 shrink-0">
                  <button className="text-muted-foreground hover:text-primary transition-colors text-xl font-medium w-8 h-8 flex items-center justify-center">−</button>
                  <span className="font-bold">1</span>
                  <button className="text-muted-foreground hover:text-primary transition-colors text-xl font-medium w-8 h-8 flex items-center justify-center">+</button>
                </div>
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" /> 
                  Add to Cart - Rs. {(product.isSale && product.salePrice ? product.salePrice : product.price).toLocaleString()}
                </Button>
              </div>
              
              <Button 
                variant="outline"
                className="w-full h-14 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full text-sm tracking-widest mb-10"
              >
                Buy Now — Checkout Instantly
              </Button>

              {/* Perks Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-border pt-8 mb-6">
                <div className="bg-card rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-border">
                  <Truck className="h-6 w-6 text-primary mb-1" />
                  <p className="text-xs font-bold text-foreground">Free Shipping</p>
                  <p className="text-[10px] text-muted-foreground">All over Pakistan</p>
                </div>
                <div className="bg-card rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-border">
                  <ShieldCheck className="h-6 w-6 text-primary mb-1" />
                  <p className="text-xs font-bold text-foreground">100% Authentic</p>
                  <p className="text-[10px] text-muted-foreground">Genuine product</p>
                </div>
                <div className="bg-card rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 border border-border">
                  <RotateCcw className="h-6 w-6 text-primary mb-1" />
                  <p className="text-xs font-bold text-foreground">Easy Returns</p>
                  <p className="text-[10px] text-muted-foreground">7-day policy</p>
                </div>
              </div>

              <div className="text-xs font-bold text-muted-foreground/50 tracking-widest uppercase">
                SKU: {product.brand.substring(0,2).toUpperCase()}-{product.id.toString().padStart(6, '0')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
