"use client"

import * as React from "react"
import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ProductCard } from "@/components/ProductCard"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag } from "lucide-react"

import { useStore } from "@/lib/store-context"

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useStore()
  const wishlistItems = wishlist

  const handleAddAllToCart = () => {
    wishlist.forEach(item => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      })
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div>
              <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none mb-4">
                Your <span className="text-primary">Wishlist</span>
              </h1>
              <p className="text-muted-foreground uppercase font-bold tracking-widest text-xs">
                Items you&apos;ve saved for later
              </p>
            </div>
            <div className="flex items-center gap-2 bg-muted/10 px-6 py-4 rounded-2xl border border-border">
              <Heart className="h-5 w-5 text-primary fill-primary" />
              <span className="font-black italic text-lg">{wishlistItems.length} SAVED ITEMS</span>
            </div>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlistItems.map((product) => (
                <div key={product.id} className="relative group">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    brand={product.brand}
                    image={product.image}
                    isNew={product.isNew}
                    isSale={product.isSale}
                    salePrice={product.salePrice}
                  />
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-destructive/10 backdrop-blur-md rounded-full flex items-center justify-center text-destructive opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-white"
                  >
                    <span className="text-lg font-bold">×</span>
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-muted/5 rounded-[40px] border border-dashed border-border">
              <Heart className="h-24 w-24 text-muted/10 mx-auto mb-6" />
              <h2 className="text-3xl font-black uppercase italic mb-4">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-8 font-bold uppercase tracking-widest text-sm">
                Save your favorite pairs here to keep track of them.
              </p>
              <Link href="/shop">
                <Button className="bg-primary text-white font-black uppercase italic px-12 h-14 rounded-2xl">
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}

          {wishlistItems.length > 0 && (
            <div className="mt-16 flex justify-center">
              <Button 
                onClick={handleAddAllToCart}
                className="bg-foreground text-background font-black uppercase italic px-12 h-14 rounded-2xl hover:bg-primary hover:text-white transition-all"
              >
                <ShoppingBag className="mr-2 h-5 w-5" /> Add All to Cart
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
