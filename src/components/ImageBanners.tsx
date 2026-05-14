"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ImageBanners() {
  return (
    <section className="py-20 w-full px-[30px]">
      <div className="flex flex-col gap-6">
        {/* Top Row: Two Banners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Left Banner */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden group bg-[#008080]">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
              <Image
                src="/cat-running.png"
                alt="Quality"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-20 h-full flex flex-col justify-center p-12">
              <span className="text-secondary font-black tracking-[0.3em] uppercase text-[10px] mb-4">Best Quality</span>
              <h2 className="text-5xl tracking-[1px] font-black text-white uppercase  mb-4 leading-none">
                Walk With <br />Assurance!
              </h2>
              <p className="text-white/70 text-xs mb-8 max-w-[200px]">On orders $500+ <br />Use Coupon Code: BESTSTEP</p>
            </div>
          </div>

          {/* Top Right Banner */}
          <div className="relative h-[400px] rounded-3xl overflow-hidden group bg-[#2C3E50]">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
              <Image
                src="/shoe-2.png"
                alt="Special Edition"
                fill
                className="object-cover "
              />
            </div>
            <div className="relative z-20 h-full flex flex-col justify-center p-12">
              <span className="text-secondary font-black tracking-[0.3em] uppercase text-[10px] mb-4">Special Edition</span>
              <h2 className="text-5xl tracking-[1px] font-black text-white uppercase  mb-4 leading-none">
                Fashionably <br />Stepping Ahead!
              </h2>
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold w-fit rounded-full px-8">
                Shop Collections
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Row: Full Width Banner */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden group bg-[#34495E]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
            <Image
              src="/hero-shoe.png"
              alt="Classy Collection"
              fill
              className="object-cover scale-125 "
            />
          </div>
          <div className="relative z-20 h-full flex flex-col justify-center p-12 lg:p-24">
            <span className="text-secondary font-black tracking-[0.3em] uppercase text-[10px] mb-4">Classy Collection</span>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase  mb-6 leading-none">
              One Stylish Stride <br />at a Time!
            </h2>
            <p className="text-white/70 text-sm mb-10 max-w-lg leading-relaxed">
              Elevate your footwear game with our most sophisticated drop yet.
              Minimalism meets extreme performance.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold w-fit h-14 px-12 text-lg rounded-full">
              Shop Collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
