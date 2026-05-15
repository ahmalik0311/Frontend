"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function PoliciesPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "privacy"

  const policies = {
    privacy: {
      title: "Privacy Policy",
      content: "This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from SHOEBOX. We take your privacy seriously and ensure all data is handled with the highest level of security."
    },
    return: {
      title: "Return Policy",
      content: "We want you to be 100% satisfied with your purchase. Items can be returned within 30 days of delivery. Shoes must be in original, unworn condition with all tags attached and in the original packaging."
    },
    shipping: {
      title: "Shipping Policy",
      content: "We ship worldwide using premium carriers to ensure your shoes arrive safely and quickly. Orders are processed within 24 hours. Delivery times range from 1-7 business days depending on your location and selected method."
    }
  }

  const currentPolicy = policies[type as keyof typeof policies] || policies.privacy

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Our <span className="text-primary">Policies</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-12">
              <aside className="w-full md:w-64 space-y-4">
                {Object.entries(policies).map(([key, policy]) => (
                  <button
                    key={key}
                    onClick={() => window.history.pushState({}, "", `/policies?type=${key}`)}
                    className={`w-full text-left p-6 rounded-2xl border transition-all ${
                      type === key 
                        ? "bg-primary border-primary text-white font-black italic shadow-lg shadow-primary/20" 
                        : "bg-card border-border text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <span className="uppercase tracking-widest text-xs font-bold">{policy.title}</span>
                  </button>
                ))}
              </aside>

              <div className="flex-1 bg-card border border-border rounded-[40px] p-8 md:p-12 shadow-2xl shadow-black/20">
                <h2 className="text-3xl font-black uppercase italic mb-8 pb-4 border-b border-border">{currentPolicy.title}</h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                   <p className="text-lg italic font-medium text-foreground/80">{currentPolicy.content}</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   
                   <h3 className="text-xl font-black uppercase italic text-foreground mt-12">1. Data Collection</h3>
                   <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                   
                   <h3 className="text-xl font-black uppercase italic text-foreground mt-8">2. Security Measures</h3>
                   <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
