"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  { name: "Formal", image: "/shoe-1.png", color: "from-orange-500/40 to-transparent", splash: "bg-orange-500/20" },
  { name: "Boots", image: "/cat-running.png", color: "from-pink-500/40 to-transparent", splash: "bg-pink-500/20" },
  { name: "Sneakers", image: "/hero-shoe.png", color: "from-purple-500/40 to-transparent", splash: "bg-purple-500/20", active: true },
  { name: "Loafer", image: "/cat-lifestyle.png", color: "from-yellow-500/40 to-transparent", splash: "bg-yellow-500/20" },
  { name: "Sports", image: "/shoe-2.png", color: "from-blue-500/40 to-transparent", splash: "bg-blue-500/20" },
]

export function Categories() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase tracking-[0.2em]">
            Our Product <span className="text-primary italic">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Discover our diverse range of premium footwear, crafted for every occasion.
            From performance sports to elegant formal wear, we have the perfect fit for you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-4 lg:gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover="hover"
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="relative group cursor-pointer"
            >
              <div className={`relative w-[220px] h-[340px] rounded-full overflow-hidden transition-all duration-500 border-2 ${cat.active ? 'border-primary' : 'border-transparent group-hover:border-white/40'}`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
                {/* Splash Effect (Animated) */}
                <motion.div
                  variants={{
                    hover: { 
                      scale: 1.5, 
                      opacity: 0.8, 
                      filter: "blur(40px)",
                      transition: { duration: 0.4 }
                    }
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                     rotate: [0, 90, 180, 270, 360]
                  }}
                  transition={{
                    scale: { duration: 20, repeat: Infinity, ease: "linear" },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                  }}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl opacity-60 ${cat.splash}`}
                />

                <div className="relative h-full flex flex-col items-center justify-center ">
                  {/* Floating Shoe */}
                  <motion.div
                    variants={{
                      hover: { y: -30, rotate: -15, scale: 1.2 }
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="relative w-full h-full z-10"
                  >
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Label */}
              <div className="mt-6 text-center">
                <motion.h3
                  variants={{
                    hover: { scale: 1.1, color: "var(--primary)" }
                  }}
                  className="text-2xl font-black text-foreground uppercase tracking-widest transition-colors"
                >
                  {cat.name}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
