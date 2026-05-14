"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Professional Athlete",
    content: "The comfort and stability of these shoes are unmatched. I've never performed better on the track.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    role: "Fitness Influencer",
    content: "Style meets substance. These are my go-to for both the gym and my daily lifestyle content.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Sneakerhead",
    content: "The futuristic design is what caught my eye, but the durability is what keep me coming back.",
    rating: 4,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-black text-foreground mb-4 uppercase ">What Our <span className="text-primary italic">Fans</span> Say</h2>
        <p className="text-muted-foreground mb-16 max-w-xl mx-auto">
          Don&apos;t just take our word for it. Join thousands of satisfied customers stepping into the future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-10 rounded-3xl border border-border relative group"
            >
              <div className="absolute top-8 right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < t.rating ? "fill-secondary text-secondary" : "fill-muted text-muted"}`} />
                ))}
              </div>
              <p className="text-lg text-foreground mb-8 leading-relaxed italic">&quot;{t.content}&quot;</p>
              <div>
                <h4 className="font-bold text-foreground">{t.name}</h4>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
