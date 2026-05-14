"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/autoplay"

interface SliderItem {
  name: string
  price: string
  image: string
  color: string
}

const products: SliderItem[] = [
  { name: "AeroGlide Stealth", price: "$199", image: "/hero-shoe.png", color: "bg-[#F3E5D8]" },
  { name: "Quantum Flow", price: "$210", image: "/shoe-1.png", color: "bg-[#D8F3E5]" },
  { name: "Nebula X", price: "$230", image: "/shoe-2.png", color: "bg-[#D8E5F3]" },
  { name: "Onyx Prime", price: "$180", image: "/hero-shoe.png", color: "bg-[#E5D8F3]" },
  { name: "Titan Grip", price: "$165", image: "/shoe-1.png", color: "bg-[#F3D8E5]" },
  { name: "Sonic Blast", price: "$120", image: "/shoe-2.png", color: "bg-[#F3F3D8]" },
]

export function InfiniteMarquee() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 uppercase ">
          The <span className="text-primary italic font-serif">Vault</span> Series
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
      </div>

      <div className="space-y-12">
        {/* Row 1 */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          loop={true}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4.2 },
          }}
          className="swiper-linear"
        >
          {products.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className={`relative h-[350px] ${item.color} rounded-[2rem] overflow-hidden group border border-white/5 transition-all duration-500`}>
                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start z-10">
                    <h4 className="text-xl font-bold text-black/80">{item.name}</h4>
                    <span className="bg-black/10 px-3 py-1 rounded-full text-xs font-black text-black/60">{item.price}</span>
                  </div>

                  <div className="relative flex-1 mt-4 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 ease-out">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
                    />
                  </div>

                  <div className="mt-auto z-10">
                    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 group-hover:text-primary transition-colors">
                      View Details +
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 2 (Reverse) */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          loop={true}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4.2 },
          }}
          className="swiper-linear"
        >
          {products.reverse().map((item, idx) => (
            <SwiperSlide key={`row2-${idx}`}>
              <div className={`relative h-[350px] ${item.color} rounded-[2rem] overflow-hidden group border border-white/5 transition-all duration-500`}>
                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-start z-10">
                    <h4 className="text-xl font-bold text-black/80">{item.name}</h4>
                    <span className="bg-black/10 px-3 py-1 rounded-full text-xs font-black text-black/60">{item.price}</span>
                  </div>

                  <div className="relative flex-1 mt-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]"
                    />
                  </div>

                  <div className="mt-auto z-10">
                    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 group-hover:text-primary transition-colors">
                      View Details +
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-linear .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  )
}
