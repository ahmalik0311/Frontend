"use client"

import * as React from "react"
import { ProductCard } from "./ProductCard"
import { fetchProducts, type AppProduct } from "@/lib/api"

export function FeaturedProducts() {
  const [products, setProducts] = React.useState<AppProduct[]>([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    async function loadProducts() {
      const allProducts = await fetchProducts()
      // Show first 4 products for featured
      setProducts(allProducts.slice(0, 4))
      setLoading(false)
    }
    loadProducts()
  }, [])
  return (
    <section id="new-arrivals" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black text-foreground mb-4">NEW <span className="text-primary italic">ARRIVALS</span></h2>
            <p className="text-muted-foreground max-w-md">
              Discover our latest performance footwear, engineered for athletes who demand the best in style and comfort.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1">All Products</button>
            <button className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors pb-1">Trending</button>
            <button className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors pb-1">Popular</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            [...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-muted animate-pulse rounded-2xl" />
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
                isNew={product.isNew}
                isSale={product.isSale}
                salePrice={product.salePrice}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
