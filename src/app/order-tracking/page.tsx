"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Package, Truck, CheckCircle2, MapPin } from "lucide-react"

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false)
  const [orderStatus, setOrderStatus] = React.useState<any>(null)

  const handleTrack = () => {
    setIsSearching(true)
    // Simulate API call
    setTimeout(() => {
      setOrderStatus({
        id: orderId || "SB-987654321",
        status: "In Transit",
        estimatedDelivery: "May 20, 2026",
        currentLocation: "New York Hub",
        steps: [
          { name: "Order Placed", date: "May 15, 2026", completed: true },
          { name: "Packed & Ready", date: "May 16, 2026", completed: true },
          { name: "In Transit", date: "May 17, 2026", completed: true, current: true },
          { name: "Out for Delivery", date: "Pending", completed: false },
          { name: "Delivered", date: "Pending", completed: false },
        ]
      })
      setIsSearching(false)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 min-h-[70vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                Track Your <span className="text-primary">Order</span>
              </h1>
              <p className="text-muted-foreground uppercase font-bold tracking-widest text-xs">
                Enter your order ID to see real-time status updates
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Order ID (e.g. SB-123456)" 
                  className="h-16 pl-12 bg-card border-border rounded-2xl focus:border-primary text-lg font-bold"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />
              </div>
              <Button 
                onClick={handleTrack}
                disabled={isSearching}
                className="h-16 px-12 bg-primary text-white font-black uppercase italic text-lg rounded-2xl shadow-xl shadow-primary/20"
              >
                {isSearching ? "Searching..." : "Track Now"}
              </Button>
            </div>

            {orderStatus && (
              <div className="bg-card border border-border rounded-3xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-border">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Order ID</p>
                    <h3 className="text-2xl font-black text-foreground">{orderStatus.id}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Estimated Delivery</p>
                    <h3 className="text-xl font-black text-primary uppercase italic">{orderStatus.estimatedDelivery}</h3>
                  </div>
                </div>

                <div className="space-y-12">
                  {orderStatus.steps.map((step: any, idx: number) => (
                    <div key={idx} className="flex gap-6 relative">
                      {idx !== orderStatus.steps.length - 1 && (
                        <div className={`absolute left-4 top-10 w-0.5 h-12 ${step.completed ? "bg-primary" : "bg-border"}`} />
                      )}
                      <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center z-10 ${
                        step.completed ? "bg-primary text-white" : "bg-muted/10 text-muted-foreground border border-border"
                      }`}>
                        {step.completed ? <CheckCircle2 className="h-5 w-5" /> : <div className="w-2 h-2 rounded-full bg-current" />}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex justify-between items-start">
                          <h4 className={`font-black uppercase italic text-lg ${step.current ? "text-primary scale-105 origin-left" : step.completed ? "text-foreground" : "text-muted-foreground"}`}>
                            {step.name}
                          </h4>
                          <span className="text-[10px] font-bold text-muted-foreground uppercase">{step.date}</span>
                        </div>
                        {step.current && (
                          <div className="mt-2 flex items-center gap-2 text-primary">
                            <MapPin className="h-3 w-3" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Current: {orderStatus.currentLocation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!orderStatus && !isSearching && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-muted/10 rounded-3xl flex items-center justify-center mx-auto">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-black uppercase italic text-sm">Packing</h4>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Carefully prepared for you</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-muted/10 rounded-3xl flex items-center justify-center mx-auto">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-black uppercase italic text-sm">Shipping</h4>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Global express delivery</p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-muted/10 rounded-3xl flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-black uppercase italic text-sm">Arrival</h4>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Straight to your door</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
