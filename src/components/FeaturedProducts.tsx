"use client"

import { ProductCard } from "./ProductCard"

const products = [
  {
    id: 1,
    name: "AeroGlide Stealth",
    price: "$199.00",
    category: "Running",
    image: "/hero-shoe.png",
    rating: 5,
    isNew: true,
  },
  {
    id: 2,
    name: "Luxury Essence",
    price: "$250.00",
    category: "Lifestyle",
    image: "/shoe-1.png",
    rating: 4,
  },
  {
    id: 3,
    name: "HyperBurst Neon",
    price: "$175.00",
    category: "Basketball",
    image: "/shoe-2.png",
    rating: 5,
    isSale: true,
  },
  {
    id: 4,
    name: "Urban Explorer",
    price: "$145.00",
    category: "Walking",
    image: "/hero-shoe.png",
    rating: 4,
  },
]

export function FeaturedProducts() {
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
