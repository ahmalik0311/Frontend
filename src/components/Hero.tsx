"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "STEP INTO THE FUTURE",
    subtitle: "Experience unparalleled comfort and futuristic design. Our latest drop combines performance technology with street-ready aesthetics.",
    tag: "New Collection 2024",
    image: "/hero-shoe.png",
    accent: "text-primary",
    bgAccent: "bg-primary/20",
  },
  {
    id: 2,
    title: "ELEVATE YOUR STYLE",
    subtitle: "Luxury meets lifestyle. Discover the perfect balance of premium materials and timeless design for the modern explorer.",
    tag: "Luxury Essence",
    image: "/shoe-1.png",
    accent: "text-secondary",
    bgAccent: "bg-secondary/20",
  },
  {
    id: 3,
    title: "DOMINATE THE COURT",
    subtitle: "Engineered for maximum explosive power and stability. Reach new heights with our professional basketball collection.",
    tag: "Performance Pro",
    image: "/shoe-2.png",
    accent: "text-primary",
    bgAccent: "bg-primary/20",
  }
]

export function Hero() {
  const [current, setCurrent] = React.useState(0)

  const nextSlide = React.useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -z-10"
        >
          <div className={`absolute top-1/4 -left-20 w-96 h-96 ${slides[current].bgAccent} rounded-full blur-[120px] animate-pulse`} />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <span className={`inline-block py-1 px-3 rounded-full ${slides[current].bgAccent} ${slides[current].accent.replace('text-', 'text-')} text-xs font-bold uppercase tracking-widest mb-6`}>
                  {slides[current].tag}
                </span>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-6">
                  {slides[current].title.split(' ').map((word, i) => (
                    <span key={i} className={word === "FUTURE" || word === "STYLE" || word === "COURT" ? slides[current].accent + " italic" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
                  {slides[current].subtitle}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/shop">
                    <Button size="lg" className="bg-primary text-primary-foreground font-bold h-14 px-8 rounded-full hover:scale-105 transition-transform">
                      Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: -10 }}
                exit={{ opacity: 0, scale: 1.2, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full h-full drop-shadow-[0_35px_35px_rgba(255,107,53,0.3)]"
              >
                <Image
                  src={slides[current].image}
                  alt={slides[current].title}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Decorative Text Behind Shoe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
              <span className="text-[10rem] md:text-[18rem] font-black text-white/5 select-none leading-none uppercase">
                {slides[current].title.split(' ').pop()}
              </span>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={prevSlide}
            className="rounded-full border border-white/10 hover:bg-white/10 text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  current === i ? "w-12 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={nextSlide}
            className="rounded-full border border-white/10 hover:bg-white/10 text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
