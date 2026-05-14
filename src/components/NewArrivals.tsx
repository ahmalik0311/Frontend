"use client"

import { ProductCard } from "./ProductCard"

const arrivals = [
  {
    id: 10,
    name: "Quantum Flow",
    price: "$210.00",
    category: "Running",
    image: "/hero-shoe.png",
    rating: 5,
    isNew: true,
  },
  {
    id: 11,
    name: "Onyx Prime",
    price: "$180.00",
    category: "Lifestyle",
    image: "/shoe-1.png",
    rating: 4,
    isNew: true,
  },
  {
    id: 12,
    name: "Nebula X",
    price: "$230.00",
    category: "Basketball",
    image: "/shoe-2.png",
    rating: 5,
    isNew: true,
  },
  {
    id: 13,
    name: "Titan Grip",
    price: "$165.00",
    category: "Training",
    image: "/hero-shoe.png",
    rating: 4,
    isNew: true,
  },
]

export function NewArrivals() {
  return (
    <section id="new-arrivals" className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black text-foreground mb-4 italic  uppercase">Fresh <span className="text-primary not-italic">Drops</span></h2>
            <p className="text-muted-foreground max-w-md">
              The latest innovations in comfort and performance. Just landed in our store.
            </p>
          </div>
          <button className="px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
            View All New
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {arrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
