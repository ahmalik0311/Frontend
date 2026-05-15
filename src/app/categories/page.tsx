"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"

export default function CategoriesPage() {
  const categories = [
    {
      name: "Sneakers",
      count: "1,240 Items",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800",
      color: "bg-orange-500/10"
    },
    {
      name: "Running",
      count: "850 Items",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
      color: "bg-blue-500/10"
    },
    {
      name: "Basketball",
      count: "420 Items",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800",
      color: "bg-red-500/10"
    },
    {
      name: "Lifestyle",
      count: "960 Items",
      image: "https://images.unsplash.com/photo-1512374382149-433a72b9a5a5?auto=format&fit=crop&q=80&w=800",
      color: "bg-purple-500/10"
    },
    {
      name: "Training",
      count: "310 Items",
      image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=800",
      color: "bg-green-500/10"
    },
    {
      name: "Slides",
      count: "150 Items",
      image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=800",
      color: "bg-yellow-500/10"
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-4 leading-none">
              Explore <br />
              <span className="text-primary">Categories</span>
            </h1>
            <p className="text-muted-foreground uppercase font-bold tracking-widest text-xs">
              Find your style across our diverse collections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/shop?category=${cat.name.toLowerCase()}`} className="group block relative aspect-[4/5] rounded-[40px] overflow-hidden border border-border">
                  <div className={`absolute inset-0 ${cat.color} group-hover:bg-primary/20 transition-colors duration-500`} />
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-primary font-black uppercase tracking-widest text-xs mb-2 transform group-hover:-translate-y-2 transition-transform">{cat.count}</p>
                    <h3 className="text-4xl font-black uppercase italic text-white transform group-hover:-translate-y-2 transition-transform duration-500">{cat.name}</h3>
                    <div className="h-1 w-0 bg-primary mt-4 group-hover:w-full transition-all duration-500" />
                  </div>
                  <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
