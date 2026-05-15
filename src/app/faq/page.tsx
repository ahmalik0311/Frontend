"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      category: "Ordering",
      questions: [
        { q: "How do I place an order?", a: "You can place an order by browsing our shop, adding items to your cart, and following the secure checkout process." },
        { q: "Can I cancel my order?", a: "Orders can be cancelled within 12 hours of placement. Contact our support team immediately for assistance." },
      ]
    },
    {
      category: "Shipping",
      questions: [
        { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days." },
        { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries worldwide. International shipping times vary by location." },
      ]
    },
    {
      category: "Returns",
      questions: [
        { q: "What is your return policy?", a: "We offer a 30-day return policy for all unworn shoes in their original packaging." },
        { q: "How do I start a return?", a: "Visit our 'Order Tracking' page and enter your order ID to initiate a return request." },
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
                Common <span className="text-primary">Questions</span>
              </h1>
              <p className="text-muted-foreground uppercase font-bold tracking-widest text-xs">
                Everything you need to know about SHOEBOX
              </p>
            </div>

            <div className="space-y-12">
              {faqs.map((group, idx) => (
                <div key={idx} className="space-y-6">
                  <h2 className="text-2xl font-black uppercase italic text-primary border-l-4 border-primary pl-4">
                    {group.category}
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {group.questions.map((faq, fIdx) => (
                      <AccordionItem key={fIdx} value={`item-${idx}-${fIdx}`} className="bg-card border border-border rounded-2xl px-6">
                        <AccordionTrigger className="text-lg font-bold uppercase italic hover:no-underline py-6">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="mt-20 p-12 bg-primary/5 rounded-[40px] border border-primary/20 text-center">
              <h3 className="text-2xl font-black uppercase italic mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-8 font-bold uppercase text-xs tracking-widest">
                Our support team is available 24/7 to assist you.
              </p>
              <button className="bg-primary text-white font-black uppercase italic px-12 h-14 rounded-2xl hover:bg-primary/90 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
