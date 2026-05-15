"use client"

import * as React from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Twitter, Mail, Chrome } from "lucide-react"

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 flex items-center justify-center min-h-[80vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
                Welcome <span className="text-primary">Back</span>
              </h1>
              <p className="text-muted-foreground uppercase font-bold tracking-widest text-xs">
                Access your premium shoe collection
              </p>
            </div>

            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/50">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/10 p-1 rounded-2xl h-14">
                  <TabsTrigger value="login" className="rounded-xl font-black uppercase italic text-sm data-[state=active]:bg-primary data-[state=active]:text-white">
                    Login
                  </TabsTrigger>
                  <TabsTrigger value="register" className="rounded-xl font-black uppercase italic text-sm data-[state=active]:bg-primary data-[state=active]:text-white">
                    Register
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email</Label>
                      <Input className="h-12 bg-muted/5 border-border rounded-xl focus:border-primary" placeholder="name@example.com" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</Label>
                        <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Forgot?</button>
                      </div>
                      <Input className="h-12 bg-muted/5 border-border rounded-xl focus:border-primary" type="password" />
                    </div>
                  </div>
                  <Button className="w-full h-14 bg-primary text-white font-black uppercase italic text-lg rounded-2xl">
                    Sign In
                  </Button>

                  <div className="relative py-4">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase font-bold bg-card px-4 text-muted-foreground">
                      Or continue with
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-12 border-border rounded-xl hover:bg-muted/5 gap-2">
                      <Chrome className="h-4 w-4" /> <span className="text-[10px] font-black uppercase tracking-widest">Google</span>
                    </Button>
                    <Button variant="outline" className="h-12 border-border rounded-xl hover:bg-muted/5 gap-2">
                      <Twitter className="h-4 w-4" /> <span className="text-[10px] font-black uppercase tracking-widest">Twitter</span>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="register" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">First Name</Label>
                        <Input className="h-12 bg-muted/5 border-border rounded-xl focus:border-primary" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Last Name</Label>
                        <Input className="h-12 bg-muted/5 border-border rounded-xl focus:border-primary" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Email</Label>
                      <Input className="h-12 bg-muted/5 border-border rounded-xl focus:border-primary" placeholder="name@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Password</Label>
                      <Input className="h-12 bg-muted/5 border-border rounded-xl focus:border-primary" type="password" />
                    </div>
                  </div>
                  <Button className="w-full h-14 bg-primary text-white font-black uppercase italic text-lg rounded-2xl">
                    Create Account
                  </Button>
                </TabsContent>
              </Tabs>
            </div>

            <p className="mt-8 text-center text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
              By continuing, you agree to our <button className="text-primary hover:underline">Terms of Service</button> and <button className="text-primary hover:underline">Privacy Policy</button>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
