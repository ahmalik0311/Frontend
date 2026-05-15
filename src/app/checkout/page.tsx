"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Truck, ShieldCheck, CheckCircle2 } from "lucide-react"
import { useStore } from "@/lib/store-context"

export default function CheckoutPage() {
  const [step, setStep] = React.useState(1)
  const { clearCart } = useStore()

  const steps = [
    { id: 1, name: "Information" },
    { id: 2, name: "Shipping" },
    { id: 3, name: "Payment" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-12 text-center">
              Secure <span className="text-primary">Checkout</span>
            </h1>

            {/* Stepper */}
            <div className="flex justify-between mb-16 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
              {steps.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center gap-2">
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-black transition-all duration-500 ${
                      step >= s.id ? "bg-primary text-white scale-110 shadow-lg shadow-primary/20" : "bg-card text-muted-foreground border border-border"
                    }`}
                  >
                    {step > s.id ? <CheckCircle2 className="h-6 w-6" /> : s.id}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${step >= s.id ? "text-primary" : "text-muted-foreground"}`}>
                    {s.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
              <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
                {step === 1 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">First Name</Label>
                        <Input className="bg-muted/5 border-border h-12 rounded-xl focus:border-primary transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Last Name</Label>
                        <Input className="bg-muted/5 border-border h-12 rounded-xl focus:border-primary transition-colors" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email Address</Label>
                      <Input className="bg-muted/5 border-border h-12 rounded-xl focus:border-primary transition-colors" placeholder="john@example.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Phone Number</Label>
                      <Input className="bg-muted/5 border-border h-12 rounded-xl focus:border-primary transition-colors" placeholder="+1 (555) 000-0000" />
                    </div>
                    <Button onClick={() => setStep(2)} className="w-full h-16 bg-primary font-black uppercase italic text-lg rounded-2xl">
                      Continue to Shipping
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Shipping Address</Label>
                      <Input className="bg-muted/5 border-border h-12 rounded-xl mb-4" placeholder="Street Address" />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Input className="bg-muted/5 border-border h-12 rounded-xl" placeholder="City" />
                        <Input className="bg-muted/5 border-border h-12 rounded-xl" placeholder="State" />
                        <Input className="bg-muted/5 border-border h-12 rounded-xl" placeholder="ZIP Code" />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Delivery Method</Label>
                      <RadioGroup defaultValue="standard" className="grid grid-cols-1 gap-4">
                        <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/5 hover:border-primary transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="standard" id="standard" />
                            <Label htmlFor="standard" className="font-bold uppercase tracking-tight cursor-pointer">Standard Shipping</Label>
                          </div>
                          <span className="font-black">$20.00</span>
                        </div>
                        <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-muted/5 hover:border-primary transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="express" id="express" />
                            <Label htmlFor="express" className="font-bold uppercase tracking-tight cursor-pointer">Express Delivery</Label>
                          </div>
                          <span className="font-black">$45.00</span>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex gap-4">
                      <Button onClick={() => setStep(1)} variant="outline" className="flex-1 h-16 border-border font-black uppercase italic rounded-2xl">
                        Back
                      </Button>
                      <Button onClick={() => setStep(3)} className="flex-[2] h-16 bg-primary font-black uppercase italic text-lg rounded-2xl">
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="space-y-4">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Payment Method</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-16 border-primary bg-primary/5 flex flex-col items-center justify-center gap-1 rounded-2xl">
                          <CreditCard className="h-6 w-6 text-primary" />
                          <span className="text-[10px] font-black uppercase tracking-widest">Credit Card</span>
                        </Button>
                        <Button variant="outline" className="h-16 border-border flex flex-col items-center justify-center gap-1 rounded-2xl opacity-50">
                          <div className="h-6 flex items-center font-bold italic">PayPal</div>
                          <span className="text-[10px] font-black uppercase tracking-widest">Express Checkout</span>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Card Number</Label>
                        <Input className="bg-muted/5 border-border h-12 rounded-xl" placeholder="0000 0000 0000 0000" />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Expiry Date</Label>
                          <Input className="bg-muted/5 border-border h-12 rounded-xl" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">CVV</Label>
                          <Input className="bg-muted/5 border-border h-12 rounded-xl" placeholder="123" />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button onClick={() => setStep(2)} variant="outline" className="flex-1 h-16 border-border font-black uppercase italic rounded-2xl">
                        Back
                      </Button>
                      <Button 
                        onClick={() => {
                          setStep(4)
                          clearCart()
                        }}
                        className="flex-[2] h-16 bg-primary font-black uppercase italic text-lg rounded-2xl shadow-xl shadow-primary/20"
                      >
                        Complete Order
                      </Button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="text-center py-12 space-y-8 animate-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black uppercase italic mb-4">Order Confirmed!</h2>
                      <p className="text-muted-foreground font-bold uppercase tracking-widest text-sm">
                        Thank you for your purchase. Your order #SB-9921 is being processed.
                      </p>
                    </div>
                    <Link href="/">
                      <Button className="bg-primary text-white font-black uppercase italic px-12 h-14 rounded-2xl">
                        Back to Home
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Secure Badges */}
              <div className="flex flex-wrap justify-center gap-8 pt-8">
                <div className="flex items-center gap-2 text-muted-foreground grayscale">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">SSL Secure</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground grayscale">
                  <Truck className="h-5 w-5" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Insured Shipping</span>
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
